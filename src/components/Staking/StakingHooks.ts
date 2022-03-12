import {useCallback, useEffect, useState} from "react";
import {Contract} from "near-api-js/lib/contract";
import {transactions, utils} from "near-api-js";
import {useToast} from "@chakra-ui/react";

import StakingStatsStore, {StakingStatsStore as StakingStatsStoreClass} from "./StakingStatsStore";
import {AccountJson, formatKulaAmount, KulaDecimal, parseKulaAmount, PoolInfo, TierNames} from "../../utils/KulaContract.ts";
import {getNextTier, TierMinBalance} from "../../utils/KulaStakingHelper.ts";
import {AppEmitter} from "../../services/AppEmitter.ts";
import {currency} from "../../utils/Number.ts";
import { useHistoryUtil, useQuery } from "../../services/router.ts";


export function setStakedActivated(activated) {
  localStorage.setItem('StakedActivated', activated ? '1' : '0')
}

export function getStakedStatus() {
  return !!parseInt(localStorage.getItem('StakedActivated'))
}

export function useStakingStats(
  contractStaking: Contract,
  currentUser: any,
  StakingStatsStore: StakingStatsStoreClass,
) {
  const accountId = currentUser?.accountId;

  const getAccountInfo = () => {
    if (!accountId) {
      return;
    }

    contractStaking
      // @ts-ignore
      .get_account_info({
        account_id: accountId,
      })
      .then((accountJson: AccountJson) => {
        console.log('{get_account_info} accountJson: ', accountJson);
        StakingStatsStore.setState({
          lock_balance: parseKulaAmount(accountJson.lock_balance),
          stake_balance: parseKulaAmount(accountJson.stake_balance),
          unstake_balance: parseKulaAmount(accountJson.unstake_balance),
          reward: parseKulaAmount(accountJson.reward),
          unlock_timestamp: accountJson.unlock_timestamp,
        })
      })
      .catch((e: any) => {
        console.error('{get_account_info} e: ', e);

        // Fake data to test in case of contract error
        // TODO: Remove this if contract bug is resolved
        const decimal = ''.padEnd(KulaDecimal, '0');
        const accountJson: AccountJson = {
          account_id: accountId,
          lock_balance: '0' + decimal,
          unlock_timestamp: Date.now(),
          stake_balance: '0' + decimal,
          unstake_balance: '0' + decimal,
          reward: '0' + decimal,
          can_withdraw: false,
          start_unstake_timestamp: new Date(),
          unstake_available_epoch: 12345678,
          current_epoch: 12345678,
        }

        StakingStatsStore.setState({
          lock_balance: parseKulaAmount(accountJson.lock_balance),
          stake_balance: parseKulaAmount(accountJson.stake_balance),
          unstake_balance: parseKulaAmount(accountJson.unstake_balance),
          reward: parseKulaAmount(accountJson.reward),
          unlock_timestamp: accountJson.unlock_timestamp,
        })
      });
  };
  const get_pool_info = () => {
    contractStaking
      // @ts-ignore
      .get_pool_info()
      .then((poolInfo: PoolInfo) => {
        // console.log('{get_pool_info} poolInfo: ', poolInfo);
        StakingStatsStore.setState({
          total_stake_balance: parseKulaAmount(poolInfo.total_stake_balance),
          total_reward: parseKulaAmount(poolInfo.total_reward),
          total_stakers: parseKulaAmount(poolInfo.total_stakers),
        })
      });
  };

  useEffect(() => {
    get_pool_info()
    getAccountInfo()
  }, [])

  useEffect(() => {
    const subscription = AppEmitter.addListener('refetchAccountInfo', () => {
      getAccountInfo();
    });

    return () => {
      subscription.remove();
    }
  }, [])

  return []
}


type StakingFormProps = {
  contract: Contract    // dev account
  contractFT: Contract  // KULA token contract
  contractIdo: Contract     // IDO contract
  contractStaking: Contract // Staking contract
  currentUser: any
  nearConfig: any
  walletConnection: any
}
export function useStakingForm_Stake(props: StakingFormProps, StakingStatsStore: StakingStatsStoreClass) {
  const {
    contractStaking,
    contractFT,
    currentUser,
  } = props;

  const query = useQuery()
  const toast = useToast()
  const {setQuery, removeQuery} = useHistoryUtil()
  // const {setQuery, removeQuery} = {
  //   setQuery: () => {},
  //   removeQuery: () => {},
  // }


  const {
    stake_balance,
    tier,
  } = StakingStatsStore;


  const [frmStake_amount, set_frmStake_amount] = useState('');
  const [frmStake_lock_for, set_frmStake_lock_for] = useState('');
  const [frmStake_submitting, set_frmStake_submitting] = useState(false);


  const next_tier = getNextTier(tier);
  const next_tier_name = TierNames[next_tier];
  const next_stake_balance_left = TierMinBalance[next_tier] - stake_balance;

  // TODO: Validate the form input


  // Tell StakingStats to refetch the staking info in account info
  const loadStakeInfo = () => {
    AppEmitter.emit('refetchAccountInfo');
  }


  const stake = useCallback(async () => {
    if (!getStakedStatus()) {
      toast({
        title: `You need to "Unlock & activate Staking" feature first`,
        position: 'top',
        isClosable: true,
        status: 'error',
        duration: 3000,
      })
      return;
    }


    setQuery('feature', 'stake')
    setQuery('amount', frmStake_amount)
    setQuery('lock', frmStake_lock_for)

    // validate
    const stakeAmountFloat = parseFloat(frmStake_amount);
    if (isNaN(stakeAmountFloat) || stakeAmountFloat <= 0) {
      toast({
        title: `Amount must be > 0`,
        position: 'top',
        isClosable: true,
        status: 'error',
        duration: 1500,
      })
      return;
    }

    const lockForFloat = parseInt(frmStake_lock_for);
    if (isNaN(lockForFloat) || lockForFloat <= 0) {
      console.log('{lockForFloat} lockForFloat: ', lockForFloat);
      toast({
        title: `Lock For must be > 0`,
        position: 'top',
        isClosable: true,
        status: 'error',
        duration: 1500,
      })
      return;
    }


    // do stake
    const kulaU128 = formatKulaAmount(stakeAmountFloat);

    set_frmStake_submitting(true)
    /**
     MY_ACCOUNT="'$MY_ACCOUNT'"
     near call staking-kulapad.testnet storage_deposit '{"account_id": "'$MY_ACCOUNT'"}' --accountId $MY_ACCOUNT --depositYocto 1750000000000000000000
     near call token-kulapad.testnet ft_transfer_call '{"receiver_id": "staking-kulapad.testnet", "amount": "1000000000", "msg": "Stake KULA"}' --accountId $MY_ACCOUNT --depositYocto 1 --gas 50000000000000
     near call staking-kulapad.testnet get_account_info '{"account_id": "'$MY_ACCOUNT'"}' --accountId $MY_ACCOUNT
     */
    // @ts-ignore
    const result = await window.account.signAndSendTransaction({
      receiverId: contractFT.contractId,
      actions: [
        transactions.functionCall(
          "storage_deposit",
          { account_id: currentUser?.accountId },
          10000000000000,
          utils.format.parseNearAmount("0.01")
        ),
        transactions.functionCall(
          "ft_transfer_call",
          {
            "receiver_id": "staking-kulapad.testnet",
            "amount": kulaU128,
            "msg": `Stake ${currency(stakeAmountFloat, 2)} KULA for ${lockForFloat} days`
          },
          250000000000000,
          '1'
        ),
      ],
    });
    console.log("{stake} Result:: ", result);
    set_frmStake_submitting(false)

    // Bad NEAR wallet UX
    // So we need to handle success message like a SSR site
  }, [
    frmStake_amount,
    frmStake_lock_for,
    set_frmStake_submitting
  ])


  useEffect(() => {
    /**
     * Clean NEAR message
     * Fuck the bad wallet UX
     */
    const feature = query.get("feature")
    if (feature !== 'stake') {
      return;
    }


    const errorMessage = query.get("errorMessage")
    if (errorMessage) {
      toast({
        title: decodeURIComponent(decodeURIComponent(errorMessage)),
        position: 'top',
        isClosable: true,
        status: 'error',
        duration: 3000,
      })

      // reset query
      removeQuery(['feature', 'amount', 'lock', 'errorMessage', 'errorCode'])
    }

    const transactionHashes = query.get("transactionHashes")
    if (transactionHashes) {
      const amount = query.get("amount")
      const lock = query.get("lock")
      toast({
        title: `Stake ${currency(amount)} KULA for ${lock} days successfully`,
        position: 'top',
        isClosable: true,
        status: 'success',
        duration: 3000,
      })

      // reset query
      removeQuery(['feature', 'amount', 'lock', 'transactionHashes'])
    }
  }, [])

  return {
    loadStakeInfo,
    stake,
    next_tier_name,
    next_stake_balance_left,
    frmStake_amount, set_frmStake_amount,
    frmStake_lock_for, set_frmStake_lock_for,
    frmStake_submitting,
  }
}

export function useStakingForm_UnStake(props: StakingFormProps, StakingStatsStore: StakingStatsStoreClass) {
  const {
    contractStaking,
    contractFT,
  } = props;

  const {
    stake_balance,
    unlock_timestamp,
  } = StakingStatsStore;

  const [frmUnStake_amount, set_frmUnStake_amount] = useState('');

  const stake_lock_released = unlock_timestamp >= Date.now();
  const available_to_unstake_balance = stake_lock_released ? stake_balance : 0;


  const loadUnStakeInfo = () => {

  }

  const unstake = useCallback(() => {
    contractStaking
      // @ts-ignore
      .unstake({
        amount: frmUnStake_amount
      })
      .then((res) => {
        console.log('{unstake} res: ', res);
      })
      .catch((e: any) => {
        console.error('{unstake} e: ', e);
      });
  }, [frmUnStake_amount])


  return {
    loadUnStakeInfo,
    unstake,
    frmUnStake_amount, set_frmUnStake_amount,
    stake_lock_released,
    available_to_unstake_balance,
  }
}

export function useStakingForm_Claim(props: StakingFormProps, StakingStatsStore: StakingStatsStoreClass) {
  const {
    contractStaking,
    contractFT,
  } = props;

  const [frmClaim_amount, set_frmClaim_amount] = useState('');

  const loadClaimInfo = () => {

  }


  const claim = useCallback(() => {
    contractStaking
      // @ts-ignore
      .harvest({

      })
      .then((res) => {
        console.log('{claim} res: ', res);
      })
      .catch((e: any) => {
        console.error('{claim} e: ', e);
      });
  }, [])

  return {
    loadClaimInfo,
    claim,
    frmClaim_amount, set_frmClaim_amount,
  }
}

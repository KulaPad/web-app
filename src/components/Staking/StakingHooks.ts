import {useCallback, useEffect, useState} from "react";
import {Contract} from "near-api-js/lib/contract";

import StakingStatsStore, {StakingStatsStore as StakingStatsStoreClass} from "./StakingStatsStore";
import {AccountJson, KulaDecimal, parseU128, PoolInfo, TierNames} from "../../utils/KulaContract.ts";
import {getNextTier, TierMinBalance} from "../../utils/KulaStakingHelper.ts";


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
          lock_balance: parseU128(accountJson.lock_balance),
          stake_balance: parseU128(accountJson.stake_balance),
          unstake_balance: parseU128(accountJson.unstake_balance),
          reward: parseU128(accountJson.reward),
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
          lock_balance: parseU128(accountJson.lock_balance),
          stake_balance: parseU128(accountJson.stake_balance),
          unstake_balance: parseU128(accountJson.unstake_balance),
          reward: parseU128(accountJson.reward),
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
          total_stake_balance: parseU128(poolInfo.total_stake_balance),
          total_reward: parseU128(poolInfo.total_reward),
          total_stakers: parseU128(poolInfo.total_stakers),
        })
      });
  };

  useEffect(() => {
    get_pool_info()
    getAccountInfo()
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
  } = props;

  const {
    stake_balance,
    tier,
  } = StakingStatsStore;


  const [frmStake_amount, set_frmStake_amount] = useState('');
  const [frmStake_lock_for, set_frmStake_lock_for] = useState('');


  const next_tier = getNextTier(tier);
  const next_tier_name = TierNames[next_tier];
  const next_stake_balance_left = TierMinBalance[next_tier] - stake_balance;

  // TODO: Validate the form input


  const loadStakeInfo = () => {

  }


  const stake = useCallback(() => {
    contractStaking
      // @ts-ignore
      .stake({

      })
      .then((res) => {
        console.log('{stake} res: ', res);
      })
      .catch((e: any) => {
        console.error('{stake} e: ', e);
      });
  }, [])

  return {
    loadStakeInfo,
    stake,
    next_tier_name,
    next_stake_balance_left,
    frmStake_amount, set_frmStake_amount,
    frmStake_lock_for, set_frmStake_lock_for,
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

import {useEffect} from "react";
import {Contract} from "near-api-js/lib/contract";

import {StakingStatsStore as StakingStatsStoreClass} from "./StakingStatsStore";
import {AccountJson, KulaDecimal, parseU128, PoolInfo} from "../../utils/KulaContract.ts";


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

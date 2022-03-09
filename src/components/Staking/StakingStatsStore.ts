import {makeAutoObservable} from "mobx"
import {Tier} from "../../utils/KulaContract";
import {calcRemainingLockDays, calcTier} from "../../utils/KulaStakingHelper.ts";

export interface IStakingStatsStore {
  total_stake_balance: number
  total_reward: number
  total_stakers: number
  unlock_timestamp: number

  lock_balance: number
  stake_balance: number
  unstake_balance: number
  reward: number
}

class StakingStatsStore implements IStakingStatsStore {
  lock_balance = 0
  stake_balance = 0
  unstake_balance = 0
  reward = 0
  unlock_timestamp = 0

  // system stats
  total_stake_balance = 0
  total_reward = 0
  total_stakers = 0

  get tier() : Tier {
    return calcTier(this.stake_balance)
  }

  // get remaining_lock_days() : number {
  //   return calcRemainingLockDays(this.unlock_timestamp)
  // }

  constructor() {
    makeAutoObservable(this)
  }

  setState(s: IStakingStatsStore) {
    s.lock_balance && (this.lock_balance = s.lock_balance)
    s.stake_balance && (this.stake_balance = s.stake_balance)
    s.unstake_balance && (this.unstake_balance = s.unstake_balance)
    s.reward && (this.reward = s.reward)
    s.unlock_timestamp && (this.unlock_timestamp = s.unlock_timestamp)

    s.total_stake_balance && (this.total_stake_balance = s.total_stake_balance)
    s.total_reward && (this.total_reward = s.total_reward)
    s.total_stakers && (this.total_stakers = s.total_stakers)
  }
}

export default new StakingStatsStore();

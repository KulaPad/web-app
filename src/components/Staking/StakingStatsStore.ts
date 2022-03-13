import {makeAutoObservable} from "mobx"
import {Tier} from "../../utils/KulaContract";
import {calcRemainingLockDays, calcTier} from "../../utils/KulaStakingHelper.ts";
import {isClientDevMode} from "../../utils/Env.ts";

export type IStakingStatsStore = {
  total_stake_balance?: number
  total_reward?: number
  total_stakers?: number

  unlock_timestamp?: number  // unix timestamp in nanosecs
  lock_balance?: number
  stake_balance?: number
  unstake_balance?: number
  reward?: number
}

export class StakingStatsStore implements IStakingStatsStore {
  lock_balance = 0
  stake_balance = 0
  unstake_balance = 0
  reward = 0
  unlock_timestamp = 0 // nanosecs, the time that release the lock

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

const s = new StakingStatsStore();
export default s;

if (isClientDevMode) {
  // @ts-ignore
  window.tmp__StakingStatsStore = s
}

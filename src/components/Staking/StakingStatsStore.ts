import { autorun, makeAutoObservable } from 'mobx'
import { Tier } from '../../utils/KulaContract'
import { calcTier, estimate_ticket_amount } from '../../utils/KulaStakingHelper'
import { isClientDevMode } from '../../utils/Env'

export type IStakingStatsStore = {
  total_stake_balance?: number
  total_reward?: number
  total_stakers?: number

  unlock_timestamp?: number  // unix timestamp in nanosecs
  lock_balance?: number
  stake_balance?: number
  unstake_balance?: number
  reward?: number

  user_tier?: Tier
  user_ticket_staking?: number
  user_ticket_allocation?: number
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

  // ticket
  user_tier = Tier.undefined
  user_ticket_staking = 0
  user_ticket_allocation = 0

  get tier() : Tier {
    return calcTier(this.stake_balance)
  }

  // get remaining_lock_days() : number {
  //   return calcRemainingLockDays(this.unlock_timestamp)
  // }

  constructor() {
    makeAutoObservable(this)

    // recalculated computed data
    autorun(() => {
      this.refreshUserTicketStats()
    })
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

  refreshUserTicketStats() {
    if (this.tier !== Tier.undefined) {
      this.user_tier = this.tier

      // unlock_timestamp in nanosecs
      const lock_for_days = (this.unlock_timestamp - Date.now() * 1e6) / 1e9 / 86400
      console.log('{refreshUserTicketStats} start: ');
      const estimated_new_ticket_received = estimate_ticket_amount(this.stake_balance, lock_for_days);
      console.log('{refreshUserTicketStats} end: ');

      this.user_ticket_staking = estimated_new_ticket_received.Staking
      this.user_ticket_allocation = estimated_new_ticket_received.Allocation
    }
  }

  // async fetchUserTicketStats(account_id: string) {
  //   // @ts-ignore
  //   if (!window.account) {
  //     return;
  //   }
  //
  //   // near view v4-ido-kulapad.testnet get_staking_tier_info '{"locked_amount": "100000000000", "locked_timestamp": 1649796512000000000}'
  //   // @ts-ignore
  //   const res = await window.contractIdo?.get_staking_tier_info({
  //     "locked_amount": "100000000000",
  //     "locked_timestamp": 1649796512000000000
  //   });
  //   console.log("{fetchUserTicketStats} Result:: ", res);
  //
  //   this.user_tier = 0;
  //   this.user_ticket_staking = 0;
  //   this.user_ticket_allocation = 0;
  // }
}

const s = new StakingStatsStore();
export default s;



if (isClientDevMode) {
  // @ts-ignore
  window.tmp__StakingStatsStore = s
}

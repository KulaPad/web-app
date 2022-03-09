import {AccountId, EpochHeight, Timestamp, U128} from "./Near";


export type PoolInfo = {
  total_stake_balance: number
  total_reward: number
  total_stakers: number
  is_paused: boolean
}

export type AccountJson = {
  account_id: AccountId,
  lock_balance: U128,
  unlock_timestamp: Timestamp,
  stake_balance: U128,
  unstake_balance: U128,
  reward: U128,
  can_withdraw: boolean,
  start_unstake_timestamp: Timestamp,
  unstake_available_epoch: EpochHeight,
  current_epoch: EpochHeight
}

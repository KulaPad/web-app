import {AccountId, EpochHeight, Timestamp, U128} from "./Near";
import {currency} from "./Number.ts";

export const KulaDecimal = 8;

export type PoolInfo = {
  total_stake_balance: U128
  total_reward: U128
  total_stakers: U128
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

export enum Tier {
  undefined = 'undefined',
  Tier1 = 'Tier1',
  Tier2 = 'Tier2',
  Tier3 = 'Tier3',
  Tier4 = 'Tier4',
}

export const TierNames = {
  'undefined': 'Tier 0',
  [Tier.Tier1]: 'Tier 1',
  [Tier.Tier2]: 'Tier 2',
  [Tier.Tier3]: 'Tier 3',
  [Tier.Tier4]: 'Tier 4',
}

/**
 * NOTE: Next: Should learn from node_modules/near-api-js/lib/utils/format.d.ts
 */
export function formatU128(balance: U128, decimal = 0): string {
  return currency(parseKulaAmount(balance), decimal)
}

export function parseKulaAmount(balance: U128): number {
  return parseFtAmount(balance, KulaDecimal)
}

export function parseFtAmount(balance: U128, FtDecimal = 8): number {
  return parseFloat(balance) / Math.pow(10, FtDecimal)
}

export function formatKulaAmount(balanceInHuman: number): string {
  return Math.floor(balanceInHuman * Math.pow(10, KulaDecimal)).toString()
}

import {Tier} from "./KulaContract.ts";


/**
 *
 * @param unlock_timestamp_ms in milliseconds
 */
export function calcRemainingLockDays(unlock_timestamp_ms: number): number {
  const now = Date.now()
  const delta_millis = now - unlock_timestamp_ms
  return delta_millis / 86400000; // 1 day = 86400000 ms
}

export function calcTier(stake_balance: number): Tier {
  if (stake_balance < 200) {
    return Tier.undefined
  } else if (stake_balance < 1000) {
    return Tier.Tier1
  } else if (stake_balance < 5000) {
    return Tier.Tier2
  } else if (stake_balance < 10000) {
    return Tier.Tier3
  } else {
    return Tier.Tier4
  }
}

import {Tier} from "./KulaContract.ts";


export const TierMinBalance = {
  'undefined': 0,
  [Tier.Tier1]: 200,
  [Tier.Tier2]: 1000,
  [Tier.Tier3]: 5000,
  [Tier.Tier4]: 10000,
}

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

export function getNextTier(tier: Tier) {
  if (tier === Tier.undefined) {
    return Tier.Tier1
  } else if (tier === Tier.Tier1) {
    return Tier.Tier2
  } else if (tier === Tier.Tier2) {
    return Tier.Tier3
  } else if (tier === Tier.Tier3) {
    return Tier.Tier4
  } else {
    return Tier.Tier4
  }
}

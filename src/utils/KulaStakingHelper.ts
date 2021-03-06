import { Tier } from './KulaContract'

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
  if (stake_balance > 10000) {
    return Tier.Tier4
  } else if (stake_balance > 5000) {
    return Tier.Tier3
  } else if (stake_balance > 1000) {
    return Tier.Tier2
  } else if (stake_balance > 200) {
    return Tier.Tier1
  } else {
    return Tier.undefined
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

export enum Ticket {
  Staking = 'Staking', // ticket received by staking
  Allocation = 'Allocation',
  Social = 'Social',
  Referral = 'Referral',
}

/**
 * Preview the staking result of ticket amount
 */
const StakingTicketConfig = {
  rows: [Tier.undefined, Tier.Tier1, Tier.Tier2, Tier.Tier3, Tier.Tier4],
  columns: [7, 14, 30, 90, 180, 365],
  table: [
    [0, 0, 0, 0, 0, 0],
    [1, 2, 4, 8, 12, 20],
    [6, 12, 24, 48, 72, 120],
    [35, 70, 140, 28, 42, 70],
    [1, 1, 2, 2, 3, 3],
  ],
  ticketOf: {
    [Tier.Tier1]: Ticket.Staking,
    [Tier.Tier2]: Ticket.Staking,
    [Tier.Tier3]: Ticket.Staking,
    [Tier.Tier4]: Ticket.Allocation,
  },
}

/**
 * @param stake_amount
 * @param lock_for_days amount of locking days
 */
export function estimate_ticket_amount(stake_amount: number, lock_for_days: number): Record<Ticket, number> {
  const DEBUG = false;
  DEBUG && console.log('{estimate_ticket_amount} lock_for_days: ', lock_for_days)

  const tier = calcTier(stake_amount)
  let normal_ticket_cnt = 0,
        vip_ticket_cnt = 0;
  DEBUG && console.log('{estimate_ticket_amount} tier: ', tier);

  if (tier === Tier.undefined) {
    return {
      [Ticket.Staking]: normal_ticket_cnt,
      [Ticket.Allocation]: vip_ticket_cnt,
      [Ticket.Social]: 0,
      [Ticket.Referral]: 0,
    }
  }


  // tier row
  let row = [] as any[];
  for (let i = 0, c = StakingTicketConfig.rows.length; i < c; i++) {
    const row_tier = StakingTicketConfig.rows[i];
    if (row_tier == tier) {
      row = StakingTicketConfig.table[i]
      break;
    }
  }
  DEBUG && console.log('{estimate_ticket_amount} row: ', row);

  // ticket col
  let base_lock_day_idx = -1;
  for (let i = 0, c = StakingTicketConfig.columns.length; i < c; i++) {
    const lock_days = StakingTicketConfig.columns[i];
    if (lock_days <= lock_for_days) {
      base_lock_day_idx = i;
    } else {
      break;
    }
  }
  DEBUG && console.log('{estimate_ticket_amount} base_lock_day_idx: ', base_lock_day_idx);

  if (base_lock_day_idx > -1) {
    if (tier === Tier.Tier4) {
      vip_ticket_cnt = row[base_lock_day_idx];
    } else {
      normal_ticket_cnt = row[base_lock_day_idx];
    }
  }

  return {
    [Ticket.Staking]: normal_ticket_cnt,
    [Ticket.Allocation]: vip_ticket_cnt,
    [Ticket.Social]: 0,
    [Ticket.Referral]: 0,
  }
}

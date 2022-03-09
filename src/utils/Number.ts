import numeral from 'numeral'

export function currency(num: number, decimal = 0): string {
  let fmt = '0,0'
  if (decimal > 0) {
    fmt += `.${''.padEnd(decimal, '0')}`
  }

  return format(num, fmt)
}

export function format(num: number, fmt: string): string {
  return numeral(num).format(fmt)
}

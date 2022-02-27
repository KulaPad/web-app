export function parseTokenWithDecimals(amount, decimals) {
  let amountD = amount / Math.pow(10, decimals);
  return Math.floor((amountD * 100) / 100);
}

export function parseTokenAmount(amount, decimals) {
  return amount * Math.pow(10, decimals);
}

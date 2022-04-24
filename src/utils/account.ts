export const toShortAddress = (address: string) => {
  const first4Digits = address.slice(0, 4)
  const last4Digits = address.slice(-4)
  return first4Digits.concat('....', last4Digits)
}

/**
 * Checks if a string is a valid Ethereum/BSC address
 * @param address The address to validate
 * @returns boolean indicating if the address is valid
 */
export function isValidAddress(address: string): boolean {
  // Basic validation - check if it's a string and starts with 0x
  if (typeof address !== "string" || !address.startsWith("0x")) {
    return false
  }

  // Check if it's 42 characters long (0x + 40 hex characters)
  if (address.length !== 42) {
    return false
  }

  // Check if it only contains valid hex characters after 0x
  const hexRegex = /^0x[0-9a-fA-F]{40}$/
  return hexRegex.test(address)
}

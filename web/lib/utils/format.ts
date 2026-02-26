import { formatDistance } from "date-fns";

/**
 * Format a Solana address for display (truncate to aaaa...bbbb format)
 */
export function formatAddress(address: any): string {
  if (!address) return "";
  const addressStr = address.toString ? address.toString() : String(address);
  if (addressStr.length < 8) return addressStr;
  return `${addressStr.slice(0, 4)}...${addressStr.slice(-4)}`;
}

/**
 * Format a timestamp for display
 */
export function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return formatDistance(date, new Date(), { addSuffix: true });
}

/**
 * Format a role name for display
 */
export function formatRole(role: any): string {
  if (!role) return "";

  // Handle enum objects like { producer: {} }
  if (typeof role === "object") {
    const roleKey = Object.keys(role)[0];
    return roleKey.charAt(0).toUpperCase() + roleKey.slice(1);
  }

  // Handle strings
  if (typeof role === "string") {
    return role.charAt(0).toUpperCase() + role.slice(1);
  }

  return "";
}

/**
 * Format token amount for display
 */
export function formatAmount(amount: any): string {
  if (!amount && amount !== 0) return "0";
  const str = amount.toString();
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

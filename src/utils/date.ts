/**
 * Date formatting helper functions
 */

/**
 * Get formatted date string (e.g., "Saturday, February 21")
 */
export function getCurrentFormattedDate(): string {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const monthDay = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return `${dayName}, ${monthDay}`;
}

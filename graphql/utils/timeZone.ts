export function convertTimestampToMonthYear(timestamp: number): string {
  const date = new Date(timestamp);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

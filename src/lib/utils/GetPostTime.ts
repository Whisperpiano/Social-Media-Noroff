export function getPostTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return "now";
  if (minutes < 60) return `${minutes} min`;
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""}`;
  if (days < 7) return `${days} day${days > 1 ? "s" : ""}`;
  if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""}`;
  if (months < 12) return `${months} month${months > 1 ? "s" : ""}`;
  return `${years} year${years > 1 ? "s" : ""}`;
}

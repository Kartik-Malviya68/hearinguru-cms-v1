export default function trimString(string: string, maxLen = 10) {
  return string.substring(0, Math.min(string.length, maxLen)) + '...';
}
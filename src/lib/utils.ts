/**
 * Merge class name strings, filtering out falsy values.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

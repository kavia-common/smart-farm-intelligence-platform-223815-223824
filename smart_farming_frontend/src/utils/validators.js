 // PUBLIC_INTERFACE
export function isNonEmptyString(v) {
  /** Validate a non-empty string input. */
  return typeof v === 'string' && v.trim().length > 0;
}

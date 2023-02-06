/**
 * Return a Promise that resolve after the given delay (in ms).
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

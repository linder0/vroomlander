// =============================================================================
// Scroll Utilities - SSR-safe scroll functions
// =============================================================================

/**
 * Check if code is running in browser environment
 */
export const isBrowser = (): boolean => {
  return typeof window !== "undefined";
};

/**
 * Scroll to top of page with smooth animation
 * SSR-safe - does nothing on server
 */
export const scrollToTop = (): void => {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/**
 * Get current scroll position
 * SSR-safe - returns 0 on server
 */
export const getScrollY = (): number => {
  if (!isBrowser()) return 0;
  return window.scrollY;
};

/**
 * Get viewport height
 * SSR-safe - returns 0 on server
 */
export const getViewportHeight = (): number => {
  if (!isBrowser()) return 0;
  return window.innerHeight;
};

/**
 * Calculate sticky nav trigger point based on hero height
 * @param heroHeightRatio - Hero height as ratio of viewport (e.g., 0.7 for 70vh)
 * @param triggerRatio - Ratio of hero height at which to trigger (e.g., 0.7 for 70%)
 */
export const calculateStickyTrigger = (
  heroHeightRatio: number,
  triggerRatio: number
): number => {
  return getViewportHeight() * heroHeightRatio * triggerRatio;
};

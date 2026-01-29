// =============================================================================
// VROOM Constants - Centralized configuration for the application
// =============================================================================

// -----------------------------------------------------------------------------
// Routes & Anchors
// -----------------------------------------------------------------------------
export const ROUTES = {
  HOME: "/",
  PORTFOLIO: "#portfolio",
  BOOK: "#book",
} as const;

// -----------------------------------------------------------------------------
// External URLs
// -----------------------------------------------------------------------------
export const EXTERNAL_URLS = {
  CALENDLY: "https://calendly.com",
  TWITTER: "https://x.com/usevroom",
  LINKEDIN: "https://www.linkedin.com/company/usevroom/",
} as const;

// -----------------------------------------------------------------------------
// Animation Configuration
// -----------------------------------------------------------------------------
export const ANIMATION = {
  /** Hero section height as viewport percentage */
  HERO_HEIGHT_VH: 70,
  /** Percentage of hero height at which sticky nav triggers */
  STICKY_NAV_TRIGGER_RATIO: 0.35,
  /** Scroll distance for hero fade out effect */
  HERO_FADE_DISTANCE: 300,
  /** Transition duration for sticky nav (ms) */
  NAV_TRANSITION_DURATION: 300,
} as const;

// -----------------------------------------------------------------------------
// UI Configuration
// -----------------------------------------------------------------------------
export const UI = {
  /** Fallback image for failed loads */
  FALLBACK_IMAGE: "/placeholder.svg",
} as const;

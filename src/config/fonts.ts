import { Anton, Inter } from "next/font/google";
import localFont from "next/font/local";

// =============================================================================
// Font Configuration - Centralized font setup
// =============================================================================

/**
 * Anton - Used for headings
 */
export const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Inter - Used for body text
 */
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Helvetica Condensed Bold - Used for logo
 */
export const helveticaCondensed = localFont({
  src: "../../public/fonts/Helvetica Condensed Regular/Helvetica Bold Condensed/Helvetica Bold Condensed.otf",
  variable: "--font-logo",
  weight: "700",
  display: "swap",
});

/**
 * Combined font variable class names for body element
 */
export const fontVariables = [
  anton.variable,
  inter.variable,
  helveticaCondensed.variable,
].join(" ");

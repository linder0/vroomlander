"use client";

import { scrollToTop } from "@/utils/scroll";

// =============================================================================
// Logo Component - Reusable logo with color variants
// =============================================================================

interface LogoProps {
  /** Color variant */
  variant?: "light" | "dark";
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Whether clicking scrolls to top */
  clickable?: boolean;
}

const colorStyles = {
  light: "text-white",
  dark: "text-black",
};

const sizeStyles = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
};

export default function Logo({
  variant = "dark",
  size = "md",
  clickable = true,
}: LogoProps) {
  const logoElement = (
    <span
      className={`font-logo tracking-tight ${colorStyles[variant]} ${sizeStyles[size]}`}
    >
      VROOM
    </span>
  );

  if (clickable) {
    return (
      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 cursor-pointer"
        aria-label="Scroll to top"
      >
        {logoElement}
      </button>
    );
  }

  return <div className="flex items-center gap-2">{logoElement}</div>;
}

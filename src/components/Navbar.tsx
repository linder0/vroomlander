"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { ROUTES, ANIMATION } from "@/constants";
import { isBrowser, calculateStickyTrigger } from "@/utils/scroll";

// =============================================================================
// Navbar Component - Responsive navigation with sticky behavior
// =============================================================================

interface NavContentProps {
  variant: "light" | "dark";
}

/**
 * Shared navigation content - eliminates duplication between navbars
 */
function NavContent({ variant }: NavContentProps) {
  const isDark = variant === "dark";

  const linkStyles = isDark
    ? "text-sm font-medium text-white/70 hover:text-white transition-colors"
    : "text-sm font-medium text-black/70 hover:text-black transition-colors";

  return (
    <div className="w-full px-3 py-3 flex items-center justify-between">
      <Logo variant={variant} />
      <div className="flex items-center gap-4">
        <Link href={ROUTES.PORTFOLIO} className={linkStyles}>
          Our Work
        </Link>
        <Button
          href={ROUTES.BOOK}
          variant={isDark ? "secondary" : "primary"}
          size="sm"
        >
          Book a Call
        </Button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    if (!isBrowser()) return;

    const handleScroll = () => {
      const triggerPoint = calculateStickyTrigger(
        ANIMATION.HERO_HEIGHT_VH / 100,
        ANIMATION.STICKY_NAV_TRIGGER_RATIO
      );
      setShowStickyHeader(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Initial header - scrolls with page */}
      <nav className="absolute top-0 left-0 right-0 z-40 bg-transparent">
        <NavContent variant="dark" />
      </nav>

      {/* Sticky header - slides in from top */}
      <nav
        className={`fixed left-0 right-0 z-50 bg-black transition-transform duration-300 ${
          showStickyHeader ? "translate-y-0 top-0" : "-translate-y-full top-0"
        }`}
      >
        <NavContent variant="light" />
      </nav>
    </>
  );
}

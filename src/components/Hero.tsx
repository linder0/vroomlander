"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { ROUTES, ANIMATION } from "@/constants";

// =============================================================================
// Hero Component - Main landing section with scroll fade effect
// =============================================================================

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, ANIMATION.HERO_FADE_DISTANCE], [1, 0]);

  return (
    <section
      className="sticky top-0 flex flex-col items-center justify-center px-4 pt-16 bg-white"
      style={{ height: `${ANIMATION.HERO_HEIGHT_VH}vh` }}
    >
      <motion.div style={{ opacity }} className="max-w-4xl mx-auto text-center">
        {/* Tagline */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6">
          we make events easy.
        </h1>

        {/* Blurb */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Vroom is the full-stack event planning platform that finds curated
          venues and vendors. We coordinate all manual operations so you can put
          your focus on making your event special.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href={ROUTES.BOOK}
            variant="primary"
            size="lg"
            fullWidth
            className="sm:w-auto"
          >
            Book a Call
          </Button>
          <Button
            href={ROUTES.PORTFOLIO}
            variant="outline"
            size="lg"
            fullWidth
            className="sm:w-auto"
          >
            View Portfolio
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

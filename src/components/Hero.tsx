"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { ANIMATION } from "@/constants";

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
        <motion.p
          className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          VROOM is an event planning agency that leverages automation tools to
          organize high quality events. We take care of the back-and-forth
          between vendors, venue sourcing, and event logistics at a fraction of
          the cost of an event planner.
        </motion.p>

        {/* CTA Button */}
        <Button href="mailto:hello@usevroom.com" variant="primary" size="lg">
          Learn More
        </Button>
      </motion.div>
    </section>
  );
}

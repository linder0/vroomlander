"use client";

import { useState } from "react";
import { events } from "@/data/events";
import { ROUTES, UI } from "@/constants";
import type { Event } from "@/types";

// =============================================================================
// PortfolioPreview Component - Event portfolio grid with hover effects
// =============================================================================

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative overflow-hidden bg-white aspect-[3/2] cursor-pointer">
      {/* Image with error handling */}
      <img
        src={imageError ? UI.FALLBACK_IMAGE : event.image}
        alt={event.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        onError={() => setImageError(true)}
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-white/80 text-xs uppercase tracking-wider">
          {event.category}
        </span>
        <h3 className="text-white text-lg font-medium">{event.title}</h3>
      </div>
    </div>
  );
}

export default function PortfolioPreview() {
  return (
    <section
      id={ROUTES.PORTFOLIO.replace("#", "")}
      className="relative z-10 py-3 px-3 bg-gray-50"
    >
      <div className="w-full">
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { EXTERNAL_URLS, ROUTES } from "@/constants";

// =============================================================================
// Footer Component - Site footer with CTA and social links
// =============================================================================

// Social media icons as components for cleaner JSX
const XIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
      aria-label={label}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer id={ROUTES.BOOK.replace("#", "")} className="relative z-10 bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight mb-8">
            Ready to plan your event?
          </h2>
          <Button
            href={EXTERNAL_URLS.CALENDLY}
            variant="secondary"
            size="lg"
            isExternal
          >
            Book a Call
          </Button>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Logo variant="light" size="sm" clickable={false} />

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Vroom. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <SocialLink href={EXTERNAL_URLS.TWITTER} label="X (Twitter)">
              <XIcon />
            </SocialLink>
            <SocialLink href={EXTERNAL_URLS.LINKEDIN} label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { fontVariables } from "@/config/fonts";
import "./globals.css";

// =============================================================================
// Root Layout - Application shell with font and metadata configuration
// =============================================================================

export const metadata: Metadata = {
  title: "VROOM | We Make Events Easy",
  description:
    "Vroom is the full-stack event planning platform that finds curated venues and vendors. We coordinate all manual operations so you can put your focus on making your event special.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} antialiased`}>{children}</body>
    </html>
  );
}

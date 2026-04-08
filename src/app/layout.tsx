import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agents for Dummies — The Friendly Guide to OpenClaw & AI Agents",
  description:
    "Learn how to set up and use OpenClaw and Hermes Agent from scratch. Beginner-friendly guides for real people who want AI agents that actually do things.",
  openGraph: {
    title: "Agents for Dummies",
    description:
      "The friendly guide to OpenClaw and AI agents — beginner to intermediate. No jargon, no cloud subscriptions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&family=Lato:wght@400;700;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

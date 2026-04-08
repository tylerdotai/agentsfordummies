"use client";

import { useRef } from "react";
import { ExternalLink, CheckCircle, Sparkles } from "lucide-react";
import { gsap, gsapMarkers, prefersReducedMotion, useGSAP } from "@/lib/gsap";

const paths = [
  {
    name: "Kilo.ai / KiloClaw",
    tagline: "Best if you want the easiest start",
    fit: "Pick this if you want the fastest path and do not want to touch the terminal.",
    description:
      "Kilo handles the heavy lifting so you can get a running agent quickly and learn by using it first.",
    href: "https://kilo.ai",
    docsHref: "https://kilo.ai/docs",
    cta: "Start with Kilo",
    difficulty: "Easiest",
    accent: "var(--color-accent)",
    bullets: [
      "Best for non-technical beginners",
      "Fastest path to a working agent",
      "No terminal required to get started",
      "Great if you want results first, setup later",
    ],
  },
  {
    name: "OpenClaw",
    tagline: "Best if you want local control",
    fit: "Pick this if you want your agent running on your own machine with memory, cron jobs, and chat app integrations.",
    description:
      "OpenClaw is the best default for people who want serious personal automation without being locked into a hosted platform.",
    href: "https://openclaw.ai",
    docsHref: "https://docs.openclaw.ai",
    cta: "Start with OpenClaw",
    difficulty: "Best default",
    accent: "#4ade80",
    bullets: [
      "Runs on your own machine",
      "Persistent memory across sessions",
      "Works with Discord, Telegram, WhatsApp, Signal, Slack",
      "Best balance of power and approachability",
    ],
  },
  {
    name: "Hermes Agent",
    tagline: "Best if you want maximum flexibility",
    fit: "Pick this if you care about model freedom, experimentation, and a more developer-leaning setup.",
    description:
      "Hermes Agent is strong when you want zero vendor lock-in and do not mind a little more setup to get it exactly how you like it.",
    href: "https://hermes-agent.nousresearch.com",
    docsHref: "https://github.com/nousresearch/hermes-agent",
    cta: "Start with Hermes",
    difficulty: "Most flexible",
    accent: "#60a5fa",
    bullets: [
      "Use your own model provider",
      "Great for tinkerers and developers",
      "Strong multi-tool, multi-platform workflows",
      "Best if flexibility matters more than simplicity",
    ],
  },
];

export function SetupCloudSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set(".path-card", { autoAlpha: 1, clearProps: "all" });
        return;
      }

      gsap.set(".path-card", { autoAlpha: 0, y: 40 });
      gsap.to(".path-card", {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none reverse",
          markers: gsapMarkers,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="setup-cloud"
      style={{
        padding: "var(--spacing-section) 1.5rem",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ maxWidth: "760px", marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 0.85rem",
              marginBottom: "1rem",
              borderRadius: "999px",
              border: "1px solid rgba(255,107,0,0.22)",
              background: "rgba(255,107,0,0.08)",
              color: "var(--color-accent)",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <Sparkles size={14} /> Start here
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              marginBottom: "1rem",
              color: "var(--color-text)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Pick the setup path that fits you.
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-text-muted)",
              maxWidth: "700px",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Do not overthink the tooling. Choose the path that matches your comfort level,
            get one useful workflow running, and level up after that.
          </p>
        </div>

        <div className="path-grid">
          {paths.map((path) => (
            <div
              key={path.name}
              className="path-card"
              style={{
                padding: "1.75rem",
                background: "var(--color-surface)",
                border: `1px solid ${path.accent}33`,
                borderTop: `3px solid ${path.accent}`,
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                <div>
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 800,
                      color: "var(--color-text)",
                      margin: "0 0 0.35rem",
                    }}
                  >
                    {path.name}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: path.accent,
                      fontWeight: 700,
                    }}
                  >
                    {path.tagline}
                  </p>
                </div>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "999px",
                    background: `${path.accent}18`,
                    color: path.accent,
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  {path.difficulty}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.98rem",
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  marginBottom: "0.8rem",
                }}
              >
                {path.fit}
              </p>

              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  color: "var(--color-text-muted)",
                  marginBottom: "1.25rem",
                }}
              >
                {path.description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.4rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.55rem",
                }}
              >
                {path.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.55rem",
                      fontSize: "0.9rem",
                      color: "var(--color-text)",
                      lineHeight: 1.55,
                    }}
                  >
                    <CheckCircle size={15} color={path.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a
                  href={path.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.8rem 1.2rem",
                    background: path.accent,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    borderRadius: "var(--radius-md)",
                    textDecoration: "none",
                  }}
                >
                  {path.cta}
                  <ExternalLink size={14} />
                </a>
                <a
                  href={path.docsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.8rem 1.2rem",
                    background: "transparent",
                    color: "var(--color-text-muted)",
                    fontWeight: 600,
                    fontSize: "0.92rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    textDecoration: "none",
                  }}
                >
                  Read docs
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .path-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 900px) {
          .path-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 767px) {
          #setup-cloud {
            padding: 4rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}

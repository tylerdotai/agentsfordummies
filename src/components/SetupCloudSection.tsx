"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cloud, ExternalLink, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const providers = [
  {
    name: "Kilo.ai / KiloClaw",
    tagline: "The easiest way to get started",
    description:
      "Sign up, connect your API keys, and you're running agents in minutes. No terminal, no setup. Great for beginners who want the simplest path.",
    href: "https://kilo.ai",
    pros: ["No local setup", "Hosted for you", "OpenClaw-optimized", "Free tier available"],
    difficulty: "Beginner",
    cost: "Free to start",
  },
  {
    name: "OpenClaw Cloud",
    tagline: "Full OpenClaw experience, managed",
    description:
      "The team behind OpenClaw offers a hosted version. Deep integration, managed infrastructure, and the most seamless OpenClaw experience.",
    href: "https://openclaw.ai",
    pros: ["Official hosted version", "Always up-to-date", "Premium support", "Plugin ecosystem"],
    difficulty: "Intermediate",
    cost: "Tiered plans",
  },
  {
    name: "n8n (Self-hosted or cloud)",
    tagline: "Workflow automation meets agents",
    description:
      "n8n is a powerful workflow automation tool that now supports AI agent nodes. You can run it cloud-hosted or on your own server.",
    href: "https://n8n.io",
    pros: ["Visual workflow builder", "Many integrations", "Self-host option", "Large community"],
    difficulty: "Intermediate",
    cost: "Free tier / Self-hosted free",
  },
];

export function SetupCloudSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        section.querySelectorAll(".cloud-card"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="setup-cloud"
      style={{
        padding: "var(--spacing-section) 1.5rem",
        background: "var(--color-surface)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              color: "var(--color-text)",
            }}
          >
            Setup in the Cloud
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--color-text-muted)",
              maxWidth: "700px",
            }}
          >
            The fastest path — no hardware required. Pick a service, sign up,
            and your first agent is running in under 10 minutes.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="cloud-card"
              style={{
                padding: "2.5rem",
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <Cloud size={20} color="var(--color-accent)" />
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                        margin: 0,
                      }}
                    >
                      {provider.name}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-muted)",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    {provider.tagline}
                  </p>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      background:
                        provider.difficulty === "Beginner"
                          ? "rgba(107, 143, 173, 0.15)"
                          : "rgba(107, 143, 173, 0.25)",
                      color: "var(--color-accent)",
                      borderRadius: "999px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    {provider.difficulty}
                  </span>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      background: "var(--color-bg-secondary)",
                      color: "var(--color-text-muted)",
                      borderRadius: "999px",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                    }}
                  >
                    {provider.cost}
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.7,
                }}
              >
                {provider.description}
              </p>

              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--color-text-muted)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Pros
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.35rem",
                    }}
                  >
                    {provider.pros.map((pro) => (
                      <li
                        key={pro}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontSize: "0.9rem",
                          color: "var(--color-text)",
                        }}
                      >
                        <CheckCircle
                          size={14}
                          color="var(--color-accent)"
                        />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginLeft: "auto", display: "flex", alignItems: "flex-end" }}>
                  <a
                    href={provider.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 1.5rem",
                      background: "var(--color-accent)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      borderRadius: "var(--radius-md)",
                      textDecoration: "none",
                      transition: "background var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "var(--color-accent-hover)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "var(--color-accent)";
                    }}
                  >
                    Get Started
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

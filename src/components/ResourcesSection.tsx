"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, ExternalLink, Github, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    category: "Official Documentation",
    items: [
      {
        title: "OpenClaw Docs",
        href: "https://docs.openclaw.ai",
        desc: "The full OpenClaw documentation — setup, configuration, plugins, and API reference.",
      },
      {
        title: "Kilo.ai / KiloClaw",
        href: "https://kilo.ai",
        desc: "Managed cloud hosting for OpenClaw agents. Easiest path to running your first agent.",
      },
      {
        title: "Ollama",
        href: "https://ollama.com",
        desc: "Run open-source AI models locally on your Mac, Linux, or Windows machine.",
      },
    ],
  },
  {
    category: "Community & Help",
    items: [
      {
        title: "OpenClaw Discord",
        href: "https://discord.gg/clawd",
        desc: "The official OpenClaw community. Get help, share what you're building, and connect with other agent builders.",
      },
      {
        title: "OpenClaw GitHub",
        href: "https://github.com/openclaw/openclaw",
        desc: "Star it, read the source, open issues, and contribute to the project.",
      },
    ],
  },
  {
    category: "Further Learning",
    items: [
      {
        title: "AI Agents Explained (YouTube)",
        href: "#",
        desc: "A playlist of beginner-friendly videos explaining what AI agents are and how to think about them.",
      },
      {
        title: "Prompt Engineering Guide",
        href: "#",
        desc: "How to talk to AI systems effectively — the foundational skill for working with agents.",
      },
    ],
  },
];

export function ResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        section.querySelectorAll(".resource-group"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
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
      id="resources"
      style={{
        padding: "var(--spacing-section) 1.5rem",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "var(--color-text)",
          }}
        >
          Resources
        </h2>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--color-text-muted)",
            marginBottom: "3.5rem",
          }}
        >
          Everything you need to go deeper. Documentation, community, and
          next steps.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {resources.map((group) => (
            <div key={group.category} className="resource-group">
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--color-accent)",
                  marginBottom: "1.25rem",
                }}
              >
                {group.category}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {group.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      padding: "1.25rem",
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      textDecoration: "none",
                      transition: "border-color var(--transition-fast), transform var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "var(--color-accent)";
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "var(--color-border)";
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "translateY(0)";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.35rem",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "var(--color-text)",
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </h4>
                      <ExternalLink
                        size={14}
                        color="var(--color-text-muted)"
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-muted)",
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, ExternalLink, CheckCircle, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const agents = [
  {
    name: "OpenClaw 🦞",
    tagline: "Open-source AI agent that runs on your own machine",
    description:
      "OpenClaw is a locally-run AI assistant framework that connects to your existing chat apps — Discord, Telegram, WhatsApp, Signal, iMessage, Slack, and more. It has persistent memory, runs cron jobs, automates tasks, and learns your preferences over time. Your data never leaves your computer.",
    href: "https://openclaw.ai",
    docsHref: "https://docs.openclaw.ai",
    pros: [
      "100% open source — your data stays on your machine",
      "Works with Discord, Telegram, WhatsApp, Signal, iMessage, Slack",
      "Persistent memory across sessions",
      "Skills system — extend it with custom capabilities",
      "Cron jobs, reminders, proactive workflows",
      "Free — no subscription, no API lock-in",
    ],
    difficulty: "Beginner–Intermediate",
    icon: "🦞",
  },
  {
    name: "Hermes Agent",
    tagline: "By NousResearch — zero vendor lock-in",
    description:
      "Hermes Agent is an open-source agent framework from NousResearch. It outperforms Claude Code and OpenClaw as an agentic harness on real-world tasks. Works on any model, connects to Telegram, Discord, Slack, WhatsApp, and Signal. Can run on a $5 VPS.",
    href: "https://nousresearch.com",
    docsHref: "https://github.com/nousresearch/hermes-agent",
    pros: [
      "Zero vendor lock-in — use any AI model",
      "Outperformed Claude Code and OpenClaw on 89 real-world tasks",
      "Works on Telegram, Discord, Slack, WhatsApp, Signal",
      "Creates new skills from experience",
      "Memory persists across sessions",
      "Can run on a $5/month VPS",
    ],
    difficulty: "Intermediate",
    icon: "🔮",
  },
  {
    name: "Kilo.ai / KiloClaw",
    tagline: "The managed path to OpenClaw without the terminal",
    description:
      "KiloClaw is a hosted/pre-configured version of OpenClaw that handles the technical setup for you. If you want the OpenClaw experience without configuring it yourself, Kilo gives you a running agent fast with minimal friction.",
    href: "https://kilo.ai",
    docsHref: "https://kilo.ai/docs",
    pros: [
      "Pre-configured OpenClaw environment",
      "No terminal required to get started",
      "Fastest path to a running OpenClaw agent",
      "Managed infrastructure — you focus on using it",
      "Great for non-technical users",
      "Free tier available",
    ],
    difficulty: "Beginner",
    icon: "⚡",
  },
];

export function SetupCloudSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          section.querySelectorAll(".cloud-card"),
          { autoAlpha: 0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.18,
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

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
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              color: "var(--color-text)",
            }}
          >
            Choose Your Agent
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-muted)",
              maxWidth: "640px",
              lineHeight: 1.7,
            }}
            className="cloud-sub"
          >
            All three options below are free to use. OpenClaw and Hermes Agent
            run entirely on your machine — no data leaves your computer. Kilo
            handles the setup for you if you want the easiest path in.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="cloud-card"
              style={{
                padding: "2.5rem",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                transition: "border-color var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "var(--color-border)";
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
                    <span style={{ fontSize: "1.5rem" }}>{agent.icon}</span>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                        margin: 0,
                      }}
                    >
                      {agent.name}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-accent)",
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    {agent.tagline}
                  </p>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      background: "var(--color-accent-muted)",
                      color: "var(--color-accent)",
                      borderRadius: "999px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    {agent.difficulty}
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
                    Free / Open Source
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
                {agent.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ flex: "1 1 300px" }}>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--color-text-muted)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    Why it matters
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                    }}
                  >
                    {agent.pros.map((pro) => (
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
                        <CheckCircle size={14} color="var(--color-accent)" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    minWidth: "180px",
                  }}
                >
                  <a
                    href={agent.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 1.5rem",
                      background: "var(--color-accent)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      borderRadius: "var(--radius-md)",
                      textDecoration: "none",
                      transition: "background var(--transition-fast), transform var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "var(--color-accent-hover)";
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "var(--color-accent)";
                      (e.currentTarget as HTMLAnchorElement).style.transform =
                        "translateY(0)";
                    }}
                  >
                    Get Started
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={agent.docsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 1.5rem",
                      background: "transparent",
                      color: "var(--color-text-muted)",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--color-border)",
                      textDecoration: "none",
                      transition: "border-color var(--transition-fast), color var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "var(--color-accent)";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "var(--color-border)";
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-text-muted)";
                    }}
                  >
                    <Github size={14} />
                    Docs
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

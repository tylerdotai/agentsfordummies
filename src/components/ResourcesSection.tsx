"use client";

import { useRef } from "react";
import { Youtube, Twitter, BookOpen, ExternalLink, Gift } from "lucide-react";
import { gsap, gsapMarkers, prefersReducedMotion, useGSAP } from "@/lib/gsap";

const youtubeCreators = [
  {
    name: "Alex Finn",
    handle: "@AlexFinnOfficial",
    desc: "The best OpenClaw content on YouTube. Alex breaks down OpenClaw use cases, setup walkthroughs, and how to build agent teams.",
    href: "https://www.youtube.com/@AlexFinnOfficial",
    videoHref: "https://www.youtube.com/watch?v=CxErCGVo-oo",
    videoTitle: "OpenClaw Is the Most Powerful AI Tool I've Ever Used",
    color: "#ff4444",
  },
  {
    name: "Matthew Berman",
    handle: "@matthew_berman",
    desc: "Matthew's mission is making AI accessible to everyone. His OpenClaw coverage is the best introduction for non-technical people. Clear, practical, no jargon.",
    href: "https://www.youtube.com/@matthew_berman",
    videoHref: "https://www.youtube.com/watch?v=M-3w1wEv0M0",
    videoTitle: "I Used OpenClaw to Replace My Brain",
    color: "#ff4444",
  },
];

const twitterAccounts = [
  {
    name: "Peter Steinberger",
    handle: "@steipete",
    desc: "Creator of OpenClaw. Follow for the latest updates, feature announcements, and to see what's coming next for OpenClaw.",
    href: "https://x.com/steipete",
    color: "var(--color-accent)",
  },
  {
    name: "Nous Research",
    handle: "@NousResearch",
    desc: "The team behind Hermes Agent. They're pushing the frontier of open-source AI agents and frequently share what's possible.",
    href: "https://x.com/NousResearch",
    color: "#4ade80",
  },
  {
    name: "Alex Finn",
    handle: "@AlexFinn",
    desc: "Posts regularly about OpenClaw workflows, agent setups, and automation patterns. Great for staying inspired.",
    href: "https://x.com/AlexFinn",
    color: "#60a5fa",
  },
  {
    name: "Matthew Berman",
    handle: "@matthewberman",
    desc: "Shares AI tools, OpenClaw tips, and practical AI workflows almost daily. One of the most consistently useful AI accounts to follow.",
    href: "https://x.com/matthewberman",
    color: "#f472b6",
  },
  {
    name: "Andrej Karpathy",
    handle: "@karpathy",
    desc: "Former Tesla AI lead and AI educator. His explanations of neural networks and AI agents are the clearest you'll find anywhere.",
    href: "https://x.com/karpathy",
    color: "#fbbf24",
  },
  {
    name: "Alex Ziskind",
    handle: "@digitalix",
    desc: "Deep dives on AI agents, automation workflows, and practical AI implementation. One of the most hands-on AI builders online.",
    href: "https://x.com/digitalix",
    color: "#a78bfa",
  },
  {
    name: "Tom Döerr",
    handle: "@tom_doerr",
    desc: "Open source contributor and AI agent practitioner. Good for technical AI workflows and real-world agent implementations.",
    href: "https://x.com/tom_doerr",
    color: "#34d399",
  },
  {
    name: "klöss",
    handle: "@kloss_xyz",
    desc: "Builds with AI agents and shares real workflows. Good for staying updated on practical agent engineering.",
    href: "https://x.com/kloss_xyz",
    color: "#f472b6",
  },
  {
    name: "OpenClaw Community",
    handle: "@openclaw",
    desc: "Official OpenClaw community on X. 31K+ members sharing workflows, configs, and helping each other build better agents.",
    href: "https://x.com/openclaw",
    color: "var(--color-accent)",
  },
];

const docs = [
  {
    title: "OpenClaw Docs",
    href: "https://docs.openclaw.ai",
    desc: "The official getting-started guide, channel setup, skills system, memory management, and full API reference.",
  },
  {
    title: "Hermes Agent",
    href: "https://hermes-agent.nousresearch.com",
    desc: "The official Hermes Agent website — free, open source, zero vendor lock-in. Setup guides and documentation.",
  },
  {
    title: "Kilo.ai / KiloClaw",
    href: "https://kilo.ai",
    desc: "Managed OpenClaw hosting. If you don't want to use the terminal, Kilo gets you running fast with zero setup.",
  },
  {
    title: "OpenClaw Discord",
    href: "https://discord.gg/clawd",
    desc: "31,000+ member community. Post your configs, ask questions, share workflows, and connect with other builders.",
  },
];

const aiProviders = [
  {
    name: "MiniMax (Recommended)",
    href: "https://platform.minimax.io/subscribe/token-plan?code=2ccyhzbKsx&source=link",
    desc: "The AI provider Tyler uses for agents. Sign up through this link for 10% off for your friends — and rewards for you. Supports MiniMax M2, M2.7, and more.",
    badge: "10% off for friends + API credits",
    color: "var(--color-accent)",
  },
];

export function ResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set(".resource-group", { autoAlpha: 1, clearProps: "all" });
        return;
      }

      const mm = gsap.matchMedia();
      gsap.set(".resource-group", { autoAlpha: 0, y: 60 });

      mm.add("(min-width: 768px)", () => {
        gsap.utils.toArray<HTMLElement>(".resource-group").forEach((group, i) => {
          gsap.to(group, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: group,
              start: "top 80%",
              toggleActions: "play none none reverse",
              markers: gsapMarkers,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

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
          Learn From the Best
        </h2>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--color-text-muted)",
            marginBottom: "4rem",
            maxWidth: "600px",
            lineHeight: 1.7,
          }}
        >
          These creators and accounts are where the real knowledge lives.
          Follow them, watch their videos, and study how they build.
        </p>

        {/* AI Provider */}
        <div className="resource-group" style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <Gift size={22} color="var(--color-accent)" />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--color-text)",
                margin: 0,
              }}
            >
              AI Provider
            </h3>
          </div>
          <a
            href="https://platform.minimax.io/subscribe/token-plan?code=2ccyhzbKsx&source=link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "1.75rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-accent)",
              borderRadius: "var(--radius-lg)",
              textDecoration: "none",
              transition: "transform var(--transition-fast), box-shadow var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-3px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 30px rgba(255, 61, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    marginBottom: "0.35rem",
                  }}
                >
                  MiniMax — Tyler uses this provider
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--color-text-muted)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {aiProviders[0].desc}
                </p>
              </div>
              <span
                style={{
                  padding: "0.4rem 1rem",
                  background: "var(--color-accent-muted)",
                  border: "1px solid rgba(255, 61, 0, 0.3)",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  whiteSpace: "nowrap",
                }}
              >
                {aiProviders[0].badge}
              </span>
            </div>
          </a>
        </div>

        {/* YouTube Creators */}
        <div className="resource-group" style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <Youtube size={24} color="#ff4444" />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--color-text)",
                margin: 0,
              }}
            >
              YouTube Creators Worth Watching
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {youtubeCreators.map((creator) => (
              <a
                key={creator.name}
                href={creator.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "1.75rem",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  textDecoration: "none",
                  transition: "border-color var(--transition-fast), transform var(--transition-fast)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    creator.color;
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-3px)";
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
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      margin: 0,
                    }}
                  >
                    {creator.name}
                  </h4>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {creator.handle}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "1rem",
                    lineHeight: 1.65,
                  }}
                >
                  {creator.desc}
                </p>

                <div
                  style={{
                    padding: "0.6rem 0.875rem",
                    background: "rgba(255, 68, 68, 0.1)",
                    border: "1px solid rgba(255, 68, 68, 0.2)",
                    borderRadius: "var(--radius-sm)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Youtube size={13} color="#ff4444" />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#ff4444",
                      fontWeight: 500,
                    }}
                  >
                    {creator.videoTitle}
                  </span>
                  <ExternalLink
                    size={12}
                    color="var(--color-text-muted)"
                    style={{ marginLeft: "auto" }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Twitter Accounts */}
        <div className="resource-group" style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <Twitter size={24} color="var(--color-accent)" />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--color-text)",
                margin: 0,
              }}
            >
              X Accounts to Follow
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {twitterAccounts.map((account) => (
              <a
                key={account.handle}
                href={account.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.1rem 1.25rem",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  transition: "border-color var(--transition-fast)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    account.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "var(--color-border)";
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: `${account.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Twitter size={16} color={account.color} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                    }}
                  >
                    {account.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: account.color,
                      fontWeight: 500,
                    }}
                  >
                    {account.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Official Docs */}
        <div className="resource-group">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <BookOpen size={24} color="var(--color-text-muted)" />
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--color-text)",
                margin: 0,
              }}
            >
              Official Documentation
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {docs.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
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
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      margin: 0,
                    }}
                  >
                    {doc.title}
                  </h4>
                  <ExternalLink size={13} color="var(--color-text-muted)" />
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-text-muted)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {doc.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

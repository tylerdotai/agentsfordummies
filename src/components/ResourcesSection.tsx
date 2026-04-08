"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Youtube, Twitter, BookOpen, ExternalLink, Github, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const youtubeCreators = [
  {
    name: "Alex Finn",
    handle: "@alexfinn",
    desc: "The best OpenClaw content on YouTube. Alex breaks down OpenClaw use cases, setup walkthroughs, and how to build agent teams. Start with his video: &quot;OpenClaw is the most powerful AI tool I've ever used.&quot; (313K views)",
    href: "https://www.youtube.com/@alexfinn",
    videoHref: "https://www.youtube.com/watch?v=Rjd1LqF9cG4",
    videoTitle: "How to Build an Army of OpenClaw Agents (67K views)",
    followers: "300K+ subscribers",
    color: "#ff4444",
  },
  {
    name: "Matthew Berman",
    handle: "@matthew_berman",
    desc: "Matthew&#39;s mission is making AI accessible to everyone. His OpenClaw coverage — including &quot;I Used OpenClaw to Replace My Brain&quot; — is the best introduction for non-technical people. Clear, practical, no jargon.",
    href: "https://www.youtube.com/@matthew_berman",
    videoHref: "https://www.youtube.com/watch?v=Qkqe-uRhQJE",
    videoTitle: "OpenClaw: Personal AI OS — Full Walkthrough",
    followers: "Makes AI accessible to all",
    color: "#ff4444",
  },
];

const twitterAccounts = [
  {
    name: "Patrick Georgi",
    handle: "@steipete",
    desc: "Creator of OpenClaw. Follow for the latest updates, feature announcements, and to see what&#39;s coming next for OpenClaw.",
    href: "https://x.com/steipete",
    color: "var(--color-accent)",
  },
  {
    name: "Nous Research",
    handle: "@NousResearch",
    desc: "The team behind Hermes Agent. They&#39;re pushing the frontier of open-source AI agents and frequently share what&#39;s possible.",
    href: "https://x.com/NousResearch",
    color: "#4ade80",
  },
  {
    name: "Alex Finn",
    handle: "@alexfinn_",
    desc: "Post regularly about OpenClaw workflows, agent setups, and automation patterns. Great for staying inspired.",
    href: "https://x.com/alexfinn_",
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
    name: "Robert Scoble",
    handle: "@Scobleizer",
    desc: "Tech futurist who&#39;s been covering AI agents obsessively. Good for understanding where the entire space is heading.",
    href: "https://x.com/Scobleizer",
    color: "#fb923c",
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
    title: "Hermes Agent (GitHub)",
    href: "https://github.com/nousresearch/hermes-agent",
    desc: "Full documentation, setup guide, and source code for Hermes Agent by NousResearch.",
  },
  {
    title: "Kilo.ai / KiloClaw",
    href: "https://kilo.ai",
    desc: "Managed OpenClaw hosting. If you don&#39;t want to use the terminal, Kilo gets you running fast.",
  },
  {
    title: "OpenClaw Discord",
    href: "https://discord.gg/clawd",
    desc: "31,000+ member community. Post your configs, ask questions, share workflows, and connect with other builders.",
  },
];

export function ResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        section.querySelectorAll(".resource-group").forEach((group, i) => {
          gsap.fromTo(
            group,
            { autoAlpha: 0, y: 60 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              delay: i * 0.15,
              scrollTrigger: {
                trigger: group,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });
    }, section);

    return () => ctx.revert();
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

        {/* YouTube Creators */}
        <div
          className="resource-group"
          style={{ marginBottom: "4rem" }}
        >
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
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
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
                  dangerouslySetInnerHTML={{ __html: creator.desc }}
                />

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
        <div
          className="resource-group"
          style={{ marginBottom: "4rem" }}
        >
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
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
                  padding: "1.25rem",
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
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: `${account.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Twitter size={18} color={account.color} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                    }}
                  >
                    {account.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
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
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
                  dangerouslySetInnerHTML={{ __html: doc.desc }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Briefcase, Lightbulb, ShoppingCart, Heart, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const levels = [
  {
    level: "Beginner",
    icon: Sparkles,
    color: "#7A9E7E",
    cases: [
      {
        title: "Draft emails and messages",
        desc: "Tell your agent what you want to say and in what tone. It drafts the email — you review and send. No more staring at a blank screen.",
        example: "Write a follow-up email to a client I haven't heard from in 2 weeks. Keep it professional but friendly.",
      },
      {
        title: "Summarize articles and documents",
        desc: "Drop in a link or paste text and ask for a plain-English summary. Perfect for staying on top of news, research, or long reports.",
        example: "Summarize this article in 3 bullet points: [URL]",
      },
      {
        title: "Plan meals or trips",
        desc: "Give your agent a budget and preferences — it builds a meal plan, packing list, or itinerary in seconds.",
        example: "Plan a 3-day Austin food trip for 2 people, $150/day, they like BBQ and Tex-Mex.",
      },
    ],
  },
  {
    level: "Intermediate",
    icon: Briefcase,
    color: "#6B8FAD",
    cases: [
      {
        title: "Research competitors and markets",
        desc: "Give your agent a company or market to investigate. It pulls publicly available data, news, and trends — a research analyst that works while you sleep.",
        example: "Research the top 5 competitors for a local plumbing business in Dallas. What do their reviews complain about?",
      },
      {
        title: "Automate repetitive computer tasks",
        desc: "Agents like OpenClaw can interact with your files, run terminal commands, browse web apps, and handle multi-step workflows without you touching the keyboard.",
        example: "Go to my email, find all receipts from Amazon in the last 30 days, and save the PDF attachments to a folder called Receipts.",
      },
      {
        title: "Write and refine content",
        desc: "From blog posts to social captions to business proposals — give your agent a topic and rough direction, then iterate together until it lands.",
        example: "Write a 600-word blog intro about why small businesses should care about AI agents. Conversational tone, no jargon.",
      },
    ],
  },
];

export function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        section.querySelectorAll(".usecase-card"),
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
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
      id="use-cases"
      style={{
        padding: "var(--spacing-section) 1.5rem",
        background: "var(--color-surface)",
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
          Real Use Cases — Beginner to Intermediate
        </h2>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--color-text-muted)",
            marginBottom: "3.5rem",
            maxWidth: "700px",
          }}
        >
          These aren&#39;t toy examples. They&#39;re things real people are doing right
          now with agents. Try them yourself.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
          }}
        >
          {levels.map((group) => (
            <div key={group.level}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.75rem",
                }}
              >
                <group.icon size={28} color={group.color} />
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: group.color,
                    margin: 0,
                  }}
                >
                  {group.level}
                </h3>
                <span
                  style={{
                    height: "1px",
                    flex: 1,
                    background: "var(--color-border)",
                  }}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {group.cases.map((useCase) => (
                  <div
                    key={useCase.title}
                    className="usecase-card"
                    style={{
                      padding: "1.75rem",
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-lg)",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        marginBottom: "0.6rem",
                        color: "var(--color-text)",
                      }}
                    >
                      {useCase.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--color-text-muted)",
                        marginBottom: "1rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {useCase.desc}
                    </p>
                    <div
                      style={{
                        padding: "0.875rem",
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-md)",
                        borderLeft: `3px solid ${group.color}`,
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: "var(--color-text-muted)",
                          marginBottom: "0.35rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Try this prompt
                      </p>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--color-text)",
                          margin: 0,
                          fontStyle: "italic",
                          lineHeight: 1.6,
                        }}
                      >
                        &#34;{useCase.example}&#34;
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

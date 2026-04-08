"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Moon, Repeat } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function WhyCareSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Sticky left panel pin
        gsap.fromTo(
          sticky,
          { autoAlpha: 0, scale: 0.9 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Alternating rows slide in
        section.querySelectorAll(".why-item").forEach((item, i) => {
          gsap.fromTo(
            item,
            { autoAlpha: 0, x: i % 2 === 0 ? -80 : 80 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // Counter animations — parseInt handles both numbers and strings
        counterRefs.current.forEach((el, i) => {
          if (!el) return;
          const target = i === 2 ? 999 : [10, 8][i];
          const suffix = i === 2 ? "+" : "x";
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              if (el) el.textContent = Math.round(obj.val) + suffix;
            },
            scrollTrigger: {
              trigger: section,
              start: "top 55%",
              once: true,
            },
          });
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      icon: TrendingUp,
      statRef: (el: HTMLDivElement | null) => { counterRefs.current[0] = el; },
      stat: "10x",
      label: "faster on repetitive work",
      desc:
        "Draft reports, reply to emails, update spreadsheets, schedule meetings — tasks that take hours happen in minutes. Use that time for the work only humans can do.",
      color: "var(--color-accent)",
    },
    {
      icon: Moon,
      statRef: (el: HTMLDivElement | null) => { counterRefs.current[1] = el; },
      stat: "8hrs",
      label: "of sleep recovered per week",
      desc:
        "Set it and forget it. Your agent handles the 3am alarm checks, the follow-up emails you keep forgetting, the daily standup summaries. You wake up to a world already handled.",
      color: "#4ade80",
    },
    {
      icon: Repeat,
      statRef: (el: HTMLDivElement | null) => { counterRefs.current[2] = el; },
      stat: "999+",
      label: "tasks automated around the clock",
      desc:
        "Agents don't unionize, don't burn out, don't call in sick. They run cron jobs, monitor feeds, and execute workflows on schedule while you live your life.",
      color: "#60a5fa",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="why-care"
      style={{
        padding: "var(--spacing-section) 1.5rem",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "var(--color-text)",
          }}
        >
          Why Does This Matter?
        </h2>

        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--color-text-muted)",
            marginBottom: "4rem",
            maxWidth: "600px",
            lineHeight: 1.7,
          }}
        >
          Most people are still using AI like a search engine. That is like buying
          a sports car and only driving it to the grocery store. Agents unlock what
          AI is actually for.
        </p>

        {/* Two-column layout: sticky left + scrolling right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
          className="why-layout"
        >
          {/* Left: sticky panel */}
          <div
            ref={stickyRef}
            style={{
              position: "sticky",
              top: "50%",
              transform: "translateY(-50%)",
              height: "fit-content",
              padding: "2.5rem 2rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                  fontFamily: "var(--font-mono)",
                  background: "linear-gradient(135deg, var(--color-accent), #ff6a00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI Agents
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--color-text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Work while you sleep
              </div>
              <div
                style={{
                  width: "60%",
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                }}
              />
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Scroll to see what they can do
              </p>
            </div>
          </div>

          {/* Right: scrolling rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {reasons.map((reason) => (
              <div
                key={reason.label}
                className="why-item"
                style={{
                  padding: "2rem 2.25rem",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  willChange: "opacity, transform",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "var(--radius-md)",
                      background: `${reason.color}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <reason.icon size={22} color={reason.color} />
                  </div>
                  <div>
                    <div
                      ref={reason.statRef}
                      style={{
                        fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                        fontWeight: 800,
                        color: reason.color,
                        lineHeight: 1,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {reason.stat}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--color-text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginTop: "0.2rem",
                      }}
                    >
                      {reason.label}
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .why-layout {
            grid-template-columns: 280px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Moon, Repeat } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function WhyCareSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<{ el: HTMLDivElement | null; end: number; suffix: string }[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const stickyContainer = stickyContainerRef.current;
    if (!section || !stickyContainer) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Left side: sticky icon + stat that stays pinned while text scrolls by
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            pin: stickyContainer,
            pinSpacing: false,
            scrub: 0.8,
          },
        });

        // Sticky content scales in as section enters
        tl.fromTo(
          stickyContainer.querySelector(".sticky-content"),
          { autoAlpha: 0, scale: 0.85 },
          { autoAlpha: 1, scale: 1, duration: 0.8, ease: "power3.out" }
        );

        // Right side: rows slide in alternating left/right as you scroll
        const items = section.querySelectorAll(".why-item");
        items.forEach((item, i) => {
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
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // Counter animations
        counterRefs.current.forEach(({ el, end, suffix }) => {
          if (!el) return;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: end,
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

  const setCounterRef = (el: HTMLDivElement | null, end: number, suffix: string) => {
    if (el) counterRefs.current.push({ el, end, suffix });
  };

  const reasons = [
    {
      icon: TrendingUp,
      stat: "10x",
      label: "faster on repetitive work",
      desc:
        "Draft reports, reply to emails, update spreadsheets, schedule meetings — tasks that take hours happen in minutes. Use that time for the work only humans can do.",
      color: "var(--color-accent)",
    },
    {
      icon: Moon,
      stat: "8hrs",
      label: "of sleep recovered per week",
      desc:
        "Set it and forget it. Your agent handles the 3am alarm checks, the follow-up emails you keep forgetting, the daily standup summaries. You wake up to a world already handled.",
      color: "#4ade80",
    },
    {
      icon: Repeat,
      stat: "∞",
      label: "round-the-clock automation",
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
        position: "relative",
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
            fontSize: "1.25rem",
            color: "var(--color-text-muted)",
            marginBottom: "4rem",
            maxWidth: "620px",
            lineHeight: 1.7,
          }}
        >
          Most people are still using AI like a search engine. That&#39;s like
          buying a sports car and only driving it to the grocery store. Agents
          unlock what AI is actually for.
        </p>

        {/* Sticky left column + scrolling right column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="why-layout"
        >
          {/* Left: sticky stat panel */}
          <div
            ref={stickyContainerRef}
            style={{
              position: "sticky",
              top: "50%",
              transform: "translateY(-50%)",
              height: "fit-content",
              padding: "2rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <div className="sticky-content">
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
                    fontSize: "clamp(4rem, 10vw, 7rem)",
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
                    fontSize: "1.1rem",
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
                    background:
                      "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                    margin: "0.5rem 0",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Scroll down to see what they can do
                </p>
              </div>
            </div>
          </div>

          {/* Right: scrolling reason rows */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {reasons.map((reason, i) => (
              <div
                key={reason.stat}
                className="why-item"
                style={{
                  padding: "2.5rem",
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
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "var(--radius-md)",
                      background: `${reason.color}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <reason.icon size={24} color={reason.color} />
                  </div>
                  <div>
                    <div
                      ref={(el) =>
                        setCounterRef(el as HTMLDivElement, parseInt(reason.stat), "")
                      }
                      style={{
                        fontSize: "clamp(2rem, 4vw, 3rem)",
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
                        fontSize: "0.8rem",
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
                    fontSize: "1.05rem",
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
            grid-template-columns: 320px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

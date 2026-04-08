"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Moon, Repeat } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function WhyCareSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<{ el: HTMLDivElement | null; end: number; suffix: string }[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Left-right slide-in
        const items = section.querySelectorAll(".why-item");
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            { autoAlpha: 0, x: i % 2 === 0 ? -70 : 70 },
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

        // Counter animation
        counterRefs.current.forEach(({ el, end, suffix }) => {
          if (!el) return;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: end,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              if (el) el.textContent = Math.round(obj.val) + suffix;
            },
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
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
      statRef: null,
      label: "faster on repetitive work",
      desc:
        "Draft reports, reply to emails, update spreadsheets, schedule meetings — tasks that take hours happen in minutes. Use that time for the work only humans can do.",
      color: "var(--color-accent)",
    },
    {
      icon: Moon,
      stat: "8hrs",
      statRef: null,
      label: "of sleep recovered per week",
      desc:
        "Set it and forget it. Your agent handles the 3am alarm checks, the follow-up emails you keep forgetting, the daily standup summaries. You wake up to a world already handled.",
      color: "#4ade80",
    },
    {
      icon: Repeat,
      stat: "∞",
      statRef: null,
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
          Most people are still using AI like a search engine. That's like
          buying a sports car and only driving it to the grocery store. Agents
          unlock what AI is actually for.
        </p>

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
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.5rem",
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
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "var(--radius-md)",
                    background: `${reason.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <reason.icon size={26} color={reason.color} />
                </div>
                <div>
                  <div
                    ref={(el) => setCounterRef(el as HTMLDivElement, parseInt(reason.stat), "")}
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
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
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginTop: "0.25rem",
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
                  alignSelf: "center",
                }}
              >
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function WhyCareSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const items = section.querySelectorAll(".why-item");
      gsap.fromTo(
        items,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
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

  const reasons = [
    {
      stat: "10x",
      label: "faster workflows",
      desc:
        "Draft a report in minutes instead of hours. Have a research agent gather information while you focus on decisions that actually need you.",
    },
    {
      stat: "24/7",
      label: "always available",
      desc:
        "Your agent doesn't sleep, take breaks, or get distracted. It handles the routine so you can handle what matters.",
    },
    {
      stat: "1000s",
      label: "of tasks automated",
      desc:
        "From scheduling and email to data entry and customer support — agents handle the repetitive work humans shouldn't waste time on.",
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
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "var(--color-text)",
          }}
        >
          Why Should You Care?
        </h2>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--color-text-muted)",
            marginBottom: "3.5rem",
          }}
        >
          AI agents aren&#39;t just a tech trend — they&#39;re a fundamental shift in
          how work gets done. Here&#39;s what&#39;s in it for you.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {reasons.map((reason) => (
            <div
              key={reason.stat}
              className="why-item"
              style={{
                padding: "2.5rem 2rem",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  fontWeight: 800,
                  color: "var(--color-accent)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {reason.stat}
              </div>
              <div
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {reason.label}
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.7,
                  margin: 0,
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

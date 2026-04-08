"use client";

import { useRef } from "react";
import { TrendingUp, Moon, Repeat } from "lucide-react";
import { gsap, gsapMarkers, prefersReducedMotion, useGSAP } from "@/lib/gsap";

export function WhyCareSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  const reasons = [
    {
      icon: TrendingUp,
      statRef: (el: HTMLDivElement | null) => {
        counterRefs.current[0] = el;
      },
      stat: "10x",
      target: 10,
      suffix: "x",
      label: "faster on repetitive work",
      desc:
        "Draft reports, reply to emails, update spreadsheets, and schedule meetings in minutes instead of burning half your day on admin.",
      color: "var(--color-accent)",
    },
    {
      icon: Moon,
      statRef: (el: HTMLDivElement | null) => {
        counterRefs.current[1] = el;
      },
      stat: "8x",
      target: 8,
      suffix: "x",
      label: "more time back each week",
      desc:
        "Set it once and let it run. Follow-ups, checks, and summaries keep moving even when you are asleep or busy.",
      color: "#4ade80",
    },
    {
      icon: Repeat,
      statRef: (el: HTMLDivElement | null) => {
        counterRefs.current[2] = el;
      },
      stat: "999+",
      target: 999,
      suffix: "+",
      label: "tasks automated around the clock",
      desc:
        "They run cron jobs, monitor feeds, and execute recurring workflows on schedule without needing babysitting.",
      color: "#60a5fa",
    },
  ];

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set([".why-care-lead", ".why-card"], { autoAlpha: 1, clearProps: "all" });
        return;
      }

      gsap.set(".why-care-lead", { autoAlpha: 0, y: 28 });
      gsap.set(".why-card", { autoAlpha: 0, y: 32 });

      gsap.to(".why-care-lead", {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
          markers: gsapMarkers,
        },
      });

      gsap.to(".why-card", {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".why-grid",
          start: "top 82%",
          toggleActions: "play none none reverse",
          markers: gsapMarkers,
        },
      });

      counterRefs.current.forEach((el, i) => {
        const config = reasons[i];
        if (!el || !config) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: config.target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".why-grid",
            start: "top 82%",
            once: true,
            markers: gsapMarkers,
          },
          onUpdate: () => {
            if (el) el.textContent = `${Math.round(obj.val)}${config.suffix}`;
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="why-care"
      style={{
        padding: "var(--spacing-section) 1.5rem",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="why-care-lead" style={{ maxWidth: "760px", marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 900,
              marginBottom: "1rem",
              color: "var(--color-text)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Why does this matter?
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              margin: 0,
              maxWidth: "680px",
            }}
          >
            Most people still use AI like a chatbot. Agents are the jump from asking
            questions to getting real work done while you focus on something else.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div
              key={reason.label}
              className="why-card"
              style={{
                padding: "1.75rem",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderTop: `3px solid ${reason.color}`,
                borderRadius: "var(--radius-lg)",
                willChange: "opacity, transform",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.9rem",
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
                      fontSize: "clamp(1.9rem, 4vw, 2.7rem)",
                      fontWeight: 900,
                      color: reason.color,
                      lineHeight: 1,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {reason.stat}
                  </div>
                  <div
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginTop: "0.25rem",
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

      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 900px) {
          .why-grid {
            grid-template-columns: repeat(3, 1fr);
            align-items: stretch;
          }
        }
        @media (max-width: 767px) {
          #why-care {
            padding: 4rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}

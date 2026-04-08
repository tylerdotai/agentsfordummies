"use client";

import { useRef } from "react";
import { Bot, MemoryStick, Plug, Clock } from "lucide-react";
import { gsap, gsapMarkers, prefersReducedMotion, useGSAP } from "@/lib/gsap";

const points = [
  {
    icon: Bot,
    title: "It acts for you",
    body:
      "An AI agent is software that takes a goal in plain English and actually does the work, not just chats about it. It can write, search, summarize, check things, and complete tasks on your behalf.",
    color: "var(--color-accent)",
  },
  {
    icon: MemoryStick,
    title: "It remembers context",
    body:
      "Unlike a normal chatbot, an agent can remember your preferences, recurring tasks, and past conversations. That means less repeating yourself and better results over time.",
    color: "#4ade80",
  },
  {
    icon: Plug,
    title: "It uses your tools",
    body:
      "Agents can connect to apps like Discord, email, calendars, docs, GitHub, and web search. That is where the magic happens, because they can move from words to action.",
    color: "#60a5fa",
  },
  {
    icon: Clock,
    title: "It keeps working",
    body:
      "A good agent keeps running in the background, checks things on a schedule, and reports back when something matters. It is closer to an assistant than a chatbot.",
    color: "#f472b6",
  },
];

export function WhatIsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set([headingRef.current, ".whatis-card"], {
          autoAlpha: 1,
          clearProps: "all",
        });
        return;
      }

      const mm = gsap.matchMedia();
      gsap.set(headingRef.current, {
        autoAlpha: 0,
        y: 40,
        clipPath: "inset(0 100% 0 0)",
      });
      gsap.set(".whatis-card", { autoAlpha: 0, y: 32 });

      mm.add("(min-width: 768px)", () => {
        gsap.to(headingRef.current, {
          autoAlpha: 1,
          y: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            toggleActions: "play none none reverse",
            markers: gsapMarkers,
          },
        });

        gsap.to(".whatis-card", {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".whatis-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: gsapMarkers,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.to(headingRef.current, {
          autoAlpha: 1,
          y: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 86%",
            once: true,
            markers: gsapMarkers,
          },
        });

        gsap.utils.toArray<HTMLElement>(".whatis-card").forEach((card) => {
          gsap.to(card, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
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
      id="what-is"
      style={{
        padding: "var(--spacing-section) 1.5rem",
        background: "var(--color-bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
        <div style={{ maxWidth: "760px", marginBottom: "3rem" }}>
          <h2
            ref={headingRef}
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 900,
              marginBottom: "1rem",
              color: "var(--color-text)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              willChange: "opacity, transform, clip-path",
            }}
          >
            What is an AI agent, really?
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              margin: 0,
              maxWidth: "680px",
            }}
          >
            Think of it like a capable digital assistant that can remember what
            matters, use tools, and handle real tasks for you instead of just
            answering questions in a chat box.
          </p>
        </div>

        <div
          className="whatis-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {points.map((point) => (
            <div
              key={point.title}
              className="whatis-card"
              style={{
                padding: "1.75rem",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderTop: `3px solid ${point.color}`,
                borderRadius: "var(--radius-lg)",
                willChange: "opacity, transform",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <point.icon size={22} color={point.color} />
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {point.title}
                </h3>
              </div>
              <p
                style={{
                  fontSize: "0.96rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #what-is {
            padding: 4rem 1rem !important;
          }
          .whatis-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}

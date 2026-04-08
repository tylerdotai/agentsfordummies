"use client";

import { useRef } from "react";
import { Bot, MemoryStick, Plug, Clock } from "lucide-react";
import { gsap, gsapMarkers, prefersReducedMotion, useGSAP } from "@/lib/gsap";

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
        y: 50,
        clipPath: "inset(0 100% 0 0)",
      });
      gsap.set(".whatis-card", { autoAlpha: 0, y: 50, scale: 0.97 });

      mm.add("(min-width: 768px)", () => {
        gsap.to(headingRef.current, {
          autoAlpha: 1,
          y: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
            markers: gsapMarkers,
          },
        });

        gsap.to(".whatis-card", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".whatis-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
            markers: gsapMarkers,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const points = [
    {
      icon: Bot,
      title: "It's software that acts for you",
      body:
        "An AI agent is a program that uses an AI model to understand what you want, then actually does the task — writing emails, searching the web, reading documents, running code, managing your calendar. It doesn't just chat. It acts.",
      color: "var(--color-accent)",
    },
    {
      icon: MemoryStick,
      title: "It remembers everything",
      body:
        "Unlike a basic chatbot that forgets everything after each response, an agent like OpenClaw keeps track of your goals, preferences, projects, and past conversations across weeks and months. It builds a model of you.",
      color: "#4ade80",
    },
    {
      icon: Plug,
      title: "It connects to your tools",
      body:
        "OpenClaw connects to Discord, Telegram, WhatsApp, Signal, iMessage, Slack, email, GitHub, and dozens of other apps. It can interact with your computer like you would — clicking, typing, browsing.",
      color: "#60a5fa",
    },
    {
      icon: Clock,
      title: "It's available 24/7",
      body:
        "Your agent doesn't sleep, take breaks, or get distracted. It runs in the background, handles scheduled tasks, sends you reminders, and monitors things while you're away. It's the coworker that never quits.",
      color: "#f472b6",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="what-is"
      style={{
        padding: "var(--spacing-section) 1.5rem",
        background: "var(--color-bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2
          ref={headingRef}
          className="whatis-heading"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "var(--color-text)",
            willChange: "clip-path, opacity, transform",
          }}
        >
          What Is an AI Agent?
        </h2>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--color-text-muted)",
            marginBottom: "3.5rem",
            maxWidth: "680px",
            lineHeight: 1.7,
          }}
        >
          Think of it like hiring a very capable remote assistant who lives
          inside your computer. You tell them the outcome you want — they figure
          out how to get there and do it while you sleep.
        </p>

        <div
          className="whatis-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {points.map((point) => (
            <div
              key={point.title}
              className="whatis-card"
              style={{
                padding: "2rem",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                borderTop: `3px solid ${point.color}`,
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
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    margin: 0,
                  }}
                >
                  {point.title}
                </h3>
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

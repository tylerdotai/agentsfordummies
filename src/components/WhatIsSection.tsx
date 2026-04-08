"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function WhatIsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        section.querySelector(".whatis-heading"),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".card-item");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  const points = [
    {
      title: "It's a digital helper that acts for you",
      body:
        "An AI agent is a program that uses AI to understand what you want, then actually does the task — writing emails, searching the web, organizing files, coding, and more — without you holding its hand step by step.",
    },
    {
      title: "It remembers context",
      body:
        "Unlike a simple chatbot that forgets everything after each response, an agent keeps track of your goals, preferences, and ongoing projects across multiple conversations and sessions.",
    },
    {
      title: "It uses tools",
      body:
        "Agents don't just talk — they browse the web, read and write files, run code, send emails, and interact with other apps. They're versatile, not a one-trick chatbot.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="what-is"
      style={{
        padding: "var(--spacing-section) 1.5rem",
        background: "var(--color-surface)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          className="whatis-heading"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "var(--color-text)",
          }}
        >
          What Is an AI Agent?
        </h2>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--color-text-muted)",
            marginBottom: "3.5rem",
            maxWidth: "700px",
          }}
        >
          Think of it like hiring a very capable remote assistant who lives in
          your computer. You tell them the outcome you want — they figure out
          how to get there.
        </p>

        <div
          ref={cardsRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {points.map((point) => (
            <div
              key={point.title}
              className="card-item"
              style={{
                padding: "2rem",
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                  color: "var(--color-accent)",
                }}
              >
                {point.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
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

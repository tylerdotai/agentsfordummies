"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: true,
            scrub: 0.8,
          },
        });

        // autoAlpha = opacity + visibility in one (cleaner than two properties)
        tl.fromTo(
          headingRef.current,
          { autoAlpha: 0, y: 80 },
          { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }
        )
          .fromTo(
            subRef.current,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.6"
          )
          .fromTo(
            ctaRef.current,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4"
          )
          .fromTo(
            scrollIndicatorRef.current,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.4 },
            "-=0.2"
          );
      });

      // Mobile: simple fade-in via CSS (handled by globals.css)
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 1.5rem",
        gap: "2rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "800px" }}>
        <h1
          ref={headingRef}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text)",
            margin: "0 0 1.5rem",
          }}
        >
          AI Agents{" "}
          <span style={{ color: "var(--color-accent)" }}>for Humans</span>
        </h1>

        <p
          ref={subRef}
          style={{
            fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
            color: "var(--color-text-muted)",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.6,
          }}
        >
          No computer science degree required. This is the friendly guide to
          understanding, setting up, and using AI agents in your everyday life.
        </p>

        <div ref={ctaRef}>
          <a
            href="#what-is"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              background: "var(--color-accent)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.125rem",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              transition: "background var(--transition-fast), transform var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--color-accent-hover)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--color-accent)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#what-is")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Here &mdash; It&#39;s Free
          </a>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--color-text-muted)",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}

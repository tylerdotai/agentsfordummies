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
            scrub: 0.6,
          },
        });

        tl.fromTo(
          headingRef.current,
          { autoAlpha: 0, y: 80, clipPath: "inset(0 0 100% 0)" },
          { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "power4.out" }
        )
          .fromTo(
            subRef.current,
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.5"
          )
          .fromTo(
            ctaRef.current,
            { autoAlpha: 0, y: 30, scale: 0.95 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.4)" },
            "-=0.4"
          )
          .fromTo(
            scrollIndicatorRef.current,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.4 },
            "-=0.2"
          );
      });

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          [headingRef.current, subRef.current, ctaRef.current],
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 }
        );
      });
    }, section);

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
        padding: "5rem 1.5rem 6rem",
        gap: "2rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "860px" }}>
        <h1
          ref={headingRef}
          style={{
            fontSize: "clamp(3rem, 10vw, 7.5rem)",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: "var(--color-text)",
            margin: "0 0 1.5rem",
            willChange: "clip-path, opacity, transform",
          }}
        >
          AI Agents for{" "}
          <span
            style={{
              color: "var(--color-accent)",
              display: "inline-block",
            }}
          >
            Humans
          </span>
        </h1>

        <p
          ref={subRef}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--color-text-muted)",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.75,
          }}
        >
          No computer science degree. No cloud subscriptions. This is the guide
          that takes someone who has never heard of OpenClaw and gets them running
          a personal AI agent on their own computer in under an hour.
        </p>

        <div ref={ctaRef} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#what-is"
            style={{
              display: "inline-block",
              padding: "0.875rem 2rem",
              background: "var(--color-accent)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              transition: "background 150ms ease, transform 150ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent-hover)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#what-is")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Here
          </a>
          <a
            href="#setup-cloud"
            style={{
              display: "inline-block",
              padding: "0.875rem 2rem",
              background: "transparent",
              color: "var(--color-text-muted)",
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border)",
              textDecoration: "none",
              transition: "border-color 150ms ease, color 150ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-accent)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)";
            }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#setup-cloud")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See the Agents
          </a>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="hero-scroll-indicator"
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
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
        onClick={() => {
          document.querySelector("#what-is")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span>See what&apos;s inside</span>
        <div className="bounce-arrow">
          <ArrowDown size={16} />
        </div>
      </div>
      <style>{`
        @keyframes bounce-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .bounce-arrow {
          animation: bounce-down 1.6s ease-in-out infinite;
        }
        .hero-scroll-indicator:hover {
          color: var(--color-accent);
        }
      `}</style>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, Sparkles, MessageSquare, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set([
        eyebrowRef.current,
        headingRef.current,
        subRef.current,
        ctaRef.current,
        previewRef.current,
        scrollIndicatorRef.current,
      ], { autoAlpha: 1 });

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(eyebrowRef.current, { y: 18, autoAlpha: 0, duration: 0.45 })
        .from(headingRef.current, { y: 28, autoAlpha: 0, duration: 0.7 }, "-=0.15")
        .from(subRef.current, { y: 22, autoAlpha: 0, duration: 0.55 }, "-=0.35")
        .from(ctaRef.current, { y: 18, autoAlpha: 0, duration: 0.45 }, "-=0.25")
        .from(previewRef.current, { y: 18, autoAlpha: 0, duration: 0.45 }, "-=0.2")
        .from(scrollIndicatorRef.current, { autoAlpha: 0, duration: 0.35 }, "-=0.15");
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
        padding: "6rem 1.25rem 5rem",
        gap: "2rem",
        position: "relative",
        background:
          "radial-gradient(circle at top center, rgba(255,107,0,0.14), transparent 32%), var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "920px", width: "100%" }}>
        <div
          ref={eyebrowRef}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.55rem",
            padding: "0.55rem 0.9rem",
            marginBottom: "1.25rem",
            borderRadius: "999px",
            border: "1px solid rgba(255,107,0,0.25)",
            background: "rgba(255,107,0,0.08)",
            color: "var(--color-accent)",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          <Sparkles size={14} /> Beginner-friendly guide
        </div>

        <h1
          ref={headingRef}
          style={{
            fontSize: "clamp(3rem, 10vw, 7.5rem)",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: "var(--color-text)",
            margin: "0 0 1.25rem",
          }}
        >
          AI Agents for <span style={{ color: "var(--color-accent)" }}>Humans</span>
        </h1>

        <p
          ref={subRef}
          style={{
            fontSize: "clamp(1rem, 2.6vw, 1.25rem)",
            color: "var(--color-text-muted)",
            maxWidth: "680px",
            margin: "0 auto 2rem",
            lineHeight: 1.75,
          }}
        >
          No computer science degree. No cloud maze. Just a plain-English guide
          that gets a normal person from zero to running a personal AI agent in
          under an hour.
        </p>

        <div
          ref={ctaRef}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <a
            href="#what-is"
            style={{
              display: "inline-block",
              padding: "0.95rem 2rem",
              background: "var(--color-accent)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              transition: "background 150ms ease, transform 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-accent-hover)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--color-accent)";
              e.currentTarget.style.transform = "translateY(0)";
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
              padding: "0.95rem 2rem",
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
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.color = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.color = "var(--color-text-muted)";
            }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#setup-cloud")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See the Agents
          </a>
        </div>

        <div
          ref={previewRef}
          className="hero-preview-grid"
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "1fr",
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          <div className="hero-preview-card">
            <ShieldCheck size={18} color="var(--color-accent)" />
            <div>
              <strong>Runs on your machine</strong>
              <div>Your data stays under your control.</div>
            </div>
          </div>
          <div className="hero-preview-card">
            <MessageSquare size={18} color="#4ade80" />
            <div>
              <strong>Works in chat apps</strong>
              <div>Discord, Telegram, WhatsApp, Signal, more.</div>
            </div>
          </div>
          <div className="hero-preview-card">
            <Sparkles size={18} color="#60a5fa" />
            <div>
              <strong>Built for normal people</strong>
              <div>Real examples, simple language, zero fluff.</div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="hero-scroll-indicator"
        style={{
          position: "absolute",
          bottom: "1.4rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.45rem",
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
        <span>Scroll to start</span>
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
        .hero-preview-card {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          padding: 1rem 1.1rem;
          text-align: left;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          color: var(--color-text-muted);
          line-height: 1.55;
        }
        .hero-preview-card strong {
          display: block;
          color: var(--color-text);
          margin-bottom: 0.15rem;
        }
        @media (min-width: 768px) {
          .hero-preview-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

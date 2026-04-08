"use client";

import { useRef } from "react";
import { ArrowDown, CheckCircle2, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

const proofPoints = [
  {
    icon: Rocket,
    title: "3 setup paths",
    body: "Pick easiest, local-first, or max-flexibility.",
    color: "var(--color-accent)",
  },
  {
    icon: Sparkles,
    title: "8 real prompts",
    body: "Copy one and get your first win fast.",
    color: "#4ade80",
  },
  {
    icon: ShieldCheck,
    title: "Runs on your machine",
    body: "OpenClaw and Hermes keep your data local.",
    color: "#60a5fa",
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const quickWinRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targets = [
        eyebrowRef.current,
        headingRef.current,
        subRef.current,
        ctaRef.current,
        proofRef.current,
        quickWinRef.current,
        scrollIndicatorRef.current,
      ];

      if (prefersReducedMotion()) {
        gsap.set(targets, { autoAlpha: 1, clearProps: "transform" });
        return;
      }

      gsap.set(targets, { autoAlpha: 0 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(eyebrowRef.current, { y: 16 }, { y: 0, autoAlpha: 1, duration: 0.35 })
        .fromTo(headingRef.current, { y: 24 }, { y: 0, autoAlpha: 1, duration: 0.6 }, "-=0.1")
        .fromTo(subRef.current, { y: 18 }, { y: 0, autoAlpha: 1, duration: 0.45 }, "-=0.28")
        .fromTo(ctaRef.current, { y: 14 }, { y: 0, autoAlpha: 1, duration: 0.35 }, "-=0.22")
        .fromTo(proofRef.current, { y: 14 }, { y: 0, autoAlpha: 1, duration: 0.35 }, "-=0.18")
        .fromTo(quickWinRef.current, { y: 14 }, { y: 0, autoAlpha: 1, duration: 0.35 }, "-=0.16")
        .fromTo(scrollIndicatorRef.current, { y: 8 }, { y: 0, autoAlpha: 1, duration: 0.3 }, "-=0.1");
    },
    { scope: sectionRef }
  );

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
        gap: "1.5rem",
        position: "relative",
        background:
          "radial-gradient(circle at top center, rgba(255,107,0,0.16), transparent 30%), var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "980px", width: "100%" }}>
        <div
          ref={eyebrowRef}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.55rem",
            padding: "0.55rem 0.9rem",
            marginBottom: "1rem",
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
          <Sparkles size={14} /> Beginner-friendly, no-BS guide
        </div>

        <h1
          ref={headingRef}
          style={{
            fontSize: "clamp(3rem, 10vw, 6.6rem)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "var(--color-text)",
            margin: "0 0 1rem",
          }}
        >
          Build your first <span style={{ color: "var(--color-accent)" }}>AI agent</span> in under an hour.
        </h1>

        <p
          ref={subRef}
          style={{
            fontSize: "clamp(1rem, 2.3vw, 1.2rem)",
            color: "var(--color-text-muted)",
            maxWidth: "760px",
            margin: "0 auto 1.6rem",
            lineHeight: 1.75,
          }}
        >
          Pick the path that fits you, copy a real prompt, and get a useful win today,
          without needing a computer science degree or a pile of cloud subscriptions.
        </p>

        <div
          ref={ctaRef}
          style={{
            display: "flex",
            gap: "0.9rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "1.5rem",
          }}
        >
          <a
            href="#setup-cloud"
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
              document.querySelector("#setup-cloud")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Pick My Setup Path
          </a>
          <a
            href="#use-cases"
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
              document.querySelector("#use-cases")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See Real Examples
          </a>
        </div>

        <div
          ref={proofRef}
          className="hero-proof-grid"
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "1fr",
            maxWidth: "860px",
            margin: "0 auto 1rem",
          }}
        >
          {proofPoints.map((point) => (
            <div key={point.title} className="hero-proof-card">
              <point.icon size={18} color={point.color} />
              <div>
                <strong>{point.title}</strong>
                <div>{point.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={quickWinRef}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.65rem",
            padding: "0.75rem 1rem",
            marginTop: "0.25rem",
            borderRadius: "var(--radius-md)",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--color-border)",
            textAlign: "left",
            maxWidth: "780px",
          }}
        >
          <CheckCircle2 size={18} color="var(--color-accent)" style={{ flexShrink: 0 }} />
          <span style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>
            <strong style={{ color: "var(--color-text)" }}>Fast first win:</strong> set up a daily email summary,
            research assistant, or reminder workflow before you touch the advanced stuff.
          </span>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="hero-scroll-indicator"
        style={{
          position: "absolute",
          bottom: "1.2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.45rem",
          color: "var(--color-text-muted)",
          fontSize: "0.68rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
        onClick={() => {
          document.querySelector("#setup-cloud")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span>Scroll to choose your path</span>
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
        .hero-proof-card {
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
        .hero-proof-card strong {
          display: block;
          color: var(--color-text);
          margin-bottom: 0.15rem;
        }
        @media (min-width: 768px) {
          .hero-proof-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          #hero {
            padding: 5.5rem 1rem 4.5rem !important;
          }
          .hero-scroll-indicator {
            bottom: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}

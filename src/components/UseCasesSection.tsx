"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Search, Calendar, FileText, MessageSquare, CreditCard } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const beginnerCases = [
  {
    icon: Mail,
    title: "Email inbox triage",
    desc: "Tell your agent to read your unread emails and draft replies. Review and send in seconds instead of spending an hour on email.",
    prompt: "Read my last 10 unread emails and draft a reply for each one. Flag any that need my urgent attention.",
  },
  {
    icon: Calendar,
    title: "Schedule meetings hands-free",
    desc: "Tell your agent when you're free and who you need to meet with. It finds a slot, sends the invite, and confirms with everyone.",
    prompt: "Find a 30-minute slot this week to meet with Marcus. Send him a Google Calendar invite if he confirms.",
  },
  {
    icon: FileText,
    title: "Summarize anything instantly",
    desc: "Drop in a link to an article, PDF, or document and get a plain-English summary in seconds. Keep up with more information in less time.",
    prompt: "Summarize this article in 3 bullets and explain why it matters to small business owners: [URL]",
  },
  {
    icon: Search,
    title: "Research without the rabbit hole",
    desc: "Ask your agent to research a topic — competitors, a product, a market. It browses the web, synthesizes findings, and presents a structured report.",
    prompt: "Research the top 5 AI agent tools for real estate agents. Compare pricing, features, and reviews.",
  },
];

const intermediateCases = [
  {
    icon: MessageSquare,
    title: "Manage your Discord/Slack community",
    desc: "Your agent monitors channels, welcomes new members, answers FAQ questions, flags important threads, and reports back to you with a daily summary.",
    prompt: "In #general, thank everyone who posted this week. Also flag any unanswered questions from newcomers.",
  },
  {
    icon: CreditCard,
    title: "Automate your finances",
    desc: "Connect your agent to your bank and expense tracker. It categorizes transactions, flags anomalies, and reminds you of upcoming bills.",
    prompt: "Check my bank transactions for the last 7 days. Flag anything over $200 that I haven't seen before.",
  },
  {
    icon: FileText,
    title: "Write and iterate on content",
    desc: "From cold emails to LinkedIn posts to client proposals — give your agent a direction and iterate together until it hits the mark.",
    prompt: "Write a cold email to [prospect] about [product]. Keep it under 150 words, conversational, no buzzwords. I'll tell you if it needs adjusting.",
  },
  {
    icon: Search,
    title: "Monitor anything on a schedule",
    desc: "Set a daily cron job to check job listings, competitor pricing, news about a client, or any keyword. Your agent texts you when something new and relevant appears.",
    prompt: "Every morning at 8am, search for news about [competitor] and text me a 3-bullet summary if anything significant shows up.",
  },
];

function UseCaseCard({
  useCase,
  accentColor,
}: {
  useCase: (typeof beginnerCases)[number];
  accentColor: string;
}) {
  return (
    <div
      className="usecase-card"
      style={{
        padding: "1.75rem",
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderTop: `3px solid ${accentColor}`,
        borderRadius: "var(--radius-lg)",
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
        <useCase.icon size={20} color={accentColor} />
        <h4
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "var(--color-text)",
            margin: 0,
          }}
        >
          {useCase.title}
        </h4>
      </div>
      <p
        style={{
          fontSize: "0.9rem",
          color: "var(--color-text-muted)",
          marginBottom: "1rem",
          lineHeight: 1.7,
        }}
      >
        {useCase.desc}
      </p>
      <div
        style={{
          padding: "0.875rem",
          background: "var(--color-bg)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          borderLeft: `3px solid ${accentColor}`,
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "var(--color-text-muted)",
            marginBottom: "0.35rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Try this
        </p>
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--color-text)",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          &ldquo;{useCase.prompt}&rdquo;
        </p>
      </div>
    </div>
  );
}

export function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      section.querySelectorAll(".usecase-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: (i % 4) * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="use-cases"
      style={{
        background: "var(--color-bg-secondary)",
      }}
    >
      <div style={{ padding: "4rem 1rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "var(--color-text)",
          }}
        >
          What Can You Actually Do With One?
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--color-text-muted)",
            marginBottom: "2.5rem",
            maxWidth: "620px",
            lineHeight: 1.7,
          }}
        >
          Real prompts. Real workflows. These are things people are running
          right now with OpenClaw and Hermes Agent — not theoretical examples.
        </p>

        {/* Beginner column */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              padding: "1rem 1.5rem",
              background: "var(--color-accent)",
              borderRadius: "var(--radius-md)",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#fff",
              marginBottom: "1.5rem",
              display: "inline-block",
            }}
          >
            Beginner — Start Here
          </div>
          <div className="cases-grid">
            {beginnerCases.map((useCase) => (
              <UseCaseCard
                key={useCase.title}
                useCase={useCase}
                accentColor="var(--color-accent)"
              />
            ))}
          </div>
        </div>

        {/* Intermediate column */}
        <div>
          <div
            style={{
              padding: "1rem 1.5rem",
              background: "linear-gradient(135deg, #4ade80, #22d3ee)",
              borderRadius: "var(--radius-md)",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#fff",
              marginBottom: "1.5rem",
              display: "inline-block",
            }}
          >
            Intermediate
          </div>
          <div className="cases-grid">
            {intermediateCases.map((useCase) => (
              <UseCaseCard
                key={useCase.title}
                useCase={useCase}
                accentColor="#4ade80"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cases-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .cases-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .cases-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}

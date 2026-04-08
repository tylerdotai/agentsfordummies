"use client";

import { useMemo, useRef, useState } from "react";
import {
  Brain,
  Calendar,
  Clock3,
  Mail,
  MessageSquare,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";
import { gsap, gsapMarkers, prefersReducedMotion, ScrollTrigger, useGSAP } from "@/lib/gsap";

const storyBeats = [
  {
    step: "01",
    title: "You ask in plain English",
    body:
      "You type what you want like you would text a smart assistant. No scripts, no dashboards, no weird syntax.",
    userMessage:
      "Every morning, summarize my unread emails and text me anything urgent.",
    assistantMessage:
      "Got it. I’ll check your inbox every morning, pull the important stuff, and send you a short summary.",
    accent: "var(--color-accent)",
  },
  {
    step: "02",
    title: "It remembers context",
    body:
      "The agent keeps track of your routines, priorities, and past conversations, so you don’t have to repeat yourself every day.",
    userMessage:
      "Remember that my boss, invoices, and family messages always come first.",
    assistantMessage:
      "Saved. I’ll prioritize work, billing, and family updates before everything else.",
    accent: "#4ade80",
  },
  {
    step: "03",
    title: "It uses tools and apps",
    body:
      "Instead of just answering, it can check email, search the web, read docs, update notes, and work across your tools for you.",
    userMessage:
      "If something looks urgent, check my calendar and pull in the related docs too.",
    assistantMessage:
      "I can do that. I’ll cross-check your calendar, search the thread, and attach the relevant context.",
    accent: "#60a5fa",
  },
  {
    step: "04",
    title: "It works in the background",
    body:
      "The agent keeps running after you close the tab. Schedules, reminders, checks, and follow-ups keep moving without babysitting.",
    userMessage:
      "Do it every weekday at 7 AM, and alert me only if something actually matters.",
    assistantMessage:
      "Scheduled. Quiet when nothing matters, loud when it does.",
    accent: "#fbbf24",
  },
  {
    step: "05",
    title: "It reports back clearly",
    body:
      "Instead of dumping noise on you, it comes back with a useful answer, a summary, or the exact thing you needed done.",
    userMessage:
      "Perfect. Just send me the important stuff.",
    assistantMessage:
      "Done. 3 urgent emails, 1 calendar conflict, and your summary is ready.",
    accent: "#f472b6",
  },
] as const;

const memoryChips = ["Boss emails first", "Invoices are urgent", "Family always priority"];
const toolCards = [
  { label: "Email", icon: Mail, color: "var(--color-accent)" },
  { label: "Calendar", icon: Calendar, color: "#4ade80" },
  { label: "Search", icon: Search, color: "#60a5fa" },
  { label: "Docs", icon: Wrench, color: "#fbbf24" },
];

export function WhatIsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const dynamicMessageRef = useRef<HTMLDivElement>(null);
  const memoryRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const orbitMemoryRef = useRef<HTMLDivElement>(null);
  const orbitToolsRef = useRef<HTMLDivElement>(null);
  const orbitReportRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const activeBeat = storyBeats[activeStep];
  const isReducedMotion = useMemo(() => prefersReducedMotion(), []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const steps = gsap.utils.toArray<HTMLElement>(".story-step");

      steps.forEach((step, index) => {
        mm.add("(min-width: 768px)", () =>
          ScrollTrigger.create({
            trigger: step,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveStep(index),
            onEnterBack: () => setActiveStep(index),
            markers: gsapMarkers,
          })
        );

        mm.add("(max-width: 767px)", () =>
          ScrollTrigger.create({
            trigger: step,
            start: "top 58%",
            end: "bottom 42%",
            onEnter: () => setActiveStep(index),
            onEnterBack: () => setActiveStep(index),
            markers: gsapMarkers,
          })
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  useGSAP(
    () => {
      if (isReducedMotion) {
        gsap.set(
          [
            phoneRef.current,
            dynamicMessageRef.current,
            memoryRef.current,
            toolsRef.current,
            backgroundRef.current,
            resultRef.current,
            orbitMemoryRef.current,
            orbitToolsRef.current,
            orbitReportRef.current,
          ],
          { autoAlpha: 1, clearProps: "transform" }
        );
        return;
      }

      const showMemory = activeStep >= 1;
      const showTools = activeStep >= 2;
      const showBackground = activeStep >= 3;
      const showResult = activeStep >= 4;

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(phoneRef.current, {
          scale: 1,
          boxShadow: `0 30px 120px ${activeBeat.accent}22`,
          duration: 0.35,
        })
        .fromTo(
          dynamicMessageRef.current,
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.35 },
          0
        )
        .to(
          memoryRef.current,
          {
            autoAlpha: showMemory ? 1 : 0,
            y: showMemory ? 0 : 12,
            duration: 0.3,
          },
          0.05
        )
        .to(
          orbitMemoryRef.current,
          {
            autoAlpha: showMemory ? 1 : 0,
            x: showMemory ? 0 : -12,
            y: showMemory ? 0 : -8,
            scale: showMemory ? 1 : 0.95,
            duration: 0.35,
          },
          0.05
        )
        .to(
          toolsRef.current,
          {
            autoAlpha: showTools ? 1 : 0,
            y: showTools ? 0 : 14,
            duration: 0.32,
          },
          0.08
        )
        .to(
          orbitToolsRef.current,
          {
            autoAlpha: showTools ? 1 : 0,
            x: showTools ? 0 : 12,
            y: showTools ? 0 : -8,
            scale: showTools ? 1 : 0.95,
            duration: 0.35,
          },
          0.08
        )
        .to(
          backgroundRef.current,
          {
            autoAlpha: showBackground ? 1 : 0,
            y: showBackground ? 0 : 14,
            duration: 0.32,
          },
          0.1
        )
        .to(
          resultRef.current,
          {
            autoAlpha: showResult ? 1 : 0,
            y: showResult ? 0 : 14,
            scale: showResult ? 1 : 0.97,
            duration: 0.35,
          },
          0.12
        )
        .to(
          orbitReportRef.current,
          {
            autoAlpha: showResult ? 1 : 0,
            x: showResult ? 0 : 12,
            y: showResult ? 0 : 10,
            scale: showResult ? 1 : 0.95,
            duration: 0.35,
          },
          0.12
        );
    },
    { scope: sectionRef, dependencies: [activeStep, isReducedMotion], revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      id="what-is"
      style={{
        padding: "var(--spacing-section) 1rem",
        background:
          "radial-gradient(circle at 50% 10%, rgba(255,107,0,0.08), transparent 30%), var(--color-bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ maxWidth: "760px", marginBottom: "3rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 0.85rem",
              marginBottom: "1rem",
              borderRadius: "999px",
              border: "1px solid rgba(255,107,0,0.22)",
              background: "rgba(255,107,0,0.08)",
              color: "var(--color-accent)",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <Sparkles size={14} /> How it actually works
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 900,
              color: "var(--color-text)",
              lineHeight: 1.05,
              marginBottom: "1rem",
              letterSpacing: "-0.03em",
            }}
          >
            A pinned story, not a wall of text.
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2.1vw, 1.2rem)",
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
              margin: 0,
              maxWidth: "680px",
            }}
          >
            Scroll through the beats. The phone stays anchored while the agent
            goes from plain-English request to memory, tools, background work,
            and a clean final result.
          </p>
        </div>

        <div className="story-layout">
          <div className="story-copy-column">
            {storyBeats.map((beat, index) => {
              const isActive = index === activeStep;
              return (
                <article
                  key={beat.step}
                  className="story-step"
                  data-active={isActive}
                >
                  <div className="story-step-inner">
                    <div className="story-step-number">{beat.step}</div>
                    <div
                      className="story-step-accent"
                      style={{ background: beat.accent }}
                    />
                    <h3>{beat.title}</h3>
                    <p>{beat.body}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="story-visual-column">
            <div className="story-visual-sticky">
              <div className="story-progress">
                {storyBeats.map((beat, index) => (
                  <div
                    key={beat.step}
                    className="story-progress-dot"
                    data-active={index === activeStep}
                    style={{
                      background: index === activeStep ? beat.accent : "rgba(255,255,255,0.12)",
                    }}
                  />
                ))}
              </div>

              <div className="phone-stage">
                <div ref={orbitMemoryRef} className="orbit-card orbit-card-left">
                  <Brain size={16} color="#4ade80" />
                  <div>
                    <strong>Memory</strong>
                    <span>Knows what matters</span>
                  </div>
                </div>

                <div ref={orbitToolsRef} className="orbit-card orbit-card-right">
                  <Wrench size={16} color="#60a5fa" />
                  <div>
                    <strong>Tools</strong>
                    <span>Email, calendar, search</span>
                  </div>
                </div>

                <div ref={orbitReportRef} className="orbit-card orbit-card-bottom">
                  <Sparkles size={16} color="#f472b6" />
                  <div>
                    <strong>Report</strong>
                    <span>Only the useful stuff</span>
                  </div>
                </div>

                <div ref={phoneRef} className="phone-shell">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="phone-header">
                      <div className="phone-avatar">AI</div>
                      <div>
                        <div className="phone-title">OpenClaw Agent</div>
                        <div className="phone-subtitle">Online and listening</div>
                      </div>
                    </div>

                    <div className="chat-thread">
                      <div className="chat-bubble chat-bubble-user">
                        {activeBeat.userMessage}
                      </div>
                      <div
                        key={activeBeat.step}
                        ref={dynamicMessageRef}
                        className="chat-bubble chat-bubble-agent"
                      >
                        {activeBeat.assistantMessage}
                      </div>
                    </div>

                    <div ref={memoryRef} className="memory-strip">
                      {memoryChips.map((chip) => (
                        <span key={chip} className="memory-chip">
                          {chip}
                        </span>
                      ))}
                    </div>

                    <div ref={toolsRef} className="tools-grid">
                      {toolCards.map((tool) => (
                        <div key={tool.label} className="tool-card">
                          <tool.icon size={16} color={tool.color} />
                          <span>{tool.label}</span>
                        </div>
                      ))}
                    </div>

                    <div ref={backgroundRef} className="background-panel">
                      <div className="background-panel-row">
                        <Clock3 size={15} color="#fbbf24" />
                        <span>Weekdays at 7:00 AM</span>
                      </div>
                      <div className="background-panel-row background-panel-live">
                        <span className="live-dot" /> Background job running
                      </div>
                    </div>

                    <div ref={resultRef} className="result-panel">
                      <div className="result-pill">Daily briefing ready</div>
                      <ul>
                        <li>3 urgent emails</li>
                        <li>1 schedule conflict</li>
                        <li>Summary text generated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .story-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .story-copy-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .story-step {
          min-height: 62vh;
          display: flex;
          align-items: center;
        }
        .story-step-inner {
          position: relative;
          width: 100%;
          padding: 1.5rem 1.5rem 1.5rem 2.2rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          background: rgba(255,255,255,0.025);
          transition: border-color 180ms ease, background 180ms ease, transform 180ms ease;
        }
        .story-step[data-active="true"] .story-step-inner {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,107,0,0.22);
          transform: translateY(-2px);
        }
        .story-step-number {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-bottom: 0.6rem;
        }
        .story-step-accent {
          position: absolute;
          left: 0.9rem;
          top: 1.55rem;
          width: 3px;
          height: calc(100% - 3.1rem);
          border-radius: 999px;
        }
        .story-step h3 {
          margin: 0 0 0.8rem;
          font-size: clamp(1.45rem, 2vw, 2rem);
          line-height: 1.1;
          color: var(--color-text);
        }
        .story-step p {
          margin: 0;
          color: var(--color-text-muted);
          line-height: 1.8;
          font-size: 1rem;
          max-width: 44ch;
        }
        .story-visual-column {
          position: relative;
        }
        .story-visual-sticky {
          position: sticky;
          top: 5.5rem;
        }
        .story-progress {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .story-progress-dot {
          width: 30px;
          height: 4px;
          border-radius: 999px;
          transition: transform 180ms ease, background 180ms ease;
        }
        .story-progress-dot[data-active="true"] {
          transform: scaleX(1.18);
        }
        .phone-stage {
          position: relative;
          padding: 1rem 0 3.25rem;
          min-height: 690px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .phone-shell {
          width: min(100%, 380px);
          border-radius: 40px;
          padding: 14px;
          background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 30px 120px rgba(0,0,0,0.45);
        }
        .phone-notch {
          width: 34%;
          height: 24px;
          margin: 0 auto 12px;
          border-radius: 999px;
          background: rgba(0,0,0,0.38);
        }
        .phone-screen {
          min-height: 610px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(13,13,13,0.98), rgba(26,26,26,0.96));
          border: 1px solid rgba(255,255,255,0.06);
          padding: 1rem;
          text-align: left;
        }
        .phone-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .phone-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 0.8rem;
          font-weight: 800;
          background: rgba(255,107,0,0.14);
          color: var(--color-accent);
        }
        .phone-title {
          color: var(--color-text);
          font-weight: 700;
        }
        .phone-subtitle {
          color: var(--color-text-muted);
          font-size: 0.84rem;
          margin-top: 0.1rem;
        }
        .chat-thread {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }
        .chat-bubble {
          max-width: 88%;
          padding: 0.95rem 1rem;
          border-radius: 18px;
          line-height: 1.6;
          font-size: 0.92rem;
        }
        .chat-bubble-user {
          margin-left: auto;
          background: rgba(255,107,0,0.14);
          color: #fff;
          border-bottom-right-radius: 6px;
        }
        .chat-bubble-agent {
          background: rgba(255,255,255,0.06);
          color: var(--color-text);
          border-bottom-left-radius: 6px;
        }
        .memory-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
          opacity: 0;
        }
        .memory-chip {
          padding: 0.45rem 0.65rem;
          border-radius: 999px;
          background: rgba(74,222,128,0.12);
          border: 1px solid rgba(74,222,128,0.22);
          color: #baf5cc;
          font-size: 0.76rem;
          font-weight: 600;
        }
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.65rem;
          margin-bottom: 1rem;
          opacity: 0;
        }
        .tool-card {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 0.8rem;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          color: var(--color-text);
          font-size: 0.84rem;
        }
        .background-panel,
        .result-panel {
          padding: 0.9rem 1rem;
          border-radius: 18px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          color: var(--color-text);
          opacity: 0;
        }
        .background-panel {
          margin-bottom: 1rem;
        }
        .background-panel-row {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.88rem;
        }
        .background-panel-row + .background-panel-row {
          margin-top: 0.65rem;
        }
        .background-panel-live {
          color: #f7d66b;
          font-weight: 600;
        }
        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f7d66b;
          box-shadow: 0 0 0 6px rgba(247,214,107,0.12);
        }
        .result-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.35rem 0.65rem;
          border-radius: 999px;
          background: rgba(244,114,182,0.12);
          color: #f9aed4;
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }
        .result-panel ul {
          margin: 0;
          padding-left: 1.1rem;
          color: var(--color-text-muted);
          line-height: 1.8;
          font-size: 0.9rem;
        }
        .orbit-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.85rem 1rem;
          border-radius: 18px;
          background: rgba(14,14,14,0.82);
          border: 1px solid rgba(255,255,255,0.09);
          box-shadow: 0 18px 50px rgba(0,0,0,0.25);
          backdrop-filter: blur(12px);
          color: var(--color-text-muted);
          min-width: 180px;
          opacity: 0;
        }
        .orbit-card strong {
          display: block;
          color: var(--color-text);
          font-size: 0.88rem;
          margin-bottom: 0.05rem;
        }
        .orbit-card span {
          font-size: 0.76rem;
        }
        .orbit-card-left {
          left: 0;
          top: 14%;
        }
        .orbit-card-right {
          right: 0;
          top: 24%;
        }
        .orbit-card-bottom {
          right: 8%;
          bottom: 4%;
        }
        @media (min-width: 1024px) {
          .story-layout {
            grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
            align-items: start;
            gap: 3rem;
          }
        }
        @media (max-width: 1023px) {
          .story-layout {
            gap: 1rem;
          }
          .story-visual-column {
            order: -1;
          }
          .story-visual-sticky {
            top: 4.5rem;
          }
          .phone-stage {
            min-height: 620px;
          }
          .story-step {
            min-height: 52vh;
          }
        }
        @media (max-width: 767px) {
          #what-is {
            padding: 4rem 1rem !important;
          }
          .story-step {
            min-height: 42vh;
          }
          .story-step-inner {
            padding: 1.25rem 1.1rem 1.25rem 1.8rem;
          }
          .story-visual-sticky {
            top: 4rem;
          }
          .phone-stage {
            min-height: 560px;
            padding-bottom: 2rem;
          }
          .phone-shell {
            width: min(100%, 340px);
          }
          .phone-screen {
            min-height: 560px;
          }
          .orbit-card {
            min-width: 150px;
            padding: 0.7rem 0.85rem;
          }
          .orbit-card-left {
            left: 0.25rem;
            top: 11%;
          }
          .orbit-card-right {
            right: 0.25rem;
            top: 22%;
          }
          .orbit-card-bottom {
            right: 0.7rem;
            bottom: 2%;
          }
        }
      `}</style>
    </section>
  );
}

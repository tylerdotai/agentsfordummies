"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monitor, Cpu, HardDrive, Wifi } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    tier: "Minimum",
    icon: Monitor,
    specs: [
      "8 GB RAM",
      "Integrated graphics (GPU not required for text-only models)",
      "20 GB free disk space",
      "macOS, Windows, or Linux",
    ],
    note: "Suitable for running smaller open-source models (Llama 3.2 1B, Phi-3 Mini). Basic tasks only.",
    price: "~$0 extra (use your existing PC)",
  },
  {
    tier: "Recommended",
    icon: Cpu,
    specs: [
      "16 GB RAM",
      "GPU with 6–8 GB VRAM (NVIDIA RTX 3060 / 4060 or equivalent)",
      "50 GB free disk space (NVMe SSD preferred)",
      "macOS, Windows, or Linux",
    ],
    note: "Run powerful models like Llama 3.1 8B, Mistral 7B, or Qwen 2.5 comfortably. Handles most agent tasks.",
    price: "~$600–900 to upgrade or add a GPU",
  },
  {
    tier: "Power User",
    icon: HardDrive,
    specs: [
      "32 GB RAM",
      "GPU with 12–24 GB VRAM (NVIDIA RTX 3090 / 4090, A100, or similar)",
      "100 GB+ NVMe SSD",
      "Linux (for best driver support)",
    ],
    note: "Run the largest open models (Llama 3.1 70B, Mistral Large). Multi-agent workflows, complex reasoning, and local fine-tuning.",
    price: "~$2,000–10,000+",
  },
];

export function SetupLocalSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        section.querySelectorAll(".local-tier"),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="setup-local"
      style={{
        padding: "var(--spacing-section) 1.5rem",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              color: "var(--color-text)",
            }}
          >
            Setup on Your PC
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--color-text-muted)",
              maxWidth: "700px",
              marginBottom: "1.5rem",
            }}
          >
            Want full control and no recurring fees? Run agents entirely on your
            own hardware. Here&#39;s what you need.
          </p>

          <div
            style={{
              padding: "1.25rem 1.5rem",
              background: "rgba(107, 143, 173, 0.1)",
              border: "1px solid rgba(107, 143, 173, 0.3)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
            }}
          >
            <Wifi
              size={20}
              color="var(--color-accent)"
              style={{ marginTop: "2px", flexShrink: 0 }}
            />
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--color-text)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              <strong>You don&#39;t need the internet</strong> to run a local agent
              once it&#39;s installed. After initial download, everything runs
              offline on your machine. Your data never leaves your computer.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.tier}
              className="local-tier"
              style={{
                padding: "2rem",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <tier.icon size={24} color="var(--color-accent)" />
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      margin: 0,
                    }}
                  >
                    {tier.tier}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {tier.price}
                  </span>
                </div>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {tier.specs.map((spec) => (
                  <li
                    key={spec}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.9rem",
                      color: "var(--color-text)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--color-accent)",
                        flexShrink: 0,
                      }}
                    />
                    {spec}
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-text-muted)",
                  margin: 0,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                {tier.note}
              </p>
            </div>
          ))}
        </div>

        {/* Quick setup steps */}
        <div
          style={{
            padding: "2.5rem",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              color: "var(--color-text)",
            }}
          >
            Quick Setup Steps
          </h3>

          <ol
            style={{
              paddingLeft: "1.5rem",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              "Download **Ollama** from [ollama.com](https://ollama.com) — it's the tool that runs AI models on your computer.",
              "Open terminal and run: `ollama pull llama3.2` (or `mistral`, `qwen2.5` — your choice). First download takes 5–20 minutes depending on model size.",
              "Download **OpenClaw** from [openclaw.ai](https://openclaw.ai) for your OS.",
              "Launch OpenClaw, choose 'Connect to local model', and point it at your running Ollama instance.",
              "You're running. Start a conversation and watch it work.",
            ].map((step, i) => (
              <li
                key={i}
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text)",
                  lineHeight: 1.7,
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    marginRight: "0.5rem",
                  }}
                >
                  {i + 1}.
                </span>
                <span dangerouslySetInnerHTML={{ __html: step.replace(/\*\*/g, "") }} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

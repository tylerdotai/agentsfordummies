"use client";

import { Twitter, Github, Linkedin, Globe } from "lucide-react";

const socials = [
  {
    name: "X (Twitter)",
    href: "https://x.com/tylerdotai",
    icon: Twitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/tylerdotai",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/tylerpdelano",
    icon: Linkedin,
  },
  {
    name: "Website",
    href: "https://flumeusa.com",
    icon: Globe,
  },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border)",
        padding: "3rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <nav aria-label="Social links">
          <ul
            style={{
              display: "flex",
              gap: "1.5rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    color: "var(--color-text-muted)",
                    transition: "color var(--transition-fast)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--color-text-muted)";
                  }}
                >
                  <social.icon size={22} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.875rem",
            margin: 0,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Agents for Dummies. Built to help
          humans understand AI agents.
        </p>
      </div>
    </footer>
  );
}

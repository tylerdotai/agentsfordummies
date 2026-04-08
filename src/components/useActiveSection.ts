"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = ["hero", "what-is", "why-care", "setup-cloud", "use-cases", "resources"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
          onUpdate: (self) => {
            setSectionProgress((prev) => ({ ...prev, [id]: self.progress }));
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return { activeSection, sectionProgress };
}

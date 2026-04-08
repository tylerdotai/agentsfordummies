"use client";

import { useState } from "react";
import { ScrollTrigger, useGSAP } from "@/lib/gsap";

const sections = ["hero", "what-is", "why-care", "setup-cloud", "use-cases", "resources"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});

  useGSAP(() => {
    const triggers = sections
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;

        return ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
          onUpdate: (self) => {
            setSectionProgress((prev) => ({ ...prev, [id]: self.progress }));
          },
        });
      })
      .filter(Boolean);

    return () => {
      triggers.forEach((trigger) => trigger?.kill());
    };
  });

  return { activeSection, sectionProgress };
}

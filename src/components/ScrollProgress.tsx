"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion, useGSAP } from "@/lib/gsap";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!barRef.current) return;

    if (prefersReducedMotion()) {
      gsap.set(barRef.current, { scaleX: 1, transformOrigin: "left center" });
      return;
    }

    gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left center" });

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          gsap.set(barRef.current, { scaleX: self.progress });
        },
      });
    });

    return () => mm.revert();
  });

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}

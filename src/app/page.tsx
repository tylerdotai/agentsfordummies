"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/HeroSection";
import { WhatIsSection } from "@/components/WhatIsSection";
import { WhyCareSection } from "@/components/WhyCareSection";
import { SetupCloudSection } from "@/components/SetupCloudSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { ResourcesSection } from "@/components/ResourcesSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global scroll-based intro animations are handled per-section
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <HeroSection />
      <WhatIsSection />
      <WhyCareSection />
      <SetupCloudSection />
      <UseCasesSection />
      <ResourcesSection />
    </div>
  );
}

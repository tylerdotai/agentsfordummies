"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { WhatIsSection } from "@/components/WhatIsSection";
import { WhyCareSection } from "@/components/WhyCareSection";
import { SetupCloudSection } from "@/components/SetupCloudSection";
import { SetupLocalSection } from "@/components/SetupLocalSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // GSAP scroll-triggered animations
    const ctx = gsap.context(() => {
      // Hero animations are handled internally
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <HeroSection />
      <WhatIsSection />
      <WhyCareSection />
      <SetupCloudSection />
      <SetupLocalSection />
      <UseCasesSection />
      <ResourcesSection />
    </div>
  );
}

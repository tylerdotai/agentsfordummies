"use client";

import { HeroSection } from "@/components/HeroSection";
import { WhatIsSection } from "@/components/WhatIsSection";
import { WhyCareSection } from "@/components/WhyCareSection";
import { SetupCloudSection } from "@/components/SetupCloudSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { ResourcesSection } from "@/components/ResourcesSection";

export default function Home() {
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

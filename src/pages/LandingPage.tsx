import { AudienceSection } from "../components/AudienceSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { ProblemSection } from "../components/ProblemSection";
import { TrustSection } from "../components/TrustSection";
import { Waitlist } from "../components/Waitlist";

export function LandingPage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorks />
      <AudienceSection />
      <TrustSection />
      <Waitlist />
    </>
  );
}


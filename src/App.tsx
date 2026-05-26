import { AudienceSection } from "./components/AudienceSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ProblemSection } from "./components/ProblemSection";
import { TrustSection } from "./components/TrustSection";
import { Waitlist } from "./components/Waitlist";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorks />
        <AudienceSection />
        <TrustSection />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

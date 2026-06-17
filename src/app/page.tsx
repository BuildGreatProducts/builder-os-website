import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BuildOnAutopilot from "@/components/BuildOnAutopilot";
import SkillsSection from "@/components/SkillsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <BuildOnAutopilot />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}

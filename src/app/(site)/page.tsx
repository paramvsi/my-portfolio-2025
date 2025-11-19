import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturedWork />
        <SkillsSection />
        <AboutPreview />
        <ContactCTA />
      </main>
    </>
  );
}

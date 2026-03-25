import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <SkillsSection />
        <FeaturedWork />
      </main>
      <Footer />
    </>
  );
}

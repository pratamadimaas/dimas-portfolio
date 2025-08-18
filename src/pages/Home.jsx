import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { AboutSection } from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { GradientBackground } from "../components/GradientBackground"; // sudah diperbaiki typo
import Orb from "../components/Orb/Orb";
import { HeroSection } from "../components/HeroSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Gradient Background - Full page background */}
      <div className="absolute inset-0 z-0">
        <GradientBackground />
      </div>

      {/* Theme Toggle */}
      <div className="relative z-30">
        <ThemeToggle />
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero + Orb Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center z-5">
        {/* Orb Background */}
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />

        {/* Hero Text */}
        <div className="absolute text-center px-4 z-15">
          <HeroSection />
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-15">
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <div className="relative z-15">
        <Footer />
      </div>
    </div>
  );
};
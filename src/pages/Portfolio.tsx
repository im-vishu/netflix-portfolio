import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProfilesSection from "@/components/ProfilesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Portfolio = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProfilesSection />
    <ProjectsSection />
    <ExperienceSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
    <footer className="border-t border-border bg-background px-6 py-8 text-center text-sm text-muted-foreground">
      © 2026 Vishant Chaudhary. All rights reserved.
    </footer>
  </div>
);

export default Portfolio;

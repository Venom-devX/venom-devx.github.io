import { Navbar } from "@/components/navbar";
import { AnimatedBackground } from "@/components/animated-background";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { BlogSection } from "@/components/sections/blog";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}

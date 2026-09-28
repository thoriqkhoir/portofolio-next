import PortfolioLayout from "@/components/layouts/PortfolioLayout";
import HeroSection from "@/components/sections/Hero-Section";
import IntroSection from "@/components/sections/Intro-Section";
import WorkSection from "@/components/sections/Portfolio-Section";
import SelfDescription from "@/components/sections/SelfDescription";
import AboutSection from "@/components/sections/About-Section";
import ExperienceSection from "@/components/sections/Experience-Section";
import StackSection from "@/components/sections/Stack-Section";
import ContactSection from "@/components/sections/Contact-Section";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <PortfolioLayout>
      <HeroSection />
      <div
        id="content-wrapper"
        style={{
          position: "relative",
          zIndex: 10,
          background: "var(--bg)",
        }}
      >
        <IntroSection />
        <WorkSection />
        <SelfDescription />
        <AboutSection />
        <ExperienceSection />
        <StackSection />
        <ContactSection />
        <Footer />
      </div>
    </PortfolioLayout>
  );
}

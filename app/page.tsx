import PortfolioLayout from "@/components/layouts/PortfolioLayout";
import HeroSection from "@/sections/Hero-Section";
import About from "@/sections/About-Section";
import Portfolio from "@/sections/Portfolio-Section";
import Contact from "@/sections/Contact-Section";
import FloatingLines from "@/components/bits/FloatingLine";
import Footer from "@/components/layouts/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PortfolioLayout>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <FloatingLines
          linesGradient={['#8b5cf6', '#3b82f6', '#06b6d4']}
          animationSpeed={1}
          interactive={true}
          parallax={true}
          mixBlendMode="normal"
        />
      </div>
      <HeroSection />
      
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </PortfolioLayout>
  );
}

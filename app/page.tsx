import PortfolioLayout from "@/components/layouts/PortfolioLayout";
import HeroSection from "@/sections/Hero-Section";
import About from "@/sections/About-Section";
import Portfolio from "@/sections/Portfolio-Section";
import Contact from "@/sections/Contact-Section";
import FloatingLines from "@/components/bits/FloatingLine";
import Footer from "@/components/layouts/Footer";
import { motion } from "framer-motion";
import LightRays from "@/components/LightRays";

export default function Home() {
  return (
    <PortfolioLayout>
      <div className="fixed inset-0 -z-10 pointer-events-none bg-black">
        <LightRays
            raysOrigin="top-center"
            raysColor="#dc06f9"
            raysSpeed={1}
            lightSpread={0.8}
            rayLength={8}
            followMouse={true}
            mouseInfluence={0.4}
            noiseAmount={0.5}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
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

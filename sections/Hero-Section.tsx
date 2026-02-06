"use client"

import SplitText from "@/components/bits/SplitText";
import ProfileCard from "@/components/bits/ProfileCard";
import { useRef } from "react";
import VariableProximity from "@/components/bits/VariableProximity";
import { motion } from "framer-motion";


export default function HeroSection() {
  const containerRef = useRef(null);
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center mt-24">
      <div className="space-y-2 sm:space-y-4 text-left pl-0 sm:pl-8" ref={containerRef} style={{position: 'relative'}}>
        <SplitText
          text="Hi, I'm Thoriq Khoir"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          splitType="chars"
        />
        <SplitText
          text="Full Stack Web Developer"
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-500"
          splitType="words"
        />
        <div className="mt-2 sm:mt-12">
          <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <VariableProximity
            label={"Passionate about creating beautiful, functional, and user-friendly applications using modern technologies like React, Laravel, and TypeScript."}
            className="text-sm sm:text-base md:text-lg text-white max-w-2xl text-justify"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
          </motion.div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start mt-8">
          <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <button
              type="button"
              className="w-full sm:w-auto bg-white text-purple-300 hover:bg-purple-100 hover:scale-110 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-transform duration-200 text-sm sm:text-base"
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
            </button>

      </motion.div>
      <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <button
              type="button"
              className="w-full sm:w-auto backdrop-blur-md bg-white/10 font-bold text-white dark:bg-black/20 border border-white/20 dark:border-white/10 px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:scale-110 transition-transform duration-200 text-sm sm:text-base"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </button>
            </motion.div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-center mt-8 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
        <ProfileCard
          name="Thoriq Khoir"
          title="Full Stack Developer"
          handle="thoriqkhoir"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/assets/images/photo2.jpeg"
          showUserInfo
          enableTilt={true}
          enableMobileTilt
          onContactClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          behindGlowEnabled={true}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </motion.div>
      </div>
    </div>
    </section>
  );

}
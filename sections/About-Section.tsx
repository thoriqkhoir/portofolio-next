"use client";


import ScrollFloat from "@/components/bits/ScrollFloat";
import SplashCursor from "@/components/bits/SplashCursor";
import VariableProximity from "@/components/bits/VariableProximity";
import GitHubCalendar from "@/components/GithubCalendar";

import { useRef } from "react";

export default function AboutSection() {
  const containerRef = useRef<HTMLParagraphElement>(null);

  return (
    <section id="about" className="min-h-screen py-12 sm:py-20" >
     
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            <ScrollFloat
              animationDuration={2}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              About Me
            </ScrollFloat>
          </h2>
          
          <p className="text-lg sm:text-xl text-purple-300">
            Get to know more about my background and skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              My Journey
            </h3>
            <p className="text-sm sm:text-base text-white leading-relaxed" ref={containerRef} style={{position: 'relative'}} >
            <VariableProximity
              label={"I'm a passionate full-stack developer with experience in building modern web applications. I love solving complex problems and creating elegant solutions that provide great user experiences."}
              className="text-sm sm:text-base md:text-lg text-white max-w-2xl"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
            </p>
            
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600">1+</div>
                <div className="text-sm text-white">Years Experience</div>
              </div>
              <div className="text-center p-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600">10+</div>
                <div className="text-sm text-white">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Skills & Technologies
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Inertia.js'].map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'Redis'].map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'AWS', 'Figma', 'VS Code'].map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-xl bg-white/10 mt-8 text-white flex items-center justify-center py-4 rounded-lg px-2 sm:px-4 overflow-x-auto">
          <GitHubCalendar />
        </div>
      </div>
    </section>
  );
}
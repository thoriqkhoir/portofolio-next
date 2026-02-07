"use client"
import { useEffect, useMemo, useState } from "react";
import ChromaGrid, { ChromaItem } from "@/components/bits/ChromaGrid";
import Magnet from "@/components/bits/Magnet";
import ScrollFloat from "@/components/bits/ScrollFloat";
export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const update = () => setIsSmallScreen(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const projects = [
  {
    id: 1,
    title: "SmartPPA",
    description: "Web-based application for managing pre-wedding rules at kabupaten Malang.",
    technologies: ["Laravel", "React", "Inertia", "API", "Tailwind"],
    image: "/assets/images/smartppa.webp",
    github: "#",
    live: "https://smartppa.malangkab.go.id/"
  },
  {
    id: 2,
    title: "TaxLearning.id",
    description: "Web-based application for online tax education and training.",
    technologies: ["Laravel", "React", "Inertia", "Tailwind"],
    image: "/assets/images/taxlearning.webp",
    github: "#",
    live: "https://taxlearning.id/"
  },
  {
    id: 3,
    title: "SmartCounting",
    description: "Web-based application for counting and management education",
    technologies: ["Laravel", "React", "Payment Gateway", "Tailwind"],
    image: "/assets/images/smartcounting.webp",
    github: "#",
    live: "https://smartcounting.id/"
  },
  {
    id: 4,
    title: "Biinspirainstitute",
    description: "Web-based application for finance education.",
    technologies: ["WordPress", "Payment Gateway", "Tailwind"],
    image: "/assets/images/biinspira.webp",
    github: "#",
    live: "https://biinspirainstitute.com/"
  },
  {
    id: 5,
    title: "Aksademy.id",
    description: "Web-based application for online education and training.",
    technologies: ["Laravel", "React", "Inertia", "Payment Gateway", "Tailwind"],
    image: "/assets/images/aksademy.webp",
    github: "#",
    live: "https://aksademy.id/"
  },
  {
    id: 6,
    title: "Skillgrow.id",
    description: "Web-based application for skill development and growth.",
    technologies: ["Laravel", "React", "Inertia", "Payment Gateway", "Tailwind"],
    image: "/assets/images/skillgrow.webp",
    github: "#",
    live: "https://skillgrow.id/"
  },
  {
    id: 7,
    title: "Sekolahpajak.id",
    description: "Web-based application for tax education and training.",
    technologies: ["Laravel", "React", "Inertia", "Payment Gateway", "Tailwind"],
    image: "/assets/images/sekolahpajak.webp",
    github: "#",
    live: "https://sekolahpajak.id/"
  },
  {
    id: 8,
    title: "Talenta.id",
    description: "Web-based application for talent development and management.",
    technologies: ["Laravel", "React", "Inertia", "Payment Gateway", "Tailwind"],
    image: "/assets/images/talenta.webp",
    github: "#",
    live: "https://talentaedu.id/"
  },
  {
    id: 9,
    title: "Ppppmi.id",
    description: "landingpage for Indonesian tax professional association.",
    technologies: ["Laravel", "React", "Tailwind"],
    image: "/assets/images/p4mi.webp",
    github: "#",
    live: "https://ppppmi.id/"
  },
  {
    id: 10,
    title: "Lpkppi",
    description: "landingpage for LPKPPI training center.",
    technologies: ["Next.js", "Tailwind"],
    image: "/assets/images/lpkppi.webp",
    github: "#",
    live: "https://lpkppi.vercel.app/"
  },
  {
    id: 11,
    title: "Taxmateschool",
    description: "web-based application for Tax education in seniors high school levels.",
    technologies: ["Laravel", "React", "Inertia", "Tailwind"],
    image: "/assets/images/taxmateschool.webp",
    github: "#",
    live: "https://taxmateschool.id/"
  },
  {
    id: 12,
    title: "ArsaCendikia",
    description: "web-based application for online education",
    technologies: ["Laravel", "React", "Inertia", "Payment Gateway", "Tailwind"],
    image: "/assets/images/arsacendikia.webp",
    github: "#",
    live: "https://arsacendekia.com/"
  }

  

];

  const visibleProjects = useMemo(
    () => (isSmallScreen && !showAll ? projects.slice(0, 4) : projects),
    [isSmallScreen, showAll, projects]
  );

  const chromaItems: ChromaItem[] = visibleProjects.map((project) => ({
      image: project.image,
      title: project.title,
      subtitle: project.description,
      handle: project.technologies.join(', '),
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
      url: project.live
    }));

  return (
    <section id="portfolio" className="min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            <ScrollFloat
              animationDuration={2}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              My Portfolio
            </ScrollFloat>
          </h2>
          <p className="text-lg sm:text-xl text-purple-300">
            Here are some of the projects I've worked on
          </p>
        </div>

        <ChromaGrid 
          items={chromaItems}
          radius={350}
          damping={0.5}
          fadeOut={0.7}
          className="min-h-[600px]"
        />

        
        {isSmallScreen && !showAll && (
          <div className="text-center mt-8 sm:mt-12">
            <Magnet padding={300} disabled={false} magnetStrength={10}>
            <button
              type="button"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
              onClick={() => setShowAll(true)}
            >
              View All Projects
            </button>
            </Magnet>
          </div>
        )}
      
      </div>
    </section>
  );
}
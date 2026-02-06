"use client"
import ChromaGrid, { ChromaItem } from "@/components/bits/ChromaGrid";
import Magnet from "@/components/bits/Magnet";
import ScrollFloat from "@/components/bits/ScrollFloat";
export default function PortfolioSection() {
  const projects = [
  {
    id: 1,
    title: "SmartPPA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["Laravel", "React", "Inertia", "API", "Tailwind"],
    image: "/assets/images/smartppa.png",
    github: "#",
    live: "https://smartppa.malangkab.go.id/"
  },
  {
    id: 2,
    title: "TaxLearning.id",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["Laravel", "React", "Inertia", "Tailwind"],
    image: "/assets/images/taxlearning.png",
    github: "#",
    live: "https://taxlearning.id/"
  },
  {
    id: 3,
    title: "SmartCounting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["Laravel", "React", "Payment Gateway", "Tailwind"],
    image: "/assets/images/smartcounting.png",
    github: "#",
    live: "https://smartcounting.id/"
  },
  {
    id: 4,
    title: "Biinspirainstitute",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["WordPress", "Payment Gateway", "Tailwind"],
    image: "/assets/images/biinspira.png",
    github: "#",
    live: "https://biinspirainstitute.com/"
  },
  {
    id: 5,
    title: "Aksademy.id",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["Laravel", "React", "Inertia", "Payment Gateway", "Tailwind"],
    image: "/assets/images/aksademy.png",
    github: "#",
    live: "https://aksademy.id/"
  },
  {
    id: 6,
    title: "Skillgrow.id",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["Laravel", "React", "Inertia", "Payment Gateway", "Tailwind"],
    image: "/assets/images/skillgrow.png",
    github: "#",
    live: "https://skillgrow.id/"
  },
  {
    id: 7,
    title: "Sekolahpajak.id",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["Laravel", "React", "Inertia", "Payment Gateway", "Tailwind"],
    image: "/assets/images/sekolahpajak.png",
    github: "#",
    live: "https://sekolahpajak.id/"
  },
  {
    id: 8,
    title: "Talenta.id",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["Laravel", "React", "Inertia", "Payment Gateway", "Tailwind"],
    image: "/assets/images/talenta.png",
    github: "#",
    live: "https://talentaedu.id/"
  },
  {
    id: 9,
    title: "Ppppmi.id",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["Laravel", "React", "Tailwind"],
    image: "/assets/images/p4mi.png",
    github: "#",
    live: "https://ppppmi.id/"
  },
  {
    id: 10,
    title: "Lpkppi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["Next.js", "Tailwind"],
    image: "/assets/images/lpkppi.png",
    github: "#",
    live: "https://lpkppi.vercel.app/"
  },
  {
    id: 11,
    title: "Taxmateschool",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["Laravel", "React", "Inertia", "Tailwind"],
    image: "/assets/images/taxmateschool.png",
    github: "#",
    live: "https://taxmateschool.id/"
  },
  {
    id: 12,
    title: "ArsaCendikia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["Laravel", "React", "Inertia", "Payment Gateway", "Tailwind"],
    image: "/assets/images/arsacendikia.png",
    github: "#",
    live: "https://arsacendekia.com/"
  }

  

];

const chromaItems: ChromaItem[] = projects.map((project) => ({
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

        
        <div className="text-center mt-8 sm:mt-12">
          <Magnet padding={300} disabled={false} magnetStrength={10}>
          <button
            type="button"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
            onClick={() => alert('Semua project sudah ditampilkan.')}
          >
            View All Projects
          </button>
          </Magnet>
        </div>
      
      </div>
    </section>
  );
}
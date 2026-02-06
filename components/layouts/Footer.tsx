"use client";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-white">Thoriq Khoir</p>
            <p className="text-sm text-white/70">
              Full Stack Web Developer focused on crafting fast, accessible, and delightful web experiences.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200"
            >
              Let’s collaborate →
            </a>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Explore</p>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <a className="hover:text-white" href="#hero">
                Home
              </a>
              <a className="hover:text-white" href="#about">
                About
              </a>
              <a className="hover:text-white" href="#portfolio">
                Portfolio
              </a>
              <a className="hover:text-white" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Socials</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                className="rounded-full border border-white/15 px-4 py-1 text-white/80 hover:border-white/30 hover:text-white"
                href="https://github.com/thoriqkhoir"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-full border border-white/15 px-4 py-1 text-white/80 hover:border-white/30 hover:text-white"
                href="https://www.linkedin.com/in/thoriqkhoir"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-full border border-white/15 px-4 py-1 text-white/80 hover:border-white/30 hover:text-white"
                href="mailto:thoriqkhoir537@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Thoriq Khoir. Built with Next.js.</p>
          <a className="hover:text-white" href="#hero">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

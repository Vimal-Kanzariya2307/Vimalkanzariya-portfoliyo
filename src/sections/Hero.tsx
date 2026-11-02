import { ArrowRight, Download, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/socials';
import { CodeEditorHero } from '../components/CodeEditorHero';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const techStack = ['JavaScript', 'React.js', 'Node.js', 'Python', 'MongoDB'];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle monochrome ambient depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-zinc-400/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Availability Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-mono font-medium text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>OPEN TO INTERNSHIP OPPORTUNITIES</span>
            </div>

            {/* Main Headline in Gray & White Harmony */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Building <span className="text-white underline decoration-zinc-600 underline-offset-8">Digital Experiences</span>.{' '}
              Solving <span className="text-zinc-400">Real-World Problems</span>.
            </h1>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl font-normal">
              I'm Vimal Kanzariya, a Web Developer and B.Sc. IT (FinTech) student passionate
              about building modern web applications, intuitive user interfaces, and practical
              technology-driven solutions.
            </p>

            {/* Supporting line */}
            <p className="text-sm sm:text-base text-zinc-400 italic border-l-2 border-zinc-700 pl-3">
              "Turning ideas into functional, user-focused digital experiences."
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all shadow-md shadow-white/10 active:scale-95 whitespace-nowrap shrink-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-white hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Technology Strip */}
            <div className="pt-4 border-t border-zinc-800">
              <span className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 font-medium">
                Core Technologies
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-300 font-medium">
                {techStack.map((tech, idx) => (
                  <span key={tech} className="flex items-center gap-2">
                    <span className="text-white font-semibold">{tech}</span>
                    {idx < techStack.length - 1 && (
                      <span className="text-zinc-600 select-none" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Workspace */}
          <div className="lg:col-span-6 w-full">
            <CodeEditorHero />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
            aria-label="Scroll to about section"
          >
            <span>Learn more about Vimal</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-zinc-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

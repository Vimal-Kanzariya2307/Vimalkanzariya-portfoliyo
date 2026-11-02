import { GraduationCap, MapPin, Target, Compass, Sparkles, BookOpen } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/socials';

export function About() {
  const learningGoals = [
    'Advanced full-stack application architecture & microservices',
    'Deepening AWS cloud fundamentals & containerized deployments',
    'Quantitative FinTech algorithms and financial time-series analysis',
  ];

  const technicalInterests = [
    'Full-Stack Web Development (React & Node.js)',
    'RESTful API Design & Secure Authentication (JWT, Bcrypt)',
    'Database Schema Modeling (MongoDB & MySQL)',
    'Financial Technology, Data Analytics & Blockchain',    
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#090B12] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="More Than Just Writing Code."
          subtitle="Understanding the intersection between engineering architecture, financial technologies, and intuitive user experiences."
          accentWord="Writing Code"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0D0F18] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white" />
                <span>The Story & Perspective</span>
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutIntro}
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed">
                My objective is to apply my programming knowledge, develop practical software
                solutions, strengthen my full-stack development skills, and contribute to a
                professional engineering team. I value structured problem decomposition, clean code
                habits, and building tools that deliver measurable everyday utility.
              </p>

              {/* Technical Interests */}
              <div className="pt-4 border-t border-zinc-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-zinc-400" />
                  <span>Technical Interests & Focus Areas</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {technicalInterests.map((interest, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Learning Goals */}
              <div className="pt-4 border-t border-zinc-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-zinc-400" />
                  <span>Current Learning Trajectory</span>
                </h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {learningGoals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white font-mono font-bold">0{idx + 1}.</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Education Card & Quick Highlights */}
          <div className="lg:col-span-5 space-y-6">
            {/* Featured Education Card */}
            <div className="bg-[#0D0F18] border border-zinc-800 rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                    Academic Standing
                  </span>
                  <span className="text-xl font-bold text-white font-mono tabular-nums">
                    7.95 <span className="text-xs text-zinc-400 font-normal">/ 10 CGPA</span>
                  </span>
                </div>
              </div>

              <h4 className="text-lg font-bold text-white mb-1">
                B.Sc. Information Technology (FinTech)
              </h4>
              <p className="text-sm font-medium text-zinc-300 mb-2">
                Marwadi University
              </p>
              <div className="flex items-center gap-3 text-xs text-zinc-400 mb-4 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Rajkot, Gujarat</span>
                </span>
                <span>·</span>
                <span>Graduation: 2027</span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed pt-3 border-t border-zinc-800">
                Specialized curriculum pairing core computer science (Data Structures, OOP in C++,
                Full-Stack Web Development) with modern financial technology concepts, quantitative
                data libraries, and blockchain fundamentals.
              </p>
            </div>

            {/* Structured Facts / Recruiter Overview */}
            <div className="bg-[#0D0F18] border border-zinc-800 rounded-2xl p-6 space-y-4 shadow-xl">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-zinc-400" />
                <span>At a Glance</span>
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <span className="text-zinc-400">Target Roles</span>
                  <span className="text-white font-semibold text-right">
                    Web Developer Intern / Junior Developer
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <span className="text-zinc-400">Primary Core Stack</span>
                  <span className="text-white font-semibold font-mono">
                    React · Node.js · Express · MongoDB
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <span className="text-zinc-400">FinTech Tools</span>
                  <span className="text-white font-semibold font-mono">
                    Python (Pandas, NumPy)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Availability</span>
                  <span className="text-white font-semibold">Immediate / Open for Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

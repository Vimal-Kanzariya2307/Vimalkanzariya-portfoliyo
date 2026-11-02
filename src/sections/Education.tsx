import { GraduationCap, Award, BookCheck, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { educationData, certificationsData } from '../data/education';

export function Education() {
  const courseworkGroups = [
    {
      domain: 'Computer Science & Full-Stack',
      courses: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (C/C++)',
        'Full-Stack Web Development (Node.js, React.js)',
      ],
    },
    {
      domain: 'Data Science & Quantitative Analytics',
      courses: [
        'Data Analysis & Visualization (Python, NumPy, Pandas)',
        'Statistical Modeling & Time-Series Data',
      ],
    },
    {
      domain: 'Specialized FinTech Domains',
      courses: [
        'Financial Technology (FinTech)',
        'Corporate Finance',
        'Blockchain Development & Smart Contracts',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 lg:py-28 bg-[#0B0D17] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Background"
          title="My Learning Journey."
          subtitle="A progressive timeline of academic foundations in information technology, financial systems, and verified certifications."
          accentWord="Learning Journey"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Timeline of Education (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-white" />
              <span>Formal Education</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-800">
              {educationData.map((item, idx) => (
                <div key={item.id} className="relative group">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-6 sm:-left-8 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      idx === 0
                        ? 'bg-white border-zinc-400 shadow-md shadow-white/20'
                        : 'bg-zinc-900 border-zinc-700'
                    }`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
                  </div>

                  <div className="bg-[#0D0F18] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 sm:p-6 transition-all shadow-xl">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </span>

                      {/* Score badge */}
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-zinc-800 border border-zinc-700 text-white tabular-nums">
                        {item.scoreLabel}: {item.scoreValue}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                      {item.degree}
                    </h4>

                    <p className="text-sm text-zinc-300 font-medium mb-1">
                      {item.institution}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-3 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{item.location}</span>
                      {item.boardOrDetails && (
                        <>
                          <span className="text-zinc-600">·</span>
                          <span>{item.boardOrDetails}</span>
                        </>
                      )}
                    </div>

                    {item.highlightCoursework && (
                      <div className="mt-4 pt-3 border-t border-zinc-800">
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                          Key Course Focus
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.highlightCoursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-0.5 text-[11px] rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Relevant Coursework (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Certifications Card */}
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-white" />
                <span>Verified Certifications</span>
              </h3>

              <div className="space-y-4">
                {certificationsData.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-5 rounded-2xl bg-[#0D0F18] border border-zinc-800 hover:border-zinc-700 transition-all space-y-2 shadow-xl"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-zinc-400 font-semibold">
                        {cert.badge}
                      </span>
                      {cert.date && (
                        <span className="text-[11px] font-mono text-zinc-500">
                          {cert.date}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-zinc-300 font-medium">
                      Issuer: <span className="text-white font-semibold">{cert.issuer}</span>
                    </p>

                    {cert.credentialNote && (
                      <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                        {cert.credentialNote}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Coursework Syllabus Map */}
            <div className="p-6 rounded-2xl bg-[#0D0F18] border border-zinc-800 space-y-4 shadow-xl">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-2">
                <BookCheck className="w-4 h-4 text-zinc-400" />
                <span>Relevant Coursework Breakdown</span>
              </h4>

              <div className="space-y-4 text-xs">
                {courseworkGroups.map((group) => (
                  <div key={group.domain} className="space-y-1.5">
                    <p className="font-semibold text-white">{group.domain}</p>
                    <div className="space-y-1">
                      {group.courses.map((c) => (
                        <div key={c} className="flex items-center gap-2 text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

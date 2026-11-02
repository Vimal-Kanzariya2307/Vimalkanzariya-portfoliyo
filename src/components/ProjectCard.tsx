import { useState } from 'react';
import { ExternalLink, Github, ChevronRight, CheckCircle2, Eye, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelectProject: (project: Project) => void;
}

export function ProjectCard({ project, index, onSelectProject }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group relative bg-[#0D0F18] border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
        {/* Media Preview Column */}
        <div
          className={`lg:col-span-7 ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div
            onClick={() => onSelectProject(project)}
            className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[16/10] cursor-pointer group/preview"
          >
            {project.image && !imageError ? (
              <img
                src={project.image}
                alt={`${project.title} Interface Preview`}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-[1.03]"
              />
            ) : (
              /* Fallback Styled Container */
              <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-[#0D0F18] to-black flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-xs text-zinc-400 max-w-sm mb-4">
                  {project.status === 'in-development'
                    ? 'Architecture and data pipeline active in development environment'
                    : project.subtitle}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-white">
                  <span>Status:</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
                    {project.status.toUpperCase()}
                  </span>
                </div>
              </div>
            )}

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/95 text-xs font-medium text-white border border-zinc-700 shadow-lg backdrop-blur-sm">
                <Eye className="w-3.5 h-3.5 text-white" />
                <span>View Project Deep-Dive</span>
              </span>
            </div>

            {/* Year / status badge in corner */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/80 backdrop-blur-md text-white border border-zinc-700">
                {project.year}
              </span>
              {project.status === 'in-development' && (
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-600 backdrop-blur-md">
                  In Development
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div>
            {/* Category without pill clutter */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
              <span>{project.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              {project.title}
            </h3>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Problem & Solution Callout */}
            <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 mb-5 text-xs text-zinc-300 space-y-2">
              <div>
                <span className="font-semibold text-white">The Problem: </span>
                <span className="text-zinc-400">{project.problemStatement}</span>
              </div>
              <div>
                <span className="font-semibold text-white">Technical Approach: </span>
                <span className="text-zinc-400">{project.solutionHighlight}</span>
              </div>
            </div>

            {/* Key implemented features */}
            <div className="mb-6 space-y-1.5">
              <p className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-mono">
                Key Highlights
              </p>
              {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Technologies list without pill enclosures */}
            <div className="mb-6">
              <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-300">
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="flex items-center gap-2">
                    <span className="text-white font-medium">{tech}</span>
                    {tIdx < project.technologies.length - 1 && (
                      <span className="text-zinc-600" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
              >
                <span>View Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            <button
              onClick={() => onSelectProject(project)}
              className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap shrink-0 ml-auto"
            >
              <span>Architecture Details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

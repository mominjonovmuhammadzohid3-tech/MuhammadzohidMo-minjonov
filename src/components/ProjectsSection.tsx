import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Layers, Cpu, Code2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#070a1d] border-t border-slate-900 tech-grid-pattern">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 tracking-wider">
              Amaliy ishlanmalar · Portfoliodan namunalar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Tanlangan Loyihalar
            </h2>
            <p className="text-base text-slate-400 leading-relaxed mt-3">
              Mikrokontrollerlar, avtomatlashtirish, STEM ta'lim platformalari va IoT datchiklariga asoslangan 3 ta asosiy muhandislik ishim.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            Jami ko'rsatilgan: <span className="text-cyan-400 font-bold">03 ta asosiy loyiha</span>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/30 overflow-hidden"
            >
              
              {/* Media frame with aspect-ratio 4:3 */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Tech overlay tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                {/* Category kicker */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                    {project.category}
                  </span>
                </div>

                {/* Index tag */}
                <div className="absolute top-3 right-3 text-xs font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                  0{idx + 1}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-purple-300 font-mono mt-1 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack pills & trigger button */}
                <div className="pt-5 mt-5 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/50 text-slate-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-cyan-600 rounded-xl border border-slate-700 hover:border-cyan-500 transition-colors"
                  >
                    <span>Batafsil ma'lumot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Modal for detailed view */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

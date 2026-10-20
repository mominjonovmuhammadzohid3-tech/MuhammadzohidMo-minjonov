import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0c1024] border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header Media Frame */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024] via-[#0c1024]/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
            aria-label="Yopish"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and category overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono text-cyan-400">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Metrics strip */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-lg sm:text-xl font-bold font-mono text-cyan-300 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Loyiha haqida batafsil
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.fullDetails}
            </p>
          </div>

          {/* Hardware & Components */}
          {project.hardwareOrComponents && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Qurilmalar va komponentlar
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.hardwareOrComponents.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Ishlatilgan texnologiyalar
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-slate-800 border border-cyan-500/20 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Muallif: Muhammadzohid Mo'minjonov
            </span>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-colors"
              >
                Loyiha bo'yicha bog'lanish
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Yopish
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

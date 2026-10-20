import React, { useState } from 'react';
import { Code, Bot, Cpu, Atom, Users, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS_DATA[0]);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return Code;
      case 'bot':
        return Bot;
      case 'cpu':
        return Cpu;
      case 'atom':
        return Atom;
      case 'users':
        return Users;
      default:
        return Layers;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#060814] tech-dot-grid border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <span className="text-xs font-mono text-cyan-400 tracking-wider">
            Texnik imkoniyatlar · Kompetensiyalar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Ko’nikmalar va Yo’nalishlar
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mt-4">
            Dasturlash, robototexnika, apparat muhandisligi, fundamental fan va yoshlarga ta'lim berish bo'yicha shakllangan amaliy ko'nikmalarim majmuasi.
          </p>
        </div>

        {/* 2-Column interactive skills architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Skill progress bars list */}
          <div className="lg:col-span-6 space-y-4">
            {SKILLS_DATA.map((skill) => {
              const Icon = getSkillIcon(skill.icon);
              const isSelected = selectedSkill.id === skill.id;

              return (
                <div
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedSkill(skill);
                    }
                  }}
                  aria-label={`${skill.name} ko'nikmasi tafsilotlarini ko'rish`}
                >
                  <div className="flex items-center justify-between gap-4 mb-2.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className={`text-base font-bold transition-colors ${
                          isSelected ? 'text-cyan-300' : 'text-white'
                        }`}>
                          {skill.name}
                        </h3>
                        <p className="text-xs text-slate-500 hidden sm:block">
                          {skill.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-bold text-slate-200 tabular-nums">
                        {skill.percentage}%
                      </span>
                      <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${
                        isSelected ? 'rotate-90 text-cyan-400' : ''
                      }`} />
                    </div>
                  </div>

                  {/* High-tech Progress Line */}
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden relative">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        isSelected
                          ? 'bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500'
                          : 'bg-gradient-to-r from-slate-600 to-slate-500'
                      }`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-dive inspector for the selected skill */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-cyan-500/30 shadow-xl shadow-cyan-950/20 relative overflow-hidden">
              
              {/* Corner decorative tech accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none" />
              <div className="absolute top-3 right-3 text-xs font-mono text-cyan-500/60">
                ACTIVE_MODULE // 0{SKILLS_DATA.findIndex(s => s.id === selectedSkill.id) + 1}
              </div>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  {React.createElement(getSkillIcon(selectedSkill.icon), { className: 'w-6 h-6' })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedSkill.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono mt-0.5">
                    <span>O'zlashtirish: {selectedSkill.percentage}%</span>
                    <span>·</span>
                    <span>Amaliy tajriba</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedSkill.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Asosiy amaliy imkoniyatlar:
                </h4>
                <div className="space-y-2.5">
                  {selectedSkill.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies list (clean tags with good contrast) */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Qo'llaniladigan vositalar & texnologiyalar:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

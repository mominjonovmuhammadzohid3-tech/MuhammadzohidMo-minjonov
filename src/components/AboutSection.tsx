import React from 'react';
import { Cpu, Code, BookOpen, Atom, Lightbulb, Compass, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "Robototexnika va Muhandislik",
      description: "Mikrokontrollerlar, nozik servomotorlar, sensorlar va maxsus elektron platalar yordamida harakatlanuvchi robot prototiplarini noldan loyihalayman."
    },
    {
      icon: Code,
      title: "Dasturlash va Algoritmlar",
      description: "C++ va Arduino vositasida apparat qismlarini boshqarish bilan birga, Python hamda zamonaviy veb-texnologiyalar bilan foydalanuvchiga qulay tizimlar yarataman."
    },
    {
      icon: BookOpen,
      title: "O'qituvchilik va Mentorlik",
      description: "15 yoshimdayoq yosh qiziquvchilarga robototexnika va dasturlash asoslarini o'rgatib, amaliy laboratoriyalar orqali ularni ixtirochilikka yo'naltirmoqdaman."
    },
    {
      icon: Atom,
      title: "Fan va Texnologiya Qiziqishi",
      description: "Fizika, elektronika va matematik modellashtirishning fundamental tamoyillarini o'rganib, ularni hayotiy innovatsion loyihalarda qo'llashga intilaman."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-slate-900 bg-[#070a1a]">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <span className="text-xs font-mono text-cyan-400 tracking-wider">
            Tanishuv · Yosh muhandis profili
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Men haqimda
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mt-4">
            {PERSONAL_INFO.aboutText}
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mt-3">
            {PERSONAL_INFO.secondaryAbout}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 group-hover:border-cyan-400/50 transition-colors mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote & Philosophy banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-slate-900/60 border border-cyan-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-xs font-mono text-purple-400">Shaxsiy shior & falsafa</span>
            <p className="text-lg sm:text-xl font-medium text-slate-200 italic">
              "Yosh bo'lish — bu cheklov emas, balki eng katta ustunlikdir. Bugun yaratgan har bir apparatimiz ertangi kun taraqqiyotining asosidir."
            </p>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-sm font-semibold text-white block">Muhammadzohid Mo'minjonov</span>
            <span className="text-xs text-cyan-400 font-mono">15 yoshli muhandis & ustoz</span>
          </div>
        </div>

      </div>
    </section>
  );
};

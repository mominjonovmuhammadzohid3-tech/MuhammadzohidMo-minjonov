import React, { useState } from 'react';
import { ArrowRight, Terminal, User, Sparkles, Cpu, Mail } from 'lucide-react';
import { PERSONAL_INFO, KEY_METRICS } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden tech-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-screen Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Clean kicker text */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>15 yoshli muhandis & texnologiya ixlosmandi</span>
            </div>

            {/* Oversized primary headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white" style={{ textWrap: 'balance' }}>
                Muhammadzohid{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                  Mo’minjonov
                </span>
              </h1>
              
              {/* Secondary role headline required by user */}
              <p className="text-lg sm:text-xl font-semibold text-slate-300 tracking-wide">
                Yosh muhandis • Robototexnika • Dasturchi • O’qituvchi
              </p>
            </div>

            {/* Concise introductory lead sentence */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.tagline} Amaliy robototexnika, mikrokontrollerlar, zamonaviy dasturlash va yoshlarga STEM ta'limi berish orqali g'oyalarni real loyihalarga aylantiraman.
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#about"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all shadow-md hover:shadow-cyan-500/10 active:scale-95"
              >
                <User className="w-4 h-4 text-cyan-400" />
                <span>Men haqimda</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-95"
              >
                <span>Bog’lanish</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>Loyihalarni ko’rish</span>
                <span className="text-cyan-400 font-mono text-xs">→</span>
              </a>
            </div>

            {/* Quick tech capability tags */}
            <div className="flex items-center gap-3 pt-3 text-xs text-slate-500 font-mono">
              <span className="text-slate-400">Asosiy vositalar:</span>
              <span>C++</span>
              <span>·</span>
              <span>Arduino</span>
              <span>·</span>
              <span>Python</span>
              <span>·</span>
              <span>ESP32</span>
              <span>·</span>
              <span>React</span>
            </div>

          </div>

          {/* Right Column: High-tech Visual showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative tech corners */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400 z-20" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-purple-500 z-20" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-purple-500 z-20" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400 z-20" />

              {/* Glowing border card wrapper */}
              <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800 to-purple-600/30 shadow-2xl shadow-cyan-500/10">
                <div className="relative rounded-xl overflow-hidden bg-[#0a0e20] aspect-square">
                  
                  {/* Portrait image */}
                  <img
                    src={PERSONAL_INFO.avatarImage}
                    alt="Muhammadzohid Mo'minjonov laboratoriyada"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      imageLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                    }`}
                  />

                  {/* Fallback container if image is loading or fails */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-slate-400 p-6 text-center">
                      <Cpu className="w-12 h-12 text-cyan-400 animate-pulse mb-3" />
                      <p className="text-sm font-semibold text-slate-200">Muhammadzohid Mo'minjonov</p>
                      <p className="text-xs text-slate-500 mt-1">Robototexnika & STEM laboratoriyasi</p>
                    </div>
                  )}

                  {/* Futuristic holographic scan line overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-cyan-500/0 via-cyan-400/5 to-purple-500/0 mix-blend-overlay" />

                  {/* Bottom badge overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#060814] via-[#060814]/80 to-transparent">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className="font-semibold text-white">Laboratoriya & Robototexnika</p>
                        <p className="text-cyan-400 font-mono text-[11px]">STEM Tadqiqotlari</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-[11px]">
                        15 yosh
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width Metrics strip below the hero split */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {KEY_METRICS.map((metric, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono tabular-nums">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

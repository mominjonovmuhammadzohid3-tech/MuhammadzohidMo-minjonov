import React from 'react';
import { ArrowUp, Heart, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#04060f] border-t border-slate-900 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & info */}
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-mono text-xs font-bold">
              MM
            </span>
            <div>
              <p className="font-bold text-white">
                {PERSONAL_INFO.fullName}
              </p>
              <p className="text-xs text-slate-500">
                15 yoshli muhandis, robototexnika mutaxassisi va ustoz
              </p>
            </div>
          </div>

          {/* Clean nav anchors */}
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              Men haqimda
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Ko'nikmalar
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Loyihalar
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Bog'lanish
            </a>
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600">
              © {new Date().getFullYear()} Barcha huquqlar himoyalangan
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
              aria-label="Sahifa tepasiga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

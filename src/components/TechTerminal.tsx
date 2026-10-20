import React, { useState } from 'react';
import { Terminal, Cpu, Play, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandOutput {
  command: string;
  response: string | string[];
}

export const TechTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'sys.status',
      response: [
        'TIZIM HOLATI: ONLINE · Takt chastotasi: 240MHz (ESP32) / 16MHz (Arduino)',
        'FAOL YO\'NALISHLAR: Robototexnika, C++, Algoritmlar, STEM Ta\'limi',
        'YOSH MUHANDIS: Muhammadzohid Mo\'minjonov (15 yosh)',
        'Buyruqlar: "bio", "robot", "konikmalar", "loyihalar", "aloqa", "tozalash"'
      ]
    }
  ]);

  const handleRunCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let res: string | string[] = '';

    switch (trimmed) {
      case 'help':
      case 'yordam':
      case 'buyruqlar':
        res = [
          'Mavjud buyruqlar:',
          '  bio        - Muhammadzohid haqida qisqacha ma\'lumot',
          '  robot      - Robototexnika tizimlari va apparat holati',
          '  konikmalar - Asosiy texnik ko\'nikmalar',
          '  loyihalar  - Tayyorlangan asosiy loyihalar ro\'yxati',
          '  aloqa      - Telegram va email havolalari',
          '  tozalash   - Terminal tarixini tozalash'
        ];
        break;
      case 'bio':
        res = `${PERSONAL_INFO.fullName} (15 yosh) — Muhandis, robototexnika mutaxassisi, dasturchi va STEM o'qituvchisi.`;
        break;
      case 'robot':
      case 'hardware':
        res = [
          'ROBOT TIZIMLARI:',
          '  • 6-DOF Robot Manipulyator (Arduino Mega + MG996R)',
          '  • IoT Environmental Station (ESP32 + BME280 + MQ135)',
          '  • Ta\'limiy robot shassilari va to\'siq aylanuvchi modullar'
        ];
        break;
      case 'konikmalar':
      case 'skills':
        res = [
          'TEXNIK KOMPETENSIYALAR:',
          '  • C++, Arduino C, Python, JavaScript/TypeScript, React',
          '  • Sxemotexnika, 3D modellashtirish, Servo & Datchiklar integratsiyasi',
          '  • STEM o\'qituvchiligi va amaliy laboratoriyalar'
        ];
        break;
      case 'loyihalar':
      case 'projects':
        res = [
          'LOYIHALAR:',
          '  1. Aqlli Robot Manipulyator (6 DOF)',
          '  2. STEM Ta\'lim va Robototexnika Portali',
          '  3. IoT Aqlli Ekotizim va Xona Monitoringi'
        ];
        break;
      case 'aloqa':
      case 'contact':
        res = `Email: ${PERSONAL_INFO.email} | Telegram: @muhammadzohid_mominjonov`;
        break;
      case 'clear':
      case 'tozalash':
        setHistory([]);
        setInputVal('');
        return;
      default:
        res = `"${trimmed}" buyrug'i topilmadi. Yordam uchun "yordam" yoki "buyruqlar" deb yozing.`;
    }

    setHistory((prev) => [...prev, { command: cmd, response: res }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleRunCommand(inputVal);
  };

  return (
    <section className="py-12 bg-[#050713] border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Terminal Window frame */}
        <div className="rounded-2xl bg-[#090d1f] border border-cyan-500/30 shadow-2xl shadow-cyan-950/20 overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-400 text-xs ml-2 flex items-center gap-1.5 font-sans">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>muhammadzohid@engineering-lab:~</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1"
                title="Tozalash"
              >
                <RefreshCw className="w-3 h-3" />
                <span className="hidden sm:inline">Tozalash</span>
              </button>
            </div>
          </div>

          {/* Quick command suggestion pills */}
          <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-900 flex items-center gap-2 overflow-x-auto text-[11px] text-slate-400">
            <span className="text-cyan-400 shrink-0 font-sans">Tezkor buyruqlar:</span>
            {['bio', 'robot', 'konikmalar', 'loyihalar', 'aloqa'].map((btn) => (
              <button
                key={btn}
                onClick={() => handleRunCommand(btn)}
                className="px-2.5 py-0.5 rounded bg-slate-800 hover:bg-cyan-900/50 hover:text-cyan-300 text-slate-300 transition-colors shrink-0"
              >
                ${btn}
              </button>
            ))}
          </div>

          {/* Terminal Console output */}
          <div className="p-4 sm:p-6 space-y-3 max-h-72 overflow-y-auto text-slate-300">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-purple-400">root@lab:~$</span>
                  <span>{item.command}</span>
                </div>
                <div className="text-slate-300 pl-4 border-l border-slate-800 space-y-0.5">
                  {Array.isArray(item.response) ? (
                    item.response.map((line, i) => (
                      <p key={i} className="leading-relaxed">
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="leading-relaxed">{item.response}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Prompt input line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-purple-400 shrink-0">root@lab:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Buyruq kiriting (masalan: bio, robot, loyihalar)..."
                className="w-full bg-transparent border-none outline-none text-cyan-300 placeholder-slate-600 font-mono text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="text-slate-500 hover:text-cyan-400 transition-colors shrink-0 p-1"
                aria-label="Buyruqni yuborish"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

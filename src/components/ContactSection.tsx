import React, { useState } from 'react';
import { Send, Mail, Copy, Check, ExternalLink, MessageCircle, Github, Instagram, MapPin } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_CHANNELS } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      return;
    }
    // Simulate instantaneous feedback
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', contact: '', subject: '', message: '' });
    }, 400);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Telegram':
        return MessageCircle;
      case 'Instagram':
        return Instagram;
      case 'GitHub':
        return Github;
      case 'Email':
        return Mail;
      default:
        return ExternalLink;
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#060814] border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <span className="text-xs font-mono text-cyan-400 tracking-wider">
            Muloqot · Hamkorlik & Savollar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Bog’lanish
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mt-4">
            Robototexnika loyihalari, STEM to'garaklari, dasturlash yoki hamkorlik bo'yicha savollaringiz bormi? Quyidagi ijtimoiy tarmoqlar yoki to'g'ridan-to'g'ri elektron pochta orqali yozishingiz mumkin.
          </p>
        </div>

        {/* 2-Column Contact architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Social & Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Email Copy Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-cyan-500/30 shadow-lg shadow-cyan-950/20">
              <span className="text-xs font-mono text-cyan-400">Elektron pochta</span>
              <p className="text-sm sm:text-base font-bold text-white mt-1 break-all select-all font-mono">
                {PERSONAL_INFO.email}
              </p>
              
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Nusxa olindi!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>Manzilni nusxalash</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-950/50 hover:bg-cyan-900/50 border border-cyan-500/30 rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Xat yozish</span>
                </a>
              </div>
            </div>

            {/* Social Channels list */}
            <div className="space-y-3 pt-2">
              {CONTACT_CHANNELS.map((ch) => {
                const Icon = getPlatformIcon(ch.platform);
                return (
                  <a
                    key={ch.platform}
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {ch.platform}
                          </h4>
                          <span className="text-xs font-mono text-slate-400">
                            {ch.username}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                          {ch.description}
                        </p>
                      </div>
                    </div>

                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Location info */}
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Manzil: Toshkent, O'zbekiston · Onlayn muloqot va amaliy uchrashuvlar uchun ochiq</span>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl relative overflow-hidden">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">
                  To’g’ridan-to’g’ri xabar qoldirish
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Xabaringizni yozing, Muhammadzohid imkon qadar tezroq javob qaytaradi.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Xabaringiz muvaffaqiyatli qabul qilindi!
                    </h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
                      Rahmat! Muhammadzohid Mo'minjonov xabaringizni o'rganib, ko'rsatilgan kontakt orqali siz bilan bog'lanadi.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    Yana boshqa xabar yozish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Ismingiz *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Masalan: Sardor Aliyev"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Aloqa (Telegram yoki Email) *
                      </label>
                      <input
                        type="text"
                        id="contact"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="@username yoki email@mail.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Mavzu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Masalan: Robototexnika kursi / Yangi loyiha hamkorligi"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Xabaringiz *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Loyihangiz yoki taklifingiz haqida qisqacha ma'lumot qoldiring..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Xabarni yuborish</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-1 font-mono">
                    To'g'ridan-to'g'ri yozish: Telegram orqali <span className="text-cyan-400">@muhammadzohid_mominjonov</span>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

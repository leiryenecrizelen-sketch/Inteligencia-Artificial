
import React from 'react';

const logos = [
  { name: 'ChatGPT', icon: '🤖' },
  { name: 'Google AI Studio', icon: '✦' },
  { name: 'Nano Banana', icon: '🍌' },
  { name: 'Notebook LM', icon: '📓' },
  { name: 'Perplexity', icon: '🔍' },
  { name: 'Veo 3', icon: '🎬' },
  { name: 'Grok', icon: '⚡' },
];

const LogoMarquee: React.FC = () => {
  // Double the logos for seamless loop
  const displayLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-slate-950/50 border-y border-slate-800 py-10 overflow-hidden relative">
      {/* Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>
      
      <div className="text-center mb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Tecnologias que você vai dominar</span>
      </div>

      <div className="animate-marquee">
        {displayLogos.map((logo, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 px-10 md:px-20 grayscale hover:grayscale-0 transition-all duration-300 group opacity-50 hover:opacity-100"
          >
            <span className="text-2xl">{logo.icon}</span>
            <span className="text-xl md:text-2xl font-bold text-slate-300 group-hover:text-white whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;

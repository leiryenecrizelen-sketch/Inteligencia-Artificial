
import React from 'react';

interface HeroProps {
  onGarantir: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGarantir }) => {
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  const AIIcons = [
    { icon: "🧠", label: "Neural", pos: "-top-4 -left-8", delay: "0s" },
    { icon: "⚡", label: "Processing", pos: "bottom-8 -right-12", delay: "1.5s" },
    { icon: "🤖", label: "Agent", pos: "-top-12 right-0", delay: "3s" }
  ];

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#020617]">
      {/* --- IA BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 opacity-[0.10]" 
             style={{ backgroundImage: `radial-gradient(#1e40af 0.5px, transparent 0.5px), radial-gradient(#1e40af 0.5px, #020617 0.5px)`, backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }}>
        </div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse [animation-delay:2s]"></div>
        <div className="absolute inset-0 opacity-20">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent absolute top-0 animate-[scan_10s_linear_infinite]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <div className="inline-block mb-6">
              <span className="bg-blue-600/10 border border-blue-500/30 text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full backdrop-blur-md shadow-xl">
                IMERSÃO EXCLUSIVA • 100% PRÁTICA
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tighter text-white uppercase">
              Arquitetura de <br />
              <span className="text-blue-600">Soluções com IA</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl lg:mx-0 mx-auto mb-10 leading-relaxed font-medium">
              Formação Presencial na Prática 3 dias com ajuda em tempo real saia com sua IA rodando com os maiores especialistas do Básico ao Avançado.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12">
              <button 
                onClick={onGarantir}
                className="w-full sm:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] text-center uppercase tracking-wider hover:scale-105 active:scale-95"
              >
                Garantir minha vaga
              </button>
              <div className="flex flex-col items-start text-left bg-slate-900/40 backdrop-blur-md p-4 border border-slate-800/50 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-white text-[11px] font-bold uppercase tracking-tight">Próximas Turmas</span>
                </div>
                <span className="text-slate-500 text-[9px] font-black uppercase tracking-[0.2em]">Florianópolis & Gramado</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800/40">
              {[
                { l: "Duração", v: "3 Dias" },
                { l: "Horário", v: "09h às 17h" },
                { l: "Nível", v: "Premium" },
                { l: "Alunos", v: "+13.000 (Brasil, EUA & Vale do Silício)" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col bg-slate-900/30 p-4 rounded-2xl border border-slate-800/30 hover:border-blue-500/30 transition-colors">
                  <span className="text-blue-500 text-[9px] font-black uppercase tracking-widest mb-1">{item.l}</span>
                  <span className="text-white font-bold text-sm md:text-base">{item.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center relative min-h-[550px] md:min-h-[750px]">
            <div className="absolute z-10 w-full max-w-[400px] md:max-w-[550px] aspect-video rounded-[3rem] overflow-hidden opacity-[0.15] lg:-translate-x-16 lg:-translate-y-24 blur-md pointer-events-none">
              <img 
                src="https://mobatia.com/wp-content/uploads/2024/09/AI-in-Mobile-App-Development-1920-1080.png" 
                alt="IA e Mobilidade Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-20 w-full max-w-[550px] md:max-w-[800px] aspect-square flex items-center justify-center">
              <div 
                className="w-full h-full relative group animate-[float_10s_ease-in-out_infinite]"
                style={{ 
                  maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0) 85%)',
                  WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0) 85%)'
                }}
              >
                <img 
                  src="https://i.ibb.co/sk8n9QQ/Whats-App-Image-2025-11-25-at-21-46-36-2.jpg" 
                  alt="Imperium AI Solution" 
                  className="w-full h-full object-contain scale-125 md:scale-135 group-hover:scale-[1.4] transition-transform duration-[4s] ease-out"
                />
              </div>
              {AIIcons.map((item, idx) => (
                <div 
                  key={idx}
                  className={`absolute ${item.pos} z-30 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-slate-900/40 border border-blue-500/20 rounded-2xl backdrop-blur-xl shadow-2xl animate-[float_6s_ease-in-out_infinite] group/icon`}
                  style={{ animationDelay: item.delay }}
                >
                  <span className="text-2xl md:text-4xl filter drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">{item.icon}</span>
                  <div className="absolute -bottom-12 opacity-0 group-hover/icon:opacity-100 transition-all duration-300 translate-y-2 group-hover/icon:translate-y-0 whitespace-nowrap">
                    <span className="text-[10px] text-blue-400 font-black uppercase tracking-[0.2em] bg-slate-950/90 px-4 py-1.5 rounded-full border border-blue-500/20">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
            0% { top: -10%; opacity: 0; }
            5% { opacity: 0.5; }
            95% { opacity: 0.5; }
            100% { top: 110%; opacity: 0; }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0.1deg); }
            50% { transform: translateY(-40px) rotate(-0.3deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

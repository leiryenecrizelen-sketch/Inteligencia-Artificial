
import React from 'react';

const Mentor: React.FC = () => {
  const stats = [
    { label: 'Alunos Formados', value: '+13k', emoji: '🎓' },
    { label: 'Focados em IA', value: '+5', emoji: '🤖' },
    { label: 'Empresas Atingidas', value: '+50', emoji: '🏢' },
    { label: 'Vale do Silício', value: 'EUA', emoji: '🇺🇸' },
  ];

  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Mentor Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-blue-500/30 shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)] bg-slate-900">
              <img 
                src="https://i.ibb.co/s9L0rRFS/Whats-App-Image-2026-02-24-at-14-29-47.jpg" 
                alt="Gilson Sales - Mentor de IA" 
                className="w-full h-full object-cover object-top scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              
              {/* Name Tag Overlay */}
              <div className="absolute bottom-8 left-0 right-0 px-8 text-center">
                <div className="inline-block bg-blue-600/90 backdrop-blur-md px-6 py-2 rounded-full border border-blue-400/30">
                  <span className="text-white font-black tracking-tighter text-xl uppercase">Gilson Sales</span>
                </div>
              </div>
            </div>

            {/* Decorative Frames */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-slate-800 rounded-[3rem] -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>

          {/* Mentor Content Side */}
          <div className="lg:w-1/2">
            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Sobre o Professor</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8 text-white tracking-tighter leading-tight uppercase">
              Gilson <span className="text-blue-500">Sales</span>
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10 font-medium">
              <p>
                Especialista em Inteligência Artificial aplicada a negócios, Gilson Sales possui ampla experiência em tecnologia, gestão e automação estratégica. Nos últimos anos, ajudou empresas a ganhar eficiência, reduzir custos e escalar resultados reais utilizando IA de forma prática, acessível e focada em performance.
              </p>
              <p>
                Sua abordagem une visão técnica, estratégia empresarial e aplicação imediata — exatamente o que profissionais e empresas precisam para competir na nova economia impulsionada pela Inteligência Artificial.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-blue-500/50 transition-all group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.emoji}
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-blue-500 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mentor;

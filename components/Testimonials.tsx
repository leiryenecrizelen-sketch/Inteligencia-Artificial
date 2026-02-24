
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Silva',
    role: 'Gestora de Marketing',
    content: 'A imersão mudou completamente minha produtividade. O que levava dias agora faço em horas com os agentes de IA que aprendi a criar com o Gilson e Pedro.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Carlos Oliveira',
    role: 'Empreendedor Digital',
    content: 'O foco em "Código Zero" é o diferencial. Consegui automatizar todo o meu suporte ao cliente usando as ferramentas ensinadas na imersão.',
    image: 'https://i.pravatar.cc/150?u=carlos'
  },
  {
    id: 3,
    name: 'Juliana Costa',
    role: 'Product Designer',
    content: 'Gilson e Pedro têm uma didática impecável. Saí do curso não apenas com teoria, mas com soluções reais rodando no meu negócio.',
    image: 'https://i.pravatar.cc/150?u=juliana'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 text-white tracking-tighter">
            O QUE NOSSOS <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">ALUNOS DIZEM</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto font-medium">
            Resultados reais de quem decidiu dominar a inteligência artificial na prática.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="bg-slate-900/30 border border-slate-800 p-8 rounded-[2.5rem] flex flex-col hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-800 group-hover:border-blue-500/50 transition-colors"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[10px]">
                    ★
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{t.name}</h3>
                  <p className="text-blue-500 text-xs font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>

              <div className="relative">
                <svg className="absolute -top-2 -left-2 w-8 h-8 text-slate-800 opacity-50 group-hover:text-blue-900/40 transition-colors" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v8H6v2a2 2 0 002 2h2v4H8a6 6 0 01-6-6v-8a2 2 0 012-2h4zm14 0v8h-4v2a2 2 0 002 2h2v4h-2a6 6 0 01-6-6v-8a2 2 0 012-2h4z" />
                </svg>
                <p className="text-slate-300 text-sm leading-relaxed italic relative z-10">
                  "{t.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

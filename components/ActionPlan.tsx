
import React, { useState } from 'react';

const steps = [
  // DIA 1
  {
    day: 1,
    step: "00",
    label: "Módulo 0",
    title: "Fundamentos Rápidos",
    description: "Ecossistema de IA (LLMs, automação, dados e agentes). Quando usar prompt, RAG, automação ou fine-tune.",
    icon: "🔰"
  },
  {
    day: 1,
    step: "01",
    label: "Módulo 1",
    title: "Engenharia de Prompt",
    description: "Prompt estruturado, saída em JSON, extração e classificação de dados e padronização.",
    icon: "🧠"
  },
  {
    day: 1,
    step: "02",
    label: "Módulo 2",
    title: "N8N e Automação",
    description: "Subworkflows, processamento assíncrono, retry inteligente, logs e webhooks.",
    icon: "⚙️"
  },
  // DIA 2
  {
    day: 2,
    step: "03",
    label: "Módulo 3",
    title: "Guardrails (IA Segura)",
    description: "Validação de entrada/saída, anti-alucinação, fallback de modelo e controle de custo.",
    icon: "🛡️"
  },
  {
    day: 2,
    step: "04",
    label: "Módulo 4",
    title: "Memória e RAG",
    description: "Base de conhecimento, vetorização, embeddings e busca inteligente com dados do negócio.",
    icon: "🧠"
  },
  {
    day: 2,
    step: "05",
    label: "Módulo 5",
    title: "Agentes de IA",
    description: "Agentes de atendimento, vendas e internos. Tool calling e tomada de decisão.",
    icon: "🤖"
  },
  // DIA 3
  {
    day: 3,
    step: "06",
    label: "Módulo 6",
    title: "IA para Dados e Decisão",
    description: "Leitura de relatórios, insights, análise de desempenho e conexão com banco de dados.",
    icon: "📊"
  },
  {
    day: 3,
    step: "07",
    label: "Módulo 7",
    title: "Casos Reais e Playbooks",
    description: "WhatsApp IA, classificação de leads, resumo de reuniões e relatórios automáticos.",
    icon: "💼"
  }
];

interface ActionPlanProps {
  onGarantir: () => void;
}

const ActionPlan: React.FC<ActionPlanProps> = ({ onGarantir }) => {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1);
  const filteredSteps = steps.filter(s => s.day === activeDay);

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

  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Grade Curricular Expandida</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 text-white tracking-tighter">
            CRONOGRAMA <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">PRÁTICO</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto font-medium">
            24 horas de imersão total. Do conceito à publicação em 3 dias intensivos.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-md overflow-x-auto max-w-full">
            {[1, 2, 3].map((d) => (
              <button
                key={d}
                onClick={() => setActiveDay(d as 1|2|3)}
                className={`px-6 md:px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex flex-col items-center min-w-[120px] ${
                  activeDay === d ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>DIA 0{d}</span>
                <span className="text-[9px] opacity-60 uppercase tracking-widest font-black">
                  {d === 1 ? 'Identidade' : d === 2 ? 'Construção' : 'Lançamento'}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" key={activeDay}>
          {filteredSteps.map((s, i) => (
            <div key={i} className="group relative">
              <div className="bg-slate-900/30 border border-slate-800/50 p-6 md:p-8 rounded-[2rem] h-full transition-all duration-500 hover:bg-slate-900/60 hover:border-blue-500/40 hover:-translate-y-1.5 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {s.icon}
                </div>
                <div className="flex flex-col mb-4">
                  <span className="text-blue-500 font-black text-[10px] tracking-widest uppercase mb-1">{s.label}</span>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors">{s.title}</h3>
                </div>
                <div className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                  {s.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={onGarantir}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-xl font-black text-sm hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
          >
            QUERO GARANTIR MINHA VAGA
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActionPlan;

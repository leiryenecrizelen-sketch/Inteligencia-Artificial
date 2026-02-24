
import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-950 border-l-4 border-blue-600 p-8 hover:bg-slate-900 transition-all">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-tighter">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm font-medium">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: "🔰",
      title: "Fundamentos e Arquitetura",
      description: "Ecossistema de IA (LLMs, automação, agentes e dados). Quando usar prompt, RAG, automação ou fine-tune."
    },
    {
      icon: "🧠",
      title: "Engenharia de Prompt Profissional",
      description: "Prompt estruturado, saída em JSON, extração e classificação automática. IA preparada para automação."
    },
    {
      icon: "⚙️",
      title: "Automação com n8n",
      description: "Subworkflows, processamento assíncrono, retry inteligente e webhooks para produtos de IA."
    },
    {
      icon: "🛡️",
      title: "Guardrails (IA Segura)",
      description: "Validação de entrada e saída, anti-alucinação, fallback de modelo e controle de custo."
    },
    {
      icon: "🧠",
      title: "Memória e RAG",
      description: "Criação de base de conhecimento, vetorização e busca inteligente de contexto com dados da sua empresa."
    },
    {
      icon: "🤖",
      title: "Agentes de IA",
      description: "Agentes de atendimento, vendas e internos. Tool calling e tomada de decisão automatizada."
    }
  ];

  return (
    <section className="py-24 bg-[#030712]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">O que você vai implementar</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 text-white uppercase tracking-tighter">
              A grade curricular <br />
              <span className="text-blue-500 italic">focada em implementação</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-sm font-medium">
            Você leva notebook. Você constrói ao vivo. Você sai com a estrutura implementada na sua empresa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-slate-900">
          {features.map((f, i) => <FeatureCard key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
};

export default Features;

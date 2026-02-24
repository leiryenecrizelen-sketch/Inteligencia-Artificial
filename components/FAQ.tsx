
import React, { useState } from 'react';

// Added interface for FAQItem props to ensure proper type checking in JSX
interface FAQItemProps {
  question: string;
  answer: string;
}

// Defined FAQItem as a React.FC to handle React-specific props like 'key' correctly
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex justify-between items-center group"
      >
        <span className={`font-semibold transition-colors ${isOpen ? 'text-blue-400' : 'text-slate-300 group-hover:text-white'}`}>{question}</span>
        <span className={`text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-400 text-sm leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "1️⃣ Preciso saber programar para participar?",
      answer: "Não. A imersão atende empresários, gestores e também técnicos. Você aprende do estratégico ao aplicado, com ajuda em tempo real."
    },
    {
      question: "2️⃣ Já uso IA. Ainda faz sentido para mim?",
      answer: "Sim. Aqui você aprende arquitetura profissional: RAG, agentes, automações, guardrails e estrutura escalável — não é curso básico de ferramenta."
    },
    {
      question: "3️⃣ O que eu saio tendo construído?",
      answer: "Você sai com automação estruturada, agente funcional e modelos aplicáveis no seu negócio ou para vender como serviço."
    },
    {
      question: "4️⃣ É teórico ou prático?",
      answer: "100% prático. São 3 dias das 9h às 17h construindo ao vivo com suporte da equipe."
    },
    {
      question: "5️⃣ Posso usar isso para gerar renda?",
      answer: "Sim. Você sai apto a aplicar no seu negócio ou prestar serviço de IA, criando novas fontes de receita."
    }
  ];

  return (
    <div className="container mx-auto px-6 max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Perguntas <span className="text-blue-500">Frequentes</span></h2>
      </div>
      <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800">
        {/* Fix: Passed faqs map with proper component typing to avoid 'key' prop error */}
        {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
      </div>
    </div>
  );
};

export default FAQ;

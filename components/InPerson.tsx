
import React from 'react';

interface InPersonProps {
  onGarantir: (url: string) => void;
}

const InPerson: React.FC<InPersonProps> = ({ onGarantir }) => {
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
    <section className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Logística da Imersão</h2>
           <p className="text-slate-500 mt-4">Programação completa de 3 dias para você se organizar.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-slate-800 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          {/* Florianópolis */}
          <div className="bg-slate-950 p-12 hover:bg-slate-900/50 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Florianópolis / SC</h3>
            </div>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center border-b border-slate-900 pb-4">
                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Data</span>
                <span className="text-white font-bold">27, 28, 29 e 30 de Março</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-900 pb-4">
                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Horário</span>
                <span className="text-white font-bold">09h às 17h</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-900 pb-4">
                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Modalidade</span>
                <span className="text-white font-bold">Presencial | 3 Dias</span>
              </div>
            </div>
            <button 
              onClick={() => onGarantir("https://pay.hotmart.com/O104263697I?off=e9xf4b19&hotfeature=51&_hi=eyJjaWQiOiIxNzcwMjA3MjAwNjA4NTMyMTY2Njk3MTI0MjMzMzQwIiwiYmlkIjoiMTc3MDIwNzIwMDYwODUzMjE2NjY5NzEyNDIzMzM0MCIsInNpZCI6ImRiZTk5M2Y4NDlhMjQyODc5ZTEzMjg0MGQ1MmY4YjYxIn0=.1771955841013")}
              className="block w-full text-center bg-blue-600 text-white py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all"
            >
              Garantir Vaga Floripa
            </button>
          </div>

          {/* Gramado */}
          <div className="bg-slate-950 p-12 hover:bg-slate-900/50 transition-colors">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Gramado / RS</h3>
            </div>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center border-b border-slate-900 pb-4">
                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Data</span>
                <span className="text-white font-bold">10, 11 e 12 de Abril</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-900 pb-4">
                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Horário</span>
                <span className="text-white font-bold">09h às 17h</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-900 pb-4">
                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Modalidade</span>
                <span className="text-white font-bold">Presencial | 3 Dias</span>
              </div>
            </div>
            <button 
              onClick={() => onGarantir("https://pay.hotmart.com/S104554315A")}
              className="block w-full text-center bg-white text-slate-950 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all"
            >
              Garantir Vaga Gramado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InPerson;

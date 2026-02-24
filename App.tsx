
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import ActionPlan from './components/ActionPlan';
import Mentor from './components/Mentor';
import Features from './components/Features';
import InPerson from './components/InPerson';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import AIAssistant from './components/AIAssistant';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BonusModal from './components/BonusModal';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [bonusModal, setBonusModal] = useState({ isOpen: false, url: '' });

  const openBonusModal = (url: string) => {
    setBonusModal({ isOpen: true, url });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] selection:bg-blue-500 selection:text-white">
      <Navbar scrolled={scrolled} onParticipate={() => openBonusModal("https://wa.me/5548996397690?text=ol%C3%A1%20tenho%20interesse%20em%20participar%20da%20imers%C3%A3o%20e%20intelig%C3%AAncia%20artificial%20para%20neg%C3%B3cios")} />
      
      <main>
        <Hero onGarantir={() => openBonusModal("https://wa.me/5548996397690?text=ol%C3%A1%20tenho%20interesse%20em%20participar%20da%20imers%C3%A3o%20e%20intelig%C3%AAncia%20artificial%20para%20neg%C3%B3cios")} />
        
        <LogoMarquee />

        {/* Seção de Problema/Contexto */}
        <section className="py-20 bg-slate-950 border-y border-slate-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
              Isso não é um curso. Formamos quem <span className="text-blue-500 italic">comanda o jogo.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Uma imersão premium, prática e intensiva. Você leva notebook, constrói ao vivo e sai com a estrutura implementada, com ajuda em tempo real da nossa equipe técnica.
            </p>
          </div>
        </section>

        <div id="features" className="scroll-mt-24">
          <Features />
        </div>

        <div id="plan" className="scroll-mt-24">
          <ActionPlan onGarantir={() => openBonusModal("https://wa.me/5548996397690?text=ol%C3%A1%20tenho%20interesse%20em%20participar%20da%20imers%C3%A3o%20e%20intelig%C3%AAncia%20artificial%20para%20neg%C3%B3cios")} />
        </div>

        {/* Seção Para Quem É */}
        <section className="py-24 bg-[#030712]">
          <div className="container mx-auto px-6">
             <div className="bg-slate-900/50 border border-slate-800 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                   <div>
                      <h2 className="text-3xl md:text-5xl font-black mb-8 text-white uppercase tracking-tighter">
                        Para quem é esta <span className="text-blue-500">Imersão?</span>
                      </h2>
                      <div className="space-y-6">
                         {[
                           { t: "Empresários", d: "Que querem vender mais e estruturar a empresa com IA de forma estratégica." },
                           { t: "Gestores", d: "Que buscam organizar processos e aumentar a eficiência operacional do time." },
                           { t: "Profissionais em Transição", d: "Que querem dominar a arquitetura de IA para se destacar no mercado." },
                           { t: "Agências e Consultores", d: "Que desejam vender projetos de IA profissionais e escaláveis." },
                           { t: "Técnicos", d: "Que buscam uma formação em arquitetura profissional de soluções." }
                         ].map((item, i) => (
                           <div key={i} className="flex gap-4">
                              <div className="shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold">✓</div>
                              <div>
                                 <h4 className="font-bold text-white text-lg">{item.t}</h4>
                                 <p className="text-slate-400 text-sm">{item.d}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="hidden md:block">
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                        alt="Time em reunião" 
                        className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                      />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Seção de Transformação */}
        <section className="py-24 bg-slate-950 border-y border-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">A Transformação</h2>
              <p className="text-slate-500 mt-4">Deixe de ser um operador e torne-se um arquiteto.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-slate-900/40 p-10 rounded-3xl border border-red-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-red-500/20 text-4xl font-black">ANTES</div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Onde você está hoje
                </h4>
                <ul className="space-y-4">
                  {["Usuário de ferramenta", "Testando IA sem método", "Automações simples e isoladas", "Dependente de prompts prontos"].map((item, i) => (
                    <li key={i} className="text-slate-400 flex gap-3 items-center">
                      <span className="text-red-500">✕</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-600/10 p-10 rounded-3xl border border-blue-500/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-blue-500/20 text-4xl font-black">DEPOIS</div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Onde você vai chegar
                </h4>
                <ul className="space-y-4">
                  {["Arquiteto de soluções com IA", "Capaz de criar produtos e gerar renda", "Capaz de vender projetos de alto valor", "Empresa estruturada com IA"].map((item, i) => (
                    <li key={i} className="text-white flex gap-3 items-center">
                      <span className="text-blue-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div id="mentor" className="scroll-mt-24">
          <Mentor />
        </div>

        <div id="presencial" className="scroll-mt-24">
          <InPerson onGarantir={openBonusModal} />
        </div>

        <div id="pricing" className="scroll-mt-24">
          <Pricing onGarantir={() => openBonusModal("https://wa.me/5548996397690?text=ol%C3%A1%20tenho%20interesse%20em%20participar%20da%20imers%C3%A3o%20e%20intelig%C3%AAncia%20artificial%20para%20neg%C3%B3cios")} />
        </div>

        <Testimonials />

        <div id="faq" className="bg-slate-950/40 py-24 scroll-mt-24 border-t border-slate-900">
          <FAQ />
        </div>
      </main>

      <Footer />
      <AIAssistant />
      
      <BonusModal 
        isOpen={bonusModal.isOpen} 
        onClose={() => setBonusModal({ ...bonusModal, isOpen: false })} 
        originalUrl={bonusModal.url} 
      />

      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button 
          onClick={() => openBonusModal("https://wa.me/5548996397690?text=ol%C3%A1%20tenho%20interesse%20em%20participar%20da%20imers%C3%A3o%20e%20intelig%C3%AAncia%20artificial%20para%20neg%C3%B3cios")}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg glow-blue transition-all uppercase tracking-widest text-sm"
        >
          Garantir Minha Vaga (24h de IA)
        </button>
      </div>
    </div>
  );
};

export default App;


import React from 'react';

interface NavbarProps {
  scrolled: boolean;
  onParticipate: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onParticipate }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Compensação da altura do Navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => handleScrollTo(e, 'hero')}
          className="flex items-center gap-4 group cursor-pointer transition-transform hover:scale-105 active:scale-95"
        >
          <img 
            src="https://i.ibb.co/BHdLjB43/Whats-App-Image-2026-02-24-at-15-08-44-removebg-preview.png" 
            alt="Imperium Logo" 
            className="w-14 h-14 rounded-xl shadow-lg shadow-blue-900/20 object-cover transition-all"
          />
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-bold tracking-tight text-white">Imperium</span>
            <span className="text-sm font-black text-blue-500 uppercase tracking-widest">Digital Global</span>
          </div>
        </a>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a 
            href="#mentor" 
            onClick={(e) => handleScrollTo(e, 'mentor')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            O Mentor
          </a>
          <a 
            href="#plan" 
            onClick={(e) => handleScrollTo(e, 'plan')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Plano
          </a>
          <a 
            href="#presencial" 
            onClick={(e) => handleScrollTo(e, 'presencial')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Imersões presenciais em aberto
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleScrollTo(e, 'pricing')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Investimento
          </a>
        </div>

        <button 
          onClick={onParticipate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20"
        >
          Participar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

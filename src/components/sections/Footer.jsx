import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-pine-deep text-parchment/60 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <span className="font-display text-2xl text-parchment block mb-2">Maison <span className="italic">Vélocio</span></span>
          <span className="font-mono text-xs tracking-widest uppercase">Coffee Shop & Services Vélo</span>
        </div>
        
        <div className="flex gap-6 font-mono text-xs tracking-widest uppercase">
          <a href="#accueil" className="hover:text-parchment transition-colors">Accueil</a>
          <a href="#menu" className="hover:text-parchment transition-colors">Carte</a>
          <a href="#contact" className="hover:text-parchment transition-colors">Contact</a>
        </div>
        
        <div className="text-sm font-mono text-xs tracking-widest uppercase text-center md:text-right">
          © {new Date().getFullYear()} Maison Vélocio.<br className="md:hidden" /> Tous droits réservés.
        </div>
        
      </div>
    </footer>
  );
}

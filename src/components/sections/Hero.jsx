import React from 'react';
import Section from '../ui/Section';
import Badge from '../ui/Badge';
import { MapPin, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <Section id="accueil" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 relative overflow-hidden text-center !px-0 !max-w-none !mx-0 bg-pine-deep">
      
      {/* Background Image with Parallax-like feel and Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-pine-deep">
        <img 
          src="/images/gallery-2.jpg" 
          alt="Maison Vélocio Terrasse" 
          className="w-full h-full object-cover object-center"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-pine-deep/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Logo */}
        <div className="mb-8">
          <img src="/images/logo.png" alt="Maison Vélocio Logo" className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl brightness-0 invert" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display text-parchment leading-none mb-6 tracking-tight drop-shadow-lg">
          Maison<br/>
          <span className="italic text-trail-ochre">Vélocio</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-parchment/90 max-w-2xl mb-12 leading-relaxed font-body font-light">
          Le café des cyclistes et randonneurs au cœur de la Vallée de Chevreuse.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Badge rotation={-2}>★ 5.0 · 12 AVIS</Badge>
          <Badge rotation={1}>€1–10</Badge>
          <Badge rotation={-1} className="flex items-center gap-1.5">
            <MapPin size={12} />
            DAMPIERRE
          </Badge>
        </div>
        
        <a 
          href="#a-propos" 
          className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-parchment/30 text-parchment transition-all hover:bg-parchment hover:text-pine-deep hover:scale-110 animate-bounce"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </Section>
  );
}

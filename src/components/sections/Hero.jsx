import React from 'react';
import Section from '../ui/Section';
import Badge from '../ui/Badge';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <Section id="accueil" className="min-h-screen flex flex-col justify-center pt-32 pb-16">
      <div className="max-w-3xl">
        <div className="flex flex-wrap gap-4 mb-8">
          <Badge rotation={-2}>★ 5.0 · 12 AVIS</Badge>
          <Badge rotation={1}>€1–10</Badge>
          <Badge rotation={-1} className="flex items-center gap-1.5">
            <MapPin size={12} />
            DAMPIERRE-EN-YVELINES
          </Badge>
        </div>
        
        {/* Logo - Points to public/images/logo.png */}
        <div className="mb-6">
          <img src="/images/logo.png" alt="Maison Vélocio Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-ink leading-none mb-6 tracking-tight">
          Maison<br/>
          <span className="italic">Vélocio</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-espresso/80 max-w-xl mb-12 leading-relaxed">
          Le café des cyclistes et randonneurs au cœur de la Vallée de Chevreuse.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-pine-deep text-parchment font-body font-medium transition-transform hover:-translate-y-1"
          >
            Nous trouver
            <ArrowRight size={18} />
          </a>
          <a 
            href="#services" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-paper-line text-espresso font-body font-medium transition-colors hover:bg-paper-line/50"
          >
            Voir nos services vélo
          </a>
        </div>
      </div>
    </Section>
  );
}

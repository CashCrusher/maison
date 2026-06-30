import React from 'react';
import Section from '../ui/Section';

export default function About() {
  return (
    <Section id="a-propos" className="bg-pine-deep text-parchment py-32 rounded-3xl mx-4 md:mx-auto mt-12 mb-24 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, var(--trail-ochre) 0%, transparent 50%)' }}></div>
      
      <div className="max-w-5xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-display mb-10 text-parchment">
            L'esprit <span className="italic text-trail-ochre">Vélocio</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-parchment/90 leading-relaxed font-body">
            <p>
              Maison Vélocio tire son nom de Paul de Vivie, dit "Vélocio", figure emblématique et pionnier du cyclotourisme en France. Il nous a légué l'amour du voyage à vélo, de l'effort partagé et de l'exploration de la nature.
            </p>
            <p>
              C'est dans cet esprit que Filipe a créé ce lieu : une pause chaleureuse pour cyclistes, randonneurs, habitants et visiteurs. Un endroit convivial où vélo, bon café et saveurs locales se rencontrent, loin du trafic et de la pollution.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-parchment/20">
            <ul className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-sm tracking-widest uppercase text-parchment/60">
              <li>Sur place</li>
              <li>À emporter</li>
              <li>Self-service</li>
            </ul>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-xl">
              <img src="/images/filipe.jpg" alt="Filipe, le créateur" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500" />
            </div>
            <p className="font-mono text-xs text-parchment/60 text-center uppercase tracking-widest mt-2">Filipe, le créateur</p>
          </div>
          <div className="flex flex-col gap-4 pt-12">
            <div className="aspect-[3/4] overflow-hidden rounded-xl border-2 border-trail-ochre/30">
              <img src="/images/velocio.jpg" alt="Paul de Vivie dit Vélocio" className="w-full h-full object-cover sepia-[30%] contrast-125" />
            </div>
            <p className="font-mono text-xs text-parchment/60 text-center uppercase tracking-widest mt-2">Paul de Vivie (Vélocio)</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

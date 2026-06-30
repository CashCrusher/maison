import React from 'react';
import Section from '../ui/Section';

export default function Social() {
  return (
    <Section id="social" className="bg-parchment py-24">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-display text-ink mb-6">Maison Vélocio en Action</h2>
        <p className="text-xl text-espresso max-w-2xl font-body">
          Suivez-nous sur les réseaux pour voir nos dernières créations, nos événements et la vie au café.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-center">
        {/* Instagram Reels Grid */}
        <div className="w-full max-w-sm overflow-hidden rounded-xl border border-paper-line/50 shadow-md">
          {/* We use an iframe to embed the Instagram reels directly. We need to add 'embed' at the end of the URL. */}
          <iframe 
            src="https://www.instagram.com/reel/DZ2tsJ4s4NT/embed/" 
            width="100%" 
            height="600" 
            frameBorder="0" 
            scrolling="no" 
            allowtransparency="true" 
            allow="encrypted-media"
            className="block"
            title="Maison Vélocio Reel 1"
          ></iframe>
        </div>
        
        <div className="w-full max-w-sm overflow-hidden rounded-xl border border-paper-line/50 shadow-md">
          <iframe 
            src="https://www.instagram.com/reel/DZnRHNnswEG/embed/" 
            width="100%" 
            height="600" 
            frameBorder="0" 
            scrolling="no" 
            allowtransparency="true" 
            allow="encrypted-media"
            className="block"
            title="Maison Vélocio Reel 2"
          ></iframe>
        </div>
      </div>

      <div className="mt-16 flex justify-center gap-6">
        <a 
          href="https://instagram.com/cafe_velo_vallee_chevreuse" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-pine-deep text-parchment font-body font-medium transition-transform hover:-translate-y-1"
        >
          Rejoignez-nous sur Instagram
        </a>
      </div>
    </Section>
  );
}

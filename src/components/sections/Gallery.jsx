import React from 'react';
import Section from '../ui/Section';

export default function Gallery() {
  return (
    <Section id="galerie" className="py-24">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-display text-ink mb-6">Le Lieu</h2>
        <p className="text-xl text-espresso max-w-2xl font-body">
          Un aperçu de notre espace, à l'intérieur comme en terrasse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="aspect-square overflow-hidden rounded-xl border border-paper-line/50">
          <img 
            src="/images/gallery-1.jpg" 
            alt="Intérieur du café Maison Vélocio" 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" 
            onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23F3EEE2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='14px' fill='%231E3328'%3E/images/gallery-1.jpg%3C/text%3E%3C/svg%3E"; }}
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-xl border border-paper-line/50">
          <img 
            src="/images/gallery-2.jpg" 
            alt="La terrasse de Maison Vélocio" 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
            onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23F3EEE2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='14px' fill='%231E3328'%3E/images/gallery-2.jpg%3C/text%3E%3C/svg%3E"; }}
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-xl border border-paper-line/50">
          <img 
            src="/images/gallery-3.jpg" 
            alt="Ambiance Maison Vélocio" 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
            onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23F3EEE2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='14px' fill='%231E3328'%3E/images/gallery-3.jpg%3C/text%3E%3C/svg%3E"; }}
          />
        </div>
      </div>
    </Section>
  );
}

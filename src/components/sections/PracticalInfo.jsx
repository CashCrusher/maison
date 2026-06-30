import React from 'react';
import Section from '../ui/Section';

export default function PracticalInfo() {
  return (
    <Section id="contact" className="py-24 border-t border-paper-line">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <h2 className="text-5xl md:text-6xl font-display text-ink mb-12">Infos Pratiques</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="font-mono text-sm tracking-widest uppercase text-pine-deep mb-3">Adresse</h3>
              <p className="text-xl text-espresso font-body">
                13 Grande Rue<br />
                78720 Dampierre-en-Yvelines
              </p>
            </div>
            
            <div>
              <h3 className="font-mono text-sm tracking-widest uppercase text-pine-deep mb-3">Contact</h3>
              <p className="text-xl font-body">
                <a href="tel:0962287632" className="text-espresso hover:text-trail-ochre transition-colors inline-block mb-1">
                  09 62 28 76 32
                </a>
                <br/>
                <a href="https://instagram.com/cafe_velo_vallee_chevreuse" target="_blank" rel="noreferrer" className="text-espresso hover:text-trail-ochre transition-colors inline-block mr-4">
                  Instagram
                </a>
                <a href="#" className="text-espresso hover:text-trail-ochre transition-colors inline-block">
                  Facebook
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="font-mono text-sm tracking-widest uppercase text-pine-deep mb-3">Horaires</h3>
              {/* TODO: confirmer horaires exactes avec le client */}
              <table className="w-full max-w-sm text-lg text-espresso font-body">
                <tbody>
                  <tr className="border-b border-paper-line/50">
                    <td className="py-2">Lundi - Mardi</td>
                    <td className="py-2 text-right opacity-60">Fermé</td>
                  </tr>
                  <tr className="border-b border-paper-line/50">
                    <td className="py-2">Mercredi - Dimanche</td>
                    <td className="py-2 text-right">8h00 - 18h00</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm italic mt-3 text-espresso/60">Horaires indicatifs, n'hésitez pas à nous appeler.</p>
            </div>
          </div>
        </div>

        <div className="h-[400px] lg:h-auto bg-paper-line/30 flex items-center justify-center border border-paper-line relative overflow-hidden">
          {/* Aesthetic grid background behind the map in case it's loading */}
          <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'linear-gradient(var(--pine-deep) 1px, transparent 1px), linear-gradient(90deg, var(--pine-deep) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2634.3312953259976!2d1.9806877768820624!3d48.67980861324707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e68198f3cc7705%3A0xe103632cf4b9a13b!2s13%20Grande%20Rue%2C%2078720%20Dampierre-en-Yvelines!5e0!3m2!1sfr!2sfr!4v1709210000000!5m2!1sfr!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full z-10 grayscale-[20%] contrast-100 opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            title="Maison Vélocio sur Google Maps"
          ></iframe>
        </div>
        
      </div>
    </Section>
  );
}

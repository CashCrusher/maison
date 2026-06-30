import React from 'react';
import Section from '../ui/Section';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { renderToString } from 'react-dom/server';

// Create a custom icon using a standard HTML string for Leaflet
const customIcon = new L.DivIcon({
  html: `<div style="background-color: #C9A227; width: 24px; height: 24px; border-radius: 50%; border: 3px solid #1A1A16; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
  className: 'custom-leaflet-icon',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

export default function PracticalInfo() {
  const position = [48.7042, 1.9836]; // Coordinates for 13 Grande Rue, Dampierre-en-Yvelines

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

        <div className="h-[400px] lg:h-auto bg-paper-line/30 flex items-center justify-center border border-paper-line relative overflow-hidden rounded-xl shadow-inner z-0">
          
          {/* Notification bubble floating over the map */}
          <div className="absolute top-4 right-4 z-20 bg-pine-deep text-parchment px-4 py-2 rounded-full shadow-lg font-mono text-xs uppercase tracking-wider flex items-center gap-2 animate-bounce cursor-pointer hover:bg-espresso transition-colors">
            <span>🚲 Stand de réparation inclus</span>
          </div>

          <MapContainer 
            center={position} 
            zoom={16} 
            scrollWheelZoom={false} 
            className="w-full h-full absolute inset-0 z-10 grayscale-[30%] contrast-125 sepia-[10%] hover:grayscale-0 hover:sepia-0 transition-all duration-700"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup className="font-body text-pine-deep font-medium rounded-lg">
                <div className="text-center p-1">
                  <strong>Maison Vélocio</strong><br />13 Grande Rue, Dampierre
                  <a href="https://g.page/r/CbsRobn0sQPBEBM/review" target="_blank" rel="noreferrer" className="block mt-2 text-xs text-parchment bg-pine-deep px-2 py-1 rounded hover:bg-trail-ochre transition-colors text-decoration-none">
                    ⭐ Laissez-nous un avis
                  </a>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        
      </div>
    </Section>
  );
}

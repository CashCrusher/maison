import React from 'react';
import Section from '../ui/Section';
import { Bike, Wrench, Droplets, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-parchment border border-paper-line p-8 flex flex-col h-full transition-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-pine-deep/5 duration-300">
    <div className="w-14 h-14 bg-pine-deep text-parchment flex items-center justify-center rounded-full mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-display font-medium text-ink mb-3">{title}</h3>
    <p className="text-espresso/80 leading-relaxed flex-grow">{description}</p>
  </div>
);

export default function BikeServices() {
  return (
    <Section id="services" className="bg-paper-line/20 py-24">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-display text-ink mb-6">Services Vélo</h2>
        <p className="text-xl text-espresso max-w-2xl font-body">
          Tout pour les cyclistes : de quoi poser le vélo, le réparer, et repartir du bon pied sur les routes de Chevreuse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard 
          icon={Bike}
          title="Location de vélo"
          description="Vélos de route à la journée à prix abordable pour explorer la vallée."
        />
        <ServiceCard 
          icon={Wrench}
          title="Réparation & Gonflage"
          description="Outils et pompe à disposition pour les petits réglages et crevaisons."
        />
        <ServiceCard 
          icon={Droplets}
          title="Fontaine à eau"
          description="Remplissage de gourdes en libre accès pour tous les cyclistes."
        />
        <ServiceCard 
          icon={ShieldCheck}
          title="Stationnement"
          description="Rack à vélo dédié et vue directe sur votre monture depuis la terrasse."
        />
      </div>
    </Section>
  );
}

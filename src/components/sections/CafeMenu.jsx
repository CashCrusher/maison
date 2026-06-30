import React from 'react';
import Section from '../ui/Section';

const MenuCategory = ({ title, items }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-display italic text-pine-deep mb-8 border-b border-paper-line pb-4">
      {title}
    </h3>
    <ul className="space-y-6">
      {items.map((item, idx) => (
        <li key={idx} className="flex justify-between items-baseline gap-4 group cursor-default">
          <div className="flex-1">
            <span className="text-lg font-medium text-ink group-hover:text-trail-ochre transition-colors">{item.name}</span>
            {item.desc && <p className="text-sm text-espresso/70 mt-1">{item.desc}</p>}
          </div>
          <div className="border-b border-dotted border-paper-line flex-1 mx-4 opacity-50 relative top-[-6px]"></div>
          <span className="font-mono text-sm tracking-wider text-pine-deep bg-paper-line/30 px-2 py-1 rounded">
            {item.price}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default function CafeMenu() {
  return (
    <Section id="menu" className="py-24">
      <div className="mb-16 md:mb-24">
        <h2 className="text-5xl md:text-7xl font-display text-ink">La Carte</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24">
        <div>
          <MenuCategory 
            title="Boissons chaudes"
            items={[
              { name: "Expresso / Allongé", price: "[À confirmer]" },
              { name: "Double Expresso", price: "[À confirmer]" },
              { name: "Cappuccino", price: "[À confirmer]" },
              { name: "Latte / Flat White", price: "[À confirmer]" },
              { name: "Thés & Infusions", price: "[À confirmer]" }
            ]}
          />
          <MenuCategory 
            title="Tartines & Pâtisseries"
            items={[
              { name: "Tartines du jour", desc: "Produits locaux et de saison", price: "[À confirmer]" },
              { name: "Croissant au poulet", desc: "Gourmand et généreux", price: "[À confirmer]" },
              { name: "Le fameux Cheesecake", desc: "Considéré exceptionnel par nos cyclistes", price: "[À confirmer]" }
            ]}
          />
        </div>
        
        <div>
          <MenuCategory 
            title="Boissons fraîches"
            items={[
              { name: "Jus Melon-Pastèque-Coco", desc: "Super rafraîchissant !", price: "[À confirmer]" },
              { name: "Citronnade Maison", price: "[À confirmer]" },
              { name: "Sodas artisanaux", price: "[À confirmer]" },
              { name: "Kombucha", price: "[À confirmer]" }
            ]}
          />
          <MenuCategory 
            title="Brunch & En-cas"
            items={[
              { name: "Formule Brunch", desc: "Disponible le weekend", price: "[À confirmer]" },
              { name: "Barres énergétiques", desc: "Pour repartir sur les sentiers", price: "[À confirmer]" },
              { name: "Viennoiseries", price: "[À confirmer]" }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

import React from 'react';
import Section from '../ui/Section';
import Badge from '../ui/Badge';

const ReviewCard = ({ name, text }) => (
  <div className="bg-parchment p-8 border border-paper-line flex flex-col gap-4">
    <div className="text-trail-ochre flex gap-1">
      {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
    </div>
    <p className="text-espresso italic font-body text-lg leading-relaxed flex-grow">"{text}"</p>
    <div className="font-mono text-xs uppercase tracking-wider text-pine-deep font-bold mt-4">
      — {name}
    </div>
  </div>
);

export default function Reviews() {
  const reviews = [
    { name: "Guillaume D.", text: "Parfait, c'est très bon et tout le monde est sympa ! Endroit idéal pour une pause en vélo, il y a tout pour les cyclistes (de quoi poser le vélo, le réparer/regonfler, une fontaine pour remplir les gourdes)." },
    { name: "Sacha C.", text: "Super ambiance, super service, le spot parfait pour faire une pause en tant que cycliste. Le cheesecake est exceptionnel." },
    { name: "Ségolène", text: "Endroit très agréable où louer un vélo de route pour la journée à prix abordable. J'ai pu explorer la vallée de Chevreuse grâce à ce service." },
    { name: "Salomée R.", text: "Les boissons sont super chouettes et rafraîchissantes, le service est d'une qualité impeccable et c'est toujours servi avec le sourire, merci !!" },
    { name: "Ocean L.", text: "Loin des prix exorbitants, du trafic et de la pollution parisienne, ce café se trouve être le meilleur de la région pour les cyclistes." },
    { name: "Raphael B.", text: "Très agréable pause café en cours de randonnée... chaudement recommandé." }
  ];

  return (
    <Section id="avis" className="py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-display text-ink mb-6">Ce qu'ils en disent</h2>
          <Badge rotation={2}>5.0 ★ SUR GOOGLE</Badge>
        </div>
      </div>

      {/* Masonry-like grid or simple grid for reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} name={review.name} text={review.text} />
        ))}
      </div>
    </Section>
  );
}

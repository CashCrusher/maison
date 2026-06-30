import React, { useState, useEffect } from 'react';
import { X, Star } from 'lucide-react';

export default function ReviewPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds if not closed by user
    const timer = setTimeout(() => {
      if (!isClosed) {
        setIsVisible(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isClosed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="bg-parchment border border-paper-line shadow-2xl p-6 rounded-2xl max-w-sm relative">
        <button 
          onClick={() => {
            setIsVisible(false);
            setIsClosed(true);
          }}
          className="absolute top-3 right-3 text-pine-deep/50 hover:text-pine-deep transition-colors"
          aria-label="Fermer"
        >
          <X size={18} />
        </button>
        
        <div className="flex items-start gap-4">
          <div className="bg-pine-deep text-parchment p-3 rounded-full flex-shrink-0 mt-1">
            <Star size={20} className="fill-parchment" />
          </div>
          <div>
            <h3 className="font-display text-xl text-ink mb-1">Votre avis compte !</h3>
            <p className="text-sm font-body text-espresso/80 mb-4 leading-relaxed">
              Vous avez aimé votre passage chez Maison Vélocio ? Laissez-nous un petit mot.
            </p>
            <a 
              href="https://search.google.com/local/writereview?placeid=ChIJCVp6-lyD5kcRujxo7O7Pzm0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-pine-deep text-parchment font-body text-sm font-medium px-4 py-2 rounded transition-transform hover:-translate-y-0.5 shadow-md"
            >
              Écrire un avis Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

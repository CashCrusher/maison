import React, { useState, useEffect } from 'react';
import { X, Users, Bike, Plus, Minus, CheckCircle } from 'lucide-react';
import { PayPalButtons } from '@paypal/react-paypal-js';

export default function BookingPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const PRICE_PER_PERSON = 2.50;
  const totalPrice = (count * PRICE_PER_PERSON).toFixed(2);

  // Show popup after 1.5 seconds if not closed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isClosed && !sessionStorage.getItem('booking_closed')) {
        setIsVisible(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [isClosed]);

  const closePopup = () => {
    setIsVisible(false);
    setIsClosed(true);
    sessionStorage.setItem('booking_closed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-pine-deep/80 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="bg-parchment w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative">
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-pine-deep/50 hover:text-pine-deep transition-colors z-10 bg-white/50 rounded-full p-1"
        >
          <X size={24} />
        </button>

        {/* Header Image */}
        <div className="h-32 bg-pine-deep relative">
          <img 
            src="/images/gallery-3.jpg" 
            alt="Emplacement Vélo" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl font-display text-parchment drop-shadow-md">Réservez votre place</h2>
          </div>
        </div>

        <div className="p-8">
          {isSuccess ? (
            <div className="text-center py-8 animate-in zoom-in duration-500">
              <CheckCircle size={64} className="mx-auto text-green-600 mb-4" />
              <h3 className="text-2xl font-display text-ink mb-2">Réservation Confirmée !</h3>
              <p className="text-espresso font-body">
                Votre table pour {count} personne{count > 1 ? 's' : ''} et {count} emplacement{count > 1 ? 's' : ''} vélo vous attendent. À très vite chez Maison Vélocio !
              </p>
              <button 
                onClick={closePopup}
                className="mt-6 px-6 py-2 bg-pine-deep text-parchment rounded-lg hover:bg-espresso transition-colors font-body font-medium"
              >
                Fermer
              </button>
            </div>
          ) : (
            <>
              <p className="text-center text-espresso font-body mb-8">
                Assurez-vous d'avoir une table et un emplacement vélo sécurisé à votre arrivée. <br/>
                <strong>2,50 € par cycliste.</strong>
              </p>

              {/* Counter */}
              <div className="flex items-center justify-between bg-paper-line/30 p-4 rounded-2xl mb-8 border border-paper-line/50">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-pine-deep font-medium">
                    <Users size={20} />
                    <span>{count} Personne{count > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-2 text-pine-deep font-medium">
                    <Bike size={20} />
                    <span>{count} Vélo{count > 1 ? 's' : ''}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-parchment rounded-full p-1 border border-paper-line">
                  <button 
                    onClick={() => setCount(Math.max(1, count - 1))}
                    disabled={count <= 1}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-paper-line/50 text-pine-deep hover:bg-trail-ochre hover:text-parchment disabled:opacity-30 disabled:hover:bg-paper-line/50 disabled:hover:text-pine-deep transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-mono text-lg font-bold w-4 text-center text-ink">{count}</span>
                  <button 
                    onClick={() => setCount(Math.min(10, count + 1))}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-pine-deep text-parchment hover:bg-trail-ochre transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex items-end justify-between mb-6">
                <span className="text-sm font-mono tracking-wider uppercase text-pine-deep/70">Total</span>
                <span className="text-3xl font-display text-ink">{totalPrice} €</span>
              </div>

              {/* PayPal Buttons */}
              <div className="min-h-[150px] relative z-0">
                <PayPalButtons 
                  style={{ layout: "vertical", shape: "rect", color: "black" }}
                  forceReRender={[totalPrice]}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          description: `Réservation Maison Vélocio - ${count} cycliste(s)`,
                          amount: {
                            currency_code: "EUR",
                            value: totalPrice
                          }
                        }
                      ]
                    });
                  }}
                  onApprove={async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log("Paiement réussi:", order);
                    setIsSuccess(true);
                  }}
                  onError={(err) => {
                    console.error("Erreur PayPal:", err);
                    alert("Une erreur est survenue lors du paiement. Veuillez réessayer.");
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

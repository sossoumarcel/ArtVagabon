import React, { useState } from 'react';
import './VIPMobile.css';
import { VIPMobileProps } from './types';

const VIPMobile: React.FC<VIPMobileProps> = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const renderForm = () => {
    switch (selectedOption) {
      case 'places_limitees':
        return (
          <div className="vip-form">
            <h3>Formulaire: Places Limitées</h3>
            {/* Form fields for limited spots */}
            <p>Formulaire pour les places limitées.</p>
            <button onClick={() => setSelectedOption(null)}>Retour</button>
          </div>
        );
      case 'visites_privees':
        return (
          <div className="vip-form">
            <h3>Formulaire: Visites Privées</h3>
            {/* Form fields for private tours */}
            <p>Formulaire pour les visites privées.</p>
            <button onClick={() => setSelectedOption(null)}>Retour</button>
          </div>
        );
      case 'rencontres_artistes':
        return (
          <div className="vip-form">
            <h3>Formulaire: Rencontres avec Artistes</h3>
            {/* Form fields for artist meetings */}
            <p>Formulaire pour les rencontres avec artistes.</p>
            <button onClick={() => setSelectedOption(null)}>Retour</button>
          </div>
        );
      case 'acces_lounge':
        return (
          <div className="vip-form">
            <h3>Formulaire: Accès Lounge</h3>
            {/* Form fields for lounge access */}
            <p>Formulaire pour l&apos;accès lounge.</p>
            <button onClick={() => setSelectedOption(null)}>Retour</button>
          </div>
        );
      default:
        return (
          <div className="vip-options">
            <h4>Veuillez choisir une option VIP de votre choix:</h4>
            <div className="vip-option-card" onClick={() => setSelectedOption('places_limitees')}>
              <h5>Places Limitées</h5>
              <p>Accédez à des événements exclusifs avec un nombre de participants restreint pour une expérience intime et privilégiée.</p>
            </div>
            <div className="vip-option-card" onClick={() => setSelectedOption('visites_privees')}>
              <h5>Visites Privées</h5>
              <p>Découvrez nos lieux et expositions à travers des visites guidées personnalisées, loin de la foule.</p>
            </div>
            <div className="vip-option-card" onClick={() => setSelectedOption('rencontres_artistes')}>
              <h5>Rencontres avec Artistes</h5>
              <p>Participez à des sessions uniques avec des artistes renommés, échangez et explorez leur univers créatif.</p>
            </div>
            <div className="vip-option-card" onClick={() => setSelectedOption('acces_lounge')}>
              <h5>Accès Lounge</h5>
              <p>Profitez d&apos;un espace de détente exclusif, idéal pour se relaxer et réseauter avant ou après les événements.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="vip-mobile-container">
      {renderForm()}
    </div>
  );
};

export default VIPMobile;


import React, { useState } from 'react';
import styles from './ExhibitionPreview.module.css';

// Définition des types pour les props du composant
export interface ExhibitionPreviewProps {
  /** Titre de l'exposition */
  title: string;
  /** URL de l'image de couverture */
  imageUrl: string;
  /** Statut de l'exposition */
  status: 'current' | 'upcoming' | 'past';
  /** Courte description ou thème */
  description: string;
  /** Liste des artistes participants */
  artists: string[];
  /** Lieu de l'exposition */
  location: string;
  /** Dates de l'événement */
  dates: string;
  /** URL pour le partage sur les réseaux sociaux */
  shareUrl: string;
  /** Est-ce une exposition mise en avant (spotlight) ? */
  isSpotlight?: boolean;
  /** Est-ce une exposition virtuelle ? */
  isVirtual?: boolean;
  /** Date de lancement pour les expos à venir */
  launchDate?: string;
  /** Callback pour la navigation au clic */
  onClick?: () => void;
  /** Callback pour l'inscription à la notification */
  onNotifyMe?: (email: string) => void;
}

/**
 * Composant Point d'Entrée pour une exposition, affichant un aperçu visuel
 * et des informations clés.
 */
export const ExhibitionPreview: React.FC<ExhibitionPreviewProps> = ({
  title,
  imageUrl,
  status,
  description,
  artists,
  location,
  dates,
  shareUrl,
  isSpotlight = false,
  isVirtual = false,
  launchDate,
  onClick,
  onNotifyMe,
}) => {
  const [email, setEmail] = useState('');

  const handleNotifyClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Empêche le déclenchement du onClick de la carte
    if (email && onNotifyMe) {
      onNotifyMe(email);
      alert(`Vous serez notifié pour "${title}" à l'adresse : ${email}`);
    }
  };

  const cardClasses = `${styles.card} ${isSpotlight ? styles.spotlight : ''}`;

  const statusBadges = {
    current: <span className={`${styles.badge} ${styles.current}`}>En cours</span>,
    upcoming: <span className={`${styles.badge} ${styles.upcoming}`}>À venir</span>,
    past: <span className={`${styles.badge} ${styles.past}`}>Passée</span>,
  };

  return (
    <article className={cardClasses} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`Aperçu pour ${title}`} className={styles.image} />
        {statusBadges[status]}
      </div>
      <div className={styles.cardBody}>
        <header>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.dates}>{dates}</p>
        </header>
        <p className={styles.description}>{description}</p>
        <div className={styles.info}>
          <strong>Artistes :</strong> {artists.join(', ')}
        </div>
        <div className={styles.info}>
          <strong>Lieu :</strong> {location}
        </div>

        {status === 'upcoming' && (
          <div className={styles.notifySection}>
            <p>Lancement prévu le : <strong>{launchDate}</strong></p>
            <div className={styles.notifyForm}>
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className={styles.notifyInput}
              />
              <button onClick={handleNotifyClick} className={styles.notifyButton}>
                Me notifier
              </button>
            </div>
          </div>
        )}

        <footer className={styles.footer}>
          <div className={styles.socialButtons}>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Facebook</a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Twitter</a>
          </div>
          <button className={styles.ctaButton}>
            {isVirtual ? 'Entrer dans l\'expo' : 'Voir les détails'}
          </button>
        </footer>
      </div>
    </article>
  );
};

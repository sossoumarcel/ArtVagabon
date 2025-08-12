import React from 'react';
import './Footer.css';
import Icon from '../Icon';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          <h3 className="footer-nav-title">Navigation</h3>
          <ul>
            <li><a href="/accueil">Accueil</a></li>
            <li><a href="/galerie">Galerie</a></li>
            <li><a href="/evenements">Evènements</a></li>
            <li><a href="/communaute">Communauté</a></li>
            <li><a href="/boutique">Boutique</a></li>
            <li><a href="/a-propos">A propos</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3 className="footer-nav-title">Adresse & Contact</h3>
          <p className="contact-info">5 Rue des Artistes</p>
          <p className="contact-info">75018 Paris, France</p>
          <p className="contact-info">+33 1 42 56 78 90</p>
          <p className="contact-email">contact@artvagabondgalerie.com</p>
        </div>
        <div className="footer-social">
          <h3 className="footer-nav-title">Suivez-nous</h3>
          <p>Restez connecté avec l&apos actualité artistique</p>
          <div className="social-icons">
            <a href="https://facebook.com"><Icon name="facebook" size={24} /></a>
            <a href="https://instagram.com"><Icon name="instagram" size={24} /></a>
            <a href="https://twitter.com"><Icon name="twitter" size={24} /></a>
            <a href="https://linkedin.com"><Icon name="linkedin" size={24} /></a>
          </div>
        </div>
        <div className="footer-newsletter">
          <h3 className="footer-nav-title">Newsletter</h3>
          <p>Recevez les dernières actualités artistiques.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre adresse email" />
            <button type="submit" className="newsletter-button">S&aposinscrire</button>
          </form>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; 2023 Art Vagabond Galerie - Tous droits réservés -{' '}
        <span className="legal-links">
          <a href="/mentions-legales">Mentions légales</a>
          <span className="legal-separator">-</span>
          <a href="/politique-de-confidentialite">Politique de confidentialité</a>
        </span>
      </div>
    </footer>
  );
};
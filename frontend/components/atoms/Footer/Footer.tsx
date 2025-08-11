import React from 'react';
import './Footer.css';
import Icon from '../Icon';
import Logo from '../logo'
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-info">
              <Logo />
            <h2>ArtVagabon</h2>
            <p className="footer-slogan">L&apos;art à portée de main.</p>
            <div className="social-icons-group">
              <h3>Suivez-nous</h3>
              <div className="social-icons">
                <div className="social-icon-wrapper">
                  <span>Facebook</span>
                  <a href="https://facebook.com" className="social-icon">
              <Icon name="facebook" size={24} />
            </a>
                  
                </div>
                <div className="social-icon-wrapper">
                  <span>Twitter</span>
                  <a href="https://twitter.com" className="social-icon">
              <Icon name="twitter" size={24} />
            </a>
                </div>
                <div className="social-icon-wrapper">
                  <span>Instagram</span>
                  <a href="#" className="social-icon instagram">

                    <Icon name="instagram" size={24} />

                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-section">
              <h3>À Propos</h3>
              <ul>
                <li><a href="#">Notre Histoire</a></li>
                <li><a href="#">Notre Équipe</a></li>
                <li><a href="#">Carrières</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Aide & Contact</h3>
              <ul>
                <li><a href="#">Nous Contacter</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Découvrir</h3>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Événements</a></li>
                <li><a href="#">Galeries</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Légal</h3>
              <ul>
                <li><a href="#">Mentions Légales</a></li>
                <li><a href="#">Politique de Confidentialité</a></li>
                <li><a href="#">Conditions Générales de Vente</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-contact-info">
            <h3>Contactez-nous</h3>
            <p className="company-address">
              ArtVagabon S.A.R.L.<br/>
              123 Rue de l&apos;Art<br/>
              75001 Paris, France
            </p>
            <p>Email: contact@artvagabon.com</p>
            <p>Téléphone: +33 1 23 45 67 89</p>

            <div className="language-selector-group">
              <h3>Langue</h3>
              <select className="language-selector">
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-security-badges">
            {/* Add your SSL certificates or security badges here */}
            <p>Sécurisé par SSL</p> {/* Placeholder text */}
          </div>
          <p className="footer-copyright">© 2025 ArtVagabon. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
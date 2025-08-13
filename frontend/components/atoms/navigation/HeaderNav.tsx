"use client";
import { useState, useEffect } from "react";
import styles from "./HeaderNav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../logo";
import Icon from "../Icon";

// 1. Définition des types pour TypeScript (inchangé)
interface MenuLink {
  href: string;
  label: string;
}

interface DrupalMenuItem {
  title: string;
  relative: string;
  enabled: boolean;
}

export function HeaderNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // 2. Suppression de la liste statique 'navLinks' et remplacement par un état dynamique
  const [menuLinks, setMenuLinks] = useState<MenuLink[]>([]);

  // 3. Logique pour récupérer les données de Drupal (inchangée)
  useEffect(() => {
    const menuApiUrl = "http://13.37.252.245/api/menu_items/main?_format=json";

    const fetchMenuData = async () => {
      try {
        const response = await fetch(menuApiUrl);
        if (!response.ok) {
          throw new Error("La récupération des données du menu a échoué");
        }
        
        const drupalMenuItems: DrupalMenuItem[] = await response.json();

        const formattedLinks = drupalMenuItems
          .filter(item => item.enabled)
          .map((item: DrupalMenuItem) => ({
            label: item.title,
            href: item.relative,
          }));

        setMenuLinks(formattedLinks);
      } catch (error) {
        console.error("Erreur lors de la récupération du menu depuis Drupal:", error);
      }
    };

    fetchMenuData();
  }, []);

  // Effet pour le scroll (inchangé)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);


  // 4. Utilisation de la nouvelle structure JSX avec les données dynamiques
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Logo />
      </div>

      {/* Nav desktop - Utilise maintenant 'menuLinks' au lieu de 'navLinks' */}
      <nav className={styles.nav}>
        {menuLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${
              pathname === link.href ? styles.active : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={styles.right}>
        {/* Barre de recherche complète pour DESKTOP SEULEMENT */}
        <div className={`${styles.searchContainer} ${styles.desktopOnly}`}>
          <input
            type="text"
            placeholder="Rechercher..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton} aria-label="Lancer la recherche">
            <Icon name="search" />
          </button>
        </div>

        {/* Bouton Contact visible uniquement desktop */}
        <Link href="/contact" className={`${styles.contactBtn} ${styles.desktopOnly}`}>
          Contact
        </Link>
        
        {/* Icône de recherche pour MOBILE SEULEMENT */}
        <Link href="/recherche" className={`${styles.searchIconLink} ${styles.mobileOnly}`} aria-label="Recherche">
            <Icon name="search" />
        </Link>

        <Link
          href="/profil"
          className={styles.profileIconLink}
          aria-label="Mon compte"
        >
          <Icon name="user" />
        </Link>

        {/* Le bouton burger animé est conservé */}
        <button
          className={styles.burgerBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir/fermer le menu"
        >
          <span className={`${styles.burgerBar} ${menuOpen ? styles.burgerBarOpen1 : ""}`}></span>
          <span className={`${styles.burgerBar} ${menuOpen ? styles.burgerBarOpen2 : ""}`}></span>
          <span className={`${styles.burgerBar} ${menuOpen ? styles.burgerBarOpen3 : ""}`}></span>
        </button>
      </div>

      {/* Menu mobile - Utilise maintenant 'menuLinks' au lieu de 'navLinks' */}
      <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        {menuLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${
              pathname === link.href ? styles.active : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        {/* Le bouton contact dans le menu mobile est conservé */}
        <Link
          href="/contact"
          className={styles.contactBtn}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
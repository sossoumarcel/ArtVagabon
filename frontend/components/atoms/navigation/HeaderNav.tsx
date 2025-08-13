// HeaderNav.js

"use client";
import { useState, useEffect } from "react";
import styles from "./HeaderNav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../logo";
import Icon from "../Icon";

export function HeaderNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/Evenements", label: "Evènements" },
    { href: "/communaute", label: "Communauté" },
    { href: "/boutique", label: "Boutique" },
    { href: "/a-propos", label: "À Propos" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Logo />
      </div>

      {/* Nav desktop */}
      <nav className={styles.nav}>
        {navLinks.map((link) => (
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
        {/* -- MODIFICATION 1 : Barre de recherche complète pour DESKTOP SEULEMENT -- */}
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
        
        {/* -- MODIFICATION 2 : Icône de recherche pour MOBILE SEULEMENT -- */}
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

      {/* Menu mobile (SANS la recherche, car elle est maintenant dans le header) */}
      <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
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
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

  // Empêche le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      {/* Le burger n'est plus ici */}
      <div className={styles.left}>
        <Logo />
      </div>

      {/* Nav desktop */}
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={styles.right}>
        <Link href="/contact" className={styles.contactBtn}>
          Contact
        </Link>

        <Link href="/profil" className={styles.profileIconLink} aria-label="Mon compte">
          <Icon name="user" />
        </Link>

        {/* 1. On remet le bouton burger ICI, à la fin de la div "right" */}
        <button
          className={styles.burgerBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir/fermer le menu"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>
      

      {/* Menu mobile */}
      <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
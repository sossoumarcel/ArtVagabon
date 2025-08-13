"use client";
import { useState, useEffect } from "react";
import styles from "./HeaderNav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../logo";
import Icon from "../Icon";

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


  const [menuLinks, setMenuLinks] = useState<MenuLink[]>([]);

  useEffect(() => {
    const menuApiUrl = "http://13.37.252.245/api/menu_items/main?_format=json";

    const fetchMenuData = async () => {
      try {
        const response = await fetch(menuApiUrl);
        if (!response.ok) {
          throw new Error("La récupération des données du menu a échoué");
        }
        const drupalMenuItems: DrupalMenuItem[] = await response.json();

      
        const formattedLinks = drupalMenuItems.map((item: DrupalMenuItem) => ({
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

      <nav className={styles.nav}>
        {menuLinks.map((link) => (
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
        <button
          className={styles.burgerBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir/fermer le menu"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>

      <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        {menuLinks.map((link) => (
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
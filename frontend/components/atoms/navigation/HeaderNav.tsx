"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./HeaderNav.module.css"
import Icon from "../Icon"
import SearchBar from "../SearchBar"
import NavLink from '../NavLink/NavLink' // Assuming NavLink is in ../NavLink

export function HeaderNav() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // New state for mobile menu
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Accueil" },
    {
      href: "/galerie",
      label: "Galerie",
      subMenu: [
        { href: "/galerie/oeuvres", label: "Œuvres" },
        { href: "/galerie/artistes", label: "Artistes" },
      ],
    },
    { href: "/evenements", label: "Événements" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ]

  const handleSearch = (query: string) => {
    window.location.href = `/recherche?q=${query}`
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={styles.header}>
      <Link href="/" passHref className={styles.logoLink}>
        <Image
          src="/logo-couleur.svg"
          alt="ArtsVagabonds - Retour à l'accueil"
          width={180}
          height={90}
          priority
        />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`${styles.navLink} ${
                link.subMenu ? styles.galleryMenuItem : ""
              }`}
            >
              <Link
                href={link.href}
                className={pathname === link.href ? styles.active : ""}
              >
                {link.label}
              </Link>
              {link.subMenu && (
                <ul className={styles.gallerySubMenu}>
                  {link.subMenu.map((subLink) => (
                    <li key={subLink.href}>
                      <Link href={subLink.href}>{subLink.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.nav}>
        <div className={styles.searchContainer}>
          <button
            className={styles.searchIcon}
            onClick={() => setIsSearchVisible(!isSearchVisible)}
            aria-label="Ouvrir la barre de recherche"
          >
            <Icon name="search" size={24} />
          </button>
          {isSearchVisible && (
            <SearchBar
              placeholder="Rechercher une œuvre, un artiste..."
              onSearch={handleSearch}
            />
          )}
        </div>
        <Icon name="user" size={24} />
        <button
          className={styles.burgerMenuIcon}
          onClick={toggleMobileMenu}
          aria-label="Ouvrir le menu mobile"
        >
          <Icon name="menu" size={24} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <button
            className={styles.closeMobileMenu}
            onClick={toggleMobileMenu}
            aria-label="Fermer le menu mobile"
          >
            <Icon name="close" size={24} />
          </button>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    isActive={pathname === link.href}
                    onClick={toggleMobileMenu} // Close menu on link click
                  />
                  {link.subMenu && (
                    <ul className={styles.mobileSubMenu}>
                      {link.subMenu.map((subLink) => (
                        <li key={subLink.href}>
                          <NavLink
                            href={subLink.href}
                            label={subLink.label}
                            onClick={toggleMobileMenu} // Close menu on sub-link click
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <SearchBar
              placeholder="Rechercher..."
              onSearch={handleSearch}
              className={styles.mobileSearchBar}
            />
          </nav>
        </div>
      )}
    </header>
  )
}
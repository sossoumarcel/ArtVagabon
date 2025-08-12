"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import type { ReactNode } from "react";


interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  children?: ReactNode;  // <== Ajoute cette ligne
  className?: string  // <- Ajoute cette ligne

  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive, onClick }) => {
  const pathname = usePathname();
  const activeClass = isActive || pathname === href ? 'active' : '';

  return (
    <Link href={href} className={activeClass} onClick={onClick}>
      {label}
    </Link>
  );
};

export default NavLink;

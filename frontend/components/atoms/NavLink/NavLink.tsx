import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './NavLink.module.css';

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive, onClick }) => {
  const pathname = usePathname();
  const activeClass = isActive || pathname === href ? styles.active : '';

  return (
    <Link
      href={href}
      className={`${styles.link} ${activeClass}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default NavLink;

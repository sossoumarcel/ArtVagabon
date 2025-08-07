import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;

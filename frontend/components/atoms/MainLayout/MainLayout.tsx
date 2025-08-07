
import React from 'react';
import './MainLayout.css';

interface MainLayoutProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ header, footer, children }) => {
  return (
    <div className="main-layout">
      <header className="main-layout__header">{header}</header>
      <main className="main-layout__content">{children}</main>
      <footer className="main-layout__footer">{footer}</footer>
    </div>
  );
};

export default MainLayout;

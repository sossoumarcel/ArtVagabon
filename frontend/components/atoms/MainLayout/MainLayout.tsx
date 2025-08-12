import React from 'react';
import './MainLayout.css';
import { Footer } from '../Footer';
import { HeaderNav } from '../navigation/HeaderNav';

interface MainLayoutProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ header, footer, children }) => {
  return (
    <div className="main-layout">
      <header className="main-layout__header"><HeaderNav/></header>
      <main className="main-layout__content">{children}</main>
      <footer className="main-layout__footer"><Footer/></footer>
    </div>
  );
};

export default MainLayout;
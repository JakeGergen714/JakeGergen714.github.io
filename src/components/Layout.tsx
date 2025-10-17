import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  const location = useLocation();
  const isApple = location.pathname === '/';
  return (
    <div
      className={`min-h-screen flex flex-col ${
        isApple ? 'bg-white' : 'bg-[var(--bg-darkest)]'
      }`}
    >
      <div
        className={
          'sticky top-0 z-40 ' +
          (isApple
            ? 'bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200'
            : 'bg-[var(--bg-darkest)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg-darkest)]/60')
        }
      >
        <Header />
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

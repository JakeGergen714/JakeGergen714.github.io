import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className={'min-h-screen flex flex-col bg-white'}>
      <div
        className={
          'sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200'
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

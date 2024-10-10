// src/components/Header.tsx
import React from 'react';
import AstronautImage from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className='top-0 w-full'>
      <div className=' max-w-7xl mx-auto px-4 flex items-center justify-between h-16'>
        <div className='logo flex items-center'>
          <a href='/'>
            <img
              src={AstronautImage}
              alt='Astronaut Illustration'
              className='h-full max-h-16 object-contain'
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className='navbar'>
          <ul className='flex flex-col lg:flex-row lg:gap-8 space-x-6'>
            <li>
              <a href='#services' className='text-gray-600 hover:text-gray-400'>
                Services
              </a>
            </li>
            <li>
              <a href='#about' className='text-gray-600 hover:text-gray-400'>
                About
              </a>
            </li>

            <li>
              <a href='#pricing' className='text-gray-600 hover:text-gray-400'>
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <div className='logo flex items-center'>
          <a href='#contact'>Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

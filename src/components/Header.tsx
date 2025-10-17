// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  // Consistent light theme across the site
  const headerBase = 'top-0 w-full';
  const brandClass = 'text-slate-900 hover:opacity-80';
  const linkClass = 'text-slate-700 hover:text-slate-900';
  const contactClass =
    'inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-slate-900 hover:bg-gray-50';
  const mobilePanelClass = 'bg-white border border-slate-200 text-slate-900';

  return (
    <header className={`${headerBase}`}>
      <div className='max-w-7xl mx-auto px-4 flex items-center justify-between md:h-16 py-3 md:py-0 relative'>
        <div className='flex items-center font-semibold tracking-tight'>
          <Link to='/' className={brandClass}>
            Gergen Software
          </Link>
        </div>

        {/* Navigation */}
        <nav className='navbar hidden lg:block'>
          <ul className='flex flex-row gap-8'>
            <li>
              <Link to='/' className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/faq' className={linkClass}>
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className='hidden lg:flex items-center'>
          <a href='mailto:contact@gergensoftware.com' className={contactClass}>
            Email us
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className='lg:hidden'>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls='mobile-nav'
            onClick={() => setOpen((v) => !v)}
            className={
              'text-slate-800 hover:text-slate-900 inline-flex items-center justify-center rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300 focus-visible:ring-offset-white'
            }
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown panel */}
        {open && (
          <div
            id='mobile-nav'
            className={`lg:hidden absolute left-0 right-0 top-full mt-2 rounded-xl ${mobilePanelClass} shadow-xl`}
            role='dialog'
            aria-modal='false'
          >
            <ul className='flex flex-col divide-y divide-zinc-800/40'>
              <li>
                <Link
                  to='/'
                  className='block px-4 py-3'
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/faq'
                  className='block px-4 py-3'
                  onClick={() => setOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li className='p-3'>
                <a
                  href='mailto:contact@gergensoftware.com'
                  className={`${contactClass} w-full justify-center`}
                  onClick={() => setOpen(false)}
                >
                  Email us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

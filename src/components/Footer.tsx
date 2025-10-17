import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer
      className={
        'mt-16 border-t border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 text-slate-700'
      }
    >
      <div className='max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3'>
        <div>
          <div className={'text-slate-900 font-semibold'}>Gergen Software</div>
          <p className='text-sm mt-2'>
            Full‑service software team on subscription.
          </p>
          <a
            className={'text-sm underline hover:opacity-80 text-slate-900'}
            href='mailto:contact@gergensoftware.com'
          >
            contact@gergensoftware.com
          </a>
        </div>
        <div>
          <div className={'text-slate-900 font-semibold mb-2'}>Explore</div>
          <ul className='space-y-2'>
            <li>
              <Link to='/' className={'hover:text-slate-900'}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/faq' className={'hover:text-slate-900'}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className={'text-slate-900 font-semibold mb-2'}>Legal</div>
          <p className={'text-sm text-slate-600'}>
            © {new Date().getFullYear()} Gergen Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

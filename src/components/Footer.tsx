import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const isApple = location.pathname === '/';
  return (
    <footer
      className={
        'mt-16 border-t ' +
        (isApple
          ? 'border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 text-slate-700'
          : 'border-zinc-800 bg-[var(--bg-dark)] text-slate-300')
      }
    >
      <div className='max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3'>
        <div>
          <div
            className={
              isApple
                ? 'text-slate-900 font-semibold'
                : 'text-white font-semibold'
            }
          >
            Gergen Software
          </div>
          <p className='text-sm mt-2'>
            Full‑service software team on subscription.
          </p>
          <a
            className={
              'text-sm underline hover:opacity-80 ' +
              (isApple ? 'text-slate-900' : '')
            }
            href='mailto:contact@gergensoftware.com'
          >
            contact@gergensoftware.com
          </a>
        </div>
        <div>
          <div
            className={
              isApple
                ? 'text-slate-900 font-semibold mb-2'
                : 'text-white font-semibold mb-2'
            }
          >
            Explore
          </div>
          <ul className='space-y-2'>
            <li>
              <Link
                to='/'
                className={
                  isApple ? 'hover:text-slate-900' : 'hover:text-white'
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/faq'
                className={
                  isApple ? 'hover:text-slate-900' : 'hover:text-white'
                }
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div
            className={
              isApple
                ? 'text-slate-900 font-semibold mb-2'
                : 'text-white font-semibold mb-2'
            }
          >
            Legal
          </div>
          <p
            className={'text-sm ' + (isApple ? 'text-slate-600' : 'opacity-70')}
          >
            © {new Date().getFullYear()} Gergen Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

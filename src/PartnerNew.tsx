import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { MdConveyorBelt } from 'react-icons/md';
import { SiSpringsecurity } from 'react-icons/si';
import { GrHost } from 'react-icons/gr';

// Contact form now lives on /contact

// Copy of App2 to iterate independently on partnernew route
const PartnerNew: React.FC = () => {
  return (
    <div className='flex flex-col mx-auto font-sans w-full'>
      <Helmet>
        <title>Solo Principal Engineer on Subscription | Gergen Software</title>
        <meta
          name='description'
          content='Work directly with a senior/ principal engineer on subscription. Design, build, deploy, monitor, and maintain—weekly live builds and ongoing care. You own the code. Cancel anytime.'
        />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Gergen Software',
            url: 'https://jakegergen714.github.io/',
            logo: 'https://jakegergen714.github.io/logo512.png',
            sameAs: [],
          })}
        </script>
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Solo Principal Engineer Subscription',
            provider: { '@type': 'Organization', name: 'Gergen Software' },
            areaServed: 'US',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: '999',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '999',
                priceCurrency: 'USD',
              },
              description:
                'Subscription starts at $999/mo; scales by project size and velocity.',
            },
          })}
        </script>
      </Helmet>
      <StickyCTA />
      {/* Hero */}
      <div className='min-h-[75vh] bg-[var(--bg-darkest)]'>
        <div className='relative flex flex-col md:flex-row justify-between items-center px-8 gap-12 mt-24 max-w-7xl w-full mx-auto'>
          <div className='flex-[1] min-w-0 flex flex-col'>
            <div className='leading-tight pb-8'>
              <span className='text-6xl text-white font-light font-display'>
                Work with a Principal Engineer
              </span>
              <span className='block text-2xl mt-4 text-[var(--accent)] font-light font-display'>
                Subscription model. Monthly Ops & Improvements report. Ongoing
                care.
              </span>
            </div>
            <p className='text-[17px] md:text-lg text-slate-300 leading-relaxed text-left'>
              We don’t just ship and vanish. We partner long‑term—designing,
              building, deploying, monitoring, and maintaining your software so
              it keeps delivering value as your business evolves.
            </p>
            <div className='mt-4 text-slate-400 text-sm'>
              Code is yours • Cancel anytime •{' '}
              <span className='whitespace-nowrap'>&lt;24h response</span> •
              Optional sprint reviews
            </div>
            <div>
              <Link
                to='/services'
                className='mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-ds-green rounded-lg transition-colors duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-darkest)]'
              >
                Explore services
              </Link>
              <Link
                to='/pricing'
                className='mt-6 ml-3 inline-block px-6 py-3 text-lg font-medium text-white bg-[var(--bg-dark)] border border-zinc-700 rounded-lg transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-darkest)]'
              >
                See pricing
              </Link>
            </div>
          </div>
          <div className='flex-[1] flex-shrink-0 w-full'>
            <img
              src='/home-logo.png'
              alt='Home Logo'
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>

      {/* Who we help (category badges) */}
      <section className='w-full flex justify-center px-4 bg-[var(--bg-darkest)] pt-6'>
        <div className='width-controller max-w-7xl w-full mx-auto rounded-[2rem]'>
          <div className='flex flex-wrap gap-2 items-center text-slate-300 text-sm'>
            <span className='opacity-70'>Who we help:</span>
            {[
              'Home Services',
              'Construction',
              'Healthcare',
              'Professional Services',
              'Retail',
              'Nonprofit',
            ].map((label) => (
              <span
                key={label}
                className='px-3 py-1 rounded-full bg-[var(--bg-dark)] border border-zinc-700 text-slate-300/90 hover:border-emerald-500/40 transition-colors duration-200'
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section
        id='pricing'
        className='w-full flex justify-center px-4 bg-[var(--bg-darkest)] pt-8'
      >
        <div className='width-controller max-w-7xl w-full mx-auto rounded-[2rem] pt-6 pb-12'>
          <div className='text-left p-6 md:p-12'>
            <h2 className='text-white font-medium text-5xl font-display'>
              Baseline support + project work
            </h2>
            <p className='mt-4 text-slate-300 text-lg pb-6 leading-relaxed'>
              Baseline live support keeps your product healthy for $999/mo. New
              features and special projects are billed hourly and tracked in
              your backlog—scoped during refinement.
            </p>
            <div className='grid sm:grid-cols-2 gap-8'>
              {/* Baseline */}
              <div className='bg-[var(--bg-dark)] rounded-2xl p-6 border border-zinc-700 hover:bg-white/5 hover:border-emerald-500/40 transition-colors duration-200'>
                <div className='text-slate-200 text-xl font-semibold'>
                  Baseline: Live Support
                </div>
                <div className='text-white text-3xl mt-2'>
                  $999<span className='text-xl'>/mo</span>
                </div>
                <ul className='mt-4 text-slate-300 list-disc list-inside space-y-1'>
                  <li>Incidents, defects, maintenance updates</li>
                  <li>Deployments, monitoring, alerts</li>
                  <li>Security patches and dependency hygiene</li>
                  <li>Docs and runbooks kept current</li>
                  <li>Business-hours support, typically &lt;24h</li>
                </ul>
                <Link
                  to='/contact'
                  className='inline-block mt-6 px-4 py-2 rounded-lg bg-ds-green text-white transition-colors duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-darkest)]'
                >
                  Start baseline
                </Link>
              </div>

              {/* Project work */}
              <div className='bg-[var(--bg-dark)] rounded-2xl p-6 border border-zinc-700 hover:bg-white/5 hover:border-emerald-500/40 transition-colors duration-200'>
                <div className='text-slate-200 text-xl font-semibold'>
                  Project work (hourly)
                </div>
                <div className='text-white text-3xl mt-2'>scoped</div>
                <ul className='mt-4 text-slate-300 list-disc list-inside space-y-1'>
                  <li>New features and special requests</li>
                  <li>Onboarding a new product or legacy upgrades</li>
                  <li>Scoped during refinement with estimates</li>
                  <li>Tracked in Jira or open‑source tools</li>
                  <li>Optional short sprints for launches/spikes</li>
                </ul>
                <Link
                  to='/contact'
                  className='inline-block mt-6 px-4 py-2 rounded-lg border border-zinc-700 text-white transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-darkest)]'
                >
                  Scope a project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal */}
      <section className='w-full flex justify-center px-4 bg-[var(--bg-darkest)]'>
        <div className='width-controller max-w-7xl w-full mx-auto rounded-[2rem] pb-6'>
          <div className='text-left p-6 md:p-12 bg-[var(--bg-dark)] rounded-2xl border border-zinc-700'>
            <h3 className='text-white text-3xl font-semibold'>
              Built for trust and longevity
            </h3>
            <ul className='mt-4 text-slate-300 list-disc list-inside space-y-1'>
              <li>You own 100% of code, data, and infrastructure.</li>
              <li>Cancel anytime—no lock‑in, no surprise fees.</li>
              <li>We maintain code and documentation to high standards.</li>
              <li>If you leave, we provide a clean handoff with docs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why partnership (formerly Model) */}
      <section
        id='why'
        className='w-full flex justify-center px-4 bg-[var(--bg-darkest)] pt-10'
      >
        <div className='width-controller max-w-7xl w-full mx-auto bg-[var(--bg-dark)] border border-zinc-700 rounded-[2rem] pt-10 pb-12'>
          <div className='text-center px-6 md:px-12'>
            <h2 className='text-left text-white font-medium text-5xl font-display'>
              <span className='text-[var(--accent)]'>Subscription‑Based</span>{' '}
              Partnership
            </h2>
            <p className='mt-4 text-slate-300 text-left pb-10 leading-relaxed'>
              Flat monthly pricing starting at $999/mo, scaled to your
              initiative’s size and pace. Pause, upgrade, or continue as your
              needs change—without losing context or momentum.
            </p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <div className='rounded-full p-4 bg-[var(--bg-dark)] border border-zinc-700 text-emerald-400 flex items-center justify-center w-16 h-16 shadow-2xl'>
                    <MdConveyorBelt className='text-3xl' />
                  </div>
                  <div className='service-title'>Weekly Live Builds</div>
                </div>
                <p className='service-description'>
                  Review working software every week. Priorities stay aligned,
                  and you ship value continuously.
                </p>
              </div>

              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <div className='rounded-full p-4 bg-[var(--bg-dark)] border border-zinc-700 text-emerald-400 flex items-center justify-center w-16 h-16 shadow-2xl'>
                    <GrHost className='text-3xl' />
                  </div>
                  <div className='service-title'>Deploy, Monitor, Maintain</div>
                </div>
                <p className='service-description'>
                  Real engineers on call—updates, observability, incident
                  response, and best practices baked in.
                </p>
              </div>

              <div className='flex flex-col items-start'>
                <div className='service-card'>
                  <div className='rounded-full p-4 bg-[var(--bg-dark)] border border-zinc-700 text-emerald-400 flex items-center justify-center w-16 h-16 shadow-2xl'>
                    <SiSpringsecurity className='text-3xl' />
                  </div>
                  <div className='service-title'>Security & Compliance</div>
                </div>
                <p className='service-description'>
                  Patch management, dependency hygiene, and reviews for a
                  secure, resilient stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (Removed) How it works teaser */}

      {/* Services teaser → Services page */}
      <section className='w-full flex justify-center px-4 bg-[var(--bg-darkest)] pt-4 pb-8'>
        <div className='width-controller max-w-7xl w-full mx-auto rounded-[2rem]'>
          <div className='text-left p-6 md:p-12 bg-[var(--bg-dark)] rounded-2xl border border-zinc-700'>
            <h3 className='text-white text-3xl font-semibold'>
              What’s included
            </h3>
            <p className='text-slate-300 mt-2'>
              Delivery, operations, security, monitoring, and support—covered
              every month.
            </p>
            <Link
              to='/services'
              className='mt-4 inline-block px-4 py-2 rounded-lg border border-zinc-700 text-white hover:bg-white/5'
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* Remove deep care block from Home; covered on Services page */}

      {/* Removed outcome pillars from Home to reduce depth; covered on Services */}

      {/* Social proof */}
      <section className='w-full flex flex-col justify-center px-4 bg-[var(--bg-dark)] pt-24 pb-24'>
        <div className='w-full max-w-7xl mx-auto'>
          <div className='bg-emerald-500/10 border border-emerald-400/20 p-8 text-white text-left rounded-3xl shadow-2xl flex flex-col'>
            <blockquote className='italic text-white p-10 text-[28px] md:text-[40px] md:leading-[52px] pb-10 font-display'>
              “They think through our problems like owners—bringing ideas we
              hadn’t considered—and we iterate to a better product together.”
            </blockquote>
            <div>Farzad Rahimi</div>
            <div>CEO and Founder, Rahimi Construction</div>
          </div>
        </div>
      </section>

      {/* CTA now lives on Contact page; keep Home lean */}

      {/* FAQ and Contact live on their own pages to make Home concise */}
    </div>
  );
};

// Sticky CTA (visible on PartnerNew only)
const StickyCTA: React.FC = () => (
  <Link
    to='/contact'
    className='fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-ds-green text-white shadow-lg hover:opacity-90'
  >
    Book a 15‑min intro
  </Link>
);

// FAQ now lives on /faq

export default PartnerNew;

import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  FiGitBranch,
  FiActivity,
  FiShield,
  FiLink,
  FiZap,
  FiBarChart2,
  FiTool,
  FiCheckCircle,
  FiUpload,
} from 'react-icons/fi';

const DetailCard: React.FC<{
  title: string;
  blurb: string;
  bullets?: string[];
  note?: string;
}> = ({ title, blurb, bullets, note }) => (
  <div className='relative rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)] ring-1 ring-sky-100/60'>
    <h3 className='text-slate-900 text-xl font-medium tracking-tight'>
      {title}
    </h3>
    <div className='mt-4 h-px bg-gray-100'></div>
    <p className='text-slate-700 mt-4 leading-relaxed'>{blurb}</p>
    {bullets && bullets.length > 0 && (
      <ul className='mt-4 text-slate-700 list-disc list-inside space-y-1'>
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )}
    {note && <div className='mt-4 text-slate-500 text-sm'>{note}</div>}
  </div>
);

const ListColumn: React.FC<{
  items: { key: string; label: string; icon: any }[];
  selectedKey: string;
  onSelect: (k: string) => void;
  ariaLabel: string;
}> = ({ items, selectedKey, onSelect, ariaLabel }) => (
  <div className='flex flex-col gap-2' role='listbox' aria-label={ariaLabel}>
    {items.map((it) => {
      const SelectedIcon = it.icon;
      const selected = selectedKey === it.key;
      return (
        <button
          key={it.key}
          role='option'
          aria-selected={selected}
          className={
            'w-full text-left flex items-center gap-3 rounded-xl border px-3 py-3 transition-colors ' +
            (selected
              ? 'bg-sky-50 border-sky-200'
              : 'bg-white border-gray-200 hover:bg-sky-50')
          }
          onClick={() => onSelect(it.key)}
        >
          <span className='text-slate-400'>
            <SelectedIcon />
          </span>
          <span className='text-slate-900'>{it.label}</span>
        </button>
      );
    })}
  </div>
);

const HomeApple: React.FC = () => {
  const [svcKey, setSvcKey] = useState<string>('features');
  // Fixed hero content (formerly the 'steady' variant)
  const hero = {
    headMain: 'We build and maintain your custom software',
    headAccent: 'small releases, proactive care.',
    sub: 'A simple monthly plan for new features, monitoring, and routine maintenance—without the drama.',
    chips: [
      { icon: FiCheckCircle, label: 'Ship in small, safe steps' },
      { icon: FiActivity, label: 'Proactive monitoring' },
      { icon: FiTool, label: 'Routine maintenance' },
      { icon: FiUpload, label: 'Zero‑drama deployments' },
    ],
  } as const;

  // Subtle raindrops background (static, lightweight)
  const RaindropsBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

      const draw = () => {
        const { innerWidth: w, innerHeight: h } = window;
        canvas.width = Math.floor(w * DPR);
        canvas.height = Math.floor(h * DPR);
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        // Reset transform then scale for DPR; avoid compounded scales
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(DPR, DPR);
        ctx.clearRect(0, 0, w, h);

        // Respect prefers-reduced-motion and skip on small screens for perf
        const reduceMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;
        const smallScreen = w < 768; // skip rendering on small screens
        if (reduceMotion || smallScreen) {
          return;
        }

        // Draw soft droplets
        const drops = Math.min(48, Math.floor((w * h) / 45000));
        for (let i = 0; i < drops; i++) {
          const x = Math.random() * w;
          const y = Math.random() * h;
          const r = 6 + Math.random() * 18;
          // Radial gloss
          const grad = ctx.createRadialGradient(
            x - r * 0.35,
            y - r * 0.35,
            r * 0.1,
            x,
            y,
            r
          );
          grad.addColorStop(0, 'rgba(255,255,255,0.55)');
          grad.addColorStop(0.45, 'rgba(255,255,255,0.22)');
          grad.addColorStop(1, 'rgba(255,255,255,0.06)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
          // Subtle edge
          ctx.strokeStyle = 'rgba(255,255,255,0.12)';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      };

      const onResize = () => {
        draw();
      };

      window.addEventListener('resize', onResize);
      onResize();
      return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
      <canvas
        aria-hidden
        ref={canvasRef}
        className='absolute inset-0 w-full h-full opacity-30'
      />
    );
  };

  // Global page background is applied once below for a consistent blue/white Apple-like feel.

  const servicesItems = [
    {
      key: 'features',
      label: 'Build new features',
      icon: FiGitBranch,
      blurb:
        'Tell us what you want. We design it simply and ship it in small, steady steps.',
      bullets: [
        'Start small and iterate weekly',
        'Clear scope and timelines',
        'Zero‑drama releases',
      ],
    },
    {
      key: 'monitoring',
      label: 'Proactive monitoring',
      icon: FiActivity,
      blurb:
        'We watch your app so issues are caught early—often before your team notices.',
      bullets: [
        'Health dashboards and error tracking',
        'Actionable alerts (not noise)',
        'Root‑cause fixes, not band‑aids',
      ],
    },
    {
      key: 'upkeep',
      label: 'Keep it up‑to‑date',
      icon: FiShield,
      blurb:
        'We keep dependencies and infrastructure current so things stay fast, secure, and reliable.',
      bullets: [
        'Regular updates and audits',
        'Security patches on a cadence',
        'Performance and reliability checks',
      ],
    },
    {
      key: 'integrations',
      label: 'Get your tools talking',
      icon: FiLink,
      blurb:
        'We connect the apps you already use so data moves automatically—no more double‑entry.',
      bullets: [
        'Sync customers, orders, and invoices',
        'Cut copy‑paste and manual uploads',
        'Cleaner records across systems',
      ],
    },
    {
      key: 'speed',
      label: 'Speed up everyday work',
      icon: FiZap,
      blurb:
        'We shave clicks and steps off the tasks your team does all the time.',
      bullets: [
        'Shorter forms and fewer screens',
        'Smart defaults and autofill',
        'Hours back each week',
      ],
    },
    {
      key: 'reports',
      label: 'See your business clearly',
      icon: FiBarChart2,
      blurb:
        'Your data, beautifully graphed in real time—so answers are one glance away.',
      bullets: [
        'At‑a‑glance dashboards',
        'Answer real questions in seconds',
        'Focus on what needs attention',
      ],
    },
  ];

  return (
    <main className='flex flex-col mx-auto font-sans w-full bg-transparent min-h-screen text-slate-900 relative z-10'>
      <Helmet>
        <title>
          Gergen Software | Simple software that moves your business
        </title>
        <meta
          name='description'
          content='Bring us a business problem. We’ll build the simplest software that solves it—then keep it healthy as you grow.'
        />
      </Helmet>

      {/* Global blue/white backdrop */}
      <div aria-hidden className='pointer-events-none fixed inset-0 z-0'>
        {/* 1) Prominent blue wash (smaller/softer on mobile) */}
        <div className='absolute -top-40 left-1/2 -translate-x-1/2 h-[18rem] w-[40rem] md:h-[28rem] md:w-[80rem] rounded-full bg-gradient-to-b from-sky-300 via-sky-200 to-transparent blur-xl md:blur-3xl opacity-50 md:opacity-85'></div>
        {/* 2-3) Subtle supporting blobs (hide on mobile) */}
        <div className='hidden md:block absolute -right-24 top-10 h-64 w-64 rounded-full bg-cyan-300 blur-2xl opacity-25'></div>
        <div className='hidden md:block absolute left-1/5 bottom-10 h-56 w-56 rounded-full bg-sky-300 blur-2xl opacity-20'></div>
        {/* Raindrops layer (draw skipped on small screens) */}
        <RaindropsBackground />
      </div>

      {/* Hero */}
      <section className='relative overflow-hidden w-full flex justify-center px-4 pt-16 pb-10'>
        <div className='relative z-10 max-w-7xl w-full'>
          {/* Hero copy (glass) */}
          <div className='mt-3 rounded-3xl border border-white/30 bg-white/70 md:bg-white/40 md:backdrop-blur-xl px-6 py-8 shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-white/20'>
            <h1 className='text-4xl md:text-6xl font-semibold tracking-tight text-slate-900'>
              {hero.headMain}
              {hero.headAccent && (
                <span className='block text-sky-600 text-3xl md:text-5xl mt-1'>
                  {hero.headAccent}
                </span>
              )}
            </h1>
            <p className='mt-4 text-lg md:text-xl text-slate-700 max-w-3xl'>
              {hero.sub}
            </p>
            <div className='mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {hero.chips.map((c, idx) => {
                const Icon = c.icon as any;
                return (
                  <div
                    key={idx}
                    className='flex items-center gap-2 rounded-full border border-white/30 bg-white/70 md:bg-white/40 md:backdrop-blur px-3 py-2 shadow-[0_1px_0_rgba(0,0,0,0.04)]'
                    title={c.label}
                  >
                    <span className='text-sky-600'>
                      <Icon />
                    </span>
                    <span className='text-slate-900 text-sm font-medium'>
                      {c.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className='mt-8 flex flex-wrap gap-3'>
              <a
                href='mailto:contact@gergensoftware.com'
                className='inline-flex items-center rounded-full bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white hover:from-sky-700 hover:via-blue-700 hover:to-indigo-700 shadow-[0_8px_30px_rgba(2,132,199,0.25)]'
              >
                Email us
              </a>
              <Link
                to='/faq'
                className='inline-flex items-center rounded-full border border-sky-200 px-6 py-3 text-base font-semibold text-sky-800 hover:bg-sky-50'
              >
                Read FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className='relative w-full flex justify-center px-4 pb-2'>
        <div className='relative z-10 max-w-7xl w-full'>
          <div className='rounded-2xl border border-white/30 bg-white/70 md:bg-white/50 md:backdrop-blur px-4 py-3 ring-1 ring-white/20 text-slate-700 text-sm flex flex-wrap gap-3 items-center justify-center'>
            <span className='font-medium text-slate-900'>What you get:</span>
            <span>Weekly updates</span>
            <span>Small, steady releases</span>
            <span>Proactive monitoring</span>
            <span>Routine maintenance</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className='relative overflow-hidden w-full flex justify-center px-4 pt-6'>
        <div className='relative z-10 max-w-7xl w-full'>
          <div className='rounded-2xl border border-white/30 bg-white/70 md:bg-white/40 md:backdrop-blur-xl p-6 ring-1 ring-white/20 shadow-[0_10px_40px_rgba(2,132,199,0.06)]'>
            <div className='text-slate-500 text-sm tracking-wide'>
              What we do
            </div>
            <div className='mt-3 grid md:grid-cols-5 gap-6'>
              <div className='md:col-span-2'>
                <ListColumn
                  items={servicesItems.map(({ key, label, icon }) => ({
                    key,
                    label,
                    icon,
                  }))}
                  selectedKey={svcKey}
                  onSelect={setSvcKey}
                  ariaLabel='Services overview'
                />
              </div>
              <div className='md:col-span-3'>
                <DetailCard
                  title={
                    servicesItems.find((x) => x.key === svcKey)?.label || ''
                  }
                  blurb={
                    servicesItems.find((x) => x.key === svcKey)?.blurb || ''
                  }
                  bullets={servicesItems.find((x) => x.key === svcKey)?.bullets}
                />
                <div className='mt-4 flex items-center gap-3'>
                  <Link
                    to='/faq'
                    className='text-sky-600 hover:text-sky-700 text-sm font-medium'
                  >
                    Read FAQ
                  </Link>
                  <a
                    href='mailto:contact@gergensoftware.com'
                    className='text-sky-600 hover:text-sky-700 text-sm font-medium'
                  >
                    Email us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple process */}
      <section className='relative overflow-hidden w-full flex justify-center px-4 pt-6'>
        <div className='relative z-10 max-w-7xl w-full'>
          <div className='rounded-2xl border border-white/30 bg-white/70 md:bg-white/40 md:backdrop-blur-xl p-6 ring-1 ring-white/20 shadow-[0_10px_40px_rgba(2,132,199,0.06)]'>
            <div className='text-slate-500 text-sm tracking-wide'>
              How it works
            </div>
            <div className='mt-4 grid md:grid-cols-3 gap-4'>
              <DetailCard
                title='1. Map the work'
                blurb='We meet you where you are, define the smallest valuable change, and agree on success.'
                bullets={[
                  '45‑min kickoff',
                  'Clear acceptance criteria',
                  'No‑surprise scope',
                ]}
              />
              <DetailCard
                title='2. Ship small, weekly'
                blurb='We design simply, ship in safe steps, and keep you in the loop—every single week.'
                bullets={[
                  'Short cycles',
                  'Staging links',
                  'Zero‑drama releases',
                ]}
              />
              <DetailCard
                title='3. Watch & maintain'
                blurb='We monitor, fix root causes, and keep dependencies fresh so things stay fast and reliable.'
                bullets={[
                  'Health dashboards',
                  'Actionable alerts',
                  'Regular updates',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className='relative overflow-hidden w-full flex justify-center px-4 pt-6 pb-20'>
        <div className='relative z-10 max-w-7xl w-full'>
          <div className='rounded-2xl border border-white/30 bg-white/70 md:bg-white/40 md:backdrop-blur-xl p-6 ring-1 ring-white/20 shadow-[0_10px_40px_rgba(2,132,199,0.06)]'>
            <div className='text-slate-500 text-sm tracking-wide'>
              How it’s priced
            </div>
            <div className='mt-4'>
              <div className='rounded-2xl border border-white/30 bg-white/70 md:bg-white/50 md:backdrop-blur p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]'>
                <div className='flex flex-wrap items-end gap-3'>
                  <div className='text-slate-500 text-xs uppercase tracking-wide'>
                    One simple plan
                  </div>
                  <span className='inline-flex items-center rounded-full bg-sky-50/70 text-sky-900 border border-sky-200/70 px-2.5 py-0.5 text-xs font-semibold'>
                    Small improvements included
                  </span>
                </div>
                <div className='mt-2 flex items-end gap-2'>
                  <div className='text-4xl md:text-5xl font-semibold text-slate-900'>
                    Starting at $999
                  </div>
                  <div className='text-slate-600 mb-1'>/mo</div>
                </div>
                <p className='mt-3 text-slate-700'>
                  A monthly plan to build small features and keep your systems
                  fast, reliable, and secure. We include routine maintenance,
                  proactive monitoring, and small UX polish each month. Larger
                  features are estimated up front and added when you’re ready.
                </p>
                <div className='mt-4 grid md:grid-cols-2 gap-4'>
                  <ul className='text-slate-700 list-disc list-inside space-y-1'>
                    <li>Proactive monitoring and routine maintenance</li>
                    <li>Performance, reliability, and security updates</li>
                    <li>Small fixes and UX polish included</li>
                  </ul>
                  <ul className='text-slate-700 list-disc list-inside space-y-1'>
                    <li>Larger features scoped and estimated up front</li>
                    <li>Transparent estimates before we build</li>
                    <li>Weekly updates and always‑on deployments</li>
                  </ul>
                </div>
                <div className='mt-4 text-slate-500 text-sm'>
                  No long‑term lock‑in. Cancel anytime. Light months are fully
                  covered by your plan, and when needs grow we agree on scope
                  and price first—no surprises.
                </div>
              </div>
            </div>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Link
                to='/faq'
                className='inline-flex items-center rounded-full border border-sky-200 px-6 py-3 text-base font-semibold text-sky-800 hover:bg-sky-50'
              >
                FAQ
              </Link>
              <a
                href='mailto:contact@gergensoftware.com'
                className='inline-flex items-center rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white hover:bg-sky-700'
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeApple;

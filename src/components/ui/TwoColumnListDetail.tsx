import React, { useState } from 'react';

export type Item = {
  key: string;
  label: string;
  detail: React.ReactNode;
  blurb?: React.ReactNode;
  icon?: React.ReactNode;
};

export type TwoColumnListDetailProps = {
  id: string;
  ariaLabel: string;
  eyebrow: string;
  items: Item[];
  defaultKey?: string;
  onHide?: () => void;
  footer?: React.ReactNode;
  size?: 'md' | 'lg';
};

const TwoColumnListDetail: React.FC<TwoColumnListDetailProps> = ({
  id,
  ariaLabel,
  eyebrow,
  items,
  defaultKey,
  onHide,
  footer,
  size = 'md',
}) => {
  const [selectedKey, setSelectedKey] = useState<string>(
    defaultKey || items[0]?.key
  );
  const selected = items.find((i) => i.key === selectedKey) || items[0];
  const wrapPad = size === 'lg' ? 'p-6 md:p-8' : 'p-4 md:p-6';
  const optionPad = size === 'lg' ? 'px-4 py-3' : 'px-3 py-2';
  const optionText = size === 'lg' ? 'text-base' : 'text-sm';
  const headingSize = size === 'lg' ? 'text-2xl' : 'text-xl';
  const eyebrowSize = size === 'lg' ? 'text-sm' : 'text-xs';
  const detailText = size === 'lg' ? 'text-base' : 'text-[15px]';

  return (
    <div
      id={id}
      className='relative overflow-hidden rounded-xl border border-zinc-700 bg-[var(--bg-dark)]/60'
    >
      <div className='absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-500/[0.04] to-transparent'></div>
      <div className={`relative ${wrapPad} grid md:grid-cols-5 gap-6`}>
        {/* Left: list */}
        <div className='md:col-span-2'>
          <div
            role='listbox'
            aria-label={ariaLabel}
            className='flex flex-col gap-2'
          >
            {items.map((item) => {
              const active = item.key === selectedKey;
              return (
                <button
                  key={item.key}
                  role='option'
                  aria-selected={active}
                  className={
                    `w-full text-left flex items-center gap-3 rounded-lg border ${optionPad} ${optionText} transition-colors ` +
                    (active
                      ? 'bg-white/5 border-emerald-500/40 ring-1 ring-emerald-500/40'
                      : 'bg-[var(--bg-dark)]/40 border-zinc-700 hover:bg-white/5 hover:border-emerald-500/40')
                  }
                  onClick={() => setSelectedKey(item.key)}
                >
                  {item.icon && (
                    <span className='text-emerald-300'>{item.icon}</span>
                  )}
                  <span className='text-slate-200'>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        {/* Right: detail */}
        <div className='md:col-span-3'>
          <div
            className={`relative overflow-hidden rounded-xl ${wrapPad} bg-gradient-to-br from-[var(--bg-dark)]/80 to-black/20 backdrop-blur-sm border border-zinc-700/80 border-l-4 border-l-emerald-500/40 shadow-xl shadow-black/30 ring-1 ring-emerald-500/10`}
          >
            <div className='pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl'></div>
            <div className='relative'>
              <div
                className={`text-emerald-300/80 ${eyebrowSize} uppercase tracking-wider`}
              >
                {eyebrow}
              </div>
              <h3 className={`text-white ${headingSize} font-semibold mt-1`}>
                {selected?.label}
              </h3>
              <div className='mt-3 h-px bg-zinc-700/60'></div>
              <div className={`text-slate-300 mt-3 ${detailText}`}>
                {selected?.detail}
              </div>
            </div>
          </div>
          <div className='mt-4 flex items-center gap-3'>
            {onHide && (
              <button
                onClick={onHide}
                className='text-slate-400 hover:text-white text-sm underline underline-offset-4'
              >
                Hide details
              </button>
            )}
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnListDetail;

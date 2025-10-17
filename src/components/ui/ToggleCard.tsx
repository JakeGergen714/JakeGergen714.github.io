import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export type ToggleCardProps = {
  id: string;
  ariaControls: string;
  title: string;
  subtitle?: React.ReactNode;
  hint?: string;
  active: boolean;
  onClick: () => void;

  size?: 'md' | 'lg';
};

const ToggleCard: React.FC<ToggleCardProps> = ({
  id,
  ariaControls,
  title,
  subtitle,
  hint,
  active,
  onClick,
  size = 'md',
}) => {
  const pad = size === 'lg' ? 'p-8' : 'p-6';
  const titleSize = size === 'lg' ? 'text-2xl' : 'text-xl';
  const hintSize = size === 'lg' ? 'text-sm' : 'text-xs';
  const chevronPad = size === 'lg' ? 'p-3' : 'p-2';
  return (
    <button
      id={id}
      aria-controls={ariaControls}
      aria-expanded={active}
      aria-pressed={active}
      onClick={onClick}
      className={
        `group text-left rounded-2xl ${pad} border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ` +
        (active
          ? 'bg-white/5 border-emerald-500/40 ring-1 ring-emerald-500/40 border-l-4 border-l-emerald-500/60'
          : 'bg-[var(--bg-dark)] border-zinc-700 hover:bg-white/5 hover:border-emerald-500/40')
      }
    >
      <div className='flex items-start justify-between gap-3'>
        <div>
          <div className={`text-slate-200 ${titleSize} font-semibold`}>
            {title}
          </div>
          {subtitle && <div className='mt-2 text-slate-300'>{subtitle}</div>}
          {hint && (
            <div className={`mt-3 ${hintSize} text-slate-400`}>{hint}</div>
          )}
        </div>
        <div
          className={`shrink-0 rounded-full border border-zinc-700 ${chevronPad} text-slate-300 group-hover:text-white group-hover:border-emerald-500/40`}
        >
          {active ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>
    </button>
  );
};

export default ToggleCard;

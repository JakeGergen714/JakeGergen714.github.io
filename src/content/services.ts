import {
  FiGitBranch,
  FiActivity,
  FiShield,
  FiLink,
  FiZap,
  FiBarChart2,
} from 'react-icons/fi';

export type ServiceItem = {
  key: 'features' | 'monitoring' | 'upkeep' | 'integrations' | 'speed' | 'reports';
  label: string;
  icon: any;
  blurb: string;
  bullets: string[];
};

export const servicesItems: ServiceItem[] = [
  {
    key: 'features',
    label: 'Build new features',
    icon: FiGitBranch,
    blurb:
      'Tell us what you want. We design it simply and ship it in small, steady steps.',
    bullets: ['Start small and iterate weekly', 'Clear scope and timelines', 'Zero‑drama releases'],
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
    blurb: 'We shave clicks and steps off the tasks your team does all the time.',
    bullets: ['Shorter forms and fewer screens', 'Smart defaults and autofill', 'Hours back each week'],
  },
  {
    key: 'reports',
    label: 'See your business clearly',
    icon: FiBarChart2,
    blurb: 'Your data, beautifully graphed in real time—so answers are one glance away.',
    bullets: ['At‑a‑glance dashboards', 'Answer real questions in seconds', 'Focus on what needs attention'],
  },
];

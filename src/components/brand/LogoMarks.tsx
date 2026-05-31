import { cn } from '../../lib/cn';

export type LogoConcept = 'cellmark' | 'anvil' | 'cube' | 'ingot' | 'workbench';

type LogoMarkProps = {
  concept?: LogoConcept;
  className?: string;
};

const shared = 'overflow-visible';

export function LogoMark({ concept = 'cellmark', className }: LogoMarkProps) {
  const classes = cn(shared, className);

  if (concept === 'anvil') {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-label="TinyFoundry Anvil T logo concept" className={classes}>
        <defs>
          <linearGradient id="tf-anvil" x1="12" x2="52" y1="10" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff2df" />
            <stop offset="0.52" stopColor="#d96b3b" />
            <stop offset="1" stopColor="#5e6ad2" />
          </linearGradient>
        </defs>
        <path d="M9 15h36c6.8 0 10.7-1.8 14-5v12c-3.4 2.5-7.7 3.8-13.2 3.8h-6.6V47h10.6v7H15v-7h10.8V25.8H9V15Z" fill="url(#tf-anvil)" />
        <path d="M13 15h31.5c7.2 0 11-1.8 14.5-5" fill="none" stroke="white" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (concept === 'cube') {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-label="TinyFoundry private app cube logo concept" className={classes}>
        <path d="M32 6 55 18.5v27L32 58 9 45.5v-27L32 6Z" fill="#111315" stroke="#f4efe6" strokeOpacity="0.18" strokeWidth="2" />
        <path d="M32 6v25.5L9 18.5 32 6Z" fill="#d96b3b" fillOpacity="0.9" />
        <path d="M32 31.5 55 18.5v27L32 58V31.5Z" fill="#5e6ad2" fillOpacity="0.78" />
        <path d="M32 31.5 9 18.5v27L32 58V31.5Z" fill="#f4efe6" fillOpacity="0.09" />
        <path d="M19 27h14M18 35h22M18 43h15" stroke="#fff7ea" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
        <path d="M43 28.5h5v6h-5z" fill="#08090a" fillOpacity="0.65" />
      </svg>
    );
  }

  if (concept === 'ingot') {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-label="TinyFoundry workflow ingot logo concept" className={classes}>
        <path d="M12 22 23 14h30l-8 36H15L8 37l4-15Z" fill="#111315" stroke="#f4efe6" strokeOpacity="0.18" strokeWidth="2" />
        <path d="M14 24h30M12 32h35M15 40h25" stroke="#f4efe6" strokeOpacity="0.62" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M42 32h9v9h-9z" fill="#d96b3b" />
        <path d="M22 15h29l-4 7H12l10-7Z" fill="#d96b3b" fillOpacity="0.75" />
      </svg>
    );
  }

  if (concept === 'workbench') {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-label="TinyFoundry local workbench logo concept" className={classes}>
        <rect x="9" y="12" width="46" height="36" rx="8" fill="#0f1011" stroke="#f4efe6" strokeOpacity="0.22" strokeWidth="2" />
        <path d="M15 22h34M22 18v24M37 18v24" stroke="#f4efe6" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 46h48l-5 8H13l-5-8Z" fill="#d96b3b" />
        <circle cx="47" cy="20" r="3" fill="#5e6ad2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="TinyFoundry Cellmark Forge logo concept" className={classes}>
      <defs>
        <linearGradient id="tf-cellmark" x1="10" x2="54" y1="10" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff2df" />
          <stop offset="0.48" stopColor="#d96b3b" />
          <stop offset="1" stopColor="#5e6ad2" />
        </linearGradient>
      </defs>
      <rect x="9" y="9" width="46" height="46" rx="13" fill="#0f1011" stroke="#f4efe6" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M24.3 10v44M39.7 10v44M10 24.3h44M10 39.7h44" stroke="#f4efe6" strokeOpacity="0.18" strokeWidth="2" />
      <path d="M38 38h17v10.5c0 3.6-2.9 6.5-6.5 6.5H38V38Z" fill="url(#tf-cellmark)" />
      <path d="M43 43h8M43 48h5" stroke="#08090a" strokeOpacity="0.68" strokeWidth="2" strokeLinecap="round" />
      <path d="M25 25h14v14H25z" fill="#f4efe6" fillOpacity="0.08" />
    </svg>
  );
}

type TinyFoundryLogoProps = {
  concept?: LogoConcept;
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
};

export function TinyFoundryLogo({ concept = 'cellmark', className, markClassName, wordmarkClassName }: TinyFoundryLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] shadow-[0_0_35px_rgba(217,107,59,0.22)]">
        <LogoMark concept={concept} className={cn('h-7 w-7', markClassName)} />
      </span>
      <span className={cn('text-sm font-semibold tracking-[-0.03em] text-white', wordmarkClassName)}>
        <span className="font-normal text-zinc-200">Tiny</span>Foundry
      </span>
    </span>
  );
}

const concepts: Array<{ id: LogoConcept; name: string; note: string }> = [
  { id: 'cellmark', name: 'Cellmark Forge', note: 'Spreadsheet cell becomes an app tile. Clearest for the wedge.' },
  { id: 'anvil', name: 'Anvil T', note: 'Typography-led, premium, most brandable as a standalone mark.' },
  { id: 'cube', name: 'Private App Cube', note: 'Emphasizes local ownership, privacy, and packaged software.' },
  { id: 'ingot', name: 'Workflow Ingot', note: 'Messy rows compressed into one forged workflow object.' },
  { id: 'workbench', name: 'Local Workbench', note: 'App window plus bench: practical software made locally.' },
];

export function LogoPrototypeGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {concepts.map((concept) => (
        <article key={concept.id} className="group rounded-[1.5rem] border border-white/10 bg-[#0f1011] p-5 transition hover:-translate-y-1 hover:border-[#d96b3b]/40 hover:bg-white/[0.045]">
          <div className="flex items-center justify-between">
            <LogoMark concept={concept.id} className="h-14 w-14" />
            <span className="rounded-full border border-[#d96b3b]/25 bg-[#d96b3b]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#ffd1bf]">proto</span>
          </div>
          <h3 className="mt-5 text-lg font-semibold tracking-[-0.04em] text-white">{concept.name}</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{concept.note}</p>
        </article>
      ))}
    </div>
  );
}

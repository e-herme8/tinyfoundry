import { cn } from '../../lib/cn';

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="TinyFoundry TF anvil logo" className={cn('overflow-visible', className)}>
      <defs>
        <linearGradient id="tf-anvil-forge" x1="10" x2="54" y1="8" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff2df" />
          <stop offset="0.48" stopColor="#d96b3b" />
          <stop offset="1" stopColor="#5e6ad2" />
        </linearGradient>
        <filter id="tf-anvil-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.7" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0.85 0 1 0 0 0.42 0 0 1 0 0.22 0 0 0 0.42 0" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path d="M10 14h36.5c5.9 0 9.6-1.55 12.5-4.8v11.4c-3.35 2.95-7.35 4.45-12.35 4.45H39v8.2h13.2v9.35H39v6.15h11.8l3.4 7.25H11.6l3.6-7.25h9.55V25.05H10V14Z" fill="url(#tf-anvil-forge)" filter="url(#tf-anvil-glow)" />

      <path d="M10 14h36.5c5.9 0 9.6-1.55 12.5-4.8" fill="none" stroke="#fff7ec" strokeOpacity="0.42" strokeWidth="2.15" strokeLinecap="round" />
      <path d="M39 25.05v24.05" fill="none" stroke="#08090a" strokeOpacity="0.36" strokeWidth="2" strokeLinecap="round" />
      <path d="M39 33.25h13.2" fill="none" stroke="#fff7ec" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
      <path d="M14.5 55.7h36" stroke="#fff7ec" strokeOpacity="0.24" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

type TinyFoundryLogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
};

export function TinyFoundryLogo({ className, markClassName, wordmarkClassName }: TinyFoundryLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] shadow-[0_0_35px_rgba(217,107,59,0.22)]">
        <LogoMark className={cn('h-7 w-7', markClassName)} />
      </span>
      <span className={cn('text-base font-semibold tracking-[-0.04em] text-white', wordmarkClassName)}>
        <span className="font-normal text-zinc-200">Tiny</span>Foundry
      </span>
    </span>
  );
}

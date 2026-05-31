import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type BadgeTone = 'neutral' | 'core' | 'pro';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

const tones: Record<BadgeTone, string> = {
  neutral: 'border-white/10 bg-white/5 text-zinc-300',
  core: 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100',
  pro: 'border-violet-300/20 bg-violet-300/10 text-violet-100',
};

export function Badge({ className, tone = 'neutral', ...props }: BadgeProps) {
  return <span className={cn('inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em]', tones[tone], className)} {...props} />;
}

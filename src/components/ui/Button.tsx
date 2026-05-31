import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type ButtonVariant = 'default' | 'ghost' | 'soft' | 'glow';
type ButtonSize = 'sm' | 'md' | 'icon';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variants: Record<ButtonVariant, string> = {
  default: 'bg-white text-zinc-950 hover:bg-zinc-200',
  ghost: 'bg-transparent text-zinc-300 hover:bg-white/10 hover:text-white',
  soft: 'bg-white/10 text-zinc-100 hover:bg-white/15 border border-white/10',
  glow: 'bg-violet-400 text-zinc-950 shadow-[0_0_40px_rgba(167,139,250,0.35)] hover:bg-violet-300',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  icon: 'h-10 w-10 p-0',
};

export function Button({ className, variant = 'default', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-violet-300/60 disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

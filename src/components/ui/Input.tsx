import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'h-11 w-full rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-violet-300/40 focus:bg-white/10 focus:ring-2 focus:ring-violet-300/10',
        className,
      )}
      {...props}
    />
  );
}

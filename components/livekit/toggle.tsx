'use client';

import * as React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cn } from '@/lib/utils';

const toggleVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-xl',
    'text-sm font-medium whitespace-nowrap',
    'cursor-pointer outline-none transition-all duration-200',
    'hover:scale-105 active:scale-95',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:ring-violet-500/50 focus-visible:ring-[3px] focus-visible:border-violet-500',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 hover:text-white',
        primary:
          'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 hover:text-white data-[state=on]:bg-red-500/20 data-[state=on]:text-red-400 data-[state=on]:hover:bg-red-500/30',
        secondary:
          'bg-slate-800/60 text-slate-400 hover:bg-slate-700/80 hover:text-white data-[state=on]:bg-gradient-to-r data-[state=on]:from-violet-600/30 data-[state=on]:to-cyan-600/30 data-[state=on]:text-cyan-300 data-[state=on]:border data-[state=on]:border-cyan-500/30 data-[state=on]:hover:from-violet-600/40 data-[state=on]:hover:to-cyan-600/40',
        outline:
          'border border-white/10 bg-transparent shadow-xs hover:bg-slate-800/50 hover:text-white',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 px-6 has-[>svg]:px-4',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };

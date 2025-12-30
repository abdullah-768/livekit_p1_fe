import * as React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'text-xs font-bold tracking-wider uppercase whitespace-nowrap',
    'inline-flex items-center justify-center gap-2 shrink-0 rounded-xl cursor-pointer outline-none transition-all duration-200',
    'hover:scale-105 active:scale-95',
    'focus-visible:border-violet-500 focus-visible:ring-violet-500/50 focus-visible:ring-[3px]',
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-invalid:ring-destructive/20 aria-invalid:border-destructive dark:aria-invalid:ring-destructive/40 ',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 hover:text-white',
        destructive: [
          'bg-gradient-to-r from-red-600 to-orange-600 text-white',
          'hover:from-red-500 hover:to-orange-500',
          'shadow-lg shadow-red-500/20 hover:shadow-red-500/30',
          'focus-visible:ring-red-500/40',
        ],
        outline: [
          'border border-white/10 bg-transparent',
          'hover:bg-slate-800/50 hover:text-white',
        ],
        primary: 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:from-violet-500 hover:to-cyan-500 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30',
        secondary: 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/80 hover:text-white',
        ghost: 'hover:bg-slate-800/50 hover:text-white',
        link: 'text-cyan-400 underline-offset-4 hover:underline hover:text-cyan-300',
      },
      size: {
        default: 'h-10 px-5 py-2 has-[>svg]:px-4',
        sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-11 px-6 has-[>svg]:px-4',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

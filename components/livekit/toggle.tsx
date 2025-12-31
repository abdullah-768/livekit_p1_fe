'use client';

import * as React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cn } from '@/lib/utils';

const toggleVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-full',
    'text-sm font-bold whitespace-nowrap',
    'cursor-pointer outline-none transition-all duration-200',
    'hover:scale-110 active:scale-95',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:ring-purple-300/50 focus-visible:ring-[3px] focus-visible:border-purple-400',
    'aria-invalid:ring-red-200 aria-invalid:border-red-400',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: 'bg-blue-100 text-blue-500 hover:bg-blue-200 hover:text-blue-600 border-2 border-blue-200',
        primary:
          'bg-blue-100 text-blue-500 hover:bg-blue-200 hover:text-blue-600 border-2 border-blue-200 data-[state=on]:bg-red-100 data-[state=on]:text-red-500 data-[state=on]:border-red-200 data-[state=on]:hover:bg-red-200',
        secondary:
          'bg-purple-100 text-purple-500 hover:bg-purple-200 hover:text-purple-600 border-2 border-purple-200 data-[state=on]:bg-gradient-to-r data-[state=on]:from-green-400 data-[state=on]:to-blue-500 data-[state=on]:text-white data-[state=on]:border-green-300 data-[state=on]:hover:from-green-500 data-[state=on]:hover:to-blue-600',
        outline:
          'border-2 border-blue-200 bg-white shadow-sm hover:bg-blue-50 hover:text-blue-600',
      },
      size: {
        default: 'h-11 px-5 py-2 has-[>svg]:px-4',
        sm: 'h-9 gap-1.5 px-4 has-[>svg]:px-3',
        lg: 'h-12 px-6 has-[>svg]:px-5',
        icon: 'size-12',
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

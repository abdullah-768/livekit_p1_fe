import * as React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'text-sm font-bold tracking-wide uppercase whitespace-nowrap',
    'inline-flex items-center justify-center gap-2 shrink-0 rounded-full cursor-pointer outline-none transition-all duration-200',
    'hover:scale-110 active:scale-95',
    'focus-visible:border-purple-400 focus-visible:ring-purple-300/50 focus-visible:ring-[3px]',
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-invalid:ring-red-200 aria-invalid:border-red-400',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700 border-2 border-blue-200',
        destructive: [
          'bg-gradient-to-r from-red-400 to-orange-400 text-white',
          'hover:from-red-500 hover:to-orange-500',
          'shadow-lg shadow-red-200 hover:shadow-red-300',
          'focus-visible:ring-red-300',
          'border-2 border-red-200',
        ],
        outline: [
          'border-2 border-blue-200 bg-white',
          'hover:bg-blue-50 hover:text-blue-600',
        ],
        primary: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white hover:from-green-500 hover:via-blue-600 hover:to-purple-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 border-2 border-white/50',
        secondary: 'bg-purple-100 text-purple-600 hover:bg-purple-200 hover:text-purple-700 border-2 border-purple-200',
        ghost: 'hover:bg-blue-50 hover:text-blue-600',
        link: 'text-blue-500 underline-offset-4 hover:underline hover:text-blue-600',
      },
      size: {
        default: 'h-12 px-6 py-2 has-[>svg]:px-5',
        sm: 'h-10 gap-1.5 px-4 has-[>svg]:px-3',
        lg: 'h-14 px-8 has-[>svg]:px-6 text-base',
        icon: 'size-12',
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

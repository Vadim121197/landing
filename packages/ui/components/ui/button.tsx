import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[3px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-muted-foreground',
  {
    variants: {
      variant: {
        default: 'background-size-300-100 transition-all duration-500 hover:background-position-100-0 bg-gradient-button font-semibold',
        secondary:
          'border-[3px] border-primary bg-secondary hover:border-primary-foreground hover:bg-primary-foreground active:border-[#074DFF] active:bg-[#074DFF] disabled:border-[#0E1F4B]',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-[1px] border-[rgba(8,46,143,0.60)] bg-secondary text-[#E3E3E3] hover:border-primary-foreground hover:bg-primary-foreground active:border-[#074DFF] active:bg-[#074DFF] disabled:border-[#0E1F4B]',
        ghost: 'rounded-none md:rounded-none hover:opacity-50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-[2.25rem] w-[6rem] md:h-[2.75rem] md:w-[11.313rem] px-[18px]',
        sm: 'p-0',
        md: 'md:h-[3.125rem] md:w-[9.063rem] px-6',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

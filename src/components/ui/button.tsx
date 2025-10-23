// Developed by doctorcodex
// Motion-enabled Button compatible with shadcn API shape (minimal)

"use client";

import { cn } from '@/lib/utils';
import { motion, type MotionProps } from 'framer-motion';
import React from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type MotionButtonProps = MotionProps & {
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type HTMLButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'>;

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground border-transparent hover:bg-primary/90',
  secondary: 'bg-[#14213d] text-white border-transparent hover:bg-[#101a2d]',
  outline: 'bg-transparent border-border text-foreground hover:bg-foreground/5',
  ghost: 'bg-transparent text-foreground border-transparent hover:bg-foreground/5',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
};

const Button = React.forwardRef<HTMLButtonElement, MotionButtonProps & HTMLButtonProps>(
  (
    {
      asChild = false,
      children,
      className,
      variant = 'primary',
      size = 'md',
      ...props
    },
    ref
  ) => {
    const classNames = cn(
      'inline-flex items-center justify-center rounded-lg border font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none',
      sizeClasses[size],
      variantClasses[variant],
      className
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement;
      return (
        <motion.span whileTap={{ scale: 0.96 }}>
          {React.cloneElement(child, {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            className: cn((child.props as any).className, classNames),
            ref,
            ...props,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any)}
        </motion.span>
      );
    }

    return (
      <motion.button whileTap={{ scale: 0.96 }} className={classNames} ref={ref} {...props}>
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };

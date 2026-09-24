import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', type = 'button', disabled, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-colors cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

    const variants = {
      primary: 'bg-[#010101] text-white hover:bg-[#1a1a1a] focus:ring-[#010101]',
      secondary: 'bg-zinc-100 text-[#010101] hover:bg-zinc-200 focus:ring-zinc-300',
      outline: 'border border-zinc-200 bg-white text-[#010101] hover:bg-zinc-50 hover:border-zinc-300 focus:ring-zinc-200',
      ghost: 'bg-transparent text-[#010101] hover:bg-zinc-100 focus:ring-zinc-200',
      danger: 'border border-red-200 bg-white text-red-600 hover:bg-red-50 hover:border-red-300 focus:ring-red-200',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-5 py-3 text-base',
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';


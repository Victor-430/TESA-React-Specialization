import { type InputHTMLAttributes, forwardRef, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  touched?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, touched, leftIcon, rightIcon, id, ...props }, ref) => {
    const hasError = Boolean(touched && error);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={id} className="block text-xs font-semibold text-zinc-700 tracking-wide uppercase">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-zinc-400 pointer-events-none flex items-center justify-center">
              {leftIcon}
            </div>
          )}
          <input
            id={id}
            ref={ref}
            className={cn(
              'w-full bg-white text-sm text-[#010101] placeholder-zinc-400 rounded-lg border py-2.5 px-3.5 outline-none transition-colors',
              'hover:border-zinc-400 focus:border-[#010101] focus:ring-1 focus:ring-[#010101]',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              hasError
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500 text-red-900'
                : 'border-zinc-300',
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3.5 flex items-center justify-center">
              {rightIcon}
            </div>
          )}
        </div>
        {hasError && <p className="text-xs text-red-600 font-medium mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';


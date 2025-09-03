import React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outlined';
  inputSize?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    type = 'text',
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    variant = 'default',
    inputSize = 'md',
    fullWidth = false,
    disabled,
    id,
    ...props
  }, ref) => {
    const inputId = id || `input-${React.useId()}`;

    const baseClasses = [
      'transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-0',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'placeholder:text-gray-400 dark:placeholder:text-gray-500',
    ];

    const variantClasses = {
      default: [
        'border border-gray-300 bg-white text-gray-900',
        'focus:ring-emerald-500 focus:border-emerald-500',
        'dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100',
        'dark:focus:border-emerald-400',
        error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
      ],
      filled: [
        'border border-transparent bg-gray-100 text-gray-900',
        'focus:ring-emerald-500 focus:bg-white focus:border-emerald-500',
        'dark:bg-gray-800 dark:text-gray-100',
        'dark:focus:bg-gray-900 dark:focus:border-emerald-400',
        error ? 'bg-red-50 focus:bg-red-50 focus:border-red-500 focus:ring-red-500' : '',
      ],
      outlined: [
        'border-2 border-gray-300 bg-transparent text-gray-900',
        'focus:ring-emerald-500 focus:border-emerald-500',
        'dark:border-gray-600 dark:text-gray-100',
        'dark:focus:border-emerald-400',
        error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
      ],
    };

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm rounded-md',
      md: 'px-4 py-2.5 text-sm rounded-lg',
      lg: 'px-4 py-3 text-base rounded-lg',
    };

    const iconPadding = {
      sm: leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '',
      md: leftIcon ? 'pl-11' : rightIcon ? 'pr-11' : '',
      lg: leftIcon ? 'pl-12' : rightIcon ? 'pr-12' : '',
    };

    const inputClasses = cn([
      ...baseClasses,
      ...(variantClasses[variant] || []),
      sizeClasses[inputSize],
      iconPadding[inputSize],
      fullWidth ? 'w-full' : '',
      className,
    ]);

    return (
      <div className={cn('space-y-2', fullWidth ? 'w-full' : '')}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <input
            type={type}
            className={inputClasses}
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p
            id={`${inputId}-error`}
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p
            id={`${inputId}-helper`}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
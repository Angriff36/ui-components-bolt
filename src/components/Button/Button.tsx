import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    rounded = 'lg',
    loading = false,
    disabled,
    children,
    icon,
    iconPosition = 'left',
    fullWidth = false,
    ...props
  }, ref) => {
    const baseClasses = [
      // Base button styles - mobile-first with 44px touch target
      'inline-flex items-center justify-center gap-2',
      'font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'active:scale-95 touch-manipulation', // iOS active state
      'hover:shadow-md transition-shadow', // Enhanced hover effects
      'min-h-[44px] min-w-[44px]', // iOS minimum touch target
      // Prevent text selection on buttons
      'select-none',
      // Ensure proper stacking
      'relative overflow-hidden',
      // Better focus styles
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    ];

    const variantClasses = {
      primary: [
        'bg-emerald-600 text-white shadow-sm',
        'hover:bg-emerald-700 focus-visible:ring-emerald-500',
        'active:bg-emerald-800',
        'disabled:bg-emerald-300',
      ],
      secondary: [
        'bg-gray-100 text-gray-900 shadow-sm',
        'hover:bg-gray-200 focus-visible:ring-gray-500',
        'active:bg-gray-300',
        'dark:bg-gray-800 dark:text-gray-100',
        'dark:hover:bg-gray-700 dark:active:bg-gray-600',
      ],
      outline: [
        'border border-gray-300 bg-white text-gray-700 shadow-sm',
        'hover:bg-gray-50 focus-visible:ring-gray-500',
        'active:bg-gray-100',
        'dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300',
        'dark:hover:bg-gray-800 dark:active:bg-gray-700',
      ],
      ghost: [
        'text-gray-700 hover:bg-gray-100',
        'focus-visible:ring-gray-500 active:bg-gray-200',
        'dark:text-gray-300 dark:hover:bg-gray-800',
        'dark:active:bg-gray-700',
      ],
      destructive: [
        'bg-red-600 text-white shadow-sm',
        'hover:bg-red-700 focus-visible:ring-red-500',
        'active:bg-red-800',
        'disabled:bg-red-300',
      ],
    };

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm min-h-[36px]', // Slightly smaller but still touch-friendly
      md: 'px-4 py-2.5 text-sm min-h-[44px]', // Default iOS touch target
      lg: 'px-6 py-3 text-base min-h-[48px]', // Larger for primary actions
      xl: 'px-8 py-4 text-lg min-h-[52px]', // XL for hero buttons
    };

    const roundedClasses = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    };

    const widthClasses = fullWidth ? 'w-full' : '';

    const combinedClasses = cn([
      ...baseClasses,
      ...(variantClasses[variant] || []),
      ...(sizeClasses[size] || []),
      roundedClasses[rounded],
      widthClasses,
      className
    ]);

    return (
      <button
        className={combinedClasses}
        disabled={disabled || loading}
        ref={ref}
        aria-disabled={disabled || loading}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <div className={cn("absolute inset-0 flex items-center justify-center bg-inherit", roundedClasses[rounded])}>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Content wrapper - hidden when loading */}
        <div className={`flex items-center gap-2 ${loading ? 'opacity-0' : ''}`}>
          {icon && iconPosition === 'left' && (
            <span className="flex-shrink-0">{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="flex-shrink-0">{icon}</span>
          )}
        </div>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };

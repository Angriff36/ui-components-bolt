import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
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
      'rounded-lg font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'active:scale-95 touch-manipulation', // iOS active state
      'min-h-[44px] min-w-[44px]', // iOS minimum touch target
      // Prevent text selection on buttons
      'select-none',
      // Ensure proper stacking
      'relative overflow-hidden',
    ];

    const variantClasses = {
      primary: [
        'bg-blue-600 text-white shadow-sm',
        'hover:bg-blue-700 focus:ring-blue-500',
        'active:bg-blue-800',
      ],
      secondary: [
        'bg-gray-100 text-gray-900 shadow-sm',
        'hover:bg-gray-200 focus:ring-gray-500',
        'active:bg-gray-300',
        'dark:bg-gray-800 dark:text-gray-100',
        'dark:hover:bg-gray-700 dark:active:bg-gray-600',
      ],
      outline: [
        'border border-gray-300 bg-white text-gray-700 shadow-sm',
        'hover:bg-gray-50 focus:ring-gray-500',
        'active:bg-gray-100',
        'dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300',
        'dark:hover:bg-gray-800 dark:active:bg-gray-700',
      ],
      ghost: [
        'text-gray-700 hover:bg-gray-100',
        'focus:ring-gray-500 active:bg-gray-200',
        'dark:text-gray-300 dark:hover:bg-gray-800',
        'dark:active:bg-gray-700',
      ],
      destructive: [
        'bg-red-600 text-white shadow-sm',
        'hover:bg-red-700 focus:ring-red-500',
        'active:bg-red-800',
      ],
    };

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm min-h-[36px]', // Slightly smaller but still touch-friendly
      md: 'px-4 py-2.5 text-sm min-h-[44px]', // Default iOS touch target
      lg: 'px-6 py-3 text-base min-h-[48px]', // Larger for primary actions
      xl: 'px-8 py-4 text-lg min-h-[52px]', // XL for hero buttons
    };

    const widthClasses = fullWidth ? 'w-full' : '';

    const combinedClasses = [
      ...baseClasses,
      ...(variantClasses[variant] || []),
      ...(sizeClasses[size] || []),
      widthClasses,
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        className={combinedClasses}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-lg">
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

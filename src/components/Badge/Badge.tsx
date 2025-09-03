import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  dot?: boolean;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({
    className,
    variant = 'default',
    size = 'md',
    rounded = 'full',
    dot = false,
    children,
    ...props
  }, ref) => {
    const baseClasses = [
      'inline-flex items-center justify-center font-medium',
      'transition-colors duration-200',
      dot ? 'w-2 h-2 p-0' : '',
    ];

    const variantClasses = {
      default: [
        'bg-gray-100 text-gray-800',
        'dark:bg-gray-800 dark:text-gray-200',
      ],
      secondary: [
        'bg-gray-200 text-gray-700',
        'dark:bg-gray-700 dark:text-gray-300',
      ],
      success: [
        'bg-emerald-100 text-emerald-800',
        'dark:bg-emerald-900 dark:text-emerald-200',
      ],
      warning: [
        'bg-yellow-100 text-yellow-800',
        'dark:bg-yellow-900 dark:text-yellow-200',
      ],
      danger: [
        'bg-red-100 text-red-800',
        'dark:bg-red-900 dark:text-red-200',
      ],
      info: [
        'bg-blue-100 text-blue-800',
        'dark:bg-blue-900 dark:text-blue-200',
      ],
    };

    const sizeClasses = dot ? {} : {
      sm: 'px-2 py-1 text-xs',
      md: 'px-2.5 py-1.5 text-xs',
      lg: 'px-3 py-2 text-sm',
    };

    const roundedClasses = {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    };

    const combinedClasses = cn([
      ...baseClasses,
      ...(variantClasses[variant] || []),
      ...(dot ? [] : sizeClasses[size] || []),
      roundedClasses[rounded],
      className,
    ]);

    return (
      <div
        className={combinedClasses}
        ref={ref}
        {...props}
      >
        {!dot && children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
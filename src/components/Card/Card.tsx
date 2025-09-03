import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  fullWidth?: boolean;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    variant = 'default',
    padding = 'md',
    interactive = false,
    fullWidth = false,
    children,
    ...props
  }, ref) => {
    const baseClasses = [
      'rounded-lg transition-all duration-200',
      // Touch-friendly for interactive cards
      interactive ? 'cursor-pointer touch-manipulation' : '',
      interactive ? 'active:scale-[0.98]' : '',
      // Width
      fullWidth ? 'w-full' : '',
    ];

    const variantClasses = {
      default: [
        'bg-white border border-gray-200',
        'dark:bg-gray-900 dark:border-gray-700',
        interactive ? 'hover:shadow-md hover:border-gray-300' : '',
        interactive ? 'dark:hover:border-gray-600' : '',
      ],
      outlined: [
        'bg-white border-2 border-gray-300',
        'dark:bg-gray-900 dark:border-gray-600',
        interactive ? 'hover:border-blue-500 hover:shadow-md' : '',
        interactive ? 'dark:hover:border-blue-400' : '',
      ],
      elevated: [
        'bg-white shadow-lg border border-gray-100',
        'dark:bg-gray-900 dark:border-gray-800',
        interactive ? 'hover:shadow-xl' : '',
      ],
      filled: [
        'bg-gray-50 border border-gray-200',
        'dark:bg-gray-800 dark:border-gray-700',
        interactive ? 'hover:bg-gray-100 hover:shadow-md' : '',
        interactive ? 'dark:hover:bg-gray-750' : '',
      ],
    };

    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    };

    const combinedClasses = [
      ...baseClasses,
      ...(variantClasses[variant] || []),
      ...(paddingClasses[padding] || []),
      className
    ].filter(Boolean).join(' ');

    return (
      <div
        className={combinedClasses}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, title, subtitle, action, children, ...props }, ref) => {
    const combinedClasses = [
      'flex items-start justify-between space-y-1.5 pb-4',
      // Ensure proper spacing on mobile
      'flex-col space-y-2 sm:flex-row sm:space-y-0',
      className
    ].filter(Boolean).join(' ');

    return (
      <div
        className={combinedClasses}
        ref={ref}
        {...props}
      >
        <div className="space-y-1 flex-1 min-w-0">
          {title && (
            <h3 className="text-lg font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          )}
          {children}
        </div>
        {action && (
          <div className="flex-shrink-0 self-start">
            {action}
          </div>
        )}
      </div>
    );
  }
);

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    const combinedClasses = [
      'text-sm text-gray-600 dark:text-gray-300',
      className
    ].filter(Boolean).join(' ');

    return (
      <div
        className={combinedClasses}
        ref={ref}
        {...props}
      />
    );
  }
);

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    const combinedClasses = [
      'flex items-center pt-4',
      // Mobile-friendly footer layout
      'flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2',
      className
    ].filter(Boolean).join(' ');

    return (
      <div
        className={combinedClasses}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };

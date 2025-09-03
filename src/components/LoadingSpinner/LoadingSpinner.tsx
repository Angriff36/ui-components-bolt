import React from 'react';
import { cn } from '../../utils/cn';

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  thickness?: 'thin' | 'normal' | 'thick';
  text?: string;
  centered?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  thickness = 'normal',
  text,
  centered = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'border-emerald-500',
    secondary: 'border-gray-500',
    white: 'border-white',
    gray: 'border-gray-400',
  };

  const thicknessClasses = {
    thin: 'border',
    normal: 'border-2',
    thick: 'border-4',
  };

  const spinnerClasses = cn([
    'border-t-transparent rounded-full animate-spin',
    sizeClasses[size],
    colorClasses[color],
    thicknessClasses[thickness],
  ]);

  const containerClasses = cn([
    centered ? 'flex flex-col items-center justify-center gap-2' : 'inline-flex items-center gap-2',
    className
  ]);

  const content = (
    <>
      <div
        className={spinnerClasses}
        role="status"
        aria-label={text || "Loading"}
      />
      {text && (
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {text}
        </span>
      )}
      <span className="sr-only">{text || "Loading..."}</span>
    </>
  );

  if (text || centered) {
    return (
      <div className={containerClasses}>
        {content}
      </div>
    );
  }

  return (
    <div
      className={spinnerClasses}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export { LoadingSpinner };

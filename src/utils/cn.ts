import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge CSS classes using clsx
 * This provides consistent class merging throughout the component library
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
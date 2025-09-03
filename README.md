# @prep-chef/ui-components

Reusable UI components for the Prep Chef application.

## Features

- 🎨 **Modern Design System**: Consistent styling with Tailwind CSS
- 📱 **Mobile-First**: Responsive design with touch-friendly interactions
- ♿ **Accessible**: WCAG compliant components with proper ARIA attributes
- 🌙 **Dark Mode**: Built-in dark mode support
- 🔧 **TypeScript**: Full TypeScript support with comprehensive types
- ⚡ **Performance**: Optimized bundle size and runtime performance
- 🧪 **Tested**: Comprehensive test coverage with Vitest

## Purpose

This package provides a collection of reusable UI components that maintain consistency across the application:

- **Button Component**: Flexible button with multiple variants
- **Card Components**: Card container with header, content, and footer
- **Input Component**: Form input with validation and icons
- **Badge Component**: Status and category indicators
- **Loading Spinner**: Loading indicator component
- **Consistent Styling**: Unified design system components

## Installation

```bash
npm install @prep-chef/ui-components
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install react react-dom tailwindcss
```

## Primary Exports

### Components
- `Button` - Flexible button component with multiple variants
- `Card` - Main card container component
- `CardHeader` - Card header section
- `CardContent` - Card content section
- `CardFooter` - Card footer section
- `Input` - Form input component with validation
- `Badge` - Status and category indicators
- `LoadingSpinner` - Loading indicator component

### Types
- `ButtonProps` - Props for the Button component
- `CardProps` - Props for the Card component
- `CardHeaderProps` - Props for the CardHeader component
- `CardContentProps` - Props for the CardContent component
- `CardFooterProps` - Props for the CardFooter component
- `InputProps` - Props for the Input component
- `BadgeProps` - Props for the Badge component
- `LoadingSpinnerProps` - Props for the LoadingSpinner component

### Utilities
- `cn` - Class name utility function for merging Tailwind classes

## Usage

```typescript
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Input,
  Badge,
  LoadingSpinner
} from '@prep-chef/ui-components';

// Use Button component
<Button variant="primary" loading={isLoading} onClick={handleClick}>
  Click me
</Button>

// Use Card components
<Card>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>

// Use Input component
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error={emailError}
  helperText="We'll never share your email"
/>

// Use Badge component
<Badge variant="success">Active</Badge>
<Badge variant="warning" size="sm">Pending</Badge>

// Use Loading Spinner
<LoadingSpinner size="lg" text="Loading..." centered />
```

## Component Variants

### Button Variants
- `primary` - Main call-to-action buttons (emerald)
- `secondary` - Secondary actions (gray)
- `outline` - Outlined buttons
- `ghost` - Minimal buttons without background
- `destructive` - Dangerous actions (red)

### Card Variants
- `default` - Standard card with border
- `outlined` - Card with thicker border
- `elevated` - Card with shadow
- `filled` - Card with background color

### Badge Variants
- `default` - Standard gray badge
- `secondary` - Secondary gray badge
- `success` - Success states (emerald)
- `warning` - Warning states (yellow)
- `danger` - Error states (red)
- `info` - Information states (blue)

## Dependencies

- `lucide-react` - Icon library for consistent iconography
- `clsx` - Utility for constructing className strings
- `react` - React library (peer dependency)
- `react-dom` - React DOM library (peer dependency)
- `tailwindcss` - CSS framework (peer dependency)

## Development

```bash
# Install dependencies
npm install

# Watch for changes during development
npm run dev

# Build the package
npm run build

# Run type checking
npm run type-check

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Clean build directory
npm run clean
```

## Contributing

1. Follow the existing code style and conventions
2. Write tests for new components and features
3. Ensure all components are accessible and mobile-friendly
4. Update documentation for any new exports or changes
5. Run the full test suite before submitting changes

## Design System

This package follows a consistent design system:

- **Colors**: Emerald primary, with semantic colors for states
- **Spacing**: 8px grid system using Tailwind spacing scale
- **Typography**: Consistent font weights and sizes
- **Shadows**: Subtle elevation system
- **Borders**: Consistent border radius and widths
- **Touch Targets**: Minimum 44px for mobile accessibility
<parameter name="filePath">c:\Projects\Prep\ChefPrepBoltDownload\project\packages\ui-components\README.md

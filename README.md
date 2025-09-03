# @prep-chef/ui-components

Reusable UI components for the Prep Chef application.

## Purpose

This package provides a collection of reusable UI components that maintain consistency across the application:

- **Button Component**: Flexible button with multiple variants
- **Card Components**: Card container with header, content, and footer
- **Loading Spinner**: Loading indicator component
- **Consistent Styling**: Unified design system components

## Installation

```bash
npm install @prep-chef/ui-components
```

## Primary Exports

### Components
- `Button` - Flexible button component with multiple variants
- `Card` - Main card container component
- `CardHeader` - Card header section
- `CardContent` - Card content section
- `CardFooter` - Card footer section
- `LoadingSpinner` - Loading indicator component

### Types
- `ButtonProps` - Props for the Button component
- `CardProps` - Props for the Card component
- `CardHeaderProps` - Props for the CardHeader component
- `CardContentProps` - Props for the CardContent component
- `CardFooterProps` - Props for the CardFooter component
- `LoadingSpinnerProps` - Props for the LoadingSpinner component

## Usage

```typescript
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  LoadingSpinner
} from '@prep-chef/ui-components';

// Use Button component
<Button variant="primary" onClick={handleClick}>
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
    <Button>Action</Button>
  </CardFooter>
</Card>

// Use Loading Spinner
<LoadingSpinner size="large" />
```

## Dependencies

- `lucide-react` - Icon library
- `react` - React library
- `tailwindcss` - CSS framework (peer dependency)

## Development

```bash
# Build the package
npm run build

# Watch for changes during development
npm run dev

# Run type checking
npm run type-check
```</content>
<parameter name="filePath">c:\Projects\Prep\ChefPrepBoltDownload\project\packages\ui-components\README.md

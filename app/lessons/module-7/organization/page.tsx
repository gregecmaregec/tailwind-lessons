import LessonLayout from "@/components/LessonLayout";

export default function OrganizationLesson() {
  return (
    <LessonLayout
      title="Component Organization"
      description="Learn best practices for organizing, structuring, and reusing Tailwind components"
      moduleNumber={7}
      lessonNumber={1}
      prevLesson={{
        title: "Landing Page",
        href: "/lessons/module-6/landing-page",
      }}
      nextLesson={{
        title: "Performance Optimization",
        href: "/lessons/module-7/performance",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Component Organization
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Master component organization, reusability patterns, and code structure for maintainable Tailwind projects.
        </p>

        {/* Component Structure */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Component-Based Structure
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`// ✅ Good: Reusable Button Component
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}) {
  const baseStyles = "font-semibold rounded-lg transition-colors"

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-slate-200 hover:bg-slate-300 text-slate-900",
    danger: "bg-red-600 hover:bg-red-700 text-white"
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }

  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]}\`}
      {...props}
    >
      {children}
    </button>
  )
}`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors px-3 py-1.5 text-sm">
            Small Primary
          </button>
          <button className="bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold rounded-lg transition-colors px-4 py-2 text-base">
            Medium Secondary
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors px-6 py-3 text-lg">
            Large Danger
          </button>
        </div>

        {/* Extracting Patterns */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          When to Extract Components
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-6 rounded-r-xl">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ DO Extract When:</h4>
            <ul className="text-green-700 dark:text-green-300 space-y-2 text-sm">
              <li>• The pattern is used 3+ times across your codebase</li>
              <li>• The component has complex state or behavior logic</li>
              <li>• You need to enforce consistent styling across the app</li>
              <li>• The component will be used in multiple projects</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-6 rounded-r-xl">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ DON'T Extract When:</h4>
            <ul className="text-red-700 dark:text-red-300 space-y-2 text-sm">
              <li>• It's only used once or twice (premature abstraction)</li>
              <li>• The component is simple markup with no logic</li>
              <li>• Extracting would make the code harder to understand</li>
              <li>• You're just trying to reduce class names (use @apply sparingly instead)</li>
            </ul>
          </div>
        </div>

        {/* Composition Patterns */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Composition Patterns
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`// Card component with composition
export function Card({ children, className = "" }) {
  return (
    <div className={\`bg-white dark:bg-slate-800 rounded-xl
      shadow-lg border border-slate-200 dark:border-slate-700
      \${className}\`}>
      {children}
    </div>
  )
}

Card.Header = function CardHeader({ children }) {
  return (
    <div className="p-6 border-b border-slate-200 dark:border-slate-700">
      {children}
    </div>
  )
}

Card.Body = function CardBody({ children }) {
  return <div className="p-6">{children}</div>
}

Card.Footer = function CardFooter({ children }) {
  return (
    <div className="p-6 border-t border-slate-200 dark:border-slate-700">
      {children}
    </div>
  )
}

// Usage
<Card>
  <Card.Header>
    <h3>Card Title</h3>
  </Card.Header>
  <Card.Body>
    <p>Card content goes here</p>
  </Card.Body>
  <Card.Footer>
    <button>Action</button>
  </Card.Footer>
</Card>`}</code>
          </pre>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 mb-8">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Composed Card</h3>
          </div>
          <div className="p-6">
            <p className="text-slate-600 dark:text-slate-400">
              This card uses composition to allow flexible content while maintaining consistent styling.
            </p>
          </div>
          <div className="p-6 border-t border-slate-200 dark:border-slate-700">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Action Button
            </button>
          </div>
        </div>

        {/* Using @apply Correctly */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Using @apply (Sparingly)
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`/* styles/components.css */

/* ✅ Good use of @apply - base component styles */
@layer components {
  .btn {
    @apply font-semibold py-2 px-4 rounded-lg
           transition-colors focus:outline-none
           focus:ring-2 focus:ring-offset-2;
  }

  .btn-primary {
    @apply btn bg-blue-600 hover:bg-blue-700
           text-white focus:ring-blue-500;
  }

  .btn-secondary {
    @apply btn bg-slate-200 hover:bg-slate-300
           text-slate-900 focus:ring-slate-500;
  }
}

/* ❌ Bad use of @apply - one-off styles */
.hero-section {
  @apply py-20 px-8 text-center; /* Just use classes directly */
}

/* ✅ Good - complex repeated pattern */
.input-base {
  @apply w-full px-4 py-3 bg-white dark:bg-slate-900
         border border-slate-300 dark:border-slate-600
         rounded-lg text-slate-900 dark:text-white
         placeholder-slate-400 dark:placeholder-slate-500
         focus:outline-none focus:ring-2 focus:ring-blue-500
         focus:border-transparent transition-colors;
}`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <button className="font-semibold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500">
            Primary Button
          </button>
          <button className="font-semibold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-slate-200 hover:bg-slate-300 text-slate-900 focus:ring-slate-500">
            Secondary Button
          </button>
        </div>

        {/* Variant Patterns */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Variant Patterns with clsx/classnames
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`import clsx from 'clsx'

export function Alert({ type = 'info', children }) {
  return (
    <div className={clsx(
      // Base styles
      'p-4 rounded-lg border-l-4',

      // Variant styles
      {
        'bg-blue-50 dark:bg-blue-900/20 border-blue-500
         text-blue-900 dark:text-blue-100': type === 'info',

        'bg-green-50 dark:bg-green-900/20 border-green-500
         text-green-900 dark:text-green-100': type === 'success',

        'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500
         text-yellow-900 dark:text-yellow-100': type === 'warning',

        'bg-red-50 dark:bg-red-900/20 border-red-500
         text-red-900 dark:text-red-100': type === 'error',
      }
    )}>
      {children}
    </div>
  )
}`}</code>
          </pre>
        </div>

        <div className="space-y-4 mb-8">
          <div className="p-4 rounded-lg border-l-4 bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-900 dark:text-blue-100">
            Info alert with variant styling
          </div>
          <div className="p-4 rounded-lg border-l-4 bg-green-50 dark:bg-green-900/20 border-green-500 text-green-900 dark:text-green-100">
            Success alert with variant styling
          </div>
          <div className="p-4 rounded-lg border-l-4 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 text-yellow-900 dark:text-yellow-100">
            Warning alert with variant styling
          </div>
          <div className="p-4 rounded-lg border-l-4 bg-red-50 dark:bg-red-900/20 border-red-500 text-red-900 dark:text-red-100">
            Error alert with variant styling
          </div>
        </div>

        {/* File Organization */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          File & Folder Organization
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`project/
├── components/
│   ├── ui/               # Base reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   ├── forms/            # Form-specific components
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   └── features/         # Feature-specific components
│       ├── dashboard/
│       └── profile/
├── styles/
│   ├── globals.css       # Global styles & @layer
│   └── components.css    # Component-level @apply
└── utils/
    └── classNames.ts     # Helper functions for className logic`}</code>
          </pre>
        </div>

        {/* Config Organization */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Config Organization
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          primary: '#3B82F6',
          secondary: '#8B5CF6',
        },
        // Alias common colors
        gray: colors.slate,
      },
      // Design system spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // Typography scale
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '800' }],
        'heading': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      // Component-specific utilities
      borderRadius: {
        'card': '1rem',
        'button': '0.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}`}</code>
          </pre>
        </div>

        {/* Design Tokens */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Design Tokens Approach
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`// utils/tokens.ts
export const tokens = {
  colors: {
    brand: {
      primary: 'bg-blue-600',
      secondary: 'bg-purple-600',
    },
    surface: {
      base: 'bg-white dark:bg-slate-800',
      raised: 'bg-white dark:bg-slate-700',
    },
    text: {
      primary: 'text-slate-900 dark:text-white',
      secondary: 'text-slate-600 dark:text-slate-400',
    },
  },
  spacing: {
    card: 'p-6',
    section: 'py-12 px-6',
  },
  borders: {
    card: 'border border-slate-200 dark:border-slate-700',
    input: 'border-2 border-slate-300 dark:border-slate-600',
  },
}

// Usage
<div className={\`\${tokens.colors.surface.base} \${tokens.spacing.card} \${tokens.borders.card}\`}>
  <h2 className={tokens.colors.text.primary}>Title</h2>
  <p className={tokens.colors.text.secondary}>Description</p>
</div>`}</code>
          </pre>
        </div>

        {/* Documentation */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Component Documentation
        </h2>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-8">
          <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl">
            <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
              <code>{`/**
 * Button component with multiple variants and sizes
 *
 * @param {string} variant - 'primary' | 'secondary' | 'danger'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {ReactNode} children - Button content
 * @param {object} props - Additional HTML button props
 *
 * @example
 * <Button variant="primary" size="lg">Click Me</Button>
 */
export function Button({ variant = 'primary', size = 'md', children, ...props }) {
  // Component implementation
}`}</code>
            </pre>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Best Practices
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <p>Prefer component extraction over @apply for reusable patterns</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Use composition to build flexible, maintainable components</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Keep components focused - each should have a single responsibility</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Document component APIs with PropTypes or TypeScript</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Create a design system with consistent tokens and patterns</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

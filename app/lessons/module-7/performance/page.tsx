import LessonLayout from "@/components/LessonLayout";

export default function PerformanceLesson() {
  return (
    <LessonLayout
      title="Performance Optimization"
      description="Optimize your Tailwind CSS setup for production with PurgeCSS, JIT mode, and best practices"
      moduleNumber={7}
      lessonNumber={2}
      prevLesson={{
        title: "Component Organization",
        href: "/lessons/module-7/organization",
      }}
      nextLesson={{
        title: "Accessibility",
        href: "/lessons/module-7/accessibility",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Performance Optimization
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Learn to optimize Tailwind CSS for production with tree-shaking, JIT mode, and performance best practices.
        </p>

        {/* Bundle Size Impact */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Understanding Bundle Size
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-4">❌ Without Optimization</h4>
            <div className="space-y-3 text-red-700 dark:text-red-300 text-sm">
              <div className="flex justify-between">
                <span>Full Tailwind CSS:</span>
                <span className="font-bold">~3.5 MB</span>
              </div>
              <div className="flex justify-between">
                <span>Gzipped:</span>
                <span className="font-bold">~300 KB</span>
              </div>
              <p className="pt-3 border-t border-red-200 dark:border-red-800">
                All utilities included, even unused ones
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">✅ With Optimization</h4>
            <div className="space-y-3 text-green-700 dark:text-green-300 text-sm">
              <div className="flex justify-between">
                <span>Purged CSS:</span>
                <span className="font-bold">~10-20 KB</span>
              </div>
              <div className="flex justify-between">
                <span>Gzipped:</span>
                <span className="font-bold">~3-5 KB</span>
              </div>
              <p className="pt-3 border-t border-green-200 dark:border-green-800">
                Only classes you actually use
              </p>
            </div>
          </div>
        </div>

        {/* JIT Mode */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Just-In-Time (JIT) Mode
        </h2>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-8">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            JIT mode generates styles on-demand as you author your templates. Enabled by default in Tailwind CSS v3+.
          </p>

          <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-6">
            <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
              <code>{`// tailwind.config.js
module.exports = {
  mode: 'jit', // Enabled by default in v3+
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // ...rest of config
}`}</code>
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Benefits</h5>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Lightning-fast build times</li>
                <li>• All variants enabled by default</li>
                <li>• Arbitrary value support</li>
                <li>• Smaller CSS in development</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Features</h5>
              <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                <li>• Generate any utility on-demand</li>
                <li>• No build step for development</li>
                <li>• Stackable variants</li>
                <li>• Better DX overall</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Configuration */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Content Configuration
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`// tailwind.config.js
module.exports = {
  content: [
    // ✅ Include all template files
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

    // ✅ Include config files that use classes
    './tailwind.config.js',

    // ❌ Don't include node_modules unless necessary
    // './node_modules/@my-company/design-system/**/*.js',
  ],

  // Safelist specific classes if needed
  safelist: [
    'bg-red-500',
    'bg-green-500',
    {
      pattern: /bg-(red|green|blue)-(400|500|600)/,
    },
  ],
}`}</code>
          </pre>
        </div>

        {/* Optimization Strategies */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Optimization Strategies
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">1. Minimize Arbitrary Values</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">❌ Less Optimal</div>
                <code className="text-xs bg-slate-100 dark:bg-slate-900 px-3 py-2 rounded block">
                  className="w-[237px] h-[143px]"
                </code>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  Creates unique utility for every arbitrary value
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">✅ Better</div>
                <code className="text-xs bg-slate-100 dark:bg-slate-900 px-3 py-2 rounded block">
                  className="w-60 h-36"
                </code>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  Uses existing utilities from your scale
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">2. Avoid Dynamic Class Names</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">❌ Won't Work</div>
                <code className="text-xs bg-slate-100 dark:bg-slate-900 px-3 py-2 rounded block">
                  className={`text-$\{color\}-500`}
                </code>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  PurgeCSS can't detect dynamic strings
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">✅ Works</div>
                <code className="text-xs bg-slate-100 dark:bg-slate-900 px-3 py-2 rounded block">
                  className={`$\{colorMap[color]\}`}
                </code>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                  Use complete class names from a map
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">3. Use CSS Variables for Themes</h4>
            <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg">
              <pre className="text-slate-100 dark:text-slate-200 text-xs overflow-x-auto">
                <code>{`/* globals.css */
:root {
  --color-primary: 59 130 246; /* rgb values */
  --color-secondary: 139 92 246;
}

/* Use with opacity modifiers */
<div className="bg-[rgb(var(--color-primary))]
                text-[rgb(var(--color-primary)/0.8)]">
  Themed content
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Production Build */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Production Build Configuration
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`// package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",

    // Analyze bundle size
    "analyze": "ANALYZE=true next build"
  }
}

// next.config.js - Bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // Your Next.js config
})`}</code>
          </pre>
        </div>

        {/* Plugin Optimization */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Plugin Usage Optimization
        </h2>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-8">
          <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-lg mb-4">
            <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
              <code>{`// tailwind.config.js
module.exports = {
  plugins: [
    // Only include plugins you actually use
    require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'), // Remove if unused
    // require('@tailwindcss/aspect-ratio'), // Remove if unused
  ],

  // Disable unused core plugins
  corePlugins: {
    // float: false, // Disable if you don't use float utilities
    // backdropOpacity: false,
  },
}`}</code>
            </pre>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Each plugin adds to your bundle size. Only include what you need.
          </p>
        </div>

        {/* Performance Checklist */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Performance Checklist
        </h2>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-8">
          <div className="space-y-4">
            {[
              { label: 'Use JIT mode (default in v3+)', checked: true },
              { label: 'Configure content paths correctly', checked: true },
              { label: 'Remove unused plugins', checked: true },
              { label: 'Minimize arbitrary values', checked: true },
              { label: 'Use complete class names (no dynamic interpolation)', checked: true },
              { label: 'Enable CSS minification in production', checked: true },
              { label: 'Analyze bundle size regularly', checked: false },
              { label: 'Monitor performance metrics', checked: false },
            ].map((item, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={item.checked}
                  readOnly
                  className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-blue-600"
                />
                <span className="text-slate-700 dark:text-slate-300">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Monitoring */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Monitoring Performance
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Lighthouse</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
              Measure overall page performance and CSS delivery
            </p>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">95+</div>
            <div className="text-xs text-blue-600 dark:text-blue-400">Target Score</div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Bundle Size</h4>
            <p className="text-sm text-green-700 dark:text-green-300 mb-3">
              Track CSS file size over time
            </p>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">&lt;10KB</div>
            <div className="text-xs text-green-600 dark:text-green-400">Gzipped Target</div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Load Time</h4>
            <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
              Monitor CSS load and parse time
            </p>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">&lt;100ms</div>
            <div className="text-xs text-purple-600 dark:text-purple-400">Parse Time</div>
          </div>
        </div>

        {/* Advanced Optimization */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Advanced Optimization
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`// Critical CSS extraction (for above-the-fold content)
import { extractCritical } from '@emotion/server'

const { html, css, ids } = extractCritical(renderedHtml)

// Split CSS by route/page
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
}

// Preload CSS files
<link
  rel="preload"
  href="/styles/critical.css"
  as="style"
  onLoad="this.onload=null;this.rel='stylesheet'"
/>`}</code>
          </pre>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Best Practices
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <p>JIT mode is enabled by default in v3+ and provides the best DX and performance</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Configure content paths to include all template files but exclude node_modules</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Use complete class names - avoid string interpolation for dynamic classes</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Regularly analyze your bundle with tools like Bundle Analyzer</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Monitor performance metrics and set budgets for CSS file sizes</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

import LessonLayout from "@/components/LessonLayout";

export default function CustomUtilitiesLesson() {
  return (
    <LessonLayout
      title="Custom Utilities & Plugins"
      description="Extend Tailwind with arbitrary values, custom utilities, and plugins"
      moduleNumber={5}
      lessonNumber={5}
      prevLesson={{
        title: "Dark Mode",
        href: "/lessons/module-5/dark-mode",
      }}
      nextLesson={{
        title: "Cards & Containers",
        href: "/lessons/module-6/cards",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Custom Utilities & Plugins
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Learn to extend Tailwind beyond its defaults with arbitrary values, custom utilities, and the plugin system.
        </p>

        {/* Arbitrary Values */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Arbitrary Values
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Use square brackets to apply any CSS value on-the-fly without extending the config.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="h-32 bg-[#8B5CF6] rounded-lg mb-3"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">bg-[#8B5CF6]</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Custom hex color</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="h-[137px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-3"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">h-[137px]</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Arbitrary height</p>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-xl mb-8">
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">More Arbitrary Value Examples</h4>
          <div className="space-y-3 font-mono text-sm text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <code className="text-blue-600 dark:text-blue-400">w-[762px]</code>
              <span>- Custom width in pixels</span>
            </div>
            <div className="flex gap-3">
              <code className="text-purple-600 dark:text-purple-400">top-[117px]</code>
              <span>- Custom positioning</span>
            </div>
            <div className="flex gap-3">
              <code className="text-green-600 dark:text-green-400">text-[22px]</code>
              <span>- Custom font size</span>
            </div>
            <div className="flex gap-3">
              <code className="text-orange-600 dark:text-orange-400">bg-[url('/image.png')]</code>
              <span>- Background image</span>
            </div>
            <div className="flex gap-3">
              <code className="text-pink-600 dark:text-pink-400">grid-cols-[200px_1fr_1fr]</code>
              <span>- Custom grid template</span>
            </div>
          </div>
        </div>

        {/* CSS Variables */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Using CSS Variables
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Reference CSS custom properties in your Tailwind classes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="h-32 bg-[var(--primary-color)] rounded-lg mb-3" style={{ ['--primary-color' as string]: '#3B82F6' }}></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">bg-[var(--primary-color)]</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Using CSS variables</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="h-[var(--box-height)] bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mb-3" style={{ ['--box-height' as string]: '128px' }}></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">h-[var(--box-height)]</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Dynamic sizing</p>
          </div>
        </div>

        {/* Extending Config */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Extending the Config
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3B82F6',
        'brand-purple': '#8B5CF6',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="h-24 bg-[#3B82F6] rounded-lg mb-3"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">bg-brand-blue</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="p-[32rem] w-full h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mb-3 flex items-center justify-center"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">p-128</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-[2rem] mb-3"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">rounded-4xl</code>
          </div>
        </div>

        {/* Custom Fonts */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Adding Custom Fonts
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
    },
  },
}`}</code>
          </pre>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">font-display</p>
            <code className="text-xs text-slate-600 dark:text-slate-400">Perfect for headings</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <p className="text-slate-900 dark:text-white mb-2">font-body</p>
            <code className="text-xs text-slate-600 dark:text-slate-400">Great for body text</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <p className="font-mono text-slate-900 dark:text-white mb-2">const code = "font-mono";</p>
            <code className="text-xs text-slate-600 dark:text-slate-400">Code snippets</code>
          </div>
        </div>

        {/* Arbitrary Variants */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Arbitrary Variants
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Target any state or selector using arbitrary variant syntax.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="[&>*]:p-4 [&>*]:bg-blue-100 [&>*]:dark:bg-blue-900/20 [&>*]:rounded-lg space-y-2">
              <div>Child 1</div>
              <div>Child 2</div>
              <div>Child 3</div>
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">[&gt;*]:p-4 [&gt;*]:bg-blue-100</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="supports-[display:grid]:grid grid-cols-2 gap-2">
              <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded-lg">Grid 1</div>
              <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded-lg">Grid 2</div>
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">supports-[display:grid]:grid</code>
          </div>
        </div>

        {/* Plugin System */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Creating Custom Plugins
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities, addComponents, theme }) {
      // Add custom utilities
      addUtilities({
        '.gradient-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
      })

      // Add custom components
      addComponents({
        '.btn-primary': {
          padding: theme('spacing.4'),
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.bold'),
          backgroundColor: theme('colors.blue.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.blue.600'),
          },
        },
      })
    }),
  ],
}`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
              Gradient Text
            </h4>
            <code className="text-xs text-slate-600 dark:text-slate-400">gradient-text utility</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-colors">
              Custom Button
            </button>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">btn-primary component</code>
          </div>
        </div>

        {/* Official Plugins */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Official Tailwind Plugins
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-3">@tailwindcss/forms</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Better default styles for form elements
            </p>
            <code className="text-xs bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded block">
              npm install @tailwindcss/forms
            </code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-3">@tailwindcss/typography</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Beautiful typographic defaults for content
            </p>
            <code className="text-xs bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded block">
              npm install @tailwindcss/typography
            </code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-3">@tailwindcss/aspect-ratio</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Composable aspect ratio utilities
            </p>
            <code className="text-xs bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded block">
              npm install @tailwindcss/aspect-ratio
            </code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-3">@tailwindcss/container-queries</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Container query support
            </p>
            <code className="text-xs bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded block">
              npm install @tailwindcss/container-queries
            </code>
          </div>
        </div>

        {/* Theme Function */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Using the Theme Function
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`// Access theme values in plugins
plugin(function({ addUtilities, theme }) {
  addUtilities({
    '.card': {
      padding: theme('spacing.6'),
      borderRadius: theme('borderRadius.xl'),
      backgroundColor: theme('colors.white'),
      boxShadow: theme('boxShadow.lg'),
    },
  })
})`}</code>
          </pre>
        </div>

        {/* Safelist */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Safelisting Dynamic Classes
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Prevent Tailwind from purging dynamically generated class names.
        </p>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`// tailwind.config.js
module.exports = {
  safelist: [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    // Or use patterns
    {
      pattern: /bg-(red|green|blue)-(400|500|600)/,
    },
  ],
}`}</code>
          </pre>
        </div>

        {/* Apply Directive */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Using @apply (Sparingly)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Extract repeated utility patterns into custom CSS classes.
        </p>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`/* styles.css */
@layer components {
  .btn {
    @apply font-bold py-2 px-4 rounded transition-colors;
  }

  .btn-blue {
    @apply bg-blue-500 text-white hover:bg-blue-600;
  }

  .btn-green {
    @apply bg-green-500 text-white hover:bg-green-600;
  }
}`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Blue Button
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Green Button
          </button>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Best Practices
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <p>Use arbitrary values for one-off designs, extend config for repeated values</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Prefer utility classes over @apply - only use @apply for truly repeated patterns</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Create plugins for utilities you use across multiple projects</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Use the theme function in plugins to maintain design consistency</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Safelist dynamic classes only when necessary to keep bundle sizes small</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

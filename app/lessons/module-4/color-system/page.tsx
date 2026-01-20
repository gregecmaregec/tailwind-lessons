import LessonLayout from "@/components/LessonLayout";

export default function ColorSystemLesson() {
  return (
    <LessonLayout
      title="Color System Deep Dive"
      description="Master Tailwind's comprehensive color palette and semantic color usage"
      moduleNumber={4}
      lessonNumber={1}
      prevLesson={{
        title: "Container Queries",
        href: "/lessons/module-3/container-queries",
      }}
      nextLesson={{
        title: "Gradients & Patterns",
        href: "/lessons/module-4/gradients",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Color System Deep Dive
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Explore Tailwind's extensive color palette and learn how to use colors effectively in your designs.
        </p>

        {/* Color Palette Overview */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Color Scales
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Tailwind provides colors in shades from 50 (lightest) to 950 (darkest), giving you precise control over color usage.
        </p>

        <div className="space-y-6 mb-8">
          {/* Slate */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Slate - Neutral Gray</h4>
            <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <div key={shade} className="text-center">
                  <div className={`h-16 rounded-lg mb-2 bg-slate-${shade}`}></div>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{shade}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Blue */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Blue</h4>
            <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <div key={shade} className="text-center">
                  <div className={`h-16 rounded-lg mb-2 bg-blue-${shade}`}></div>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{shade}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Green */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Green</h4>
            <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <div key={shade} className="text-center">
                  <div className={`h-16 rounded-lg mb-2 bg-green-${shade}`}></div>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{shade}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Red */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Red</h4>
            <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <div key={shade} className="text-center">
                  <div className={`h-16 rounded-lg mb-2 bg-red-${shade}`}></div>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{shade}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Purple */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Purple</h4>
            <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <div key={shade} className="text-center">
                  <div className={`h-16 rounded-lg mb-2 bg-purple-${shade}`}></div>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{shade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text Colors */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Text Colors
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
            <p className="text-slate-900 dark:text-white font-medium">
              text-slate-900 - Primary text
            </p>
            <p className="text-slate-700 dark:text-slate-200">
              text-slate-700 - Secondary text
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              text-slate-600 - Tertiary text
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              text-slate-500 - Muted text
            </p>
            <p className="text-slate-400 dark:text-slate-500">
              text-slate-400 - Disabled text
            </p>
          </div>
        </div>

        {/* Background Colors */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Background Colors
        </h2>

        <div className="space-y-4 mb-8">
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <p className="text-blue-900 dark:text-blue-100 font-medium">bg-blue-50 - Light background</p>
            <code className="text-xs text-blue-700 dark:text-blue-300">Great for subtle accents</code>
          </div>

          <div className="bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded-lg p-6">
            <p className="text-blue-900 dark:text-blue-100 font-medium">bg-blue-100 - Highlighted background</p>
            <code className="text-xs text-blue-700 dark:text-blue-300">For subtle emphasis</code>
          </div>

          <div className="bg-blue-500 rounded-lg p-6">
            <p className="text-white font-medium">bg-blue-500 - Primary brand color</p>
            <code className="text-xs text-blue-100">Use for buttons and key actions</code>
          </div>

          <div className="bg-blue-600 rounded-lg p-6">
            <p className="text-white font-medium">bg-blue-600 - Hover state</p>
            <code className="text-xs text-blue-100">Slightly darker for interaction</code>
          </div>
        </div>

        {/* Border Colors */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Border Colors
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 rounded-lg p-6">
              <p className="text-slate-900 dark:text-white font-medium mb-2">border-slate-200</p>
              <code className="text-xs text-slate-600 dark:text-slate-400">Subtle borders</code>
            </div>
            <div className="bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-500 rounded-lg p-6">
              <p className="text-slate-900 dark:text-white font-medium mb-2">border-slate-300</p>
              <code className="text-xs text-slate-600 dark:text-slate-400">Standard borders</code>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 border-2 border-blue-500 rounded-lg p-6">
              <p className="text-slate-900 dark:text-white font-medium mb-2">border-blue-500</p>
              <code className="text-xs text-slate-600 dark:text-slate-400">Accent borders</code>
            </div>
            <div className="bg-white dark:bg-slate-800 border-2 border-red-500 rounded-lg p-6">
              <p className="text-slate-900 dark:text-white font-medium mb-2">border-red-500</p>
              <code className="text-xs text-slate-600 dark:text-slate-400">Error borders</code>
            </div>
          </div>
        </div>

        {/* Semantic Colors */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Semantic Color Usage
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Success */}
          <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Success</h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Green shades for positive feedback
                </p>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                !
              </div>
              <div>
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">Warning</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Yellow/Orange for caution messages
                </p>
              </div>
            </div>
          </div>

          {/* Error */}
          <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                ✕
              </div>
              <div>
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">Error</h4>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Red shades for errors and danger
                </p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                i
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Info</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Blue shades for informational messages
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Color on Color */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Text on Colored Backgrounds
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Ensure sufficient contrast when placing text on colored backgrounds.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900 text-white p-6 rounded-lg">
            <h4 className="font-bold mb-2">White on Dark</h4>
            <p className="text-sm text-slate-300">High contrast, easy to read</p>
          </div>

          <div className="bg-blue-500 text-white p-6 rounded-lg">
            <h4 className="font-bold mb-2">White on Blue</h4>
            <p className="text-sm text-blue-100">Use lighter shades for secondary text</p>
          </div>

          <div className="bg-yellow-300 text-yellow-900 p-6 rounded-lg">
            <h4 className="font-bold mb-2">Dark on Yellow</h4>
            <p className="text-sm text-yellow-800">Dark text on light backgrounds</p>
          </div>
        </div>

        {/* Arbitrary Colors */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Arbitrary Color Values
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Use square brackets for custom colors not in the default palette.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="space-y-4">
            <div className="bg-[#1e40af] text-white p-6 rounded-lg">
              <p className="font-medium mb-2">bg-[#1e40af]</p>
              <code className="text-xs text-blue-200">Custom hex color</code>
            </div>
            <div className="bg-[rgb(239,68,68)] text-white p-6 rounded-lg">
              <p className="font-medium mb-2">bg-[rgb(239,68,68)]</p>
              <code className="text-xs text-red-200">RGB color value</code>
            </div>
            <div className="bg-[hsl(262,83%,58%)] text-white p-6 rounded-lg">
              <p className="font-medium mb-2">bg-[hsl(262,83%,58%)]</p>
              <code className="text-xs text-purple-200">HSL color value</code>
            </div>
          </div>
        </div>

        {/* Color Combinations */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Effective Color Combinations
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Monochromatic */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Monochromatic</h4>
            <div className="flex gap-2">
              <div className="flex-1 h-24 bg-blue-200 rounded flex items-center justify-center text-xs font-medium">200</div>
              <div className="flex-1 h-24 bg-blue-400 rounded flex items-center justify-center text-xs font-medium text-white">400</div>
              <div className="flex-1 h-24 bg-blue-600 rounded flex items-center justify-center text-xs font-medium text-white">600</div>
              <div className="flex-1 h-24 bg-blue-800 rounded flex items-center justify-center text-xs font-medium text-white">800</div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
              Single color, multiple shades
            </p>
          </div>

          {/* Complementary */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Complementary</h4>
            <div className="flex gap-2">
              <div className="flex-1 h-24 bg-blue-500 rounded flex items-center justify-center text-xs font-medium text-white">Blue</div>
              <div className="flex-1 h-24 bg-orange-500 rounded flex items-center justify-center text-xs font-medium text-white">Orange</div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
              Opposite colors create contrast
            </p>
          </div>

          {/* Analogous */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Analogous</h4>
            <div className="flex gap-2">
              <div className="flex-1 h-24 bg-blue-500 rounded flex items-center justify-center text-xs font-medium text-white">Blue</div>
              <div className="flex-1 h-24 bg-cyan-500 rounded flex items-center justify-center text-xs font-medium text-white">Cyan</div>
              <div className="flex-1 h-24 bg-teal-500 rounded flex items-center justify-center text-xs font-medium text-white">Teal</div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
              Adjacent colors create harmony
            </p>
          </div>

          {/* Triadic */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Triadic</h4>
            <div className="flex gap-2">
              <div className="flex-1 h-24 bg-red-500 rounded flex items-center justify-center text-xs font-medium text-white">Red</div>
              <div className="flex-1 h-24 bg-yellow-500 rounded flex items-center justify-center text-xs font-medium">Yellow</div>
              <div className="flex-1 h-24 bg-blue-500 rounded flex items-center justify-center text-xs font-medium text-white">Blue</div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
              Three evenly spaced colors
            </p>
          </div>
        </div>

        {/* Real-World Example */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Real-World Example: Dashboard Card
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Total Revenue</h3>
            <p className="text-blue-100 text-sm">Last 30 days</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-4">$24,563</div>
            <div className="flex items-center gap-2 text-sm mb-6">
              <span className="text-green-600 dark:text-green-400 font-medium">↑ 12%</span>
              <span className="text-slate-600 dark:text-slate-400">from last month</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <div className="text-blue-600 dark:text-blue-400 text-sm mb-1">New</div>
                <div className="text-xl font-bold text-blue-900 dark:text-blue-100">142</div>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <div className="text-green-600 dark:text-green-400 text-sm mb-1">Active</div>
                <div className="text-xl font-bold text-green-900 dark:text-green-100">1,234</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                <div className="text-purple-600 dark:text-purple-400 text-sm mb-1">Total</div>
                <div className="text-xl font-bold text-purple-900 dark:text-purple-100">1,376</div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎯 Best Practices
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <p>Use 500-600 shades for primary brand colors</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Lighter shades (50-200) work well for backgrounds and accents</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Darker shades (700-900) are ideal for text and emphasis</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Maintain consistent color meanings across your app (e.g., red for errors)</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Test color contrast for accessibility (WCAG guidelines)</p>
            </div>
            <div className="flex gap-3">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">•</span>
              <p>Limit your palette to 2-3 primary colors plus neutrals</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

import LessonLayout from "@/components/LessonLayout";

export default function ResponsiveTypographyLesson() {
  return (
    <LessonLayout
      title="Responsive Typography"
      description="Create fluid, responsive text that adapts beautifully to any screen size"
      moduleNumber={3}
      lessonNumber={3}
      prevLesson={{
        title: "Breakpoints & Media Queries",
        href: "/lessons/module-3/breakpoints",
      }}
      nextLesson={{
        title: "Container Queries",
        href: "/lessons/module-3/container-queries",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Typography
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Learn how to create typography that scales beautifully across all devices.
        </p>

        {/* Responsive Font Sizes */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Font Sizes
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Progressive Font Scaling
            </h4>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white">
                Heading 1
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              </p>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Body Text Scaling
            </h4>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Body text should scale proportionally. This paragraph uses responsive font sizes to ensure readability across all devices. Notice how it grows larger on bigger screens while maintaining optimal line length.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-3">
                text-sm sm:text-base md:text-lg
              </p>
            </div>
          </div>
        </div>

        {/* Responsive Line Height */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Line Height
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Adjust line height at different breakpoints for optimal readability.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
            <p className="text-base leading-normal sm:leading-relaxed md:leading-loose text-slate-700 dark:text-slate-300">
              This paragraph demonstrates responsive line height. On mobile, it uses normal line height. On small screens, it switches to relaxed. On medium and up, it uses loose line height for maximum readability on larger displays.
            </p>
            <code className="block mt-3 text-xs bg-slate-100 dark:bg-slate-700 p-2 rounded">
              leading-normal sm:leading-relaxed md:leading-loose
            </code>
          </div>
        </div>

        {/* Responsive Letter Spacing */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Letter Spacing
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
            <div className="tracking-tight sm:tracking-normal md:tracking-wide text-slate-900 dark:text-white font-medium text-lg">
              RESPONSIVE LETTER SPACING
            </div>
            <code className="block text-xs bg-slate-100 dark:bg-slate-700 p-2 rounded">
              tracking-tight sm:tracking-normal md:tracking-wide
            </code>
          </div>
        </div>

        {/* Fluid Typography Pattern */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Fluid Typography Patterns
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Hero Heading Pattern
            </h4>
            <div className="bg-slate-900 p-8 rounded-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight sm:leading-tight md:leading-tight">
                Build Amazing Things
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mt-4 max-w-2xl">
                Create responsive designs that look great on every device
              </p>
            </div>
            <code className="block mt-3 text-xs bg-white dark:bg-slate-800 p-2 rounded">
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            </code>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Article Layout Pattern
            </h4>
            <div className="bg-white dark:bg-slate-800 p-6 md:p-8 lg:p-12 rounded-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Article Title
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                First paragraph with responsive sizing. The text size increases gradually as the viewport grows, ensuring comfortable reading on all devices.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Second paragraph maintains the same responsive characteristics for visual consistency throughout the article.
              </p>
            </div>
          </div>
        </div>

        {/* Typography Scale */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Complete Typography Scale
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              Extra Small / Small - text-xs sm:text-sm
            </div>
            <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
              Small / Base - text-sm sm:text-base
            </div>
            <div className="text-base sm:text-lg text-slate-900 dark:text-white font-medium">
              Base / Large - text-base sm:text-lg
            </div>
            <div className="text-lg sm:text-xl text-slate-900 dark:text-white font-medium">
              Large / XL - text-lg sm:text-xl
            </div>
            <div className="text-xl sm:text-2xl text-slate-900 dark:text-white font-bold">
              XL / 2XL - text-xl sm:text-2xl
            </div>
            <div className="text-2xl sm:text-3xl text-slate-900 dark:text-white font-bold">
              2XL / 3XL - text-2xl sm:text-3xl
            </div>
          </div>
        </div>

        {/* Responsive Max Width */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Text Containers
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Control maximum line length for optimal readability.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
            <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                This text container grows wider at larger breakpoints while maintaining optimal line length. Studies show that 50-75 characters per line is ideal for readability.
              </p>
            </div>
            <code className="block mt-3 text-xs bg-slate-100 dark:bg-slate-700 p-2 rounded">
              max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
            </code>
          </div>
        </div>

        {/* Responsive Text Alignment */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Text Alignment
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-6">
            <div className="text-left md:text-center text-slate-900 dark:text-white">
              <h3 className="text-xl font-bold mb-2">Left on Mobile, Centered on Desktop</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">text-left md:text-center</p>
            </div>
            
            <div className="text-center md:text-left text-slate-900 dark:text-white">
              <h3 className="text-xl font-bold mb-2">Centered on Mobile, Left on Desktop</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">text-center md:text-left</p>
            </div>
          </div>
        </div>

        {/* Card with Responsive Typography */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Real-World Example: Product Card
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg max-w-md mx-auto">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                Product Name
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                This product card demonstrates responsive typography in action. Notice how all text scales appropriately.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  $99
                </span>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base rounded-lg transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Truncation */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Text Truncation
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
            <div>
              <p className="truncate text-slate-900 dark:text-white">
                This text will truncate on mobile: Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <code className="text-xs text-slate-500 dark:text-slate-400">truncate</code>
            </div>
            
            <div>
              <p className="line-clamp-2 sm:line-clamp-3 md:line-clamp-none text-slate-900 dark:text-white">
                This text shows 2 lines on mobile, 3 lines on small screens, and unlimited on medium+: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
              </p>
              <code className="text-xs text-slate-500 dark:text-slate-400">line-clamp-2 sm:line-clamp-3 md:line-clamp-none</code>
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
              <p>Start with comfortable mobile sizes, then scale up for larger screens</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Maintain consistent scaling ratios across your typography system</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Use <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">max-w-*</code> to prevent lines from becoming too long</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Pair font size changes with line-height adjustments for better readability</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Test on real devices to ensure text remains legible at all sizes</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

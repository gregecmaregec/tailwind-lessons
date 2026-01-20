import LessonLayout from "@/components/LessonLayout";

export default function ShadowsLesson() {
  return (
    <LessonLayout
      title="Shadows & Elevation"
      description="Master depth and elevation using shadows effectively"
      moduleNumber={4}
      lessonNumber={3}
      prevLesson={{
        title: "Gradients & Patterns",
        href: "/lessons/module-4/gradients",
      }}
      nextLesson={{
        title: "Opacity & Blend Modes",
        href: "/lessons/module-4/opacity-blend",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Shadows & Elevation
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Create depth and visual hierarchy using box shadows and elevation effects.
        </p>

        {/* Box Shadow Scale */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Box Shadow Scale
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">shadow-sm</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Subtle shadow</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">shadow</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Default shadow</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">shadow-md</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Medium shadow</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">shadow-lg</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Large shadow</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">shadow-xl</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Extra large shadow</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-2xl">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">shadow-2xl</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Maximum shadow</p>
          </div>
        </div>

        {/* Inner Shadow */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Inner Shadows
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-lg shadow-inner">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">shadow-inner</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">Creates inset shadow effect</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-none border border-slate-200 dark:border-slate-600">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">shadow-none</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Removes all shadows</p>
          </div>
        </div>

        {/* Colored Shadows */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Colored Shadows
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Use <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">shadow-{'{color}'}</code> to add colored shadow effects.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg shadow-blue-500/50">
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Blue Shadow</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">shadow-lg shadow-blue-500/50</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg shadow-purple-500/50">
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Purple Shadow</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">shadow-lg shadow-purple-500/50</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg shadow-green-500/50">
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Green Shadow</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">shadow-lg shadow-green-500/50</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg shadow-pink-500/50">
            <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">Pink Shadow</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">shadow-lg shadow-pink-500/50</p>
          </div>
        </div>

        {/* Elevation Levels */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Elevation System
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Use shadows to establish visual hierarchy and depth.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl space-y-8 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Level 1 - Surface</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Base level, subtle shadow</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Level 2 - Raised</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Cards, panels, content blocks</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Level 3 - Floating</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Dropdowns, tooltips, popovers</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-2xl">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Level 4 - Modal</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Dialogs, modals, overlays</p>
          </div>
        </div>

        {/* Hover Effects */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Interactive Shadow Effects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Hover to Elevate</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">shadow hover:shadow-lg</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Lift Higher</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">shadow-lg hover:shadow-2xl</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all cursor-pointer">
            <h4 className="font-semibold mb-2">Colored Hover</h4>
            <p className="text-sm text-blue-100">Animated colored shadow</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-orange-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
            <h4 className="font-semibold mb-2">Lift & Shadow</h4>
            <p className="text-sm text-pink-100">Combined transform effect</p>
          </div>
        </div>

        {/* Drop Shadow (for non-rectangular shapes) */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Drop Shadows
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Use drop-shadow for images and SVG elements.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full drop-shadow-sm"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">drop-shadow-sm</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-full drop-shadow-md"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">drop-shadow-md</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full drop-shadow-lg"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">drop-shadow-lg</code>
          </div>
        </div>

        {/* Card Examples */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Real-World Card Examples
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Product Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="p-6">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Product Name</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Beautiful product with elevated design
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">$99</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full"></div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">John Doe</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">CEO, Company</p>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              "This product has completely transformed our workflow. Highly recommended!"
            </p>
          </div>

          {/* Feature Card */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all p-8 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-2xl">
              ⚡
            </div>
            <h4 className="text-xl font-bold mb-2">Fast Performance</h4>
            <p className="text-purple-100 text-sm">
              Lightning-fast speeds that exceed expectations
            </p>
          </div>
        </div>

        {/* Depth Example */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Layered Depth Example
        </h2>

        <div className="relative bg-slate-100 dark:bg-slate-700 rounded-xl p-12 mb-8">
          <div className="absolute top-8 left-8 right-8 bg-blue-200 dark:bg-blue-900 h-32 rounded-lg shadow"></div>
          <div className="absolute top-12 left-12 right-12 bg-blue-300 dark:bg-blue-800 h-32 rounded-lg shadow-md"></div>
          <div className="absolute top-16 left-16 right-16 bg-blue-400 dark:bg-blue-700 h-32 rounded-lg shadow-lg"></div>
          <div className="relative bg-white dark:bg-slate-800 p-8 rounded-lg shadow-2xl mt-20">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Layered Elevation
            </h4>
            <p className="text-slate-600 dark:text-slate-400">
              Multiple shadow levels create depth perception
            </p>
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
              <p>Use shadows consistently to establish clear visual hierarchy</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Reserve large shadows for important UI elements like modals</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Add hover shadow effects to indicate interactive elements</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Combine shadows with transitions for smooth elevation changes</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Consider using colored shadows sparingly for brand emphasis</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

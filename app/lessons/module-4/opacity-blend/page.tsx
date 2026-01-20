import LessonLayout from "@/components/LessonLayout";

export default function OpacityBlendLesson() {
  return (
    <LessonLayout
      title="Opacity & Blend Modes"
      description="Control transparency and create stunning blend effects"
      moduleNumber={4}
      lessonNumber={4}
      prevLesson={{
        title: "Shadows & Elevation",
        href: "/lessons/module-4/shadows",
      }}
      nextLesson={{
        title: "Filters & Backdrop Effects",
        href: "/lessons/module-4/filters",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Opacity & Blend Modes
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Master transparency and blending techniques to create sophisticated visual effects.
        </p>

        {/* Opacity Scale */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Opacity Scale
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Control element transparency from 0 (invisible) to 100 (fully opaque).
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[0, 25, 50, 75, 100].map((opacity) => (
              <div key={opacity} className="text-center">
                <div
                  className={`h-24 rounded-lg mb-2 bg-blue-600 opacity-${opacity}`}
                ></div>
                <span className="text-sm text-slate-600 dark:text-slate-400">opacity-{opacity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Text Opacity */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Text Opacity
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-8">
          <div className="space-y-4">
            <p className="text-2xl font-bold text-slate-900 dark:text-white opacity-100">
              Fully Opaque Text (100%)
            </p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white opacity-75">
              Slightly Transparent (75%)
            </p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white opacity-50">
              Half Transparent (50%)
            </p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white opacity-25">
              Very Transparent (25%)
            </p>
          </div>
        </div>

        {/* Background Opacity with Color */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Background Opacity
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Use <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">bg-{'{color}'}/{'{opacity}'}</code> for direct color opacity control.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="relative h-48 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="bg-white/90 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-slate-900 font-medium">bg-white/90</p>
                <p className="text-sm text-slate-600">90% opaque white</p>
              </div>
            </div>
          </div>

          <div className="relative h-48 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="bg-black/70 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-white font-medium">bg-black/70</p>
                <p className="text-sm text-slate-300">70% opaque black</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blend Modes */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Mix Blend Modes
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Control how elements blend with their background.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-yellow-400 mix-blend-normal rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
              mix-blend-normal
            </div>
          </div>

          <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-yellow-400 mix-blend-multiply rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
              mix-blend-multiply
            </div>
          </div>

          <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-yellow-400 mix-blend-screen rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
              mix-blend-screen
            </div>
          </div>

          <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-yellow-400 mix-blend-overlay rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
              mix-blend-overlay
            </div>
          </div>

          <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-yellow-400 mix-blend-difference rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
              mix-blend-difference
            </div>
          </div>

          <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-yellow-400 mix-blend-color-dodge rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
              mix-blend-color-dodge
            </div>
          </div>
        </div>

        {/* Background Blend Mode */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Background Blend Modes
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Blend background images and colors together.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="h-64 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 bg-blend-normal p-8 flex items-end">
            <div className="bg-white/90 p-4 rounded-lg w-full">
              <code className="text-sm text-slate-900">bg-blend-normal</code>
            </div>
          </div>

          <div className="h-64 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 bg-blend-multiply p-8 flex items-end">
            <div className="bg-white/90 p-4 rounded-lg w-full">
              <code className="text-sm text-slate-900">bg-blend-multiply</code>
            </div>
          </div>

          <div className="h-64 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 bg-blend-screen p-8 flex items-end">
            <div className="bg-white/90 p-4 rounded-lg w-full">
              <code className="text-sm text-slate-900">bg-blend-screen</code>
            </div>
          </div>

          <div className="h-64 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 bg-blend-overlay p-8 flex items-end">
            <div className="bg-white/90 p-4 rounded-lg w-full">
              <code className="text-sm text-slate-900">bg-blend-overlay</code>
            </div>
          </div>
        </div>

        {/* Overlay Effects */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Overlay Effects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Dark Overlay */}
          <div className="relative h-64 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative h-full flex items-center justify-center text-center p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Dark Overlay</h3>
                <p className="text-white/90">bg-black/40</p>
              </div>
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="relative h-64 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="relative h-full flex items-end justify-center p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Gradient Overlay</h3>
                <p className="text-white/90">bg-gradient-to-t from-black/60</p>
              </div>
            </div>
          </div>
        </div>

        {/* Glassmorphism */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Glassmorphism Effect
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Combine opacity, backdrop blur, and borders for glass-like effects.
        </p>

        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
          <div className="relative h-full flex items-center justify-center p-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md">
              <h3 className="text-2xl font-bold text-white mb-4">Glass Card</h3>
              <p className="text-white/90 mb-6">
                This card uses glassmorphism with backdrop blur, semi-transparent background, and subtle borders.
              </p>
              <button className="w-full py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Hover Effects */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Interactive Opacity Effects
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg opacity-100 hover:opacity-80 transition-opacity cursor-pointer">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Fade on Hover</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">hover:opacity-80</p>
          </div>

          <div className="group relative bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all"></div>
            <div className="p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Overlay on Hover</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Smooth overlay effect</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-lg shadow-lg cursor-pointer">
            <div className="relative z-10">
              <h4 className="font-semibold text-white mb-2">Reveal Content</h4>
              <p className="text-sm text-green-100 opacity-0 group-hover:opacity-100 transition-opacity">
                Hidden until hover
              </p>
            </div>
          </div>
        </div>

        {/* Real-World Examples */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Real-World Examples
        </h2>

        <div className="space-y-6 mb-8">
          {/* Image Card with Overlay */}
          <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative h-full flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Featured Article</h3>
              <p className="text-white/90 mb-4">
                Discover the latest trends in web design and development
              </p>
              <button className="w-fit px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium transition-all">
                Read More
              </button>
            </div>
          </div>

          {/* Dashboard Widget with Glass Effect */}
          <div className="relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="relative p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                  <div className="text-white/70 text-sm mb-2">Total Users</div>
                  <div className="text-4xl font-bold text-white mb-1">12,459</div>
                  <div className="text-green-300 text-sm">↑ 12% from last month</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                  <div className="text-white/70 text-sm mb-2">Revenue</div>
                  <div className="text-4xl font-bold text-white mb-1">$48.2K</div>
                  <div className="text-green-300 text-sm">↑ 8% from last month</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                  <div className="text-white/70 text-sm mb-2">Conversion</div>
                  <div className="text-4xl font-bold text-white mb-1">3.2%</div>
                  <div className="text-red-300 text-sm">↓ 2% from last month</div>
                </div>
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
              <p>Use opacity for subtle visual hierarchy without removing elements</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Combine opacity with transitions for smooth interactive effects</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Use blend modes sparingly for artistic effects, not functional UI</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Glassmorphism works best with backdrop-blur and semi-transparent backgrounds</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Ensure text remains readable when using opacity and overlays</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

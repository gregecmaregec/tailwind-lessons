import LessonLayout from "@/components/LessonLayout";

export default function FiltersLesson() {
  return (
    <LessonLayout
      title="Filters & Backdrop Effects"
      description="Apply visual filters and backdrop effects to create stunning designs"
      moduleNumber={4}
      lessonNumber={5}
      prevLesson={{
        title: "Opacity & Blend Modes",
        href: "/lessons/module-4/opacity-blend",
      }}
      nextLesson={{
        title: "Transitions & Timing",
        href: "/lessons/module-5/transitions",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Filters & Backdrop Effects
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Transform your designs with CSS filters and backdrop effects.
        </p>

        {/* Blur */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Blur Effect
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {['none', 'sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
            <div key={size} className="bg-slate-100 dark:bg-slate-700 p-6 rounded-xl">
              <div className={`h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3 ${size === 'none' ? '' : `blur-${size}`}`}></div>
              <code className="text-xs text-slate-600 dark:text-slate-400">blur-{size}</code>
            </div>
          ))}
        </div>

        {/* Backdrop Blur */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Backdrop Blur
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Blur the background behind an element.
        </p>

        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
          <div className="relative h-full flex items-center justify-center p-8 gap-6">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 text-white">
              <h4 className="font-bold mb-2">backdrop-blur-sm</h4>
              <p className="text-sm">Light blur</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 text-white">
              <h4 className="font-bold mb-2">backdrop-blur-md</h4>
              <p className="text-sm">Medium blur</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-white">
              <h4 className="font-bold mb-2">backdrop-blur-lg</h4>
              <p className="text-sm">Strong blur</p>
            </div>
          </div>
        </div>

        {/* Brightness */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Brightness
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[50, 75, 100, 125, 150].map((brightness) => (
            <div key={brightness} className="bg-white dark:bg-slate-800 p-4 rounded-xl">
              <div className={`h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-3 brightness-${brightness}`}></div>
              <code className="text-xs text-slate-600 dark:text-slate-400">brightness-{brightness}</code>
            </div>
          ))}
        </div>

        {/* Contrast */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Contrast
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[50, 75, 100, 125, 150].map((contrast) => (
            <div key={contrast} className="bg-white dark:bg-slate-800 p-4 rounded-xl">
              <div className={`h-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg mb-3 contrast-${contrast}`}></div>
              <code className="text-xs text-slate-600 dark:text-slate-400">contrast-{contrast}</code>
            </div>
          ))}
        </div>

        {/* Grayscale */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Grayscale
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg mb-3"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">No filter (Original)</code>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg mb-3 grayscale"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">grayscale</code>
          </div>
        </div>

        {/* Sepia */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Sepia & Invert
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-3"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">Original</code>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-3 sepia"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">sepia</code>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-3 invert"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">invert</code>
          </div>
        </div>

        {/* Saturate */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Saturate
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[0, 50, 100, 150, 200].map((saturate) => (
            <div key={saturate} className="bg-white dark:bg-slate-800 p-4 rounded-xl">
              <div className={`h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3 saturate-${saturate}`}></div>
              <code className="text-xs text-slate-600 dark:text-slate-400">saturate-{saturate}</code>
            </div>
          ))}
        </div>

        {/* Hue Rotate */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Hue Rotate
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[0, 30, 60, 90, 180].map((rotate) => (
            <div key={rotate} className="bg-white dark:bg-slate-800 p-4 rounded-xl">
              <div className={`h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3 hue-rotate-${rotate}`}></div>
              <code className="text-xs text-slate-600 dark:text-slate-400">hue-rotate-{rotate}</code>
            </div>
          ))}
        </div>

        {/* Drop Shadow */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Drop Shadow
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl text-center">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full drop-shadow-md"></div>
            <code className="block mt-4 text-xs text-slate-600 dark:text-slate-400">drop-shadow-md</code>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl text-center">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-teal-600 rounded-full drop-shadow-lg"></div>
            <code className="block mt-4 text-xs text-slate-600 dark:text-slate-400">drop-shadow-lg</code>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl text-center">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-500 to-orange-500 rounded-full drop-shadow-2xl"></div>
            <code className="block mt-4 text-xs text-slate-600 dark:text-slate-400">drop-shadow-2xl</code>
          </div>
        </div>

        {/* Combined Filters */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Combined Filter Effects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3 brightness-110 contrast-125 saturate-150"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">brightness-110 contrast-125 saturate-150</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Vibrant & punchy</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-3 brightness-90 contrast-110 blur-sm"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">brightness-90 contrast-110 blur-sm</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Soft & dreamy</p>
          </div>
        </div>

        {/* Interactive Hover Effects */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Interactive Filter Effects
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl group cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">grayscale → color on hover</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl group cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg mb-3 group-hover:brightness-110 group-hover:saturate-150 transition-all duration-300"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">Enhanced on hover</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl group cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-3 blur-sm group-hover:blur-none transition-all duration-300"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">blur → sharp on hover</code>
          </div>
        </div>

        {/* Backdrop Effects */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Backdrop Filter Effects
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Apply filters to the background behind an element.
        </p>

        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="relative h-full p-8 space-y-4">
            <div className="bg-white/10 backdrop-blur-md backdrop-brightness-110 border border-white/20 rounded-xl p-6 text-white">
              <h4 className="font-bold mb-2">Backdrop Blur + Brightness</h4>
              <p className="text-sm text-white/80">backdrop-blur-md backdrop-brightness-110</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg backdrop-saturate-150 border border-white/20 rounded-xl p-6 text-white">
              <h4 className="font-bold mb-2">Backdrop Blur + Saturate</h4>
              <p className="text-sm text-white/80">backdrop-blur-lg backdrop-saturate-150</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl backdrop-contrast-125 border border-white/20 rounded-xl p-6 text-white">
              <h4 className="font-bold mb-2">Backdrop Blur + Contrast</h4>
              <p className="text-sm text-white/80">backdrop-blur-xl backdrop-contrast-125</p>
            </div>
          </div>
        </div>

        {/* Real-World Examples */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Real-World Examples
        </h2>

        <div className="space-y-6 mb-8">
          {/* Glass Navigation */}
          <div className="relative h-64 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
            <div className="relative">
              <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
                <div className="px-8 py-4 flex items-center justify-between">
                  <div className="text-xl font-bold text-white">Brand</div>
                  <div className="flex gap-6 text-white">
                    <a href="#" className="hover:text-white/80 transition-colors">Home</a>
                    <a href="#" className="hover:text-white/80 transition-colors">About</a>
                    <a href="#" className="hover:text-white/80 transition-colors">Services</a>
                    <a href="#" className="hover:text-white/80 transition-colors">Contact</a>
                  </div>
                </div>
              </nav>
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Glass Navigation Bar</h3>
                <p className="text-white/80">Frosted glass effect with backdrop blur</p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden cursor-pointer">
                <div className={`h-64 bg-gradient-to-br ${
                  i === 1 ? 'from-blue-500 to-purple-600' :
                  i === 2 ? 'from-green-500 to-teal-600' :
                  'from-pink-500 to-orange-500'
                } transition-all duration-300 group-hover:scale-110`}></div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-6 py-3 text-white font-medium">
                    View Details
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status Card */}
          <div className="relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500"></div>
            <div className="relative p-8 flex items-center gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 text-white">
                <h4 className="text-2xl font-bold mb-2">All Systems Operational</h4>
                <p className="text-green-100">Everything is running smoothly with no issues</p>
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
              <p>Use backdrop-blur for modern glass morphism effects</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Combine multiple filters carefully - too many can impact performance</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Use transitions with filters for smooth interactive effects</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Grayscale hover effects work well for image galleries</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Test filter effects across different browsers for compatibility</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

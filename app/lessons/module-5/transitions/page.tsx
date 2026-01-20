import LessonLayout from "@/components/LessonLayout";

export default function TransitionsLesson() {
  return (
    <LessonLayout
      title="Transitions & Timing"
      description="Master CSS transitions to create smooth, performant animations"
      moduleNumber={5}
      lessonNumber={1}
      prevLesson={{
        title: "Filters & Backdrop Effects",
        href: "/lessons/module-4/filters",
      }}
      nextLesson={{
        title: "Transforms & 3D Effects",
        href: "/lessons/module-5/transforms",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Transitions & Timing
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Create smooth, polished user interfaces with CSS transitions and timing functions.
        </p>

        {/* Transition Properties */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Transition Properties
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Control which properties should animate during state changes.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-32 bg-blue-500 hover:bg-purple-500 rounded-lg mb-3 transition-colors"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">transition-colors</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Color changes only</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-32 bg-gradient-to-r from-green-500 to-teal-600 hover:opacity-50 rounded-lg mb-3 transition-opacity"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">transition-opacity</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Opacity changes only</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-32 bg-pink-500 hover:shadow-2xl rounded-lg mb-3 transition-shadow"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">transition-shadow</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Shadow changes only</p>
          </div>
        </div>

        {/* Transition All */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Transition All Properties
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 hover:scale-105 hover:shadow-xl rounded-lg mb-3 transition-all"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">transition-all</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Animates all changing properties</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-32 bg-gradient-to-br from-green-500 to-teal-600 hover:rotate-3 hover:scale-110 rounded-lg mb-3 transition-transform"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">transition-transform</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Transform changes only</p>
          </div>
        </div>

        {/* Duration */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Transition Duration
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Control how long transitions take to complete.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[75, 150, 300, 500, 700, 1000].map((duration) => (
            <div key={duration} className="bg-white dark:bg-slate-800 p-6 rounded-xl">
              <div className={`h-24 bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 rounded-lg mb-3 transition-all duration-${duration}`}></div>
              <code className="text-xs text-slate-600 dark:text-slate-400">duration-{duration}</code>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{duration}ms</p>
            </div>
          ))}
        </div>

        {/* Timing Functions */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Timing Functions (Easing)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Control the acceleration curve of transitions for more natural motion.
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-16 bg-gradient-to-r from-blue-500 to-blue-500 hover:to-purple-500 rounded-lg mb-3 transition-all duration-500 ease-linear"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">ease-linear</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Constant speed throughout</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-16 bg-gradient-to-r from-green-500 to-green-500 hover:to-teal-500 rounded-lg mb-3 transition-all duration-500 ease-in"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">ease-in</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Starts slow, ends fast</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-16 bg-gradient-to-r from-pink-500 to-pink-500 hover:to-orange-500 rounded-lg mb-3 transition-all duration-500 ease-out"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">ease-out</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Starts fast, ends slow</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="h-16 bg-gradient-to-r from-purple-500 to-purple-500 hover:to-pink-500 rounded-lg mb-3 transition-all duration-500 ease-in-out"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">ease-in-out</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Slow start and end, fast middle</p>
          </div>
        </div>

        {/* Transition Delay */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Transition Delay
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Add a delay before the transition starts.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[0, 75, 150, 300, 500, 700].map((delay) => (
            <div key={delay} className="bg-white dark:bg-slate-800 p-6 rounded-xl group">
              <div className={`h-24 bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110 rounded-lg mb-3 transition-transform duration-300 delay-${delay}`}></div>
              <code className="text-xs text-slate-600 dark:text-slate-400">delay-{delay}</code>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{delay}ms delay</p>
            </div>
          ))}
        </div>

        {/* Interactive Button Examples */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Interactive Button Examples
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
            <span>Hover Me - Color Transition</span>
          </button>

          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
            <span>Hover Me - Scale + Color</span>
          </button>

          <button className="bg-green-600 hover:bg-green-700 hover:shadow-xl text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1">
            <span>Hover Me - Lift Effect</span>
          </button>

          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-110">
            <span>Hover Me - Combined Effects</span>
          </button>
        </div>

        {/* Card Transitions */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Card Hover Transitions
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="p-6">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Shadow Transition</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Hover to see shadow change</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-40 bg-gradient-to-br from-green-500 to-teal-600"></div>
            <div className="p-6">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Lift Effect</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Hover to see card lift</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="h-40 bg-gradient-to-br from-pink-500 to-orange-500"></div>
            <div className="p-6">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Scale Effect</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Hover to see card grow</p>
            </div>
          </div>
        </div>

        {/* Staggered Transitions */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Staggered Transitions
        </h2>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl group">
          <h4 className="font-bold text-slate-900 dark:text-white mb-6">Hover to see staggered animation</h4>
          <div className="space-y-4">
            <div className="h-16 bg-blue-500 rounded-lg group-hover:translate-x-4 transition-transform duration-300 delay-75 flex items-center px-6 text-white font-semibold">
              Item 1 - 75ms delay
            </div>
            <div className="h-16 bg-purple-500 rounded-lg group-hover:translate-x-4 transition-transform duration-300 delay-150 flex items-center px-6 text-white font-semibold">
              Item 2 - 150ms delay
            </div>
            <div className="h-16 bg-pink-500 rounded-lg group-hover:translate-x-4 transition-transform duration-300 delay-300 flex items-center px-6 text-white font-semibold">
              Item 3 - 300ms delay
            </div>
            <div className="h-16 bg-orange-500 rounded-lg group-hover:translate-x-4 transition-transform duration-300 delay-500 flex items-center px-6 text-white font-semibold">
              Item 4 - 500ms delay
            </div>
          </div>
        </div>

        {/* Loading States */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-8">
          Loading State Transitions
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <button className="group relative bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg overflow-hidden">
            <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
              Click to Load
            </span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Loading...
            </span>
          </button>

          <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-lg overflow-hidden">
            <span className="relative z-10">Hover for Effect</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>

        {/* Real-World Navigation */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Real-World Navigation Example
        </h2>

        <div className="bg-slate-900 rounded-xl p-8 mb-8">
          <nav className="flex gap-2">
            {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Form Input Transitions */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Form Input Transitions
        </h2>

        <div className="space-y-6 mb-8">
          <div>
            <input
              type="text"
              placeholder="Focus me for border transition"
              className="w-full px-6 py-4 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Focus me for shadow and scale"
              className="w-full px-6 py-4 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:border-purple-500 focus:shadow-xl focus:scale-105 focus:outline-none transition-all duration-300"
            />
          </div>
        </div>

        {/* Performance Tips */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-8 border-2 border-yellow-200 dark:border-yellow-800 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Performance Tips
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-yellow-600 dark:text-yellow-400 font-bold">⚡</span>
              <p>Prefer transitioning <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">transform</code> and <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">opacity</code> for best performance</p>
            </div>
            <div className="flex gap-3">
              <span className="text-yellow-600 dark:text-yellow-400 font-bold">⚡</span>
              <p>Avoid transitioning properties like <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">width</code>, <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">height</code>, or <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">top</code>/<code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">left</code></p>
            </div>
            <div className="flex gap-3">
              <span className="text-yellow-600 dark:text-yellow-400 font-bold">⚡</span>
              <p>Use <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">transition-all</code> sparingly - be specific when possible</p>
            </div>
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
              <p>Keep transitions between 200-300ms for most UI interactions</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Use ease-out for elements entering the viewport</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Use ease-in for elements exiting the viewport</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Apply delays strategically to create staggered effects</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Test transitions on lower-end devices to ensure smooth performance</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

import LessonLayout from "@/components/LessonLayout";

export default function AnimationsLesson() {
  return (
    <LessonLayout
      title="Animations & Keyframes"
      description="Create complex, repeating animations with CSS keyframes and Tailwind utilities"
      moduleNumber={5}
      lessonNumber={3}
      prevLesson={{
        title: "Transforms & 3D Effects",
        href: "/lessons/module-5/transforms",
      }}
      nextLesson={{
        title: "Dark Mode",
        href: "/lessons/module-5/dark-mode",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Animations & Keyframes
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Bring your interfaces to life with built-in animations and custom keyframe sequences.
        </p>

        {/* Built-in Animations */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Built-in Animations
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl">
            <div className="flex items-center justify-center h-32">
              <div className="h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block text-center mt-4">animate-spin</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 text-center mt-2">Loading spinner</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl">
            <div className="flex items-center justify-center h-32">
              <div className="h-16 w-16 bg-purple-500 rounded-full animate-ping"></div>
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block text-center mt-4">animate-ping</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 text-center mt-2">Radar effect</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl">
            <div className="flex items-center justify-center h-32">
              <div className="h-16 w-16 bg-pink-500 rounded-lg animate-pulse"></div>
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block text-center mt-4">animate-pulse</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 text-center mt-2">Skeleton loader</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl">
            <div className="flex items-center justify-center h-32">
              <div className="h-16 w-16 bg-green-500 rounded-full animate-bounce"></div>
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block text-center mt-4">animate-bounce</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 text-center mt-2">Bouncing ball</p>
          </div>
        </div>

        {/* Loading Indicators */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Loading Indicators
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl flex items-center justify-center">
            <div className="flex gap-2">
              <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl flex items-center justify-center">
            <div className="flex gap-2">
              <div className="h-4 w-4 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="h-4 w-4 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="h-4 w-4 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl flex items-center justify-center">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>

        {/* Notification Badges */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Notification Badges
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl flex items-center justify-center">
            <div className="relative">
              <div className="h-16 w-16 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-slate-600 dark:text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 h-6 w-6 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl flex items-center justify-center">
            <div className="relative">
              <div className="h-16 w-16 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-slate-600 dark:text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 h-6 w-6 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl flex items-center justify-center">
            <button className="relative bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Messages
              <span className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 rounded-full animate-bounce text-xs flex items-center justify-center">
                5
              </span>
            </button>
          </div>
        </div>

        {/* Skeleton Loaders */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Skeleton Loaders
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="flex gap-4">
              <div className="h-16 w-16 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse"></div>
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-1/2"></div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl space-y-4">
            <div className="h-48 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-5/6"></div>
          </div>
        </div>

        {/* Pulse Effect */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Pulse Effects for Live Status
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-4 w-4 bg-green-500 rounded-full animate-ping"></div>
                <div className="absolute inset-0 h-4 w-4 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-slate-900 dark:text-white font-medium">Online</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-4 w-4 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-slate-900 dark:text-white font-medium">Away</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-4 w-4 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute inset-0 h-4 w-4 bg-red-500 rounded-full"></div>
              </div>
              <span className="text-slate-900 dark:text-white font-medium">Recording</span>
            </div>
          </div>
        </div>

        {/* Attention Grabbers */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Attention Grabbers
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg animate-pulse hover:animate-none">
            Limited Time Offer!
          </button>

          <button className="relative bg-gradient-to-r from-pink-600 to-orange-600 text-white font-bold py-4 px-8 rounded-lg overflow-hidden group">
            <span className="relative z-10">Click Me!</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </div>

        {/* Success Animations */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Success & Error States
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-green-900 dark:text-green-100">Success!</h4>
                <p className="text-sm text-green-700 dark:text-green-300">Your changes have been saved</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 p-6 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-red-900 dark:text-red-100">Error!</h4>
                <p className="text-sm text-red-700 dark:text-red-300">Something went wrong</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Progress Bars */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Animated Progress Indicators
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">Loading...</span>
              <span className="text-slate-600 dark:text-slate-400">75%</span>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"></div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">Uploading...</span>
              <span className="text-slate-600 dark:text-slate-400">60%</span>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-3/5 bg-gradient-to-r from-green-500 to-teal-600 rounded-full transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Carousel & Slider Animations
        </h2>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl mb-8">
          <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center text-white text-2xl font-bold">
            Slide Content
          </div>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4].map((i) => (
              <button
                key={i}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === 1 ? 'w-8 bg-blue-600' : 'w-3 bg-slate-300 dark:bg-slate-600'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Hover Animation Effects */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Interactive Hover Animations
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className={`h-48 bg-gradient-to-br ${
                i === 1 ? 'from-blue-500 to-purple-600' :
                i === 2 ? 'from-green-500 to-teal-600' :
                'from-pink-500 to-orange-500'
              } group-hover:scale-110 transition-transform duration-500`}></div>
              <div className="p-6">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  Project {i}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Hover to see animation
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Scroll Indicator */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Infinite Animations
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl mb-8">
          <div className="flex items-center justify-center gap-8">
            <div className="h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="h-16 w-16 bg-purple-500 rounded-full animate-ping"></div>
            <div className="flex gap-2">
              <div className="h-4 w-4 bg-pink-500 rounded-full animate-bounce"></div>
              <div className="h-4 w-4 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="h-4 w-4 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>

        {/* Animation Control */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-8 border-2 border-yellow-200 dark:border-yellow-800 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Animation Performance Tips
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-yellow-600 dark:text-yellow-400 font-bold">⚡</span>
              <p>Use <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">animate-none</code> on hover to pause animations</p>
            </div>
            <div className="flex gap-3">
              <span className="text-yellow-600 dark:text-yellow-400 font-bold">⚡</span>
              <p>Prefer transform and opacity animations for best performance</p>
            </div>
            <div className="flex gap-3">
              <span className="text-yellow-600 dark:text-yellow-400 font-bold">⚡</span>
              <p>Limit the number of simultaneous animations on screen</p>
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
              <p>Use animate-spin for loading spinners and refresh icons</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Use animate-pulse for skeleton loaders and loading states</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Use animate-bounce sparingly - it can be distracting</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Use animate-ping for notification badges and live status indicators</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Respect user preferences with prefers-reduced-motion media query</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

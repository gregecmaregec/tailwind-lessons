import LessonLayout from "@/components/LessonLayout";

export default function TransformsLesson() {
  return (
    <LessonLayout
      title="Transforms & 3D Effects"
      description="Master 2D and 3D transforms to create dynamic, engaging interfaces"
      moduleNumber={5}
      lessonNumber={2}
      prevLesson={{
        title: "Transitions & Timing",
        href: "/lessons/module-5/transitions",
      }}
      nextLesson={{
        title: "Animations & Keyframes",
        href: "/lessons/module-5/animations",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Transforms & 3D Effects
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Use CSS transforms to scale, rotate, translate, and skew elements in 2D and 3D space.
        </p>

        {/* Scale */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Scale Transform
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Grow or shrink elements along the X and Y axes.
        </p>

        <div className="grid md:grid-cols-5 gap-6 mb-8">
          {[50, 75, 90, 95, 100, 105, 110, 125, 150].map((scale) => (
            <div key={scale} className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center">
              <div className={`mx-auto h-20 w-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg scale-${scale}`}></div>
              <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">scale-{scale}</code>
            </div>
          ))}
        </div>

        {/* Scale X and Y */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Scale X & Y Independently
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl text-center">
            <div className="mx-auto h-20 w-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg scale-x-150"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">scale-x-150</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Horizontal stretch</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl text-center">
            <div className="mx-auto h-20 w-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg scale-y-150"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">scale-y-150</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Vertical stretch</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl text-center">
            <div className="mx-auto h-20 w-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg scale-150"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">scale-150</code>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Both axes</p>
          </div>
        </div>

        {/* Rotate */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Rotate Transform
        </h2>

        <div className="grid md:grid-cols-6 gap-6 mb-8">
          {[0, 1, 2, 3, 6, 12, 45, 90, 180].map((rotation) => (
            <div key={rotation} className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center">
              <div className={`mx-auto h-20 w-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg rotate-${rotation}`}></div>
              <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">rotate-{rotation}</code>
            </div>
          ))}
        </div>

        {/* Translate */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Translate (Move) Transform
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Move elements along the X and Y axes without affecting layout.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 p-12 rounded-xl flex items-center justify-center">
            <div className="h-20 w-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg translate-x-8"></div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 p-12 rounded-xl flex items-center justify-center">
            <div className="h-20 w-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg translate-y-8"></div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 p-12 rounded-xl flex items-center justify-center">
            <div className="h-20 w-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg translate-x-8 translate-y-8"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <code className="text-xs text-slate-600 dark:text-slate-400 text-center">translate-x-8</code>
          <code className="text-xs text-slate-600 dark:text-slate-400 text-center">translate-y-8</code>
          <code className="text-xs text-slate-600 dark:text-slate-400 text-center">translate-x-8 translate-y-8</code>
        </div>

        {/* Negative Translate */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Negative Translation
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 p-12 rounded-xl flex items-center justify-center">
            <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg -translate-x-8"></div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 p-12 rounded-xl flex items-center justify-center">
            <div className="h-20 w-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg -translate-y-8"></div>
          </div>
        </div>

        {/* Skew */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Skew Transform
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[0, 3, 6, 12].map((skew) => (
            <div key={skew} className="bg-white dark:bg-slate-800 p-8 rounded-xl text-center">
              <div className={`mx-auto h-20 w-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg skew-x-${skew}`}></div>
              <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">skew-x-{skew}</code>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[0, 3, 6, 12].map((skew) => (
            <div key={skew} className="bg-white dark:bg-slate-800 p-8 rounded-xl text-center">
              <div className={`mx-auto h-20 w-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg skew-y-${skew}`}></div>
              <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">skew-y-{skew}</code>
            </div>
          ))}
        </div>

        {/* Combined Transforms */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Combined Transforms
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl group cursor-pointer">
            <div className="mx-auto h-32 w-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-4 text-center">scale + rotate</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl group cursor-pointer">
            <div className="mx-auto h-32 w-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-4 text-center">scale + translate</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl group cursor-pointer">
            <div className="mx-auto h-32 w-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg group-hover:rotate-12 group-hover:skew-x-6 transition-transform duration-300"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-4 text-center">rotate + skew</code>
          </div>
        </div>

        {/* Transform Origin */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Transform Origin
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Change the point around which transformations occur.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl">
            <div className="h-32 w-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg origin-top-left hover:rotate-45 transition-transform duration-300"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">origin-top-left</code>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl">
            <div className="h-32 w-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg origin-center hover:rotate-45 transition-transform duration-300"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">origin-center</code>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl">
            <div className="h-32 w-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg origin-bottom-right hover:rotate-45 transition-transform duration-300"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-3">origin-bottom-right</code>
          </div>
        </div>

        {/* 3D Perspective */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          3D Perspective
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Enable 3D transformations with perspective utilities.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl perspective-500">
            <div className="h-48 w-48 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg hover:rotate-y-12 transition-transform duration-500 transform-gpu"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-4 text-center">rotate-y-12 (hover)</code>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl perspective-500">
            <div className="h-48 w-48 mx-auto bg-gradient-to-br from-green-500 to-teal-600 rounded-lg hover:rotate-x-12 transition-transform duration-500 transform-gpu"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block mt-4 text-center">rotate-x-12 (hover)</code>
          </div>
        </div>

        {/* Interactive Card Flip */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          3D Card Flip Effect
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="perspective-1000 h-64">
              <div className="relative h-full preserve-3d group hover:rotate-y-180 transition-transform duration-700">
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 flex flex-col items-center justify-center text-white">
                  <h4 className="text-2xl font-bold mb-2">Front</h4>
                  <p className="text-sm text-white/80">Hover to flip</p>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl p-6 flex flex-col items-center justify-center text-white">
                  <h4 className="text-2xl font-bold mb-2">Back</h4>
                  <p className="text-sm text-white/80">Card {i} details</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real-World Button Examples */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Interactive Button Transforms
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200">
            Scale on Hover
          </button>

          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 hover:rotate-1 active:scale-95 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200">
            Scale + Rotate
          </button>

          <button className="bg-green-600 hover:bg-green-700 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200">
            Lift Effect
          </button>

          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:scale-110 hover:shadow-2xl active:scale-100 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200">
            Combined Effects
          </button>
        </div>

        {/* Image Gallery with Transforms */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Image Gallery Transform Effects
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl cursor-pointer">
              <div className={`h-64 bg-gradient-to-br ${
                i === 1 ? 'from-blue-500 to-purple-600' :
                i === 2 ? 'from-green-500 to-teal-600' :
                'from-pink-500 to-orange-500'
              } group-hover:scale-110 transition-transform duration-500`}></div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Details
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Spinner */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Loading Animations with Transforms
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl flex flex-col items-center gap-4">
            <div className="h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">animate-spin</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl flex flex-col items-center gap-4">
            <div className="h-16 w-16 bg-purple-500 rounded-lg animate-pulse"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">animate-pulse</code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl flex flex-col items-center gap-4">
            <div className="h-16 w-16 bg-pink-500 rounded-full animate-bounce"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">animate-bounce</code>
          </div>
        </div>

        {/* Hover Cards */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Product Cards with Transforms
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {['Pro', 'Premium', 'Enterprise'].map((plan, i) => (
            <div key={plan} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className={`h-32 bg-gradient-to-br ${
                i === 0 ? 'from-blue-500 to-purple-600' :
                i === 1 ? 'from-green-500 to-teal-600' :
                'from-pink-500 to-orange-500'
              }`}></div>
              <div className="p-6">
                <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-2">{plan}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Perfect for {plan.toLowerCase()} users</p>
                <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold py-2 rounded-lg hover:scale-105 transition-transform duration-200">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Best Practices
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <p>Use <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">transform-gpu</code> for smoother 3D animations</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Prefer transforms over changing position/size properties for better performance</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Combine scale with hover states for interactive feedback on buttons and cards</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Use subtle rotations (1-6 degrees) for dynamic, playful interfaces</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Add <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">active:scale-95</code> to buttons for press feedback</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

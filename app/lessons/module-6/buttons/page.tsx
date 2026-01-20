import LessonLayout from "@/components/LessonLayout";

export default function ButtonsLesson() {
  return (
    <LessonLayout
      title="Buttons & Links"
      description="Build beautiful, accessible, and interactive buttons with Tailwind"
      moduleNumber={6}
      lessonNumber={1}
      nextLesson={{
        title: "Cards & Containers",
        href: "/lessons/module-6/cards",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Building Production-Ready Buttons
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Buttons are fundamental UI elements. Let's build a complete button system with variants, sizes, and states.
        </p>

        {/* Button Variants */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Button Variants
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
            {/* Primary */}
            <div>
              <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">Primary</h4>
              <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-sm hover:shadow-md">
                Primary Button
              </button>
              <code className="block mt-2 text-xs bg-slate-50 dark:bg-slate-900 p-2 rounded">
                bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-3 rounded-lg
              </code>
            </div>

            {/* Secondary */}
            <div>
              <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">Secondary</h4>
              <button className="bg-slate-200 hover:bg-slate-300 active:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Secondary Button
              </button>
              <code className="block mt-2 text-xs bg-slate-50 dark:bg-slate-900 p-2 rounded">
                bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600
              </code>
            </div>

            {/* Outline */}
            <div>
              <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">Outline</h4>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium px-6 py-3 rounded-lg transition-colors">
                Outline Button
              </button>
              <code className="block mt-2 text-xs bg-slate-50 dark:bg-slate-900 p-2 rounded">
                border-2 border-blue-600 text-blue-600 hover:bg-blue-50
              </code>
            </div>

            {/* Ghost */}
            <div>
              <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">Ghost</h4>
              <button className="text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium px-6 py-3 rounded-lg transition-colors">
                Ghost Button
              </button>
              <code className="block mt-2 text-xs bg-slate-50 dark:bg-slate-900 p-2 rounded">
                text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20
              </code>
            </div>

            {/* Danger */}
            <div>
              <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">Danger</h4>
              <button className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-sm hover:shadow-md">
                Danger Button
              </button>
              <code className="block mt-2 text-xs bg-slate-50 dark:bg-slate-900 p-2 rounded">
                bg-red-600 hover:bg-red-700 active:bg-red-800 text-white
              </code>
            </div>
          </div>
        </div>

        {/* Button Sizes */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Button Sizes
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg flex flex-wrap gap-4 items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1.5 rounded text-sm">
              Small
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded">
              Medium
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg">
              Large
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg text-lg">
              Extra Large
            </button>
          </div>
        </div>

        {/* Buttons with Icons */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Buttons with Icons
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Item
            </button>

            <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>

            <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Send Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Button States */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Button States
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Normal
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors focus:ring-4 focus:ring-blue-300 outline-none">
              Focus Me
            </button>
            <button disabled className="bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-500 font-medium px-6 py-3 rounded-lg cursor-not-allowed opacity-60">
              Disabled
            </button>
            <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2 cursor-wait">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </button>
          </div>
        </div>

        {/* Button Groups */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Button Groups
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
            <div className="inline-flex rounded-lg shadow-sm" role="group">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-slate-200 rounded-l-lg hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-blue-400">
                Left
              </button>
              <button className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border-t border-b border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">
                Middle
              </button>
              <button className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-r-lg hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">
                Right
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Complete Button Component</h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
            <button className="w-full bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Click Me - I Scale!
            </button>
            <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold px-8 py-4 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Gradient Button
            </button>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎯 Button Best Practices
          </h3>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Use clear, action-oriented text (Download, Submit, Continue)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Add hover and active states for feedback</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Include focus states for keyboard navigation (focus:ring-*)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Use transitions for smooth state changes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>Make disabled buttons visually distinct with opacity and cursor-not-allowed</span>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}

import LessonLayout from "@/components/LessonLayout";

export default function MobileFirstLesson() {
  return (
    <LessonLayout
      title="Mobile-First Approach"
      description="Learn Tailwind's mobile-first responsive design philosophy"
      moduleNumber={3}
      lessonNumber={1}
      nextLesson={{
        title: "Breakpoints & Media Queries",
        href: "/lessons/module-3/breakpoints",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Mobile-First Philosophy
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Tailwind is mobile-first by default. Unprefixed utilities apply to all screen sizes, while prefixed utilities (sm:, md:, lg:, xl:, 2xl:) apply from that breakpoint and up.
        </p>

        {/* Breakpoint System */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Tailwind's Breakpoint System
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="space-y-3">
            {[
              { prefix: "default", width: "< 640px", desc: "Mobile (no prefix needed)" },
              { prefix: "sm:", width: "≥ 640px", desc: "Small tablets" },
              { prefix: "md:", width: "≥ 768px", desc: "Tablets" },
              { prefix: "lg:", width: "≥ 1024px", desc: "Laptops" },
              { prefix: "xl:", width: "≥ 1280px", desc: "Desktops" },
              { prefix: "2xl:", width: "≥ 1536px", desc: "Large screens" },
            ].map((bp) => (
              <div key={bp.prefix} className="bg-white dark:bg-slate-800 p-4 rounded-lg flex items-center justify-between">
                <div>
                  <code className="text-blue-600 dark:text-blue-400 font-bold">{bp.prefix}</code>
                  <span className="text-slate-600 dark:text-slate-400 ml-3">{bp.desc}</span>
                </div>
                <span className="text-slate-900 dark:text-white font-mono text-sm">{bp.width}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Example */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Live Example - Resize to See!
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-red-500 sm:bg-orange-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-purple-500 p-8 rounded-lg text-white text-center font-bold text-xl">
            <p className="block sm:hidden">📱 Mobile (Red)</p>
            <p className="hidden sm:block md:hidden">📱 SM - Small Tablet (Orange)</p>
            <p className="hidden md:block lg:hidden">💻 MD - Tablet (Yellow)</p>
            <p className="hidden lg:block xl:hidden">💻 LG - Laptop (Green)</p>
            <p className="hidden xl:block 2xl:hidden">🖥️ XL - Desktop (Blue)</p>
            <p className="hidden 2xl:block">🖥️ 2XL - Large Screen (Purple)</p>
          </div>
          <code className="block mt-4 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            bg-red-500 sm:bg-orange-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-purple-500
          </code>
        </div>

        {/* Responsive Grid */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Grid Layout
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <p className="text-slate-900 dark:text-white mb-4">
            <code className="text-blue-600 dark:text-blue-400">grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4</code>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg font-medium text-center">
                Card {i}
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Text */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Typography
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Responsive Heading
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300">
              This text grows larger on bigger screens
            </p>
          </div>
          <code className="block mt-4 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          </code>
        </div>

        {/* Hide/Show Elements */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Show/Hide at Different Sizes
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
            <div className="block md:hidden bg-blue-500 text-white p-4 rounded text-center font-medium">
              📱 Visible only on Mobile & Small Tablets
            </div>
            <div className="hidden md:block lg:hidden bg-green-500 text-white p-4 rounded text-center font-medium">
              💻 Visible only on MD screens
            </div>
            <div className="hidden lg:block bg-purple-500 text-white p-4 rounded text-center font-medium">
              🖥️ Visible only on LG screens and above
            </div>
          </div>
          <code className="block mt-4 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            block md:hidden | hidden md:block lg:hidden | hidden lg:block
          </code>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎯 Key Principles
          </h3>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span>
              <span>Start with mobile styles (no prefix)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span>
              <span>Add responsive modifiers for larger screens (sm:, md:, lg:)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span>
              <span>Responsive utilities apply from that breakpoint up</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">4.</span>
              <span>Use responsive modifiers for layout, spacing, typography, display, and more</span>
            </li>
          </ul>
        </div>
      </div>
    </LessonLayout>
  );
}

import LessonLayout from "@/components/LessonLayout";

export default function ColorsLesson() {
  const colors = [
    "slate", "gray", "zinc", "neutral", "stone",
    "red", "orange", "amber", "yellow", "lime", "green",
    "emerald", "teal", "cyan", "sky", "blue", "indigo",
    "violet", "purple", "fuchsia", "pink", "rose"
  ];

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  return (
    <LessonLayout
      title="Colors & Backgrounds"
      description="Master Tailwind's comprehensive color system and background utilities"
      moduleNumber={1}
      lessonNumber={3}
      prevLesson={{
        title: "Width, Height & Sizing",
        href: "/lessons/module-1/sizing",
      }}
      nextLesson={{
        title: "Typography & Text Styling",
        href: "/lessons/module-1/typography",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Tailwind's Color System
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Tailwind includes a carefully crafted color palette with 22 colors, each with 11 shades from 50 (lightest) to 950 (darkest).
        </p>

        {/* Color Palette */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Complete Color Palette
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {colors.map((color) => (
              <div key={color} className="text-center">
                <div className={`bg-${color}-500 h-16 rounded-lg mb-2 shadow-md`}></div>
                <p className="text-sm font-medium text-slate-900 dark:text-white capitalize">
                  {color}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Color Shades */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Color Shades (Blue Example)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="space-y-2">
            {shades.map((shade) => (
              <div key={shade} className="flex items-center gap-4">
                <code className="text-sm font-mono bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-1 rounded w-20 text-center">
                  {shade}
                </code>
                <div className={`flex-1 bg-blue-${shade} h-12 rounded shadow-sm flex items-center justify-center`}>
                  <span className={`font-mono text-sm ${shade >= 400 ? 'text-white' : 'text-slate-900'}`}>
                    bg-blue-{shade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Colors */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Text Colors (text-*)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-3">
            <p className="text-red-600 font-semibold">text-red-600: Error messages</p>
            <p className="text-orange-600 font-semibold">text-orange-600: Warnings</p>
            <p className="text-yellow-600 font-semibold">text-yellow-600: Caution notices</p>
            <p className="text-green-600 font-semibold">text-green-600: Success messages</p>
            <p className="text-blue-600 font-semibold">text-blue-600: Information</p>
            <p className="text-purple-600 font-semibold">text-purple-600: Premium features</p>
            <p className="text-slate-600 font-semibold">text-slate-600: Secondary text</p>
          </div>
        </div>

        {/* Background Colors */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Background Colors (bg-*)
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Solid Backgrounds</h4>
            <div className="space-y-3">
              <div className="bg-red-500 text-white p-4 rounded-lg font-medium">
                bg-red-500
              </div>
              <div className="bg-blue-500 text-white p-4 rounded-lg font-medium">
                bg-blue-500
              </div>
              <div className="bg-green-500 text-white p-4 rounded-lg font-medium">
                bg-green-500
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">With Opacity</h4>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg space-y-3">
              <div className="bg-blue-500/100 text-white p-3 rounded font-medium">
                bg-blue-500/100 (100%)
              </div>
              <div className="bg-blue-500/75 text-white p-3 rounded font-medium">
                bg-blue-500/75 (75%)
              </div>
              <div className="bg-blue-500/50 text-white p-3 rounded font-medium">
                bg-blue-500/50 (50%)
              </div>
              <div className="bg-blue-500/25 text-slate-900 dark:text-white p-3 rounded font-medium">
                bg-blue-500/25 (25%)
              </div>
            </div>
          </div>
        </div>

        {/* Border Colors */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Border Colors (border-*)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg grid md:grid-cols-2 gap-4">
            <div className="border-4 border-red-500 p-4 rounded-lg text-center font-medium text-slate-900 dark:text-white">
              border-red-500
            </div>
            <div className="border-4 border-blue-500 p-4 rounded-lg text-center font-medium text-slate-900 dark:text-white">
              border-blue-500
            </div>
            <div className="border-4 border-green-500 p-4 rounded-lg text-center font-medium text-slate-900 dark:text-white">
              border-green-500
            </div>
            <div className="border-4 border-purple-500 p-4 rounded-lg text-center font-medium text-slate-900 dark:text-white">
              border-purple-500
            </div>
          </div>
        </div>

        {/* Gradients */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Background Gradients
        </h2>

        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl text-white text-center font-semibold text-lg">
            bg-gradient-to-r from-blue-500 to-purple-600
          </div>
          <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-8 rounded-xl text-white text-center font-semibold text-lg">
            bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500
          </div>
          <div className="bg-gradient-to-t from-green-400 to-blue-500 p-8 rounded-xl text-white text-center font-semibold text-lg">
            bg-gradient-to-t from-green-400 to-blue-500
          </div>
        </div>

        {/* Gradient Directions */}
        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Gradient Directions</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { dir: "to-r", label: "Right →" },
              { dir: "to-l", label: "← Left" },
              { dir: "to-t", label: "↑ Top" },
              { dir: "to-b", label: "↓ Bottom" },
              { dir: "to-br", label: "↘ Bottom Right" },
              { dir: "to-bl", label: "↙ Bottom Left" },
              { dir: "to-tr", label: "↗ Top Right" },
              { dir: "to-tl", label: "↖ Top Left" },
            ].map((item) => (
              <div key={item.dir}>
                <div className={`bg-gradient-${item.dir} from-cyan-500 to-blue-500 h-20 rounded-lg flex items-center justify-center text-white font-medium text-sm`}>
                  {item.label}
                </div>
                <p className="text-xs text-center mt-2 font-mono text-slate-600 dark:text-slate-400">
                  bg-gradient-{item.dir}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ring Colors */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Ring Colors (Focus States)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg grid md:grid-cols-2 gap-4">
            <button className="bg-blue-500 text-white p-4 rounded-lg font-medium ring-4 ring-blue-300">
              ring-blue-300
            </button>
            <button className="bg-purple-500 text-white p-4 rounded-lg font-medium ring-4 ring-purple-300">
              ring-purple-300
            </button>
            <button className="bg-green-500 text-white p-4 rounded-lg font-medium ring-4 ring-green-300 ring-offset-2">
              ring-green-300 ring-offset-2
            </button>
            <button className="bg-red-500 text-white p-4 rounded-lg font-medium ring-4 ring-red-300 ring-offset-4">
              ring-red-300 ring-offset-4
            </button>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎯 Quick Reference
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Color Utilities</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">text-blue-600</code> - text color</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">bg-blue-500</code> - background</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">border-blue-500</code> - border</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">ring-blue-300</code> - ring/outline</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Modifiers</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">bg-blue-500/50</code> - 50% opacity</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">bg-gradient-to-r</code> - gradient</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">from-blue-500</code> - gradient start</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">to-purple-600</code> - gradient end</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

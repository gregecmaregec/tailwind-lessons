import LessonLayout from "@/components/LessonLayout";

export default function GridBasicsLesson() {
  return (
    <LessonLayout
      title="CSS Grid Basics"
      description="Learn the fundamentals of CSS Grid layout with Tailwind"
      moduleNumber={2}
      lessonNumber={3}
      prevLesson={{
        title: "Advanced Flexbox Patterns",
        href: "/lessons/module-2/flexbox-advanced",
      }}
      nextLesson={{
        title: "Advanced Grid Layouts",
        href: "/lessons/module-2/grid-advanced",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          What is CSS Grid?
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          CSS Grid is a powerful two-dimensional layout system perfect for creating complex layouts with rows and columns.
        </p>

        {/* Grid Template Columns */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Grid Template Columns (grid-cols-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Define how many columns your grid should have.
        </p>

        <div className="space-y-6 mb-8">
          {[
            { cols: "grid-cols-2", count: 2 },
            { cols: "grid-cols-3", count: 3 },
            { cols: "grid-cols-4", count: 4 },
          ].map((item) => (
            <div key={item.cols} className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                <code className="text-blue-600 dark:text-blue-400">{item.cols}</code>
              </h4>
              <div className={`grid ${item.cols} gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg`}>
                {Array.from({ length: item.count * 2 }).map((_, i) => (
                  <div key={i} className="bg-blue-500 text-white p-4 rounded font-medium text-center">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Grid Template Rows */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Grid Template Rows (grid-rows-*)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
            <code className="text-purple-600 dark:text-purple-400">grid-rows-3</code>
          </h4>
          <div className="grid grid-rows-3 grid-flow-col gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg h-80">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-purple-500 text-white p-4 rounded font-medium flex items-center justify-center">
                {i}
              </div>
            ))}
          </div>
        </div>

        {/* Gap */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Grid Gap Spacing
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { gap: "gap-2", label: "gap-2" },
            { gap: "gap-4", label: "gap-4" },
            { gap: "gap-8", label: "gap-8" },
          ].map((item) => (
            <div key={item.gap} className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                <code className="text-blue-600 dark:text-blue-400">{item.label}</code>
              </h4>
              <div className={`grid grid-cols-2 ${item.gap} bg-white dark:bg-slate-800 p-4 rounded-lg`}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-blue-500 text-white p-3 rounded font-medium text-center">
                    {i}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Column Span */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Column Span (col-span-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Make items span multiple columns.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-4 gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
            <div className="col-span-4 bg-blue-500 text-white p-4 rounded font-medium text-center">
              col-span-4 (Full Width)
            </div>
            <div className="col-span-2 bg-green-500 text-white p-4 rounded font-medium text-center">
              col-span-2
            </div>
            <div className="col-span-2 bg-purple-500 text-white p-4 rounded font-medium text-center">
              col-span-2
            </div>
            <div className="col-span-1 bg-orange-500 text-white p-4 rounded font-medium text-center">
              1
            </div>
            <div className="col-span-3 bg-pink-500 text-white p-4 rounded font-medium text-center">
              col-span-3
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            col-span-1 through col-span-12
          </code>
        </div>

        {/* Row Span */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Row Span (row-span-*)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-3 grid-rows-3 gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg h-80">
            <div className="row-span-3 bg-blue-500 text-white p-4 rounded font-medium flex items-center justify-center">
              row-span-3
            </div>
            <div className="row-span-2 bg-green-500 text-white p-4 rounded font-medium flex items-center justify-center">
              row-span-2
            </div>
            <div className="bg-purple-500 text-white p-4 rounded font-medium flex items-center justify-center">
              1
            </div>
            <div className="bg-orange-500 text-white p-4 rounded font-medium flex items-center justify-center">
              2
            </div>
            <div className="bg-pink-500 text-white p-4 rounded font-medium flex items-center justify-center">
              3
            </div>
            <div className="col-span-2 bg-indigo-500 text-white p-4 rounded font-medium flex items-center justify-center">
              col-span-2
            </div>
          </div>
        </div>

        {/* Grid Auto Flow */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Grid Auto Flow
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-blue-600 dark:text-blue-400">grid-flow-row</code> (default)
            </h4>
            <div className="grid grid-cols-3 grid-flow-row gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-blue-500 text-white p-4 rounded font-medium text-center">
                  {i}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-purple-600 dark:text-purple-400">grid-flow-col</code>
            </h4>
            <div className="grid grid-rows-3 grid-flow-col gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-purple-500 text-white p-4 rounded font-medium text-center">
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Justify & Align Items */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Grid Alignment
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-blue-600 dark:text-blue-400">justify-items-center</code>
            </h4>
            <div className="grid grid-cols-3 justify-items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-blue-500 text-white p-4 rounded font-medium w-16 text-center">
                  {i}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-purple-600 dark:text-purple-400">items-center</code>
            </h4>
            <div className="grid grid-cols-3 items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg h-40">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-purple-500 text-white p-4 rounded font-medium text-center">
                  {i}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-green-600 dark:text-green-400">place-items-center</code>
            </h4>
            <div className="grid grid-cols-3 place-items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg h-40">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-green-500 text-white p-4 rounded font-medium w-16 text-center">
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Common Patterns */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Common Grid Patterns
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Card Grid
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg">
                  <h5 className="font-bold text-lg mb-2">Card {i}</h5>
                  <p className="text-white/80 text-sm">Responsive grid layout</p>
                </div>
              ))}
            </div>
            <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
            </code>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Dashboard Layout
            </h4>
            <div className="grid grid-cols-4 grid-rows-3 gap-4 bg-[#4fb86b] dark:bg-slate-800 p-4 rounded-lg h-80">
              <div className="col-span-4 bg-[#4fb86b] text-white p-4 rounded font-medium flex items-center justify-center">
                Header
              </div>
              <div className="col-span-1 row-span-2 bg-purple-500 text-white p-4 rounded font-medium flex items-center justify-center">
                Sidebar
              </div>
              <div className="col-span-3 row-span-2 bg-green-500 text-white p-4 rounded font-medium flex items-center justify-center">
                Main Content
              </div>
            </div>
            <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
              grid grid-cols-4 grid-rows-3 gap-4
            </code>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎯 Quick Reference
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Grid Setup</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">grid</code> - enable grid</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">grid-cols-3</code> - 3 columns</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">gap-4</code> - spacing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Spanning</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">col-span-2</code> - span 2 cols</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">row-span-2</code> - span 2 rows</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">col-span-full</code> - full width</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Alignment</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">items-center</code> - vertical</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">justify-items-center</code> - horizontal</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">place-items-center</code> - both</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

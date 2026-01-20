import LessonLayout from "@/components/LessonLayout";

export default function FlexboxBasicsLesson() {
  return (
    <LessonLayout
      title="Flexbox Fundamentals"
      description="Master the basics of Flexbox layout with Tailwind CSS"
      moduleNumber={2}
      lessonNumber={1}
      prevLesson={{
        title: "Borders & Rounded Corners",
        href: "/lessons/module-1/borders",
      }}
      nextLesson={{
        title: "Advanced Flexbox Patterns",
        href: "/lessons/module-2/flexbox-advanced",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          What is Flexbox?
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Flexbox is a one-dimensional layout system perfect for distributing space and aligning content in rows or columns.
        </p>

        {/* Flex Direction */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Flex Direction (flex-*)
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-blue-600 dark:text-blue-400">flex-row</code>
            </h4>
            <div className="flex flex-row gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="bg-blue-500 text-white p-4 rounded font-medium flex-shrink-0">1</div>
              <div className="bg-blue-500 text-white p-4 rounded font-medium flex-shrink-0">2</div>
              <div className="bg-blue-500 text-white p-4 rounded font-medium flex-shrink-0">3</div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-purple-600 dark:text-purple-400">flex-col</code>
            </h4>
            <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="bg-purple-500 text-white p-4 rounded font-medium">1</div>
              <div className="bg-purple-500 text-white p-4 rounded font-medium">2</div>
              <div className="bg-purple-500 text-white p-4 rounded font-medium">3</div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-green-600 dark:text-green-400">flex-row-reverse</code>
            </h4>
            <div className="flex flex-row-reverse gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="bg-green-500 text-white p-4 rounded font-medium flex-shrink-0">1</div>
              <div className="bg-green-500 text-white p-4 rounded font-medium flex-shrink-0">2</div>
              <div className="bg-green-500 text-white p-4 rounded font-medium flex-shrink-0">3</div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-orange-600 dark:text-orange-400">flex-col-reverse</code>
            </h4>
            <div className="flex flex-col-reverse gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="bg-orange-500 text-white p-4 rounded font-medium">1</div>
              <div className="bg-orange-500 text-white p-4 rounded font-medium">2</div>
              <div className="bg-orange-500 text-white p-4 rounded font-medium">3</div>
            </div>
          </div>
        </div>

        {/* Justify Content */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Justify Content (justify-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Control how flex items are positioned along the main axis.
        </p>

        <div className="space-y-4 mb-8">
          {[
            { class: "justify-start", label: "justify-start" },
            { class: "justify-center", label: "justify-center" },
            { class: "justify-end", label: "justify-end" },
            { class: "justify-between", label: "justify-between" },
            { class: "justify-around", label: "justify-around" },
            { class: "justify-evenly", label: "justify-evenly" },
          ].map((item) => (
            <div key={item.class} className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                <code className="text-blue-600 dark:text-blue-400">{item.label}</code>
              </h4>
              <div className={`flex ${item.class} bg-white dark:bg-slate-800 p-4 rounded-lg`}>
                <div className="bg-blue-500 text-white p-3 rounded font-medium w-16 text-center">1</div>
                <div className="bg-blue-500 text-white p-3 rounded font-medium w-16 text-center">2</div>
                <div className="bg-blue-500 text-white p-3 rounded font-medium w-16 text-center">3</div>
              </div>
            </div>
          ))}
        </div>

        {/* Align Items */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Align Items (items-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Control how flex items are positioned along the cross axis.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { class: "items-start", label: "items-start" },
            { class: "items-center", label: "items-center" },
            { class: "items-end", label: "items-end" },
            { class: "items-stretch", label: "items-stretch" },
          ].map((item) => (
            <div key={item.class} className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                <code className="text-purple-600 dark:text-purple-400">{item.label}</code>
              </h4>
              <div className={`flex ${item.class} bg-white dark:bg-slate-800 p-4 rounded-lg h-40 gap-3`}>
                <div className="bg-purple-500 text-white p-3 rounded font-medium">1</div>
                <div className="bg-purple-500 text-white p-3 rounded font-medium">2 Tall</div>
                <div className="bg-purple-500 text-white p-3 rounded font-medium">3</div>
              </div>
            </div>
          ))}
        </div>

        {/* Flex Wrap */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Flex Wrap (flex-wrap)
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-blue-600 dark:text-blue-400">flex-nowrap</code>
            </h4>
            <div className="flex flex-nowrap gap-2 bg-white dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-blue-500 text-white p-3 rounded font-medium flex-shrink-0 w-24 text-center">
                  {i}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-green-600 dark:text-green-400">flex-wrap</code>
            </h4>
            <div className="flex flex-wrap gap-2 bg-white dark:bg-slate-800 p-4 rounded-lg">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-green-500 text-white p-3 rounded font-medium w-24 text-center">
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flex Grow & Shrink */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Flex Grow & Shrink
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-blue-600 dark:text-blue-400">flex-1</code> (grow and shrink)
            </h4>
            <div className="flex gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="bg-blue-500 text-white p-4 rounded font-medium">Fixed</div>
              <div className="flex-1 bg-green-500 text-white p-4 rounded font-medium">flex-1 (grows)</div>
              <div className="bg-blue-500 text-white p-4 rounded font-medium">Fixed</div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Multiple <code className="text-purple-600 dark:text-purple-400">flex-1</code>
            </h4>
            <div className="flex gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="flex-1 bg-purple-500 text-white p-4 rounded font-medium text-center">flex-1</div>
              <div className="flex-1 bg-purple-500 text-white p-4 rounded font-medium text-center">flex-1</div>
              <div className="flex-1 bg-purple-500 text-white p-4 rounded font-medium text-center">flex-1</div>
            </div>
          </div>
        </div>

        {/* Gap */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Gap Utilities
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { class: "gap-2", label: "gap-2" },
            { class: "gap-4", label: "gap-4" },
            { class: "gap-8", label: "gap-8" },
          ].map((item) => (
            <div key={item.class} className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                <code className="text-blue-600 dark:text-blue-400">{item.label}</code>
              </h4>
              <div className={`flex ${item.class} bg-white dark:bg-slate-800 p-4 rounded-lg`}>
                <div className="bg-blue-500 text-white p-3 rounded font-medium flex-1 text-center">1</div>
                <div className="bg-blue-500 text-white p-3 rounded font-medium flex-1 text-center">2</div>
                <div className="bg-blue-500 text-white p-3 rounded font-medium flex-1 text-center">3</div>
              </div>
            </div>
          ))}
        </div>

        {/* Common Patterns */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Common Flexbox Patterns
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Center Everything
            </h4>
            <div className="flex items-center justify-center bg-white dark:bg-slate-800 p-12 rounded-lg">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg font-medium">
                Perfectly Centered
              </div>
            </div>
            <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-2 rounded">
              flex items-center justify-center
            </code>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Space Between with Center Alignment
            </h4>
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-6 rounded-lg">
              <div className="bg-blue-500 text-white p-4 rounded font-medium">Logo</div>
              <div className="bg-green-500 text-white p-4 rounded font-medium">Navigation</div>
              <div className="bg-purple-500 text-white p-4 rounded font-medium">Profile</div>
            </div>
            <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-2 rounded">
              flex items-center justify-between
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
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Direction</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">flex-row</code> - horizontal</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">flex-col</code> - vertical</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">flex-wrap</code> - wrap items</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Alignment</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">justify-center</code> - main axis</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">items-center</code> - cross axis</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">justify-between</code> - space out</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Sizing</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">flex-1</code> - grow/shrink</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">flex-none</code> - fixed size</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">gap-4</code> - spacing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

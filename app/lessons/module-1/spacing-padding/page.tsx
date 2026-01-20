import LessonLayout from "@/components/LessonLayout";

export default function SpacingPaddingLesson() {
  return (
    <LessonLayout
      title="Spacing & Padding"
      description="Master Tailwind's spacing system with padding, margin, and gap utilities"
      moduleNumber={1}
      lessonNumber={1}
      nextLesson={{
        title: "Width, Height & Sizing",
        href: "/lessons/module-1/sizing",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Understanding Tailwind's Spacing Scale
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Tailwind uses a consistent spacing scale where each unit represents 0.25rem (4px by default).
          The scale goes from 0 to 96, giving you precise control over spacing.
        </p>

        {/* Spacing Scale Visualization */}
        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
            Spacing Scale Reference
          </h3>
          <div className="space-y-2">
            {[0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32].map((size) => (
              <div key={size} className="flex items-center gap-4">
                <code className="text-sm font-mono bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded w-16 text-center">
                  {size}
                </code>
                <div className="flex-1 bg-white dark:bg-slate-800 rounded">
                  <div
                    className="bg-blue-500 h-6 rounded"
                    style={{ width: `${size * 4}px` }}
                  ></div>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400 w-24">
                  {size * 4}px / {size * 0.25}rem
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Padding Examples */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Padding (p-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Padding adds space inside an element. Tailwind offers utilities for all sides, individual sides, and x/y axes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* All sides */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              All Sides: <code className="text-blue-600 dark:text-blue-400">p-8</code>
            </h4>
            <div className="bg-white dark:bg-slate-800 border-2 border-dashed border-blue-500">
              <div className="p-8 bg-blue-500/20 border-2 border-blue-500">
                <div className="bg-white dark:bg-slate-900 p-4 rounded text-center text-sm">
                  Content
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal padding */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Horizontal: <code className="text-purple-600 dark:text-purple-400">px-8</code>
            </h4>
            <div className="bg-white dark:bg-slate-800 border-2 border-dashed border-purple-500">
              <div className="px-8 bg-purple-500/20 border-x-2 border-purple-500">
                <div className="bg-white dark:bg-slate-900 p-4 rounded text-center text-sm">
                  Content
                </div>
              </div>
            </div>
          </div>

          {/* Vertical padding */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Vertical: <code className="text-green-600 dark:text-green-400">py-8</code>
            </h4>
            <div className="bg-white dark:bg-slate-800 border-2 border-dashed border-green-500">
              <div className="py-8 bg-green-500/20 border-y-2 border-green-500">
                <div className="bg-white dark:bg-slate-900 p-4 rounded text-center text-sm">
                  Content
                </div>
              </div>
            </div>
          </div>

          {/* Individual sides */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Individual: <code className="text-orange-600 dark:text-orange-400">pt-8 pr-4 pb-2 pl-6</code>
            </h4>
            <div className="bg-white dark:bg-slate-800 border-2 border-dashed border-orange-500">
              <div className="pt-8 pr-4 pb-2 pl-6 bg-orange-500/20 border-2 border-orange-500">
                <div className="bg-white dark:bg-slate-900 p-4 rounded text-center text-sm">
                  Content
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Margin Examples */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Margin (m-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Margin adds space outside an element, pushing other elements away.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-600 p-4">
              <div className="mb-6 bg-blue-500 text-white p-4 rounded text-center">
                Box with <code className="bg-blue-600 px-2 py-1 rounded">mb-6</code> (margin-bottom: 1.5rem)
              </div>
              <div className="bg-green-500 text-white p-4 rounded text-center">
                Next Box
              </div>
            </div>
          </div>
        </div>

        {/* Space Between */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Space Between (space-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Add consistent spacing between child elements without adding margin to each one.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-blue-600 dark:text-blue-400">space-y-4</code>
            </h4>
            <div className="space-y-4 bg-white dark:bg-slate-800 p-4 rounded">
              <div className="bg-blue-500 text-white p-3 rounded text-center">Item 1</div>
              <div className="bg-blue-500 text-white p-3 rounded text-center">Item 2</div>
              <div className="bg-blue-500 text-white p-3 rounded text-center">Item 3</div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-purple-600 dark:text-purple-400">space-x-4</code>
            </h4>
            <div className="flex space-x-4 bg-white dark:bg-slate-800 p-4 rounded">
              <div className="bg-purple-500 text-white p-3 rounded text-center flex-1">Item 1</div>
              <div className="bg-purple-500 text-white p-3 rounded text-center flex-1">Item 2</div>
              <div className="bg-purple-500 text-white p-3 rounded text-center flex-1">Item 3</div>
            </div>
          </div>
        </div>

        {/* Gap (for Flexbox and Grid) */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Gap (gap-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          The modern way to add spacing in flexbox and grid layouts.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Flexbox: <code className="text-blue-600 dark:text-blue-400">flex gap-4</code>
            </h4>
            <div className="flex gap-4 bg-white dark:bg-slate-800 p-4 rounded">
              <div className="bg-blue-500 text-white p-3 rounded flex-1 text-center">1</div>
              <div className="bg-blue-500 text-white p-3 rounded flex-1 text-center">2</div>
              <div className="bg-blue-500 text-white p-3 rounded flex-1 text-center">3</div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Grid: <code className="text-green-600 dark:text-green-400">grid grid-cols-3 gap-4</code>
            </h4>
            <div className="grid grid-cols-3 gap-4 bg-white dark:bg-slate-800 p-4 rounded">
              <div className="bg-green-500 text-white p-3 rounded text-center">1</div>
              <div className="bg-green-500 text-white p-3 rounded text-center">2</div>
              <div className="bg-green-500 text-white p-3 rounded text-center">3</div>
              <div className="bg-green-500 text-white p-3 rounded text-center">4</div>
              <div className="bg-green-500 text-white p-3 rounded text-center">5</div>
              <div className="bg-green-500 text-white p-3 rounded text-center">6</div>
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎯 Quick Reference
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Padding</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">p-4</code> - all sides</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">px-4</code> - horizontal</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">py-4</code> - vertical</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">pt-4</code> - top only</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Margin</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">m-4</code> - all sides</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">mx-auto</code> - center horizontally</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">-mt-4</code> - negative margin</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">space-y-4</code> - spacing between</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

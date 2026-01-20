import LessonLayout from "@/components/LessonLayout";

export default function SizingLesson() {
  return (
    <LessonLayout
      title="Width, Height & Sizing"
      description="Control element dimensions with Tailwind's powerful sizing utilities"
      moduleNumber={1}
      lessonNumber={2}
      prevLesson={{
        title: "Spacing & Padding",
        href: "/lessons/module-1/spacing-padding",
      }}
      nextLesson={{
        title: "Colors & Backgrounds",
        href: "/lessons/module-1/colors",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Understanding Sizing in Tailwind
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Tailwind provides utilities for fixed, percentage-based, and responsive sizing. Let's explore all the options.
        </p>

        {/* Fixed Width */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Fixed Width (w-*)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="space-y-4 bg-white dark:bg-slate-800 p-6 rounded-lg">
            {[
              { class: "w-16", label: "w-16 (4rem / 64px)" },
              { class: "w-32", label: "w-32 (8rem / 128px)" },
              { class: "w-48", label: "w-48 (12rem / 192px)" },
              { class: "w-64", label: "w-64 (16rem / 256px)" },
            ].map((item) => (
              <div key={item.class}>
                <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mb-2">
                  {item.label}
                </p>
                <div className={`${item.class} bg-gradient-to-r from-blue-500 to-purple-600 h-12 rounded flex items-center justify-center text-white font-semibold`}>
                  {item.class}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Percentage Width */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Percentage-Based Width
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Use fractions and percentages for responsive layouts that adapt to their container.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="space-y-4 bg-white dark:bg-slate-800 p-6 rounded-lg">
            {[
              { class: "w-1/2", label: "w-1/2 (50%)" },
              { class: "w-1/3", label: "w-1/3 (33.333%)" },
              { class: "w-2/3", label: "w-2/3 (66.666%)" },
              { class: "w-1/4", label: "w-1/4 (25%)" },
              { class: "w-3/4", label: "w-3/4 (75%)" },
              { class: "w-full", label: "w-full (100%)" },
            ].map((item) => (
              <div key={item.class}>
                <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mb-2">
                  {item.label}
                </p>
                <div className={`${item.class} bg-gradient-to-r from-green-500 to-teal-600 h-10 rounded flex items-center justify-center text-white font-semibold text-sm`}>
                  {item.class}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Width Values */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Special Width Values
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-blue-600 dark:text-blue-400">w-auto</code>
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Lets the browser determine the width (default behavior)
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded">
              <div className="w-auto bg-blue-500 text-white p-3 rounded inline-block">
                Auto width content
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-purple-600 dark:text-purple-400">w-screen</code>
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Full viewport width (100vw)
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded overflow-hidden">
              <div className="w-full bg-purple-500 text-white p-3 rounded text-center">
                Full width (simulated)
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-green-600 dark:text-green-400">w-min</code>
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Minimum content width (shrink-wraps)
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded">
              <div className="w-min bg-green-500 text-white p-3 rounded whitespace-nowrap">
                Minimum width
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-orange-600 dark:text-orange-400">w-max</code>
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Maximum content width (expands)
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded overflow-hidden">
              <div className="w-max bg-orange-500 text-white p-3 rounded">
                Maximum content width
              </div>
            </div>
          </div>
        </div>

        {/* Height */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Height (h-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Height utilities work the same way as width, with the same scale and values.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
            <div className="flex gap-4 items-end">
              {[
                { class: "h-16", label: "h-16" },
                { class: "h-24", label: "h-24" },
                { class: "h-32", label: "h-32" },
                { class: "h-40", label: "h-40" },
                { class: "h-48", label: "h-48" },
              ].map((item) => (
                <div key={item.class} className="flex-1">
                  <div className={`${item.class} bg-gradient-to-b from-pink-500 to-rose-600 rounded flex items-end justify-center pb-2 text-white font-semibold text-xs`}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Height Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-blue-600 dark:text-blue-400">h-screen</code>
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Full viewport height (100vh)
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded">
              <div className="h-32 bg-blue-500 text-white rounded flex items-center justify-center">
                Viewport height (simulated)
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-purple-600 dark:text-purple-400">h-full</code>
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              100% of parent height
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded h-32">
              <div className="h-full bg-purple-500 text-white rounded flex items-center justify-center">
                Full height
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-green-600 dark:text-green-400">h-auto</code>
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Auto height based on content
            </p>
            <div className="bg-white dark:bg-slate-800 p-4 rounded">
              <div className="h-auto bg-green-500 text-white p-4 rounded">
                Content determines height
              </div>
            </div>
          </div>
        </div>

        {/* Min and Max Width/Height */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Min & Max Constraints
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Control minimum and maximum dimensions for responsive designs.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Min/Max Width
            </h4>
            <div className="space-y-4 bg-white dark:bg-slate-800 p-4 rounded">
              <div>
                <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mb-2">min-w-0</p>
                <div className="min-w-0 bg-blue-500 text-white p-3 rounded text-sm">
                  Minimum width: 0
                </div>
              </div>
              <div>
                <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mb-2">max-w-xs</p>
                <div className="max-w-xs bg-purple-500 text-white p-3 rounded text-sm">
                  Maximum width: 20rem (320px)
                </div>
              </div>
              <div>
                <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mb-2">max-w-prose</p>
                <div className="max-w-prose bg-green-500 text-white p-3 rounded text-sm">
                  Optimal for reading: 65ch
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Min/Max Height
            </h4>
            <div className="space-y-4 bg-white dark:bg-slate-800 p-4 rounded">
              <div>
                <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mb-2">min-h-screen</p>
                <div className="min-h-20 bg-orange-500 text-white p-3 rounded text-sm flex items-center justify-center">
                  Minimum height: viewport
                </div>
              </div>
              <div>
                <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mb-2">max-h-48</p>
                <div className="max-h-48 bg-pink-500 text-white p-3 rounded text-sm overflow-y-auto">
                  Maximum height: 12rem
                  <br />Content will scroll if it exceeds this height
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Size (Width and Height together) */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Square Sizing (size-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Set width and height to the same value for square elements.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
            <div className="flex gap-4 items-end flex-wrap">
              {[
                { class: "size-12", label: "size-12" },
                { class: "size-16", label: "size-16" },
                { class: "size-20", label: "size-20" },
                { class: "size-24", label: "size-24" },
                { class: "size-32", label: "size-32" },
              ].map((item) => (
                <div key={item.class} className="text-center">
                  <div className={`${item.class} bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm`}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎯 Quick Reference
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Width</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">w-64</code> - 16rem (256px)</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">w-1/2</code> - 50%</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">w-full</code> - 100%</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">w-screen</code> - 100vw</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">max-w-prose</code> - 65ch</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Height</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">h-64</code> - 16rem (256px)</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">h-full</code> - 100%</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">h-screen</code> - 100vh</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">min-h-screen</code> - min 100vh</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">size-16</code> - 4rem × 4rem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

import LessonLayout from "@/components/LessonLayout";

export default function PositioningLesson() {
  return (
    <LessonLayout
      title="Positioning & Z-Index"
      description="Master CSS positioning and stacking contexts with Tailwind"
      moduleNumber={2}
      lessonNumber={5}
      prevLesson={{
        title: "Advanced Grid Layouts",
        href: "/lessons/module-2/grid-advanced",
      }}
      nextLesson={{
        title: "Mobile-First Approach",
        href: "/lessons/module-3/mobile-first",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          CSS Positioning
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Learn how to precisely position elements and control stacking order with z-index.
        </p>

        {/* Position Types */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Position Types
        </h2>

        <div className="space-y-6 mb-8">
          {/* Static */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-blue-600 dark:text-blue-400">static</code> (default)
            </h4>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="static bg-blue-500 text-white p-4 rounded font-medium inline-block">
                Static Element (normal flow)
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
              Default positioning - follows normal document flow. Top/right/bottom/left have no effect.
            </p>
          </div>

          {/* Relative */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-purple-600 dark:text-purple-400">relative</code>
            </h4>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg h-32">
              <div className="relative top-4 left-8 bg-purple-500 text-white p-4 rounded font-medium inline-block">
                Relative (top-4 left-8)
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
              Positioned relative to its normal position. Creates a positioning context for absolute children.
            </p>
            <code className="block mt-2 text-sm bg-white dark:bg-slate-800 p-2 rounded">
              relative top-4 left-8
            </code>
          </div>

          {/* Absolute */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-green-600 dark:text-green-400">absolute</code>
            </h4>
            <div className="relative bg-white dark:bg-slate-800 p-4 rounded-lg h-48">
              <div className="absolute top-4 right-4 bg-green-500 text-white p-4 rounded font-medium">
                Absolute (top-4 right-4)
              </div>
              <div className="absolute bottom-4 left-4 bg-green-500 text-white p-4 rounded font-medium">
                Absolute (bottom-4 left-4)
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Parent container (relative positioning)
              </p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
              Positioned relative to nearest positioned ancestor. Removed from normal flow.
            </p>
            <code className="block mt-2 text-sm bg-white dark:bg-slate-800 p-2 rounded">
              absolute top-4 right-4
            </code>
          </div>

          {/* Fixed */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-orange-600 dark:text-orange-400">fixed</code>
            </h4>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg h-32 overflow-hidden">
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                Fixed elements stay in place when scrolling (relative to viewport)
              </p>
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded font-medium text-sm">
                Scroll the page to see a real fixed element
              </div>
            </div>
            <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-2 rounded">
              fixed top-0 right-0
            </code>
          </div>

          {/* Sticky */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-pink-600 dark:text-pink-400">sticky</code>
            </h4>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg max-h-48 overflow-y-auto">
              <div className="sticky top-0 bg-pink-500 text-white p-3 rounded font-medium mb-2">
                Sticky Header (scroll to see)
              </div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-slate-100 dark:bg-slate-700 p-3 rounded mb-2 text-sm">
                  Content item {i}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
              Acts like relative until scroll threshold, then becomes fixed.
            </p>
            <code className="block mt-2 text-sm bg-white dark:bg-slate-800 p-2 rounded">
              sticky top-0
            </code>
          </div>
        </div>

        {/* Inset Utilities */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Inset Utilities (top/right/bottom/left)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="relative bg-white dark:bg-slate-800 p-4 rounded-lg h-64">
            <div className="absolute top-0 left-0 bg-blue-500 text-white p-3 rounded text-sm">
              top-0 left-0
            </div>
            <div className="absolute top-0 right-0 bg-green-500 text-white p-3 rounded text-sm">
              top-0 right-0
            </div>
            <div className="absolute bottom-0 left-0 bg-purple-500 text-white p-3 rounded text-sm">
              bottom-0 left-0
            </div>
            <div className="absolute bottom-0 right-0 bg-orange-500 text-white p-3 rounded text-sm">
              bottom-0 right-0
            </div>
            <div className="absolute inset-0 m-auto bg-pink-500 text-white p-3 rounded text-sm w-fit h-fit">
              inset-0 m-auto (centered)
            </div>
          </div>
        </div>

        {/* Z-Index */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Z-Index (Stacking Order)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Control which elements appear on top of others.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="relative bg-white dark:bg-slate-800 p-4 rounded-lg h-64">
            <div className="absolute top-8 left-8 bg-blue-500 text-white p-6 rounded font-medium z-10">
              z-10
            </div>
            <div className="absolute top-16 left-16 bg-green-500 text-white p-6 rounded font-medium z-20">
              z-20
            </div>
            <div className="absolute top-24 left-24 bg-purple-500 text-white p-6 rounded font-medium z-30">
              z-30
            </div>
            <div className="absolute top-32 left-32 bg-orange-500 text-white p-6 rounded font-medium z-40">
              z-40
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
            Higher z-index values appear on top. Common values: z-0, z-10, z-20, z-30, z-40, z-50
          </p>
        </div>

        {/* Common Patterns */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Common Positioning Patterns
        </h2>

        <div className="space-y-6 mb-8">
          {/* Overlay */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Full Screen Overlay
            </h4>
            <div className="relative bg-white dark:bg-slate-800 rounded-lg h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=400&fit=crop"
                alt="Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Overlay Content</h3>
                  <p className="text-white/90">Perfect for modals and hero sections</p>
                </div>
              </div>
            </div>
            <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-2 rounded">
              absolute inset-0 bg-black/50
            </code>
          </div>

          {/* Badge */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Notification Badge
            </h4>
            <div className="relative inline-block bg-white dark:bg-slate-800 p-8 rounded-lg">
              <div className="bg-blue-500 text-white p-4 rounded-lg font-medium">
                Notifications
              </div>
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                3
              </div>
            </div>
            <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-2 rounded">
              absolute -top-2 -right-2
            </code>
          </div>

          {/* Centered Modal */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Centered Modal
            </h4>
            <div className="relative bg-slate-900/50 rounded-lg h-64 flex items-center justify-center">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 max-w-md shadow-2xl">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Modal Title
                </h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  This modal is perfectly centered using fixed positioning.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
                  Close
                </button>
              </div>
            </div>
            <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-2 rounded">
              fixed inset-0 flex items-center justify-center
            </code>
          </div>

          {/* Corner Badge */}
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Corner Ribbon
            </h4>
            <div className="relative bg-white dark:bg-slate-800 p-8 rounded-lg overflow-hidden">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Product Card
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                With a stylish corner badge
              </p>
              <div className="absolute top-0 right-0 bg-gradient-to-br from-orange-500 to-red-500 text-white px-8 py-1 transform rotate-45 translate-x-8 -translate-y-2 text-sm font-bold">
                NEW
              </div>
            </div>
            <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-2 rounded">
              absolute top-0 right-0 rotate-45 translate-x-8
            </code>
          </div>
        </div>

        {/* Negative Values */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Negative Values
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="relative bg-white dark:bg-slate-800 p-4 rounded-lg h-48">
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-lg shadow-lg font-medium">
              -top-4 -left-4
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-green-500 to-teal-600 text-white p-4 rounded-lg shadow-lg font-medium">
              -bottom-4 -right-4
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
            Use negative values to position elements outside their container
          </p>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎯 Quick Reference
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Position Types</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">static</code> - default</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">relative</code> - offset from normal</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">absolute</code> - to ancestor</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">fixed</code> - to viewport</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">sticky</code> - hybrid</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Placement</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">top-0</code> - align top</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">inset-0</code> - all sides</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">-top-4</code> - negative offset</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Stacking</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">z-0</code> - base layer</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">z-10</code> - elevated</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">z-50</code> - top layer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

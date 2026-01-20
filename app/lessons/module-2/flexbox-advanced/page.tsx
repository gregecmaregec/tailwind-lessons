import LessonLayout from "@/components/LessonLayout";

export default function FlexboxAdvancedLesson() {
  return (
    <LessonLayout
      title="Advanced Flexbox Patterns"
      description="Master advanced Flexbox techniques and real-world layout patterns"
      moduleNumber={2}
      lessonNumber={2}
      prevLesson={{
        title: "Flexbox Fundamentals",
        href: "/lessons/module-2/flexbox-basics",
      }}
      nextLesson={{
        title: "CSS Grid Basics",
        href: "/lessons/module-2/grid-basics",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Advanced Flexbox Patterns
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Take your Flexbox skills to the next level with complex layouts and professional patterns.
        </p>

        {/* Holy Grail Layout */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Holy Grail Layout
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          A classic layout with header, footer, main content, and two sidebars.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="flex flex-col h-[500px] bg-white dark:bg-slate-800 rounded-lg overflow-hidden border-2 border-slate-300 dark:border-slate-600">
            {/* Header */}
            <div className="bg-blue-500 text-white p-4 font-semibold text-center">
              Header
            </div>
            
            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden">
              {/* Left Sidebar */}
              <div className="bg-purple-500 text-white p-4 w-48 flex items-center justify-center font-semibold">
                Left Sidebar
              </div>
              
              {/* Main Content */}
              <div className="flex-1 bg-green-500 text-white p-4 flex items-center justify-center font-semibold">
                Main Content
              </div>
              
              {/* Right Sidebar */}
              <div className="bg-orange-500 text-white p-4 w-48 flex items-center justify-center font-semibold">
                Right Sidebar
              </div>
            </div>
            
            {/* Footer */}
            <div className="bg-blue-500 text-white p-4 font-semibold text-center">
              Footer
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            flex flex-col + flex flex-1
          </code>
        </div>

        {/* Sticky Footer */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Sticky Footer Pattern
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Keep the footer at the bottom, even with minimal content.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="flex flex-col h-80 bg-white dark:bg-slate-800 rounded-lg overflow-hidden border-2 border-slate-300 dark:border-slate-600">
            <div className="bg-blue-500 text-white p-4 font-semibold text-center">
              Header
            </div>
            <div className="flex-1 bg-slate-200 dark:bg-slate-700 p-4">
              <p className="text-slate-700 dark:text-slate-300">
                Content area grows to push footer down
              </p>
            </div>
            <div className="bg-slate-800 text-white p-4 font-semibold text-center">
              Footer (Always at Bottom)
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            flex flex-col + flex-1 on content
          </code>
        </div>

        {/* Card Grid with Flexbox */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Flexible Card Grid
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="flex flex-wrap gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="flex-1 min-w-[200px] bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg"
              >
                <h4 className="font-bold text-lg mb-2">Card {i}</h4>
                <p className="text-white/80 text-sm">Responsive card layout</p>
              </div>
            ))}
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            flex flex-wrap gap-4 + flex-1 min-w-[200px]
          </code>
        </div>

        {/* Media Object Pattern */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Media Object Pattern
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Perfect for comments, notifications, and list items with images.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="space-y-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">
                  {i}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    User Name
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    This is a media object pattern with an image on the left and content that can expand to fill the available space.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            flex gap-4 + flex-shrink-0 + flex-1
          </code>
        </div>

        {/* Navbar with Auto Margins */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Navigation with Auto Margins
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg text-white">
            <div className="font-bold text-xl">Logo</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Services</a>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded transition-colors">
                Sign Up
              </button>
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            flex items-center gap-4 + ml-auto
          </code>
        </div>

        {/* Self Alignment */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Individual Item Alignment (self-*)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg h-48">
            <div className="bg-blue-500 text-white p-4 rounded font-medium self-start">
              self-start
            </div>
            <div className="bg-green-500 text-white p-4 rounded font-medium self-center">
              self-center
            </div>
            <div className="bg-purple-500 text-white p-4 rounded font-medium self-end">
              self-end
            </div>
            <div className="bg-orange-500 text-white p-4 rounded font-medium self-stretch">
              self-stretch
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            self-start | self-center | self-end | self-stretch
          </code>
        </div>

        {/* Order */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Order Control
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Change the visual order of flex items without changing HTML.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="flex gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg">
            <div className="bg-blue-500 text-white p-4 rounded font-medium order-2">
              1 (order-2)
            </div>
            <div className="bg-green-500 text-white p-4 rounded font-medium order-3">
              2 (order-3)
            </div>
            <div className="bg-purple-500 text-white p-4 rounded font-medium order-1">
              3 (order-1)
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            order-1 | order-2 | order-3 etc.
          </code>
        </div>

        {/* Flex Basis */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Flex Basis Control
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="flex gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg">
            <div className="bg-blue-500 text-white p-4 rounded font-medium basis-1/4">
              basis-1/4
            </div>
            <div className="bg-green-500 text-white p-4 rounded font-medium basis-1/2">
              basis-1/2
            </div>
            <div className="bg-purple-500 text-white p-4 rounded font-medium basis-1/4">
              basis-1/4
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            basis-1/4 | basis-1/2 | basis-full etc.
          </code>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎯 Pro Tips
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <p>Use <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">ml-auto</code> or <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">mr-auto</code> to push items to opposite ends</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Combine <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">flex-wrap</code> with <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">min-w-*</code> for responsive grids</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Use <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">flex-shrink-0</code> to prevent items from shrinking</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>The <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">order-*</code> utility is great for responsive reordering</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

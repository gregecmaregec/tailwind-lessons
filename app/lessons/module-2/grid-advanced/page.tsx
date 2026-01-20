import LessonLayout from "@/components/LessonLayout";

export default function GridAdvancedLesson() {
  return (
    <LessonLayout
      title="Advanced Grid Layouts"
      description="Master complex grid patterns and advanced grid techniques"
      moduleNumber={2}
      lessonNumber={4}
      prevLesson={{
        title: "CSS Grid Basics",
        href: "/lessons/module-2/grid-basics",
      }}
      nextLesson={{
        title: "Positioning & Z-Index",
        href: "/lessons/module-2/positioning",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Advanced Grid Techniques
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Take your grid skills to the next level with advanced patterns and techniques.
        </p>

        {/* Auto Fill & Auto Fit */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Grid with Auto-Fit
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Create responsive grids that automatically adjust the number of columns.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center font-medium">
                {i}
              </div>
            ))}
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            grid-cols-[repeat(auto-fit,minmax(150px,1fr))]
          </code>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            Try resizing your browser window to see the grid adapt!
          </p>
        </div>

        {/* Magazine Layout */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Magazine/Masonry Style Layout
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-4 grid-rows-4 gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg h-[500px]">
            <div className="col-span-2 row-span-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg flex items-center justify-center font-bold text-xl">
              Featured
            </div>
            <div className="col-span-1 row-span-1 bg-purple-500 text-white p-4 rounded-lg flex items-center justify-center font-medium">
              1
            </div>
            <div className="col-span-1 row-span-1 bg-green-500 text-white p-4 rounded-lg flex items-center justify-center font-medium">
              2
            </div>
            <div className="col-span-1 row-span-2 bg-orange-500 text-white p-4 rounded-lg flex items-center justify-center font-medium">
              3
            </div>
            <div className="col-span-1 row-span-2 bg-pink-500 text-white p-4 rounded-lg flex items-center justify-center font-medium">
              4
            </div>
            <div className="col-span-2 row-span-1 bg-indigo-500 text-white p-4 rounded-lg flex items-center justify-center font-medium">
              5
            </div>
            <div className="col-span-1 row-span-1 bg-teal-500 text-white p-4 rounded-lg flex items-center justify-center font-medium">
              6
            </div>
            <div className="col-span-1 row-span-1 bg-red-500 text-white p-4 rounded-lg flex items-center justify-center font-medium">
              7
            </div>
          </div>
        </div>

        {/* Grid Column Start/End */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Precise Column Placement
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Use col-start and col-end for exact positioning.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-6 gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
            <div className="col-start-1 col-end-3 bg-blue-500 text-white p-4 rounded font-medium text-center">
              col-start-1 col-end-3
            </div>
            <div className="col-start-3 col-end-5 bg-green-500 text-white p-4 rounded font-medium text-center">
              col-start-3 col-end-5
            </div>
            <div className="col-start-5 col-end-7 bg-purple-500 text-white p-4 rounded font-medium text-center">
              col-start-5 col-end-7
            </div>
            <div className="col-start-2 col-end-6 bg-orange-500 text-white p-4 rounded font-medium text-center">
              col-start-2 col-end-6
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            col-start-2 col-end-6
          </code>
        </div>

        {/* Grid Row Start/End */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Precise Row Placement
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-3 grid-rows-4 gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg h-96">
            <div className="row-start-1 row-end-3 bg-blue-500 text-white p-4 rounded font-medium flex items-center justify-center">
              row-start-1<br />row-end-3
            </div>
            <div className="row-start-1 row-end-4 bg-green-500 text-white p-4 rounded font-medium flex items-center justify-center">
              row-start-1<br />row-end-4
            </div>
            <div className="row-start-1 row-end-5 bg-purple-500 text-white p-4 rounded font-medium flex items-center justify-center">
              row-start-1<br />row-end-5
            </div>
            <div className="row-start-3 row-end-5 bg-orange-500 text-white p-4 rounded font-medium flex items-center justify-center">
              row-start-3<br />row-end-5
            </div>
            <div className="bg-pink-500 text-white p-4 rounded font-medium flex items-center justify-center">
              Auto
            </div>
          </div>
        </div>

        {/* Dense Packing */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Grid Auto Flow Dense
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Automatically fill gaps in your grid layout.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Without Dense
            </h4>
            <div className="grid grid-cols-4 gap-2 bg-white dark:bg-slate-800 p-4 rounded-lg h-64">
              <div className="col-span-2 bg-blue-500 text-white p-2 rounded text-xs flex items-center justify-center">
                span-2
              </div>
              <div className="bg-green-500 text-white p-2 rounded text-xs flex items-center justify-center">
                1
              </div>
              <div className="col-span-2 bg-purple-500 text-white p-2 rounded text-xs flex items-center justify-center">
                span-2
              </div>
              <div className="bg-orange-500 text-white p-2 rounded text-xs flex items-center justify-center">
                2
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              With Dense
            </h4>
            <div className="grid grid-cols-4 auto-rows-auto grid-flow-dense gap-2 bg-white dark:bg-slate-800 p-4 rounded-lg h-64">
              <div className="col-span-2 bg-blue-500 text-white p-2 rounded text-xs flex items-center justify-center">
                span-2
              </div>
              <div className="bg-green-500 text-white p-2 rounded text-xs flex items-center justify-center">
                1
              </div>
              <div className="col-span-2 bg-purple-500 text-white p-2 rounded text-xs flex items-center justify-center">
                span-2
              </div>
              <div className="bg-orange-500 text-white p-2 rounded text-xs flex items-center justify-center">
                2
              </div>
            </div>
          </div>
        </div>

        {/* Subgrid */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Nested Grids
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-3 gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
            <div className="col-span-2 bg-blue-500 p-4 rounded">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-300 p-3 rounded text-blue-900 font-medium text-center text-sm">
                  Nested 1
                </div>
                <div className="bg-blue-300 p-3 rounded text-blue-900 font-medium text-center text-sm">
                  Nested 2
                </div>
                <div className="col-span-2 bg-blue-300 p-3 rounded text-blue-900 font-medium text-center text-sm">
                  Nested 3
                </div>
              </div>
            </div>
            <div className="bg-green-500 text-white p-4 rounded font-medium flex items-center justify-center">
              Regular
            </div>
          </div>
        </div>

        {/* Complex Dashboard */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Complex Dashboard Layout
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-6 grid-rows-5 gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg h-[600px]">
            {/* Header */}
            <div className="col-span-6 bg-slate-800 text-white p-4 rounded font-medium flex items-center justify-between px-6">
              <span className="font-bold text-lg">Dashboard</span>
              <span className="text-sm">User Profile</span>
            </div>
            
            {/* Sidebar */}
            <div className="row-span-4 bg-slate-700 text-white p-4 rounded flex flex-col gap-2">
              <div className="bg-slate-600 p-2 rounded text-sm">Menu 1</div>
              <div className="bg-slate-600 p-2 rounded text-sm">Menu 2</div>
              <div className="bg-slate-600 p-2 rounded text-sm">Menu 3</div>
            </div>
            
            {/* Main Content */}
            <div className="col-span-3 row-span-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded flex items-center justify-center font-bold text-xl">
              Main Chart
            </div>
            
            {/* Stats */}
            <div className="col-span-2 bg-green-500 text-white p-4 rounded flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">1,234</span>
              <span className="text-sm">Total Sales</span>
            </div>
            
            <div className="col-span-2 bg-orange-500 text-white p-4 rounded flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">567</span>
              <span className="text-sm">Active Users</span>
            </div>
            
            {/* Activity */}
            <div className="col-span-3 row-span-2 bg-slate-200 dark:bg-slate-600 p-4 rounded">
              <h4 className="font-bold mb-2 text-slate-800 dark:text-white">Recent Activity</h4>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white dark:bg-slate-700 p-2 rounded text-sm text-slate-700 dark:text-slate-300">
                    Activity item {i}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Additional Cards */}
            <div className="col-span-2 bg-pink-500 text-white p-4 rounded flex items-center justify-center font-medium">
              Card 1
            </div>
          </div>
        </div>

        {/* Gap Control */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Advanced Gap Control
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
            Separate X and Y Gaps
          </h4>
          <div className="grid grid-cols-3 gap-x-8 gap-y-2 bg-white dark:bg-slate-800 p-4 rounded-lg">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-blue-500 text-white p-4 rounded font-medium text-center">
                {i}
              </div>
            ))}
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            gap-x-8 gap-y-2
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
              <p>Use <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">auto-fit</code> with <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">minmax()</code> for responsive grids without media queries</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Combine <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">col-start</code> and <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">col-end</code> for precise control over placement</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Use <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">grid-flow-dense</code> to automatically fill gaps in your layout</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Nest grids inside grid items for complex layouts</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

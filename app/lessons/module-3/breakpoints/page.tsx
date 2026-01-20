import LessonLayout from "@/components/LessonLayout";

export default function BreakpointsLesson() {
  return (
    <LessonLayout
      title="Breakpoints & Media Queries"
      description="Master responsive breakpoints and create adaptive layouts"
      moduleNumber={3}
      lessonNumber={2}
      prevLesson={{
        title: "Mobile-First Approach",
        href: "/lessons/module-3/mobile-first",
      }}
      nextLesson={{
        title: "Responsive Typography",
        href: "/lessons/module-3/responsive-typography",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Tailwind Breakpoints
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Tailwind uses a mobile-first breakpoint system. Apply styles at specific screen sizes using responsive prefixes.
        </p>

        {/* Breakpoint Reference */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Default Breakpoints
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div>
                <code className="text-blue-600 dark:text-blue-400 font-semibold">sm:</code>
                <span className="text-slate-600 dark:text-slate-300 ml-2">640px and up</span>
              </div>
              <span className="text-sm text-slate-500">Small devices</span>
            </div>
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div>
                <code className="text-green-600 dark:text-green-400 font-semibold">md:</code>
                <span className="text-slate-600 dark:text-slate-300 ml-2">768px and up</span>
              </div>
              <span className="text-sm text-slate-500">Tablets</span>
            </div>
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div>
                <code className="text-purple-600 dark:text-purple-400 font-semibold">lg:</code>
                <span className="text-slate-600 dark:text-slate-300 ml-2">1024px and up</span>
              </div>
              <span className="text-sm text-slate-500">Laptops</span>
            </div>
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div>
                <code className="text-orange-600 dark:text-orange-400 font-semibold">xl:</code>
                <span className="text-slate-600 dark:text-slate-300 ml-2">1280px and up</span>
              </div>
              <span className="text-sm text-slate-500">Desktops</span>
            </div>
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div>
                <code className="text-pink-600 dark:text-pink-400 font-semibold">2xl:</code>
                <span className="text-slate-600 dark:text-slate-300 ml-2">1536px and up</span>
              </div>
              <span className="text-sm text-slate-500">Large screens</span>
            </div>
          </div>
        </div>

        {/* Responsive Example */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Grid Example
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Resize your browser to see the grid adapt at different breakpoints.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center font-medium">
                Card {i}
              </div>
            ))}
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          </code>
        </div>

        {/* Responsive Visibility */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Visibility
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Show or hide elements at different screen sizes using display utilities.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="space-y-3 bg-white dark:bg-slate-800 p-4 rounded-lg">
            <div className="block sm:hidden bg-blue-500 text-white p-4 rounded font-medium text-center">
              📱 Visible on Mobile Only
            </div>
            <div className="hidden sm:block md:hidden bg-green-500 text-white p-4 rounded font-medium text-center">
              📱 Visible on Small Screens Only
            </div>
            <div className="hidden md:block lg:hidden bg-purple-500 text-white p-4 rounded font-medium text-center">
              💻 Visible on Medium Screens Only
            </div>
            <div className="hidden lg:block bg-orange-500 text-white p-4 rounded font-medium text-center">
              🖥️ Visible on Large Screens and Up
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            hidden sm:block md:hidden lg:block
          </code>
        </div>

        {/* Responsive Text Alignment */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Text Alignment
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
            <p className="text-left sm:text-center md:text-right lg:text-center text-slate-900 dark:text-white font-medium mb-3">
              This text alignment changes at different breakpoints
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Mobile: left • Small: center • Medium: right • Large: center
            </p>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            text-left sm:text-center md:text-right lg:text-center
          </code>
        </div>

        {/* Responsive Spacing */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Spacing
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <div className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg text-center font-medium">
              Padding increases at larger screens
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12
          </code>
        </div>

        {/* Responsive Flexbox */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Flex Direction
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
            <div className="flex-1 bg-blue-500 text-white p-6 rounded-lg text-center font-medium">
              Item 1
            </div>
            <div className="flex-1 bg-green-500 text-white p-6 rounded-lg text-center font-medium">
              Item 2
            </div>
            <div className="flex-1 bg-purple-500 text-white p-6 rounded-lg text-center font-medium">
              Item 3
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            flex flex-col md:flex-row
          </code>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            Stacks vertically on mobile, horizontal on medium screens and up
          </p>
        </div>

        {/* Responsive Navbar */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Navigation Pattern
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-slate-800 text-white p-4 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="font-bold text-xl">Logo</div>
              <div className="flex flex-col md:flex-row gap-4">
                <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
                <a href="#" className="hover:text-blue-400 transition-colors">About</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Services</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors text-sm">
                  Sign In
                </button>
              </div>
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            flex flex-col md:flex-row md:items-center md:justify-between
          </code>
        </div>

        {/* Container Queries Preview */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Responsive Images
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
            <div className="bg-slate-200 dark:bg-slate-600 p-4 rounded-lg">
              <div className="w-full h-32 sm:h-48 md:h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-white font-medium">
                Responsive Height
              </div>
            </div>
            <div className="bg-slate-200 dark:bg-slate-600 p-4 rounded-lg">
              <div className="w-full h-32 sm:h-48 md:h-64 bg-gradient-to-br from-green-500 to-teal-600 rounded flex items-center justify-center text-white font-medium">
                Responsive Height
              </div>
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            h-32 sm:h-48 md:h-64
          </code>
        </div>

        {/* Stacking Breakpoints */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Combining Multiple Breakpoints
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center p-4">
              Text grows with screen size
            </div>
          </div>
          <code className="block mt-3 text-sm bg-white dark:bg-slate-800 p-3 rounded">
            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl
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
              <p>Always start mobile-first - base styles apply to all screens, then override at larger breakpoints</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Use <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">hidden md:block</code> to show elements only on larger screens</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Combine breakpoints: <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">p-4 md:p-8 lg:p-12</code> for progressive enhancement</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Test on real devices - browser resize doesn't always match real-world behavior</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

import LessonLayout from "@/components/LessonLayout";

export default function DarkModeLesson() {
  return (
    <LessonLayout
      title="Dark Mode"
      description="Implement beautiful dark mode designs with Tailwind's dark variant"
      moduleNumber={5}
      lessonNumber={4}
      prevLesson={{
        title: "Animations & Keyframes",
        href: "/lessons/module-5/animations",
      }}
      nextLesson={{
        title: "Custom Utilities & Plugins",
        href: "/lessons/module-5/custom-utilities",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Dark Mode
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Create stunning dark mode experiences using Tailwind's dark variant prefix.
        </p>

        {/* Dark Variant Basics */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Dark Variant Basics
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Simply prefix any utility with <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">dark:</code> to apply it only in dark mode.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <h4 className="text-slate-900 dark:text-white font-bold mb-2">Light Mode</h4>
            <p className="text-slate-600 dark:text-slate-400">
              This text is slate-600 in light mode and slate-400 in dark mode.
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <h4 className="text-slate-900 dark:text-white font-bold mb-2">Background Switches</h4>
            <p className="text-slate-600 dark:text-slate-400">
              Background changes from slate-100 to slate-900.
            </p>
          </div>
        </div>

        {/* Text Colors */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Text Color Strategies
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-3">Heading</h4>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              Primary text: slate-700 / slate-300
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Secondary text: slate-600 / slate-400
            </p>
            <p className="text-slate-500 dark:text-slate-500">
              Tertiary text: slate-500 / slate-500
            </p>
          </div>
        </div>

        {/* Background Patterns */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Background Color Patterns
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg dark:shadow-slate-900/50">
            <div className="h-20 bg-slate-100 dark:bg-slate-700 rounded-lg mb-4"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">white → slate-800</code>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-lg dark:shadow-slate-900/50">
            <div className="h-20 bg-white dark:bg-slate-800 rounded-lg mb-4"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">slate-50 → slate-900</code>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow-lg dark:shadow-slate-900/50">
            <div className="h-20 bg-slate-200 dark:bg-slate-700 rounded-lg mb-4"></div>
            <code className="text-xs text-slate-600 dark:text-slate-400">slate-100 → slate-800</code>
          </div>
        </div>

        {/* Border Colors */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Border & Divide Colors
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <h4 className="text-slate-900 dark:text-white font-bold mb-4">Card with Border</h4>
            <p className="text-slate-600 dark:text-slate-400">
              Border color adapts from slate-200 to slate-700
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl divide-y divide-slate-200 dark:divide-slate-700">
            <div className="py-3 text-slate-900 dark:text-white">Item 1</div>
            <div className="py-3 text-slate-900 dark:text-white">Item 2</div>
            <div className="py-3 text-slate-900 dark:text-white">Item 3</div>
          </div>
        </div>

        {/* Buttons */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Button Styles
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold py-4 px-8 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
            Primary Button
          </button>

          <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-300 dark:border-slate-600 font-semibold py-4 px-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Secondary Button
          </button>

          <button className="bg-blue-600 dark:bg-blue-500 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            Accent Button
          </button>

          <button className="bg-transparent text-slate-900 dark:text-white border-2 border-slate-300 dark:border-slate-600 font-semibold py-4 px-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Ghost Button
          </button>
        </div>

        {/* Cards */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Card Components
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700">
              <div className={`h-40 bg-gradient-to-br ${
                i === 1 ? 'from-blue-500 to-purple-600' :
                i === 2 ? 'from-green-500 to-teal-600' :
                'from-pink-500 to-orange-500'
              }`}></div>
              <div className="p-6">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Card Title {i}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  This card adapts to dark mode automatically.
                </p>
                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold py-2 px-4 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Forms */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Form Inputs
        </h2>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
              ></textarea>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400">
                I agree to the terms and conditions
              </label>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Navigation Components
        </h2>

        <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-6 rounded-xl mb-8">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-slate-900 dark:text-white">Brand</div>
            <div className="flex gap-6">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Alert Components */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Alert & Notification Styles
        </h2>

        <div className="space-y-4 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-6 rounded-r-xl">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Information</h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              This is an informational message that adapts to dark mode.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-6 rounded-r-xl">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Success</h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Your action was completed successfully!
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 p-6 rounded-r-xl">
            <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">Warning</h4>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              Please review this information carefully.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-6 rounded-r-xl">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Error</h4>
            <p className="text-red-700 dark:text-red-300 text-sm">
              Something went wrong. Please try again.
            </p>
          </div>
        </div>

        {/* Tables */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Table Styling
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 mb-8">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-900">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-900 dark:text-white uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-900 dark:text-white uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-900 dark:text-white uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">John Doe {i}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">john{i}@example.com</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Badge & Tags */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Badges & Tags
        </h2>

        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-full text-sm font-medium">
            Default
          </span>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
            Primary
          </span>
          <span className="px-4 py-2 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
            Success
          </span>
          <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium">
            Warning
          </span>
          <span className="px-4 py-2 bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 rounded-full text-sm font-medium">
            Error
          </span>
        </div>

        {/* Code Blocks */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Code Display
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-xl mb-8">
          <pre className="text-slate-100 dark:text-slate-200 text-sm overflow-x-auto">
            <code>{`<div className="bg-white dark:bg-slate-800">
  <h1 className="text-slate-900 dark:text-white">
    Hello Dark Mode
  </h1>
</div>`}</code>
          </pre>
        </div>

        {/* Configuration Tips */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Dark Mode Configuration
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span>
              <p>In <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">tailwind.config.js</code>, set <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">darkMode: 'class'</code> for manual toggle</p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span>
              <p>Or use <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">darkMode: 'media'</code> to respect system preferences</p>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span>
              <p>Add/remove <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">dark</code> class to <code className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">html</code> element with JavaScript</p>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Best Practices
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <p>Use slate colors for neutral elements (white → slate-800, slate-100 → slate-900)</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Keep brand colors consistent but adjust saturation for dark mode</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Reduce contrast in dark mode - avoid pure white text on pure black backgrounds</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Test with actual dark mode, not just inverted colors</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Use darker shadows in dark mode (shadow-slate-900/50)</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

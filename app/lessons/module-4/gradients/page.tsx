import LessonLayout from "@/components/LessonLayout";

export default function GradientsLesson() {
  return (
    <LessonLayout
      title="Gradients & Patterns"
      description="Create stunning gradients and visual patterns with Tailwind"
      moduleNumber={4}
      lessonNumber={2}
      prevLesson={{
        title: "Color System Deep Dive",
        href: "/lessons/module-4/color-system",
      }}
      nextLesson={{
        title: "Shadows & Elevation",
        href: "/lessons/module-4/shadows",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Gradients & Patterns
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Learn how to create beautiful gradients and visual patterns to enhance your designs.
        </p>

        {/* Linear Gradients */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Linear Gradients
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Tailwind provides utilities for creating linear gradients in different directions.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-3">
            <div className="h-32 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
              gradient-to-r
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-gradient-to-r from-blue-500 to-purple-600
            </code>
          </div>

          <div className="space-y-3">
            <div className="h-32 rounded-lg bg-gradient-to-l from-pink-500 to-orange-500 flex items-center justify-center text-white font-medium">
              gradient-to-l
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-gradient-to-l from-pink-500 to-orange-500
            </code>
          </div>

          <div className="space-y-3">
            <div className="h-32 rounded-lg bg-gradient-to-b from-green-400 to-teal-600 flex items-center justify-center text-white font-medium">
              gradient-to-b
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-gradient-to-b from-green-400 to-teal-600
            </code>
          </div>

          <div className="space-y-3">
            <div className="h-32 rounded-lg bg-gradient-to-t from-red-500 to-yellow-400 flex items-center justify-center text-white font-medium">
              gradient-to-t
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-gradient-to-t from-red-500 to-yellow-400
            </code>
          </div>
        </div>

        {/* Diagonal Gradients */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Diagonal Gradients
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-3">
            <div className="h-32 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
              gradient-to-br
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-gradient-to-br from-blue-500 to-purple-600
            </code>
          </div>

          <div className="space-y-3">
            <div className="h-32 rounded-lg bg-gradient-to-bl from-green-400 to-blue-600 flex items-center justify-center text-white font-medium">
              gradient-to-bl
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-gradient-to-bl from-green-400 to-blue-600
            </code>
          </div>

          <div className="space-y-3">
            <div className="h-32 rounded-lg bg-gradient-to-tr from-pink-500 to-yellow-400 flex items-center justify-center text-white font-medium">
              gradient-to-tr
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-gradient-to-tr from-pink-500 to-yellow-400
            </code>
          </div>

          <div className="space-y-3">
            <div className="h-32 rounded-lg bg-gradient-to-tl from-orange-500 to-red-600 flex items-center justify-center text-white font-medium">
              gradient-to-tl
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-gradient-to-tl from-orange-500 to-red-600
            </code>
          </div>
        </div>

        {/* Multi-Stop Gradients */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Multi-Stop Gradients
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Use the <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">via</code> utility to add color stops in the middle of gradients.
        </p>

        <div className="space-y-6 mb-8">
          <div className="space-y-3">
            <div className="h-32 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
              Three Color Gradient
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            </code>
          </div>

          <div className="space-y-3">
            <div className="h-32 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
              Cool Spectrum
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-gradient-to-r from-green-400 via-blue-500 to-purple-600
            </code>
          </div>

          <div className="space-y-3">
            <div className="h-32 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 flex items-center justify-center text-white font-medium">
              Traffic Light
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-gradient-to-r from-red-500 via-yellow-500 to-green-500
            </code>
          </div>
        </div>

        {/* Gradient Text */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Gradient Text
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Create eye-catching gradient text using <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">bg-clip-text</code> and <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">text-transparent</code>.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-8 mb-8">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gradient Heading
            </h2>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Colorful Title
            </h3>
            <p className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Gradient Subheading
            </p>
          </div>
          <code className="block mt-6 text-xs bg-white dark:bg-slate-800 p-3 rounded">
            bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
          </code>
        </div>

        {/* Gradient Backgrounds with Content */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Gradient Card Backgrounds
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Hero Card</h3>
            <p className="text-blue-100 mb-4">
              Beautiful gradient backgrounds make your content stand out.
            </p>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Feature Card</h3>
            <p className="text-pink-100 mb-4">
              Warm gradients create inviting, energetic designs.
            </p>
            <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Subtle Gradients */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Subtle Background Gradients
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Use lighter shades for subtle, professional-looking gradients.
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Subtle Blue to Purple
            </h4>
            <p className="text-slate-600 dark:text-slate-300">
              Perfect for backgrounds that don't overpower content.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950 rounded-xl p-8 border border-green-200 dark:border-green-800">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Subtle Green to Teal
            </h4>
            <p className="text-slate-600 dark:text-slate-300">
              Great for success messages and positive content.
            </p>
          </div>
        </div>

        {/* Radial Gradients with Arbitrary Values */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Custom Gradients (Arbitrary Values)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Use arbitrary values for complete control over gradient effects.
        </p>

        <div className="space-y-6 mb-8">
          <div className="space-y-3">
            <div className="h-48 rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
              Radial Gradient
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
            </code>
          </div>

          <div className="space-y-3">
            <div className="h-48 rounded-lg bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
              Conic Gradient
            </div>
            <code className="text-xs text-slate-600 dark:text-slate-400 block">
              bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]
            </code>
          </div>
        </div>

        {/* Gradient Patterns */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Layered Gradient Effects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="relative h-64 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-white/20"></div>
            <div className="relative h-full flex items-center justify-center text-white font-medium">
              Layered Gradients
            </div>
          </div>

          <div className="relative h-64 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
            <div className="relative h-full flex items-center justify-center text-white font-medium">
              Gradient with Pattern
            </div>
          </div>
        </div>

        {/* Real-World Examples */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Real-World Examples
        </h2>

        <div className="space-y-6 mb-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to Our Platform
            </h2>
            <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
              Create amazing experiences with beautiful gradient designs
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="bg-white dark:bg-slate-800 p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    Premium Plan
                  </h3>
                  <div className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
                    $29<span className="text-xl text-slate-600 dark:text-slate-400">/mo</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-slate-600 dark:text-slate-300">
                    <li>✓ All features included</li>
                    <li>✓ Priority support</li>
                    <li>✓ Advanced analytics</li>
                    <li>✓ Custom branding</li>
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Status Banner */}
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 flex items-center gap-4 text-white">
            <div className="bg-white/20 rounded-full p-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1">All Systems Operational</h4>
              <p className="text-green-100 text-sm">Everything is running smoothly</p>
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎯 Best Practices
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <p>Use subtle gradients (50-200 shades) for backgrounds</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Reserve bold gradients for hero sections and call-to-action elements</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Ensure text remains readable on gradient backgrounds</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Use analogous colors for harmonious gradients</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Test gradients in both light and dark modes</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

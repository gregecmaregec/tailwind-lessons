import LessonLayout from "@/components/LessonLayout";

export default function AccessibilityLesson() {
  return (
    <LessonLayout
      title="Accessibility"
      description="Build accessible, inclusive interfaces with ARIA, semantic HTML, and keyboard navigation"
      moduleNumber={7}
      lessonNumber={3}
      prevLesson={{
        title: "Performance Optimization",
        href: "/lessons/module-7/performance",
      }}
      nextLesson={null}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Accessibility
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Learn to build accessible, inclusive interfaces that work for everyone, including users with disabilities.
        </p>

        {/* Semantic HTML */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Semantic HTML First
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-4">❌ Non-Semantic</h4>
            <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg">
              <pre className="text-slate-100 dark:text-slate-200 text-xs overflow-x-auto">
                <code>{`<div className="button" onClick={...}>
  Click Me
</div>`}</code>
              </pre>
            </div>
            <p className="text-sm text-red-700 dark:text-red-300 mt-3">
              Not keyboard accessible, no semantic meaning
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-4">✅ Semantic</h4>
            <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg">
              <pre className="text-slate-100 dark:text-slate-200 text-xs overflow-x-auto">
                <code>{`<button className="..." onClick={...}>
  Click Me
</button>`}</code>
              </pre>
            </div>
            <p className="text-sm text-green-700 dark:text-green-300 mt-3">
              Keyboard accessible, proper semantics
            </p>
          </div>
        </div>

        {/* Focus States */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Focus States & Keyboard Navigation
        </h2>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 mb-8">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Always provide visible focus states for keyboard navigation. Try tabbing through these elements:
          </p>

          <div className="space-y-4">
            <button className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Visible Focus Ring
            </button>

            <input
              type="text"
              placeholder="Try tabbing to this input"
              className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 focus:border-blue-500 transition-all"
            />

            <a
              href="#"
              className="inline-block text-blue-600 dark:text-blue-400 underline focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 rounded px-2 py-1"
            >
              Focusable Link
            </a>
          </div>

          <div className="mt-6 bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <code className="text-sm text-slate-900 dark:text-white">
              focus:ring-4 focus:ring-blue-300 focus:outline-none
            </code>
          </div>
        </div>

        {/* Skip Navigation */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Skip Navigation Links
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-8">
          <div className="relative">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold focus:ring-4 focus:ring-blue-300"
            >
              Skip to main content
            </a>
            <nav className="bg-slate-100 dark:bg-slate-700 p-4 border-b border-slate-200 dark:border-slate-600">
              <div className="flex gap-6">
                <a href="#" className="text-slate-900 dark:text-white">Home</a>
                <a href="#" className="text-slate-900 dark:text-white">About</a>
                <a href="#" className="text-slate-900 dark:text-white">Contact</a>
              </div>
            </nav>
            <main id="main-content" className="p-8">
              <p className="text-slate-600 dark:text-slate-400">
                Press Tab to see the skip link appear. It allows keyboard users to bypass navigation.
              </p>
            </main>
          </div>
        </div>

        {/* Color Contrast */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Color Contrast
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">❌ Poor Contrast (Fail)</h4>
            <div className="space-y-3">
              <div className="bg-slate-200 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-slate-400 dark:text-slate-500">
                  This text is too light (contrast ratio: 2.5:1)
                </p>
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-900/20 p-4 rounded-lg">
                <p className="text-yellow-300 dark:text-yellow-700">
                  Hard to read (contrast ratio: 1.8:1)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">✅ Good Contrast (Pass)</h4>
            <div className="space-y-3">
              <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-slate-900 dark:text-white font-medium">
                  Easy to read (contrast ratio: 7:1+)
                </p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-lg">
                <p className="text-blue-900 dark:text-blue-100 font-medium">
                  Excellent contrast (contrast ratio: 8:1+)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 mb-8">
          <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">WCAG Requirements</h4>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
            <li><strong>AA (Minimum):</strong> 4.5:1 for normal text, 3:1 for large text</li>
            <li><strong>AAA (Enhanced):</strong> 7:1 for normal text, 4.5:1 for large text</li>
          </ul>
        </div>

        {/* ARIA Labels */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          ARIA Labels & Roles
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Icon Buttons</h4>
            <div className="flex gap-4">
              <button
                aria-label="Close dialog"
                className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <svg className="h-6 w-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <button
                aria-label="Search"
                className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <svg className="h-6 w-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button
                aria-label="Settings"
                className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <svg className="h-6 w-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
            <code className="text-xs bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded block mt-4">
              aria-label="Close dialog"
            </code>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Live Regions</h4>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
              <div
                role="alert"
                aria-live="polite"
                className="text-green-900 dark:text-green-100"
              >
                Your changes have been saved successfully
              </div>
            </div>
            <code className="text-xs bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded block mt-4">
              role="alert" aria-live="polite"
            </code>
          </div>
        </div>

        {/* Form Accessibility */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Form Accessibility
        </h2>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 mb-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                aria-describedby="name-hint"
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 focus:border-blue-500"
              />
              <p id="name-hint" className="mt-2 text-sm text-slate-500 dark:text-slate-500">
                Please enter your full name
              </p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                aria-invalid="true"
                aria-describedby="email-error"
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-2 border-red-500 dark:border-red-400 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
              />
              <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Please enter a valid email address
              </p>
            </div>

            <fieldset className="space-y-3">
              <legend className="block text-sm font-medium text-slate-900 dark:text-white mb-3">
                Notifications
              </legend>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="email-notifications"
                  className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-slate-700 dark:text-slate-300">Email notifications</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="push-notifications"
                  className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-slate-700 dark:text-slate-300">Push notifications</span>
              </label>
            </fieldset>
          </form>
        </div>

        {/* Screen Reader Only Content */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Screen Reader Only Content
        </h2>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-8">
          <div className="space-y-4">
            <button className="relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              <span className="sr-only">Loading, please wait</span>
              <span aria-hidden="true">...</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="sr-only">Online</span>
              </div>
              <span className="text-slate-900 dark:text-white">User is online</span>
            </div>
          </div>

          <div className="mt-6 bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
            <code className="text-sm text-slate-900 dark:text-white">
              className="sr-only" {/* Visually hidden but available to screen readers */}
            </code>
          </div>
        </div>

        {/* Modal Accessibility */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Modal Accessibility
        </h2>

        <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8 mb-8">
          <div className="relative" style={{ height: '300px' }}>
            <div
              role="dialog"
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              aria-modal="true"
              className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 rounded-xl"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-md w-full p-6">
                <h3 id="modal-title" className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Accessible Modal
                </h3>
                <p id="modal-description" className="text-slate-600 dark:text-slate-400 mb-6">
                  This modal has proper ARIA attributes for screen readers.
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Checklist */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Accessibility Testing Checklist
        </h2>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 mb-8">
          <div className="space-y-4">
            {[
              'Keyboard navigation works for all interactive elements',
              'Focus states are visible and clear',
              'Color contrast meets WCAG AA standards (4.5:1)',
              'All images have alt text',
              'Forms have proper labels and error messages',
              'ARIA attributes are used correctly',
              'Screen reader can access all content',
              'Skip navigation links are available',
              'Modals trap focus and can be closed with ESC',
              'Live regions announce dynamic content changes',
            ].map((item, i) => (
              <label key={i} className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Tools */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Accessibility Testing Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">axe DevTools</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Browser extension for automated accessibility testing
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">WAVE</h4>
            <p className="text-sm text-green-700 dark:text-green-300">
              Visual accessibility evaluation tool
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Lighthouse</h4>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              Chrome DevTools accessibility audit
            </p>
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
              <p>Use semantic HTML elements instead of divs with ARIA when possible</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Ensure all interactive elements are keyboard accessible</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Provide clear, visible focus indicators (never use outline: none without replacement)</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Test with actual screen readers (NVDA, JAWS, VoiceOver)</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Accessibility is not optional - build it in from the start</p>
            </div>
          </div>
        </div>

        {/* Congratulations */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-12 border-2 border-green-200 dark:border-green-800 text-center mt-12">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Congratulations! 🎉
          </h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            You've completed the entire Tailwind CSS course! You now have the knowledge to build beautiful, performant, and accessible interfaces with Tailwind CSS.
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}

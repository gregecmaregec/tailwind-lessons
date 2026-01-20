import LessonLayout from "@/components/LessonLayout";

export default function ModalsLesson() {
  return (
    <LessonLayout
      title="Modals & Overlays"
      description="Create modal dialogs, overlays, tooltips, and popover components"
      moduleNumber={6}
      lessonNumber={4}
      prevLesson={{
        title: "Navigation & Menus",
        href: "/lessons/module-6/navigation",
      }}
      nextLesson={{
        title: "Landing Page",
        href: "/lessons/module-6/landing-page",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Modals & Overlays
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Learn to build modal dialogs, overlays, tooltips, and popover components for interactive UI elements.
        </p>

        {/* Basic Modal */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Basic Modal Dialog
        </h2>

        <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8 mb-8">
          {/* Simulated Modal */}
          <div className="relative">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 relative rounded-xl" style={{ position: 'relative', height: '400px' }}>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-md w-full relative">
                <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Modal Title</h3>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    This is a basic modal dialog with a header, content area, and action buttons.
                  </p>
                </div>
                <div className="p-6 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3">
                  <button className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Modal */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Confirmation Modal
        </h2>

        <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8 mb-8">
          <div className="relative" style={{ height: '300px' }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 rounded-xl">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-sm w-full p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Delete Account</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">This action cannot be undone</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Are you sure you want to delete your account? All of your data will be permanently removed.
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Success Modal
        </h2>

        <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8 mb-8">
          <div className="relative" style={{ height: '320px' }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 rounded-xl">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-sm w-full p-8 text-center">
                <div className="inline-flex h-16 w-16 bg-green-100 dark:bg-green-900/40 rounded-full items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Success!</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Your payment has been processed successfully.
                </p>
                <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-semibold">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Form Modal */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Form Modal
        </h2>

        <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8 mb-8">
          <div className="relative" style={{ height: '500px' }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 rounded-xl overflow-auto">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-md w-full">
                <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Create Account</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div className="p-6 border-t border-slate-200 dark:border-slate-700 flex gap-3">
                  <button className="flex-1 px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tooltip Examples */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Tooltips
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-12 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex justify-center gap-12">
            {['Top', 'Bottom', 'Left', 'Right'].map((position) => (
              <div key={position} className="relative group">
                <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg">
                  Hover Me
                </button>
                <div className={`absolute hidden group-hover:block bg-slate-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap ${
                  position === 'Top' ? 'bottom-full mb-2 left-1/2 -translate-x-1/2' :
                  position === 'Bottom' ? 'top-full mt-2 left-1/2 -translate-x-1/2' :
                  position === 'Left' ? 'right-full mr-2 top-1/2 -translate-y-1/2' :
                  'left-full ml-2 top-1/2 -translate-y-1/2'
                }`}>
                  Tooltip {position}
                  <div className={`absolute h-2 w-2 bg-slate-900 rotate-45 ${
                    position === 'Top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' :
                    position === 'Bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' :
                    position === 'Left' ? 'right-[-4px] top-1/2 -translate-y-1/2' :
                    'left-[-4px] top-1/2 -translate-y-1/2'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notification Toasts */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Notification Toasts
        </h2>

        <div className="space-y-4 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700 flex items-center gap-4">
            <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
              <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-slate-900 dark:text-white">Information</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">Your profile has been updated</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl shadow-lg p-4 border border-green-200 dark:border-green-800 flex items-center gap-4">
            <div className="h-10 w-10 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
              <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-green-900 dark:text-green-100">Success</h5>
              <p className="text-sm text-green-700 dark:text-green-300">Changes saved successfully</p>
            </div>
            <button className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl shadow-lg p-4 border border-red-200 dark:border-red-800 flex items-center gap-4">
            <div className="h-10 w-10 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
              <svg className="h-5 w-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-red-900 dark:text-red-100">Error</h5>
              <p className="text-sm text-red-700 dark:text-red-300">Failed to save changes</p>
            </div>
            <button className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Popover */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Popover Component
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-12 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="flex justify-center">
            <div className="relative group">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold">
                Show Popover
              </button>
              <div className="absolute left-0 top-full mt-2 hidden group-hover:block w-80 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 z-10">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Popover Title</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  This is a popover with more detailed information and interactive elements.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold">
                  Take Action
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer/Sidebar Modal */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Drawer (Side Modal)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8 mb-8">
          <div className="relative" style={{ height: '400px' }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-slate-800 shadow-2xl">
                <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Settings</h3>
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6 space-y-6 overflow-auto" style={{ maxHeight: '300px' }}>
                  {['Notifications', 'Privacy', 'Security', 'Preferences'].map((item) => (
                    <div key={item}>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{item}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Configure your {item.toLowerCase()} settings</p>
                    </div>
                  ))}
                </div>
              </div>
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
              <p>Always provide a way to close modals (X button or ESC key)</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Use backdrop-blur and dark overlay to focus attention on modal</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Keep modal content concise - use drawers for longer content</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Position tooltips to avoid going off-screen</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Auto-dismiss toast notifications after 3-5 seconds</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

import LessonLayout from "@/components/LessonLayout";

export default function FormsLesson() {
  return (
    <LessonLayout
      title="Forms & Inputs"
      description="Design beautiful, accessible forms with proper validation states and user feedback"
      moduleNumber={6}
      lessonNumber={2}
      prevLesson={{
        title: "Cards & Containers",
        href: "/lessons/module-6/cards",
      }}
      nextLesson={{
        title: "Navigation & Menus",
        href: "/lessons/module-6/navigation",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Forms & Inputs
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Create professional, user-friendly forms with proper styling, validation states, and accessibility.
        </p>

        {/* Basic Inputs */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Text Inputs
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Basic Input
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                With Icon (Left)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                With Icon (Right)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-10 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Validation States */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Validation States
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Valid Input
              </label>
              <input
                type="email"
                value="user@example.com"
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-2 border-green-500 dark:border-green-400 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                readOnly
              />
              <p className="mt-2 text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Email is valid
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Error Input
              </label>
              <input
                type="email"
                value="invalid-email"
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-2 border-red-500 dark:border-red-400 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                readOnly
              />
              <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Please enter a valid email address
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Warning Input
              </label>
              <input
                type="text"
                value="password123"
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border-2 border-yellow-500 dark:border-yellow-400 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                readOnly
              />
              <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-400 flex items-center gap-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Consider using a stronger password
              </p>
            </div>
          </div>
        </div>

        {/* Select Dropdowns */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Select Dropdowns
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Country
              </label>
              <select className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Category (Multiple)
              </label>
              <select multiple className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" size={4}>
                <option>Technology</option>
                <option>Design</option>
                <option>Business</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>
        </div>

        {/* Textarea */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Textarea
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Type your message here..."
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
                Max 500 characters
              </p>
            </div>
          </div>
        </div>

        {/* Checkboxes & Radio Buttons */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Checkboxes & Radio Buttons
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Checkboxes</h4>
            <div className="space-y-3">
              {['Email notifications', 'Push notifications', 'SMS notifications'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Radio Buttons</h4>
            <div className="space-y-3">
              {['Weekly', 'Monthly', 'Yearly'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="billing"
                    className="h-5 w-5 border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle Switches */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Toggle Switches
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="space-y-4">
            {['Enable notifications', 'Auto-save', 'Dark mode'].map((item) => (
              <label key={item} className="flex items-center justify-between cursor-pointer group">
                <span className="text-slate-900 dark:text-white font-medium">{item}</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-300 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* File Upload */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          File Upload
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Upload File
              </label>
              <input
                type="file"
                className="block w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900/40 dark:file:text-blue-300 dark:hover:file:bg-blue-900/60"
              />
            </div>

            <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-8 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer">
              <div className="flex flex-col items-center">
                <svg className="h-12 w-12 text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Click to upload</span> or drag and drop
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Form Example */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Complete Form Example
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Us</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Subject
              </label>
              <select className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Feedback</option>
                <option>Partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                Message *
              </label>
              <textarea
                rows={5}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  I agree to the Terms and Conditions
                </span>
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Submit
              </button>
              <button
                type="reset"
                className="px-6 py-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Best Practices
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <p>Always include labels for accessibility - use sr-only if hiding visually</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Show clear validation states with colors and icons</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Use placeholder text as hints, not as labels</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Provide helpful error messages that guide users to fix issues</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Group related fields together and use consistent spacing</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

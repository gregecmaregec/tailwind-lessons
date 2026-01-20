import LessonLayout from "@/components/LessonLayout";

export default function NavigationLesson() {
  return (
    <LessonLayout
      title="Navigation & Menus"
      description="Build responsive navigation bars, sidebars, dropdowns, and menu components"
      moduleNumber={6}
      lessonNumber={3}
      prevLesson={{
        title: "Forms & Inputs",
        href: "/lessons/module-6/forms",
      }}
      nextLesson={{
        title: "Modals & Overlays",
        href: "/lessons/module-6/modals",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Navigation & Menus
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Create professional navigation components including navbars, sidebars, dropdown menus, and more.
        </p>

        {/* Basic Navbar */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Basic Navigation Bar
        </h2>

        <div className="mb-8">
          <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="text-xl font-bold text-slate-900 dark:text-white">Brand</div>
              <div className="hidden md:flex gap-6">
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Sign In
              </button>
            </div>
          </nav>
        </div>

        {/* Navbar with Icons */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Navbar with Icons
        </h2>

        <div className="mb-8">
          <nav className="bg-slate-900 dark:bg-slate-950 rounded-xl overflow-hidden">
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="text-xl font-bold text-white">Logo</div>
                <div className="hidden md:flex gap-6">
                  {[
                    { name: 'Dashboard', icon: '📊' },
                    { name: 'Projects', icon: '📁' },
                    { name: 'Team', icon: '👥' },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-slate-300 hover:text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="text-slate-300 hover:text-white relative">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                    3
                  </span>
                </button>
                <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </nav>
        </div>

        {/* Sidebar Navigation */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Sidebar Navigation
        </h2>

        <div className="mb-8">
          <div className="flex gap-6 bg-slate-100 dark:bg-slate-900 rounded-xl p-6 min-h-[400px]">
            <aside className="w-64 bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Dashboard</h4>
              </div>
              <nav className="space-y-2">
                {[
                  { name: 'Overview', icon: '🏠', active: true },
                  { name: 'Analytics', icon: '📈', active: false },
                  { name: 'Reports', icon: '📄', active: false },
                  { name: 'Settings', icon: '⚙️', active: false },
                ].map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      item.active
                        ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </nav>
            </aside>
            <main className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Main Content</h3>
              <p className="text-slate-600 dark:text-slate-400">
                This is the main content area next to the sidebar navigation.
              </p>
            </main>
          </div>
        </div>

        {/* Breadcrumbs */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Breadcrumbs
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-slate-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  Products
                </a>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-slate-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-900 dark:text-white font-semibold">Current Page</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Tabs */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Tab Navigation
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-8">
          <div className="border-b border-slate-200 dark:border-slate-700">
            <nav className="flex">
              {['Overview', 'Analytics', 'Reports', 'Settings'].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-6 py-4 font-medium transition-colors border-b-2 ${
                    i === 0
                      ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-8">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Overview Content</h4>
            <p className="text-slate-600 dark:text-slate-400">
              This is the content for the selected tab.
            </p>
          </div>
        </div>

        {/* Dropdown Menu */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Dropdown Menus
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8">
            <div className="relative inline-block">
              <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2">
                <span>Dropdown</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <a href="#" className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                  Account Settings
                </a>
                <a href="#" className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                  Billing
                </a>
                <a href="#" className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                  Team
                </a>
                <div className="border-t border-slate-200 dark:border-slate-700"></div>
                <a href="#" className="block px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">
                  Sign Out
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8">
            <div className="relative inline-block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <span>Actions</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                {[
                  { icon: '✏️', label: 'Edit', shortcut: '⌘E' },
                  { icon: '📋', label: 'Duplicate', shortcut: '⌘D' },
                  { icon: '🗑️', label: 'Delete', shortcut: '⌘⌫' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="flex items-center justify-between px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    <div className="flex items-center gap-3">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    <span className="text-xs text-slate-400">{item.shortcut}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Mobile Menu (Hamburger)
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-8">
          <div className="px-6 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
            <div className="text-xl font-bold text-slate-900 dark:text-white">Brand</div>
            <button className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="px-6 py-4 space-y-2">
            {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg">
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Footer Navigation
        </h2>

        <footer className="bg-slate-900 dark:bg-slate-950 rounded-xl p-12 mb-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Security', 'Roadmap'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
              { title: 'Resources', links: ['Documentation', 'Help Center', 'Contact', 'Partners'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses'] },
            ].map((section) => (
              <div key={section.title}>
                <h5 className="text-white font-bold mb-4">{section.title}</h5>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2026 Brand. All rights reserved.</p>
            <div className="flex gap-6">
              {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="text-slate-400 hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </footer>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Best Practices
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <p>Make navigation consistent across all pages</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Indicate the current page/section with visual feedback</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Use hamburger menus for mobile, full navigation for desktop</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Keep primary navigation items to 5-7 for better usability</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Make clickable areas large enough for touch (min 44x44px)</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

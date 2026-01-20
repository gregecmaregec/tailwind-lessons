import Link from "next/link";

export default function Home() {
  const modules = [
    {
      id: 1,
      title: "Tailwind Fundamentals",
      description: "Master the core concepts: spacing, sizing, colors, and typography",
      lessons: [
        { id: 1, title: "Spacing & Padding", slug: "spacing-padding" },
        { id: 2, title: "Width, Height & Sizing", slug: "sizing" },
        { id: 3, title: "Colors & Backgrounds", slug: "colors" },
        { id: 4, title: "Typography & Text Styling", slug: "typography" },
        { id: 5, title: "Borders & Rounded Corners", slug: "borders" },
      ],
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Layout Mastery",
      description: "Build complex layouts with Flexbox and Grid",
      lessons: [
        { id: 1, title: "Flexbox Fundamentals", slug: "flexbox-basics" },
        { id: 2, title: "Advanced Flexbox Patterns", slug: "flexbox-advanced" },
        { id: 3, title: "CSS Grid Basics", slug: "grid-basics" },
        { id: 4, title: "Advanced Grid Layouts", slug: "grid-advanced" },
        { id: 5, title: "Positioning & Z-Index", slug: "positioning" },
      ],
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Responsive Design",
      description: "Create responsive layouts that work on all devices",
      lessons: [
        { id: 1, title: "Mobile-First Approach", slug: "mobile-first" },
        { id: 2, title: "Breakpoints & Media Queries", slug: "breakpoints" },
        { id: 3, title: "Responsive Typography", slug: "responsive-typography" },
        { id: 4, title: "Container Queries", slug: "container-queries" },
      ],
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "Colors & Effects",
      description: "Master colors, shadows, and visual effects",
      lessons: [
        { id: 1, title: "Color System Deep Dive", slug: "color-system" },
        { id: 2, title: "Gradients & Patterns", slug: "gradients" },
        { id: 3, title: "Shadows & Elevation", slug: "shadows" },
        { id: 4, title: "Opacity & Blend Modes", slug: "opacity-blend" },
        { id: 5, title: "Filters & Backdrop Effects", slug: "filters" },
      ],
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "Advanced Techniques",
      description: "Animations, transforms, and advanced features",
      lessons: [
        { id: 1, title: "Transitions & Timing", slug: "transitions" },
        { id: 2, title: "Transforms & 3D Effects", slug: "transforms" },
        { id: 3, title: "Animations & Keyframes", slug: "animations" },
        { id: 4, title: "Dark Mode Mastery", slug: "dark-mode" },
        { id: 5, title: "Custom Utilities & Plugins", slug: "custom-utilities" },
      ],
      color: "bg-pink-500"
    },
    {
      id: 6,
      title: "Real-World Components",
      description: "Build production-ready UI components",
      lessons: [
        { id: 1, title: "Buttons & Links", slug: "buttons" },
        { id: 2, title: "Cards & Containers", slug: "cards" },
        { id: 3, title: "Forms & Inputs", slug: "forms" },
        { id: 4, title: "Navigation & Menus", slug: "navigation" },
        { id: 5, title: "Modals & Overlays", slug: "modals" },
        { id: 6, title: "Complete Landing Page", slug: "landing-page" },
      ],
      color: "bg-indigo-500"
    },
    {
      id: 7,
      title: "Best Practices",
      description: "Optimization, organization, and professional workflows",
      lessons: [
        { id: 1, title: "Component Organization", slug: "organization" },
        { id: 2, title: "Performance Optimization", slug: "performance" },
        { id: 3, title: "Accessibility Best Practices", slug: "accessibility" },
      ],
      color: "bg-teal-500"
    },
  ];

  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
              Learn to work with Tailwind CSS
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">
              A free guide for learning to work with Tailwind classes. <br></br>Big tip: install the tailwind extension for your IDE.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {modules.length} modules • {totalLessons} lessons • ~5 hours of content
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        {/* Modules Grid */}
        <div className="space-y-8">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Module Header */}
              <div className={`${module.color} px-8 py-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Module {module.id}: {module.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {module.description}
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold text-sm">
                    {module.lessons.length} lessons
                  </div>
                </div>
              </div>

              {/* Lessons List */}
              <div className="p-6">
                <div className="grid gap-3">
                  {module.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={`/lessons/module-${module.id}/${lesson.slug}`}
                      className="group flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`${module.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                          {lesson.id}
                        </div>
                        <span className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {lesson.title}
                        </span>
                      </div>
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to start writing html as long as the burj khalifa??</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Sigma balls.
            </p>
            <Link
              href="/lessons/module-1/spacing-padding"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              YEs →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

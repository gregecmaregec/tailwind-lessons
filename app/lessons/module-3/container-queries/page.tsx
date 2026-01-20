import LessonLayout from "@/components/LessonLayout";

export default function ContainerQueriesLesson() {
  return (
    <LessonLayout
      title="Container Queries"
      description="Style elements based on their container size, not just the viewport"
      moduleNumber={3}
      lessonNumber={4}
      prevLesson={{
        title: "Responsive Typography",
        href: "/lessons/module-3/responsive-typography",
      }}
      nextLesson={{
        title: "Color System Deep Dive",
        href: "/lessons/module-4/color-system",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Container Queries
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Container queries allow you to style elements based on their parent container's size rather than the viewport, enabling truly modular and reusable components.
        </p>

        {/* Introduction */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Why Container Queries?
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Traditional responsive design uses viewport-based media queries. But what if you want a card to adapt based on where it's placed? Container queries solve this by letting components respond to their container's size.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="space-y-4 bg-white dark:bg-slate-800 p-6 rounded-lg">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-blue-600 dark:text-blue-400">Media Queries:</strong> Style based on viewport width
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-green-600 dark:text-green-400">Container Queries:</strong> Style based on container width
              </p>
            </div>
          </div>
        </div>

        {/* Setup */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Setting Up Container Queries
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          First, mark an element as a container using the <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">@container</code> utility. Then use container query modifiers on its children.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
            <pre className="text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
              <code>{`<div class="@container">
  <div class="@md:text-lg @lg:text-xl">
    Content adapts to container size
  </div>
</div>`}</code>
            </pre>
          </div>
        </div>

        {/* Container Types */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Container Types
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Size Container (Default)
            </h4>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg space-y-2">
              <code className="block text-sm text-blue-600 dark:text-blue-400">@container</code>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Creates a container context for width-based queries
              </p>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              Named Container
            </h4>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg space-y-2">
              <code className="block text-sm text-blue-600 dark:text-blue-400">@container/sidebar</code>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Creates a named container for targeting specific parents
              </p>
            </div>
          </div>
        </div>

        {/* Basic Example */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Basic Container Query Example
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          These cards adapt based on their container width, not the viewport. Try resizing your browser to see them respond differently based on their layout context.
        </p>

        <div className="space-y-6 mb-8">
          {/* Full Width Container */}
          <div className="@container bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
              <div className="@md:flex @md:items-center">
                <div className="@md:w-1/3 h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="p-6 @md:w-2/3">
                  <h3 className="text-lg @md:text-xl @lg:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Adaptive Card
                  </h3>
                  <p className="text-sm @md:text-base text-slate-600 dark:text-slate-300">
                    This card changes layout based on its container width. In narrow containers, it stacks vertically. In wider containers, it displays horizontally.
                  </p>
                </div>
              </div>
            </div>
            <code className="block mt-3 text-xs bg-white dark:bg-slate-800 p-2 rounded">
              @container with @md:flex @md:items-center
            </code>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="@container bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
                <div className="@md:flex @md:items-center">
                  <div className="@md:w-1/3 h-32 bg-gradient-to-br from-green-500 to-teal-600"></div>
                  <div className="p-4 @md:w-2/3">
                    <h3 className="text-base @md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Narrow Container
                    </h3>
                    <p className="text-xs @md:text-sm text-slate-600 dark:text-slate-300">
                      Stays stacked in narrower container
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="@container bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
                <div className="@md:flex @md:items-center">
                  <div className="@md:w-1/3 h-32 bg-gradient-to-br from-orange-500 to-pink-600"></div>
                  <div className="p-4 @md:w-2/3">
                    <h3 className="text-base @md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Narrow Container
                    </h3>
                    <p className="text-xs @md:text-sm text-slate-600 dark:text-slate-300">
                      Stays stacked in narrower container
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakpoints */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Container Query Breakpoints
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg">
              <code className="text-blue-600 dark:text-blue-400 font-semibold">@sm:</code>
              <span className="text-slate-600 dark:text-slate-300 text-sm">384px</span>
            </div>
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg">
              <code className="text-green-600 dark:text-green-400 font-semibold">@md:</code>
              <span className="text-slate-600 dark:text-slate-300 text-sm">448px</span>
            </div>
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg">
              <code className="text-purple-600 dark:text-purple-400 font-semibold">@lg:</code>
              <span className="text-slate-600 dark:text-slate-300 text-sm">512px</span>
            </div>
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg">
              <code className="text-orange-600 dark:text-orange-400 font-semibold">@xl:</code>
              <span className="text-slate-600 dark:text-slate-300 text-sm">576px</span>
            </div>
            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg">
              <code className="text-pink-600 dark:text-pink-400 font-semibold">@2xl:</code>
              <span className="text-slate-600 dark:text-slate-300 text-sm">672px</span>
            </div>
          </div>
        </div>

        {/* Named Containers */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Named Container Example
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Use named containers to target specific parent containers when you have nested container contexts.
        </p>

        <div className="@container/main bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
            <h3 className="text-base @md/main:text-xl font-bold text-slate-900 dark:text-white">
              Main Container
            </h3>
            <div className="@container/card bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
              <div className="@md/card:flex @md/card:gap-4">
                <div className="flex-1 bg-blue-500 text-white p-4 rounded">
                  Nested Container 1
                </div>
                <div className="flex-1 bg-purple-500 text-white p-4 rounded mt-4 @md/card:mt-0">
                  Nested Container 2
                </div>
              </div>
            </div>
          </div>
          <code className="block mt-3 text-xs bg-white dark:bg-slate-800 p-2 rounded">
            @container/main and @container/card with @md/card:flex
          </code>
        </div>

        {/* Responsive Grid with Containers */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Container-Based Grid Cards
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="@container bg-slate-100 dark:bg-slate-700 rounded-xl p-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="p-4">
                  <h4 className="text-sm @md:text-base font-bold text-slate-900 dark:text-white mb-2">
                    Card {i}
                  </h4>
                  <p className="text-xs @md:text-sm text-slate-600 dark:text-slate-300 @md:block hidden">
                    This description appears only when the card container is wide enough.
                  </p>
                  <button className="mt-3 w-full @md:w-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs @md:text-sm rounded transition-colors">
                    Action
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Pattern */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Sidebar Layout Pattern
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Main Content */}
          <div className="flex-1 @container/content bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="text-lg @md:text-xl @lg:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Main Content Area
              </h3>
              <p className="text-sm @md:text-base text-slate-600 dark:text-slate-300 mb-4">
                This content area adapts based on its container width, not the viewport. When in a full-width layout, it can display more information. When in a sidebar layout, it condenses.
              </p>
              <div className="grid @md:grid-cols-2 @lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
                    <div className="text-xs @md:text-sm text-slate-700 dark:text-slate-300">
                      Item {i}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-64 @container/sidebar bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                Sidebar
              </h4>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded">Widget 1</div>
                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded">Widget 2</div>
                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded">Widget 3</div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Common Use Cases
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Reusable Card Components
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Cards that adapt their layout whether they're in a grid, sidebar, or full-width layout
            </p>
            <div className="@container bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="@lg:flex @lg:gap-6">
                <div className="@lg:w-1/3 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded mb-4 @lg:mb-0"></div>
                <div className="@lg:w-2/3">
                  <h5 className="text-sm @lg:text-base font-bold text-slate-900 dark:text-white mb-2">
                    Truly Modular Card
                  </h5>
                  <p className="text-xs @lg:text-sm text-slate-600 dark:text-slate-300">
                    This card works anywhere in your app
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Dashboard Widgets
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Widgets that scale their content density based on available space
            </p>
            <div className="@container bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs @md:text-sm text-slate-700 dark:text-slate-300">Metric</span>
                  <span className="text-sm @md:text-lg font-bold text-slate-900 dark:text-white">42</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              Responsive Forms
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Form layouts that adapt to their container, not the viewport
            </p>
            <div className="@container bg-white dark:bg-slate-800 p-4 rounded-lg">
              <div className="space-y-3 @md:space-y-0 @md:flex @md:gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Combining with Media Queries */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Combining Container and Media Queries
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          You can use both container queries and media queries together for maximum flexibility.
        </p>

        <div className="@container bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
            <div className="@md:flex @md:gap-4 md:p-8">
              <div className="flex-1 p-4 bg-blue-100 dark:bg-blue-900/30 rounded text-sm @md:text-base text-blue-900 dark:text-blue-200">
                Responds to container (@md)
              </div>
              <div className="flex-1 p-4 bg-green-100 dark:bg-green-900/30 rounded text-sm md:text-base text-green-900 dark:text-green-200 mt-4 @md:mt-0">
                Responds to viewport (md)
              </div>
            </div>
            <code className="block mt-3 text-xs bg-slate-100 dark:bg-slate-700 p-2 rounded">
              @md:flex (container) + md:p-8 (viewport)
            </code>
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
              <p>Use container queries for truly modular components that work anywhere in your layout</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Combine with media queries when you need both viewport and container-based responsiveness</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Use named containers (<code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-sm">@container/name</code>) when dealing with nested contexts</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Container queries are perfect for design systems and component libraries</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Test components in different container sizes, not just viewport sizes</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

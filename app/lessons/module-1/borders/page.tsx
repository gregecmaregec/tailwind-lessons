import LessonLayout from "@/components/LessonLayout";

export default function BordersLesson() {
  return (
    <LessonLayout
      title="Borders & Rounded Corners"
      description="Style borders, outlines, and border radius with Tailwind utilities"
      moduleNumber={1}
      lessonNumber={5}
      prevLesson={{
        title: "Typography & Text Styling",
        href: "/lessons/module-1/typography",
      }}
      nextLesson={{
        title: "Flexbox Fundamentals",
        href: "/lessons/module-2/flexbox-basics",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Border Width (border-*)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { class: "border", label: "border (1px)" },
              { class: "border-2", label: "border-2 (2px)" },
              { class: "border-4", label: "border-4 (4px)" },
              { class: "border-8", label: "border-8 (8px)" },
            ].map((item) => (
              <div key={item.class} className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mb-3">{item.label}</p>
                <div className={`${item.class} border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-6 text-center text-slate-900 dark:text-white font-medium`}>
                  {item.class}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Sides */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Individual Border Sides
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { class: "border-t-4", label: "Top", color: "border-red-500" },
            { class: "border-r-4", label: "Right", color: "border-blue-500" },
            { class: "border-b-4", label: "Bottom", color: "border-green-500" },
            { class: "border-l-4", label: "Left", color: "border-purple-500" },
            { class: "border-x-4", label: "Horizontal (L+R)", color: "border-orange-500" },
            { class: "border-y-4", label: "Vertical (T+B)", color: "border-pink-500" },
          ].map((item) => (
            <div key={item.class} className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                <code className="text-blue-600 dark:text-blue-400">{item.class}</code>: {item.label}
              </h4>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                <div className={`${item.class} ${item.color} bg-slate-50 dark:bg-slate-900 p-6 text-center text-slate-900 dark:text-white`}>
                  Border on {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Border Radius */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Border Radius (rounded-*)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { class: "rounded-none", label: "none" },
              { class: "rounded-sm", label: "sm" },
              { class: "rounded", label: "default" },
              { class: "rounded-md", label: "md" },
              { class: "rounded-lg", label: "lg" },
              { class: "rounded-xl", label: "xl" },
              { class: "rounded-2xl", label: "2xl" },
              { class: "rounded-3xl", label: "3xl" },
              { class: "rounded-full", label: "full" },
            ].map((item) => (
              <div key={item.class} className="text-center">
                <div className={`${item.class} bg-gradient-to-br from-blue-500 to-purple-600 h-20 flex items-center justify-center text-white font-medium text-sm mb-2`}>
                  {item.label}
                </div>
                <p className="text-xs font-mono text-slate-600 dark:text-slate-400">{item.class}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Corner Radius */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Individual Corner Radius
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { class: "rounded-tl-3xl", label: "Top Left", desc: "rounded-tl-3xl" },
            { class: "rounded-tr-3xl", label: "Top Right", desc: "rounded-tr-3xl" },
            { class: "rounded-bl-3xl", label: "Bottom Left", desc: "rounded-bl-3xl" },
            { class: "rounded-br-3xl", label: "Bottom Right", desc: "rounded-br-3xl" },
            { class: "rounded-t-3xl", label: "Top (both)", desc: "rounded-t-3xl" },
            { class: "rounded-b-3xl", label: "Bottom (both)", desc: "rounded-b-3xl" },
            { class: "rounded-l-3xl", label: "Left (both)", desc: "rounded-l-3xl" },
            { class: "rounded-r-3xl", label: "Right (both)", desc: "rounded-r-3xl" },
          ].map((item) => (
            <div key={item.class} className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                <code className="text-purple-600 dark:text-purple-400">{item.desc}</code>
              </h4>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                <div className={`${item.class} bg-gradient-to-br from-purple-500 to-pink-600 h-24 flex items-center justify-center text-white font-medium`}>
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Border Style */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Border Style
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
            {[
              { class: "border-solid", label: "Solid" },
              { class: "border-dashed", label: "Dashed" },
              { class: "border-dotted", label: "Dotted" },
              { class: "border-double", label: "Double" },
              { class: "border-none", label: "None" },
            ].map((item) => (
              <div key={item.class}>
                <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mb-2">{item.class}</p>
                <div className={`${item.class} border-4 border-blue-500 p-4 text-center text-slate-900 dark:text-white font-medium`}>
                  {item.label} Border
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outline */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Outline (outline-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Outlines don't affect layout and are drawn outside the element's border.
        </p>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg grid md:grid-cols-2 gap-8">
            <div className="outline outline-2 outline-blue-500 outline-offset-2 p-6 bg-blue-50 dark:bg-blue-900/20 text-center text-slate-900 dark:text-white font-medium rounded">
              outline-2 outline-blue-500
              <br />
              <span className="text-sm">outline-offset-2</span>
            </div>
            <div className="outline outline-4 outline-purple-500 outline-offset-4 p-6 bg-purple-50 dark:bg-purple-900/20 text-center text-slate-900 dark:text-white font-medium rounded">
              outline-4 outline-purple-500
              <br />
              <span className="text-sm">outline-offset-4</span>
            </div>
            <div className="outline-dashed outline-2 outline-green-500 outline-offset-2 p-6 bg-green-50 dark:bg-green-900/20 text-center text-slate-900 dark:text-white font-medium rounded">
              outline-dashed outline-2
              <br />
              <span className="text-sm">outline-green-500</span>
            </div>
            <div className="outline-dotted outline-2 outline-orange-500 outline-offset-2 p-6 bg-orange-50 dark:bg-orange-900/20 text-center text-slate-900 dark:text-white font-medium rounded">
              outline-dotted outline-2
              <br />
              <span className="text-sm">outline-orange-500</span>
            </div>
          </div>
        </div>

        {/* Ring */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Ring Utilities (ring-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Rings are perfect for focus states and call-to-action elements.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Ring Width</h4>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
              {[
                { class: "ring-2", label: "ring-2" },
                { class: "ring-4", label: "ring-4" },
                { class: "ring-8", label: "ring-8" },
              ].map((item) => (
                <button key={item.class} className={`${item.class} ring-blue-500 bg-blue-500 text-white p-4 rounded-lg font-medium w-full`}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Ring Offset</h4>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
              {[
                { offset: "ring-offset-0", label: "offset-0" },
                { offset: "ring-offset-2", label: "offset-2" },
                { offset: "ring-offset-4", label: "offset-4" },
              ].map((item) => (
                <button key={item.offset} className={`ring-4 ring-purple-500 ${item.offset} bg-purple-500 text-white p-4 rounded-lg font-medium w-full`}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divide */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Divide Utilities (divide-*)
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Add borders between stacked or side-by-side elements.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">divide-y</h4>
            <div className="divide-y-2 divide-blue-500 bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
              <div className="p-4 text-slate-900 dark:text-white">Item 1</div>
              <div className="p-4 text-slate-900 dark:text-white">Item 2</div>
              <div className="p-4 text-slate-900 dark:text-white">Item 3</div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">divide-x</h4>
            <div className="flex divide-x-2 divide-purple-500 bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
              <div className="p-4 flex-1 text-center text-slate-900 dark:text-white">Item 1</div>
              <div className="p-4 flex-1 text-center text-slate-900 dark:text-white">Item 2</div>
              <div className="p-4 flex-1 text-center text-slate-900 dark:text-white">Item 3</div>
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎯 Quick Reference
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Borders</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">border-2</code> - 2px border</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">border-blue-500</code> - color</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">border-dashed</code> - style</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Radius</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">rounded-lg</code> - all corners</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">rounded-t-lg</code> - top</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">rounded-full</code> - circle</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Ring & Outline</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">ring-4</code> - ring width</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">ring-offset-2</code> - offset</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">outline-2</code> - outline</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

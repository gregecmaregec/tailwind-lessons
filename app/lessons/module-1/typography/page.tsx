import LessonLayout from "@/components/LessonLayout";

export default function TypographyLesson() {
  return (
    <LessonLayout
      title="Typography & Text Styling"
      description="Master text styling with Tailwind's comprehensive typography utilities"
      moduleNumber={1}
      lessonNumber={4}
      prevLesson={{
        title: "Colors & Backgrounds",
        href: "/lessons/module-1/colors",
      }}
      nextLesson={{
        title: "Borders & Rounded Corners",
        href: "/lessons/module-1/borders",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        {/* Font Size */}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Font Size (text-*)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
            <p className="text-xs text-slate-900 dark:text-white">text-xs: The quick brown fox jumps (0.75rem / 12px)</p>
            <p className="text-sm text-slate-900 dark:text-white">text-sm: The quick brown fox jumps (0.875rem / 14px)</p>
            <p className="text-base text-slate-900 dark:text-white">text-base: The quick brown fox jumps (1rem / 16px)</p>
            <p className="text-lg text-slate-900 dark:text-white">text-lg: The quick brown fox jumps (1.125rem / 18px)</p>
            <p className="text-xl text-slate-900 dark:text-white">text-xl: The quick brown fox jumps (1.25rem / 20px)</p>
            <p className="text-2xl text-slate-900 dark:text-white">text-2xl: The quick brown fox (1.5rem / 24px)</p>
            <p className="text-3xl text-slate-900 dark:text-white">text-3xl: The quick brown (1.875rem / 30px)</p>
            <p className="text-4xl text-slate-900 dark:text-white">text-4xl: The quick (2.25rem / 36px)</p>
            <p className="text-5xl text-slate-900 dark:text-white">text-5xl: Quick (3rem / 48px)</p>
          </div>
        </div>

        {/* Font Weight */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Font Weight (font-*)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-3">
            <p className="font-thin text-lg text-slate-900 dark:text-white">font-thin: Thin weight (100)</p>
            <p className="font-extralight text-lg text-slate-900 dark:text-white">font-extralight: Extra light (200)</p>
            <p className="font-light text-lg text-slate-900 dark:text-white">font-light: Light weight (300)</p>
            <p className="font-normal text-lg text-slate-900 dark:text-white">font-normal: Normal weight (400)</p>
            <p className="font-medium text-lg text-slate-900 dark:text-white">font-medium: Medium weight (500)</p>
            <p className="font-semibold text-lg text-slate-900 dark:text-white">font-semibold: Semibold (600)</p>
            <p className="font-bold text-lg text-slate-900 dark:text-white">font-bold: Bold weight (700)</p>
            <p className="font-extrabold text-lg text-slate-900 dark:text-white">font-extrabold: Extra bold (800)</p>
            <p className="font-black text-lg text-slate-900 dark:text-white">font-black: Black weight (900)</p>
          </div>
        </div>

        {/* Text Alignment */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Text Alignment (text-*)
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { class: "text-left", label: "Left Aligned", desc: "text-left" },
            { class: "text-center", label: "Center Aligned", desc: "text-center" },
            { class: "text-right", label: "Right Aligned", desc: "text-right" },
            { class: "text-justify", label: "Justified Text", desc: "text-justify" },
          ].map((item) => (
            <div key={item.class} className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                <code className="text-blue-600 dark:text-blue-400">{item.desc}</code>
              </h4>
              <div className="bg-white dark:bg-slate-800 p-4 rounded">
                <p className={`${item.class} text-slate-900 dark:text-white`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Text Decoration */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Text Decoration & Style
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
            <p className="underline text-lg text-slate-900 dark:text-white">underline: Underlined text</p>
            <p className="overline text-lg text-slate-900 dark:text-white">overline: Text with line above</p>
            <p className="line-through text-lg text-slate-900 dark:text-white">line-through: Strikethrough text</p>
            <p className="no-underline text-blue-600 dark:text-blue-400 text-lg">no-underline: Remove underline from links</p>
            <p className="italic text-lg text-slate-900 dark:text-white">italic: Italic text style</p>
            <p className="not-italic text-lg text-slate-900 dark:text-white">not-italic: Remove italic</p>
            <p className="uppercase text-lg text-slate-900 dark:text-white">uppercase: UPPERCASE TEXT</p>
            <p className="lowercase text-lg text-slate-900 dark:text-white">lowercase: lowercase text</p>
            <p className="capitalize text-lg text-slate-900 dark:text-white">capitalize: Capitalize Each Word</p>
          </div>
        </div>

        {/* Line Height */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Line Height (leading-*)
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { class: "leading-tight", label: "Tight" },
            { class: "leading-normal", label: "Normal" },
            { class: "leading-loose", label: "Loose" },
          ].map((item) => (
            <div key={item.class} className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                <code className="text-blue-600 dark:text-blue-400">{item.class}</code>
              </h4>
              <div className="bg-white dark:bg-slate-800 p-4 rounded">
                <p className={`${item.class} text-slate-900 dark:text-white`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Letter Spacing */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Letter Spacing (tracking-*)
        </h2>

        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg space-y-4">
            <p className="tracking-tighter text-lg text-slate-900 dark:text-white">tracking-tighter: Tighter letter spacing</p>
            <p className="tracking-tight text-lg text-slate-900 dark:text-white">tracking-tight: Tight letter spacing</p>
            <p className="tracking-normal text-lg text-slate-900 dark:text-white">tracking-normal: Normal letter spacing</p>
            <p className="tracking-wide text-lg text-slate-900 dark:text-white">tracking-wide: Wide letter spacing</p>
            <p className="tracking-wider text-lg text-slate-900 dark:text-white">tracking-wider: Wider letter spacing</p>
            <p className="tracking-widest text-lg text-slate-900 dark:text-white">tracking-widest: Widest letter spacing</p>
          </div>
        </div>

        {/* Text Color & Opacity */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Text Color with Opacity
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 space-y-3">
          <p className="text-blue-600/100 text-lg font-medium">text-blue-600/100 - 100% opacity</p>
          <p className="text-blue-600/75 text-lg font-medium">text-blue-600/75 - 75% opacity</p>
          <p className="text-blue-600/50 text-lg font-medium">text-blue-600/50 - 50% opacity</p>
          <p className="text-blue-600/25 text-lg font-medium">text-blue-600/25 - 25% opacity</p>
        </div>

        {/* Text Overflow */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Text Overflow
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-blue-600 dark:text-blue-400">truncate</code>
            </h4>
            <div className="bg-white dark:bg-slate-800 p-4 rounded">
              <p className="truncate text-slate-900 dark:text-white">
                This is a very long text that will be truncated with an ellipsis when it overflows the container width
              </p>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
              <code className="text-purple-600 dark:text-purple-400">line-clamp-3</code>
            </h4>
            <div className="bg-white dark:bg-slate-800 p-4 rounded">
              <p className="line-clamp-3 text-slate-900 dark:text-white">
                This is a longer paragraph that will be clamped to exactly three lines. Any text that extends beyond the third line will be hidden and replaced with an ellipsis. This is useful for previews and cards where you want consistent heights.
              </p>
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎯 Quick Reference
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Size & Weight</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">text-lg</code> - 1.125rem</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">font-bold</code> - weight 700</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">leading-relaxed</code> - line height</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">tracking-wide</code> - letter spacing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Styling</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 font-mono">
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">text-center</code> - align center</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">uppercase</code> - transform</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">truncate</code> - ellipsis</li>
                <li><code className="bg-white dark:bg-slate-800 px-2 py-1 rounded">line-clamp-3</code> - 3 lines max</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

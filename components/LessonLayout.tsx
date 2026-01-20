import Link from "next/link";
import { ReactNode } from "react";

interface LessonLayoutProps {
  title: string;
  description: string;
  moduleNumber: number;
  lessonNumber: number;
  children: ReactNode;
  prevLesson?: { title: string; href: string };
  nextLesson?: { title: string; href: string };
}

export default function LessonLayout({
  title,
  description,
  moduleNumber,
  lessonNumber,
  children,
  prevLesson,
  nextLesson,
}: LessonLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="font-medium">Back to Course</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Module {moduleNumber} • Lesson {lessonNumber}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-3">{title}</h1>
          <p className="text-xl text-white/90">{description}</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 md:p-12 border border-slate-200 dark:border-slate-700">
          {children}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between gap-4">
          {prevLesson ? (
            <Link
              href={prevLesson.href}
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <div className="text-left">
                <div className="text-xs text-slate-500 dark:text-slate-400">Previous</div>
                <div className="font-medium">{prevLesson.title}</div>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {nextLesson ? (
            <Link
              href={nextLesson.href}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow hover:shadow-lg transition-all text-white font-medium hover:scale-105 transform"
            >
              <div className="text-right">
                <div className="text-xs text-white/80">Next</div>
                <div className="font-medium">{nextLesson.title}</div>
              </div>
              <svg
                className="w-5 h-5"
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
          ) : (
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl shadow hover:shadow-lg transition-all text-white font-medium hover:scale-105 transform"
            >
              <span>Complete! Return to Course</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}

import LessonLayout from "@/components/LessonLayout";

export default function CardsLesson() {
  return (
    <LessonLayout
      title="Cards & Containers"
      description="Build beautiful, reusable card components and content containers"
      moduleNumber={6}
      lessonNumber={1}
      prevLesson={{
        title: "Custom Utilities & Plugins",
        href: "/lessons/module-5/custom-utilities",
      }}
      nextLesson={{
        title: "Forms & Inputs",
        href: "/lessons/module-6/forms",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Cards & Containers
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Learn to build flexible, composable card components for displaying content in organized, visually appealing ways.
        </p>

        {/* Basic Card */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Basic Card Structure
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Card Title</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              This is a basic card with a title, description, and action button.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Learn More
            </button>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Image Card</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Card with an image header and content section.
              </p>
            </div>
          </div>
        </div>

        {/* Media Cards */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Media Cards
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className={`h-48 bg-gradient-to-br ${
                i === 1 ? 'from-blue-500 to-purple-600' :
                i === 2 ? 'from-green-500 to-teal-600' :
                'from-pink-500 to-orange-500'
              }`}></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-semibold rounded-full">
                    Category
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Card Title {i}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  Beautiful card with image, category tag, and description text.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-500 text-xs">5 min read</span>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-semibold">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Cards */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Horizontal Cards
        </h2>

        <div className="space-y-6 mb-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row">
              <div className={`md:w-1/3 h-48 md:h-auto bg-gradient-to-br ${
                i === 1 ? 'from-blue-500 to-purple-600' : 'from-green-500 to-teal-600'
              }`}></div>
              <div className="p-6 flex-1">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 text-xs font-semibold rounded-full">
                  Featured
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-3 mb-2">
                  Horizontal Layout Card
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  This card uses a horizontal layout with the image on the left and content on the right. Perfect for blog posts and articles.
                </p>
                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold py-2 px-6 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                  View Article
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Pricing Cards
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { name: 'Starter', price: 9, features: ['10 Projects', '5 GB Storage', 'Basic Support', 'Monthly Updates'] },
            { name: 'Pro', price: 29, features: ['Unlimited Projects', '50 GB Storage', 'Priority Support', 'Weekly Updates', 'Advanced Features'], popular: true },
            { name: 'Enterprise', price: 99, features: ['Unlimited Everything', '500 GB Storage', '24/7 Support', 'Daily Updates', 'Custom Integration', 'Dedicated Manager'] },
          ].map((plan, i) => (
            <div key={i} className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border-2 ${
              plan.popular ? 'border-blue-500 dark:border-blue-400 ring-4 ring-blue-100 dark:ring-blue-900/40 scale-105' : 'border-slate-200 dark:border-slate-700'
            } relative`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h4>
              <div className="mb-6">
                <span className="text-5xl font-bold text-slate-900 dark:text-white">${plan.price}</span>
                <span className="text-slate-600 dark:text-slate-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full font-semibold py-3 rounded-lg transition-colors ${
                plan.popular
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white'
              }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Testimonial Cards
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                "This product has completely transformed how we work. The interface is intuitive, and the features are exactly what we needed. Highly recommended!"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">John Doe</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">CEO, Company Inc.</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Cards */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Stats Cards
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { value: '12.5K', label: 'Total Users', icon: '👥', color: 'blue' },
            { value: '$45.2K', label: 'Revenue', icon: '💰', color: 'green' },
            { value: '98%', label: 'Satisfaction', icon: '⭐', color: 'yellow' },
            { value: '24/7', label: 'Support', icon: '🛟', color: 'purple' },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Profile Cards */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Profile Cards
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className={`h-24 bg-gradient-to-r ${
                i === 1 ? 'from-blue-500 to-purple-600' :
                i === 2 ? 'from-green-500 to-teal-600' :
                'from-pink-500 to-orange-500'
              }`}></div>
              <div className="px-6 pb-6">
                <div className="flex flex-col items-center -mt-12">
                  <div className="h-24 w-24 bg-white dark:bg-slate-700 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center text-3xl">
                    👤
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-3">John Doe</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Senior Developer</p>
                  <div className="flex gap-2 mt-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                      Follow
                    </button>
                    <button className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Feature Cards
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for speed and performance' },
            { icon: '🔒', title: 'Secure', description: 'Bank-level security for your data' },
            { icon: '📱', title: 'Responsive', description: 'Works perfectly on all devices' },
          ].map((feature, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Content Container */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Content Containers
        </h2>

        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 md:p-12 border border-slate-200 dark:border-slate-700 mb-8">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Article Title
          </h3>
          <div className="flex items-center gap-4 mb-6 text-sm text-slate-600 dark:text-slate-400">
            <span>By John Doe</span>
            <span>•</span>
            <span>Jan 20, 2026</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
              <p>Use consistent spacing - stick to the spacing scale (p-4, p-6, p-8)</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Add hover effects to interactive cards for better user feedback</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Use overflow-hidden with rounded corners when cards have images</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Combine shadow-lg with border for depth without harsh edges</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Keep card content hierarchy clear with proper heading and text sizes</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

import LessonLayout from "@/components/LessonLayout";

export default function LandingPageLesson() {
  return (
    <LessonLayout
      title="Landing Page"
      description="Build a complete, professional landing page with hero, features, testimonials, and more"
      moduleNumber={6}
      lessonNumber={5}
      prevLesson={{
        title: "Modals & Overlays",
        href: "/lessons/module-6/modals",
      }}
      nextLesson={{
        title: "Component Organization",
        href: "/lessons/module-7/organization",
      }}
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Landing Page
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Build a complete, conversion-focused landing page with all the essential sections and components.
        </p>

        {/* Hero Section */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Hero Section
        </h2>

        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl overflow-hidden mb-8">
          <div className="px-8 py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build Amazing Products Faster
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              The modern development platform that helps teams ship better products with confidence and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
                Get Started Free
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
            <p className="text-blue-100 mt-6 text-sm">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>

        {/* Features Section */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Features Section
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-12 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Powerful features to help you build, ship, and scale your products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for speed and performance' },
              { icon: '🔒', title: 'Secure by Default', description: 'Enterprise-grade security built-in' },
              { icon: '📊', title: 'Advanced Analytics', description: 'Deep insights into your data' },
              { icon: '🚀', title: 'Easy Deployment', description: 'Deploy in minutes, not hours' },
              { icon: '🔄', title: 'Real-time Sync', description: 'Keep everything in sync automatically' },
              { icon: '🌍', title: 'Global CDN', description: 'Fast worldwide content delivery' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Social Proof (Stats)
        </h2>

        <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-12 mb-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10M+', label: 'Active Users' },
              { value: '99.9%', label: 'Uptime' },
              { value: '150+', label: 'Countries' },
              { value: '4.9/5', label: 'User Rating' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Testimonials Section
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-12 border border-slate-200 dark:border-slate-700 mb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Loved by Thousands
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              See what our customers have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah Johnson', role: 'CEO, TechCorp', quote: 'This platform has transformed how we build products. The speed and reliability are unmatched.' },
              { name: 'Michael Chen', role: 'CTO, StartupXYZ', quote: 'Best investment we made this year. Our team productivity has increased by 300%.' },
              { name: 'Emily Davis', role: 'Product Manager', quote: 'Intuitive, powerful, and a joy to use. Cannot imagine working without it now.' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Pricing Section
        </h2>

        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-12 mb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Choose the plan that's right for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Starter', price: 29, features: ['Up to 10 users', '10GB storage', 'Basic support', 'Core features'] },
              { name: 'Pro', price: 99, features: ['Up to 50 users', '100GB storage', 'Priority support', 'Advanced features', 'Analytics'], popular: true },
              { name: 'Enterprise', price: 299, features: ['Unlimited users', '1TB storage', '24/7 support', 'All features', 'Custom integrations', 'Dedicated manager'] },
            ].map((plan, i) => (
              <div key={i} className={`bg-white dark:bg-slate-800 rounded-xl p-8 ${
                plan.popular ? 'ring-2 ring-blue-500 shadow-2xl scale-105' : 'border border-slate-200 dark:border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
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
                <button className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Call-to-Action Section
        </h2>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 md:p-16 text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using our platform to build amazing products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Footer */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Footer Section
        </h2>

        <footer className="bg-slate-900 dark:bg-slate-950 rounded-xl p-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Product</h3>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Security', 'Roadmap', 'Changelog'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Company</h3>
              <ul className="space-y-2">
                {['About', 'Blog', 'Careers', 'Press', 'Partners'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Resources</h3>
              <ul className="space-y-2">
                {['Documentation', 'Help Center', 'Community', 'Contact', 'Support'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Newsletter</h3>
              <p className="text-slate-400 text-sm mb-4">
                Subscribe to get updates and news
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2026 Your Company. All rights reserved.
              </p>
              <div className="flex gap-6">
                {['Privacy', 'Terms', 'Cookies'].map((link) => (
                  <a key={link} href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                ))}
              </div>
              <div className="flex gap-4">
                {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                  <a key={social} href="#" className="text-slate-400 hover:text-white transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800 mt-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Best Practices
          </h3>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <p>Lead with a clear, compelling value proposition in your hero</p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <p>Use social proof (stats, testimonials) to build trust</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold">•</span>
              <p>Make CTAs prominent and action-oriented</p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
              <p>Keep pricing transparent and easy to understand</p>
            </div>
            <div className="flex gap-3">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <p>Optimize for mobile - most traffic comes from mobile devices</p>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}

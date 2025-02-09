import Navigation from '@/components/Navigation'

export default function BlogPage() {
  return (
    <main>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Blog Posts</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample blog post card - will be replaced with dynamic content */}
          <article className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <span className="bg-primary bg-opacity-10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                  Technology
                </span>
                <time className="text-sm text-gray-500 dark:text-gray-400 ml-4">March 10, 2024</time>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                Getting Started with Next.js and Tailwind CSS
              </h2>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                Learn how to build modern web applications using Next.js and style them beautifully with Tailwind CSS.
              </p>
              <div className="mt-6">
                <button className="text-primary hover:text-primary-dark font-medium">
                  Read more →
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
} 
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-primary">Syntax & Sips</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A blog about programming, technology, and everything in between. Grab a coffee and dive into our latest articles.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured posts will be dynamically loaded here */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <p className="text-primary text-sm font-semibold tracking-wide uppercase">Coming Soon</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">Stay tuned for our first post!</h3>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                We're working on bringing you high-quality content about programming and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 
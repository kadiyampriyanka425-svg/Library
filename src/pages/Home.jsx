const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Digital Library</h1>
        <div className="space-x-4">
          <a href="/login" className="hover:underline">Login</a>
          <a href="/register" className="hover:underline">Register</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center bg-gray-100 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to Digital Library
        </h2>
        <p className="text-gray-600 max-w-xl mb-6">
          Access thousands of books online, manage library records,
          and explore knowledge anytime, anywhere.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Explore Books
        </button>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          
          <div className="p-6 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">📚 Huge Collection</h3>
            <p className="text-gray-600">
              Browse and read books from various categories.
            </p>
          </div>

          <div className="p-6 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">🔍 Easy Search</h3>
            <p className="text-gray-600">
              Quickly find books using title, author, or category.
            </p>
          </div>

          <div className="p-6 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">🛡 Secure Access</h3>
            <p className="text-gray-600">
              Safe login system for users and admins.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2026 Digital Library Management System
      </footer>

    </div>
  );
};

export default Home;
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      <Header />

      <main className="flex-grow flex items-center justify-center px-6">
        <div className="text-center max-w-2xl bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to Digital Library
          </h2>

          <p className="text-gray-600 text-lg mb-6">
            Search, explore, and read your favorite books online anytime.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Explore Books
          </button>
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default Home;
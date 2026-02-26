import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-wide">
          Digital Library
        </h2>

        <div className="space-x-6 text-lg">
          {/* Home */}
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>

          {/* Dashboard / Books (example) */}
          <Link
            to="/dashboard"
            className="hover:text-yellow-300 transition duration-300"
          >
            Dashboard
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-1 rounded-md hover:bg-yellow-300 hover:text-black transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
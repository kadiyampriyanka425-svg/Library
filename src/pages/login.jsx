import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // ✅ navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)

    // ✅ simple validation (replace with API later)
    if (email && password) {
      // login success
      navigate("/dashboard"); // 🔁 redirect
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">

          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Login
            </button>

          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
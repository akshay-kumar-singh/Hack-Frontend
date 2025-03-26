import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { loginUser } from "../services/services";

const LoginPopup = ({ onClose, onToggle, onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await loginUser(formData);
      console.log("API Response:", response); // Debugging

      if (response.token && response.user) {
        localStorage.setItem("user", JSON.stringify(response.user)); // Store user info
        onLoginSuccess(response.user); // Update navbar with user data
        onClose(); // Close popup
      } else {
        setError(response.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-xs" onClick={onClose}></div>

      <div className="relative bg-white rounded-3xl shadow-2xl md:w-[950px] w-full md:h-[420px] min-h-fit flex md:flex-row flex-col overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition text-2xl"
        >
          ✖
        </button>

        <div className="md:w-1/2 w-full bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-l-lg p-6 flex flex-col justify-center items-start">
          <h2 className="md:text-2xl text-[16px] font-bold leading-snug md:mb-4">
            Unlock Your Learning Potential with <br />
            <span className="text-yellow-300">Exclusive Features! 🚀</span>
          </h2>
          <img src="ask.webp" alt="Student Learning" className="md:w-32 w-24 md:h-32 h-24 object-contain mt-4" />

          <ul className="space-y-2 text-sm mt-3">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" /> Unlimited doubt solving with expert guidance
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" /> Video solutions in multiple languages
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" /> Exclusive live classes & expert mentorship
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 w-full md:p-8 p-3 flex flex-col justify-center bg-gray-50 rounded-r-lg">
          <h2 className="md:text-3xl text-xl font-bold text-gray-800 mb-6">Welcome Back!</h2>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full text-black border rounded-2xl px-4 py-3 mb-4"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full text-black border rounded-2xl px-4 py-3 md:mb-4 mb-2"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="flex justify-between mb-4">
              <button type="button" className="text-blue-500">
                Forgot Password?
              </button>
              <button type="button" onClick={onToggle} className="text-blue-500">
                New user? Sign Up
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-3xl disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login & Start Learning 🚀"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;

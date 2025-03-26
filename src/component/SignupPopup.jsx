import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SignupPopup = ({ onClose, onToggle }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-xs" onClick={onClose}></div>

      <div className="bg-white rounded-3xl shadow-2xl md:w-[950px] w-full md:h-[420px] min-h-fit flex md:flex-row flex-col relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition text-2xl"
        >
          ✖
        </button>

        <div className="md:w-1/2 w-full bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-l-lg p-6 flex flex-col justify-center items-start">
          <h2 className="md:text-2xl text-[16px] font-bold leading-snug md:mb-4 mb-2">
            Join <span className="text-yellow-300">Learnoscale</span> & Unlock Your Learning Potential 🚀
          </h2>
          <img src="/signup.webp" alt="Signup Illustration" className="md:w-32 w-24 md:h-32 h-24 object-contain mt-4" />

          <ul className="space-y-2 text-sm mt-3">
            <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Access 1000+ Expert-Led Courses</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Learn from Industry Professionals</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Personalized Study Plans & AI Insights</li>
          </ul>
        </div>

        <div className="md:w-1/2 w-full md:p-8 p-3 flex flex-col justify-center bg-gray-50 rounded-r-lg">
          <h2 className="md:text-3xl text-xl font-bold text-gray-800 mb-6">Create Your Account</h2>

          <form>
            <div className="mb-3">
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-800"
              />
            </div>

            {/* Changed input from mobile to email */}
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your Email Address"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-800"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-800"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2.5 bg-blue-500 text-white py-3 rounded-3xl hover:bg-blue-600 transition shadow-md transform hover:scale-105"
            >
              Sign Up & Start Learning 🎓
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-pink-600">
            Already have an account?{" "}
            <button onClick={onToggle} className="text-blue-500 font-semibold hover:underline">
              Log in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;

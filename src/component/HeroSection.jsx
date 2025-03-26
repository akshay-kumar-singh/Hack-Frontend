import React, { useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";

const HeroSection = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-20">
        <div className="w-full md:w-1/2 space-y-6 md:pl-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-blue-600">LearnOscale</span>
          </h1>
          <p className="text-2xl text-gray-600">
            One Destination for Complete Exam Preparation
          </p>
          <div className="text-gray-700 flex items-center space-x-3 text-lg font-medium">
            <span>Learn</span>
            <span className="text-green-600">&gt;</span>
            <span>Practice</span>
            <span className="text-green-600">&gt;</span>
            <span>Improve</span>
            <span className="text-green-600">&gt;</span>
            <span>Succeed</span>
          </div>
          <p className="text-lg text-gray-600">
            Start your preparation for success today!
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out w-full sm:w-auto"
            >
              Explore 🚀
            </button>

            <a
              href="https://play.google.com"
              className="flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-all text-lg font-medium w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlay className="text-white text-2xl mr-2" />
              <span>Get it on Google Play</span>
            </a>

            <a
              href="https://www.apple.com/app-store/"
              className="flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-all text-lg font-medium w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaApple className="text-white text-2xl mr-2" />
              <span>Download on the App Store</span>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="hero.svg"
            alt="Hero Illustration"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {isLoginOpen && (
        <LoginPopup
          onClose={() => setIsLoginOpen(false)}
          onToggle={() => {
            setIsLoginOpen(false);
            setIsSignupOpen(true);
          }}
        />
      )}

      {isSignupOpen && (
        <SignupPopup
          onClose={() => setIsSignupOpen(false)}
          onToggle={() => {
            setIsSignupOpen(false);
            setIsLoginOpen(true);
          }}
        />
      )}
    </>
  );
};

export default HeroSection;

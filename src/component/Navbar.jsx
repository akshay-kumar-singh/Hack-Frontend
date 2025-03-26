import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";

const TABS = [
  { title: "Category" },
  { title: "Courses" },
  { title: "Ask your Doubt" },
  { title: "Free Study" },
  { title: "Exam Alert" },
  { title: "Monetize your Expertise" },
];

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle successful login
  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save user data in localStorage
    setIsLoginOpen(false);
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user data from localStorage
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-700 to-indigo-800 bg-opacity-90 shadow-lg backdrop-blur-md">
        <div className="relative flex items-center justify-between w-full px-6 lg:px-12 py-4">
          <div className="text-white text-xl font-bold">LOGO</div>

          <div className="hidden md:flex space-x-8">
            {TABS.map((item, index) => (
              <div
                key={index}
                className="text-white font-medium hover:text-yellow-300"
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="ml-auto flex items-center">
            {user ? (
              // If user is logged in, show name and logout button
              <>
                <span className="text-yellow-400 font-semibold mr-4 drop-shadow-lg cursor-pointer hover:text-yellow-300">
                  {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-white border border-red-400 px-5 py-2 rounded-md hover:bg-red-400 hover:text-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              // If not logged in, show login button
              <button
                onClick={() => setIsLoginOpen(true)}
                className="text-sm font-medium text-white border border-yellow-300 px-5 py-2 rounded-md hover:bg-yellow-300 hover:text-gray-900 transition"
              >
                Login
              </button>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white ml-4"
            >
              {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900 text-white shadow-xl rounded-b-lg flex flex-col items-center py-6 space-y-4 md:hidden">
            {TABS.map((item, index) => (
              <div
                key={index}
                className="text-lg font-semibold tracking-wide w-full text-center py-2 hover:bg-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </nav>

      {isLoginOpen && (
        <LoginPopup
          onClose={() => setIsLoginOpen(false)}
          onToggle={() => {
            setIsLoginOpen(false);
            setIsSignupOpen(true);
          }}
          onLoginSuccess={handleLoginSuccess} // Pass the login success handler
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

export default Navbar;

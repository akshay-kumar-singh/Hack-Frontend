import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-blue-300">
            MyBrand
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <a href="/" className="hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-300">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-blue-300">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu (hamburger icon) */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

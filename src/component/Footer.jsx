import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaGooglePlay, FaApple, FaLinkedin } from "react-icons/fa";
import { footerLinks } from "./footerLinks"; // Import the links from a constant

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-indigo-800 bg-opacity-90 shadow-lg backdrop-blur-md text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12 px-6">
        <div className="flex flex-col items-start w-full">
          <h3 className="text-2xl font-semibold mb-3 text-yellow-400">LearnOscale</h3>
          <p className="text-sm">
            <FaMapMarkerAlt className="inline-block mr-2 text-yellow-300" /> LearnOscale Pvt. Ltd., Alwar, Rajasthan - 301001
          </p>
          <p className="text-sm mt-2">
            <FaPhone className="inline-block mr-2 text-yellow-300" /> +91-9587901199
          </p>
          <p className="text-sm mt-2">
            <FaEnvelope className="inline-block mr-2 text-yellow-300" /> support@learnoscale.com
          </p>

          <div className="mt-4">
            <p className="text-sm font-semibold mb-2">Follow us on:</p>
            <div className="flex gap-4 text-lg mt-2">
              <FaFacebook className="cursor-pointer hover:text-blue-600 transition-all" />
              <FaTwitter className="cursor-pointer hover:text-blue-400 transition-all" />
              <FaGooglePlay className="cursor-pointer hover:text-green-500 transition-all" />
              <FaApple className="cursor-pointer hover:text-gray-500 transition-all" />
              <FaLinkedin className="cursor-pointer hover:text-blue-700 transition-all" />
            </div>
          </div>
        </div>

        {footerLinks.map((section, index) => (
          <div key={index}>
            <h5 className="text-lg font-semibold mb-4 text-yellow-300">{section.title}</h5>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href={`/main/${link.toLowerCase().replace(/ /g, '-')}`} className="text-sm hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center text-sm mt-8 text-gray-400">
        <p>&copy; 2024 LearnOscale. All rights reserved.</p>
        <p className="mt-2">
          Follow us on: <span className="text-blue-400 cursor-pointer hover:underline">Twitter</span> | <span className="text-blue-400 cursor-pointer hover:underline">LinkedIn</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

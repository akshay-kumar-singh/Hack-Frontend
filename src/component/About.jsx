import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-bl from-purple-100 to-purple-300">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          This is the About page. Learn more about what we do here.
        </p>
      </div>
    </div>
  );
};

export default About;

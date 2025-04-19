import React from 'react';
import FloatingNavbar from '../components/Navbar';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="relative flex items-center min-h-screen bg-gradient-to-br from-black to-purple-900 p-8 sm:p-16 overflow-hidden">

      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          John Doe
        </h1>
        <p className="text-purple-200 text-base sm:text-lg max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col space-y-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-purple-300 hover:text-white transition-colors duration-200"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-purple-300 hover:text-white transition-colors duration-200"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="text-purple-300 hover:text-white transition-colors duration-200"
        >
          <FaInstagram size={24} />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="text-purple-300 hover:text-white transition-colors duration-200"
        >
          <FaTwitter size={24} />
        </a>
      </div>

      <FloatingNavbar />

    </div>
  );
};

export default HomePage;

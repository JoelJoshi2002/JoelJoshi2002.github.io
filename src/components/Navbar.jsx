import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="p-4 text-black fixed top-0 left-0 w-full z-10 bg-opacity-50 bg-opacity-10 backdrop-blur-md backdrop-filter backdrop-blur-sm -webkit-backdrop-filter: blur(0.05px) shadow-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold text-white pl-3">Joel</div>

          {/* Centered Links */}
          <ul className="hidden md:flex justify-center flex-grow space-x-8">
            <li className="transform transition-transform duration-300">
              <a
                href="#"
                className="hover:text-white hover:scale-110 text-gray-200 transition-all duration-300"
              >
                // Home
              </a>
            </li>
            <li className="transform transition-transform duration-300">
              <a
                href="#work"
                className="hover:text-white hover:scale-110 text-gray-200 transition-all duration-300"
              >
                // About
              </a>
            </li>
            <li className="transform transition-transform duration-300">
              <a
                href="#skills"
                className="hover:text-white hover:scale-110 text-gray-200 transition-all duration-300"
              >
                // Skills
              </a>
            </li>
            <li className="transform transition-transform duration-300">
              <a
                href="#projects"
                className="hover:text-white hover:scale-110 text-gray-200 transition-all duration-300"
              >
                // Projects
              </a>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`absolute top-16 left-0 flex flex-col w-full md:hidden transition-all duration-300 ease-in-out bg-black bg-opacity-50 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="py-2 px-4 border-b text-center transform transition-transform duration-300">
            <a
              href="#"
              className="hover:text-white hover:scale-110 text-gray-200 transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li className="py-2 px-4 border-b text-center transform transition-transform duration-300">
            <a
              href="#work"
              className="hover:text-white hover:scale-110 text-gray-200 transition-all duration-300"
            >
              About
            </a>
          </li>
          <li className="py-2 px-4 border-b text-center transform transition-transform duration-300">
            <a
              href="#skills"
              className="hover:text-white hover:scale-110 text-gray-200 transition-all duration-300"
            >
              Skills
            </a>
          </li>
          <li className="py-2 px-4 text-center transform transition-transform duration-300">
            <a
              href="#projects"
              className="hover:text-white hover:scale-110 text-gray-200 transition-all duration-300"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

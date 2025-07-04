import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../store/userSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector(selectUser);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <img src="/Logo.png" alt="Logo" className="h-14 w-40" />
             */}
            <span className=" text-lg font-bold ">Tour & Travels</span>
          </Link>

          {/* Desktop Navigation + Buttons on the right */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
            <Link
              to="/destinations"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Destinations
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Contact
            </Link>

            {/* Buttons */}
            {user ? (
              <Link
                to={"/dashboard"}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Go to dashboard
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/auth/login">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ring-offset-white disabled:pointer-events-none disabled:opacity-50 border border-blue-600 bg-white text-blue-600 hover:bg-blue-500 hover:text-white h-10 px-4 py-2">
                    Login
                  </button>
                </Link>
                <Link to="/auth/signup">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 h-10 px-4 py-2">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden mt-2`}>
          <div className="px-2 pt-2 pb-2 space-y-1 bg-white border-t border-gray-200">
            {/* Mobile Navigation Links */}
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}>
              Home
            </Link>
            <Link
              to="/destinations"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}>
              Destinations
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}>
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}>
              Contact
            </Link>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-2 py-2">
              <Link to="/auth/login" onClick={closeMenu}>
                <button className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ring-offset-white disabled:pointer-events-none disabled:opacity-50 border border-blue-600 bg-white text-blue-600 hover:bg-blue-500 hover:text-white h-10 px-4 py-2">
                  Login
                </button>
              </Link>
              <Link to="/auth/signup" onClick={closeMenu}>
                <button className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 bg-blue-400 text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 h-10 px-4 py-2">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

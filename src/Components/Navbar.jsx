import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../store/userSlice";
import { BadgePercent, Lock, Luggage, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAgentDropdownOpen, setIsAgentDropdownOpen] = useState(false);
  const user = useSelector(selectUser);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsAgentDropdownOpen(false); // Close agent dropdown when main menu toggles
  };

  const toggleAgentDropdown = () => {
    setIsAgentDropdownOpen(!isAgentDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAgentDropdownOpen(false);
  };

  const agentMenuItems = [
    {
      path: "/agent/join",
      label: "Join For Free",
      icon: <User className="w-4 h-4  hover:text-white" />,
    },
    {
      path: "/auth/login",
      label: "Sign In",
      icon: <Lock className="w-4 h-4  hover:text-white" />,
    },
    {
      path: "/agent/travel-leads",
      label: "Travel Leads",
      icon: <Luggage className="w-4 h-4  hover:text-white" />,
    },
    {
      path: "/agent/advertise",
      label: "Advertise with us",
      icon: (
        <BadgePercent className="w-4 h-4  hover:text-white" />
      ),
    },
  ];

  const loginAgentMenuItems = [
    {
      path: "/agent/join",
      label: "Join For Free",
      icon: <User className="w-4 h-4  hover:text-white" />,
    },
    {
      path: "/agent/travel-leads",
      label: "Travel Leads",
      icon: <Luggage className="w-4 h-4  hover:text-white" />,
    },
    {
      path: "/agent/advertise",
      label: "Advertise with us",
      icon: <BadgePercent className="w-4 h-4  hover:text-white" />,
    },
  ];

  return (
    <nav className="bg-[#e8e9eb] shadow-md py-4 sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold text-[#f06543]">
              Tour&Travels
            </span>
          </Link>

          {/* Desktop Navigation + Buttons on the right */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <Link
              to="/"
              className="text-[#313638] hover:text-[#F06543] transition-colors duration-200">
              Home
            </Link>
            <Link
              to="/destinations"
              className="text-[#313638] hover:text-[#F06543] transition-colors duration-200">
              Destinations
            </Link>
            <Link
              to="/about"
              className="text-[#313638] hover:text-[#F06543] transition-colors duration-200">
              About
            </Link>
            <Link
              to="/contact"
              className="text-[#313638] hover:text-[#F06543] transition-colors duration-200">
              Contact
            </Link>

            {/* Agent Travel Zone Dropdown */}
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-[#313638] hover:text-[#F06543] transition-colors duration-200">
                  Go to dashboard
                </Link>
                <div className="relative">
                  <button
                    onClick={toggleAgentDropdown}
                    className="text-[#313638] hover:text-[#F06543] transition-colors duration-200 flex items-center">
                    Agent Travel Zone
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isAgentDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      {loginAgentMenuItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center px-4 py-2 text-sm text-[#313638] hover:bg-[#F06543] hover:text-white transition-colors duration-200"
                          onClick={closeMenu}>
                          {item.icon}
                          <span className="ml-2">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={toggleAgentDropdown}
                  className="text-[#313638] hover:text-[#F06543] transition-colors duration-200 flex items-center">
                  Agent Travel Zone
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isAgentDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {agentMenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center px-4 py-2 text-sm text-[#313638] hover:bg-[#F06543] hover:text-white transition-colors duration-200"
                        onClick={closeMenu}>
                        {item.icon}
                        <span className="ml-2">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#F06543] hover:text-[#F06543] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F06543] transition-colors duration-200"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
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
              className="block px-3 py-2 rounded-md text-base font-medium text-[#313638] hover:text-[#F06543] hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}>
              Home
            </Link>
            <Link
              to="/destinations"
              className="block px-3 py-2 rounded-md text-base font-medium text-[#313638] hover:text-[#F06543] hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}>
              Destinations
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-[#313638] hover:text-[#F06543] hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}>
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-[#313638] hover:text-[#F06543] hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}>
              Contact
            </Link>

            {/* Mobile Agent Travel Zone */}
            {user ? (
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-[#313638] hover:text-[#F06543] hover:bg-gray-100 transition-colors duration-200"
                onClick={closeMenu}>
                Go to dashboard
              </Link>
            ) : (
              <>
                <button
                  onClick={toggleAgentDropdown}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#313638] hover:text-[#F06543] hover:bg-gray-100 transition-colors duration-200">
                  Agent Travel Zone
                  <svg
                    className="inline ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isAgentDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    {agentMenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-3 py-2 rounded-md text-base font-medium text-[#313638] hover:text-[#F06543] hover:bg-gray-100 transition-colors duration-200"
                        onClick={closeMenu}>
                        <div className="flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.label}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

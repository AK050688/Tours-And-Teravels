import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#313638] border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            {/* <img src="/Logo.png" alt="Begin Yatra" className="h-12 mb-4" /> */}
            <h1 className=" font-extrabold text-2xl text-[#f06543] ">
              Tour&Travels
            </h1>
            <p className="text-gray-200 text-sm">
              Making travel easy, enjoyable, and accessible for everyone. Your
              journey begins with us.
            </p>
            <div className="flex space-x-4 mt-4 text-gray-200 text-lg">
              <a href="#" className="hover:text-[#f06543] translate-0.5">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="hover:text-[#f06543]">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="hover:text-[#f06543]">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-2 text-white">Company</h3>
            <ul className="text-gray-200 text-sm space-y-1">
              <li>
                <a href="/about" className="hover:text-[#f06543] text-gray-200">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#f06543] text-gray-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="hover:text-[#f06543] text-gray-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#f06543] text-gray-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="/press" className="hover:text-[#f06543] text-gray-200">
                  Press
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-[#f06543] text-gray-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold mb-2 text-white">Destinations</h3>
            <ul className="text-gray-200 text-sm space-y-1">
              <li>
                <a
                  href="/destinations/Goa"
                  className="hover:text-[#f06543] text-gray-200">
                  Goa
                </a>
              </li>
              <li>
                <a
                  href="/destinations/Kerala"
                  className="hover:text-[#f06543] text-gray-200">
                  Kerala
                </a>
              </li>
              <li>
                <a
                  href="/destinations/Rajasthan"
                  className="hover:text-[#f06543] text-gray-200">
                  Rajasthan
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-2 text-white">Support</h3>
            <ul className="text-gray-200 text-sm space-y-1">
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#f06543] text-gray-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-[#f06543] text-gray-200">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-[#f06543] text-gray-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-[#f06543] text-gray-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 mt-10 pt-6 text-center text-gray-200 text-sm">
          © 2025 Tour & Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

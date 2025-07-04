import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img src="/Logo.png" alt="Begin Yatra" className="h-12 mb-4" />
            <p className="text-gray-600 text-sm">
              Making travel easy, enjoyable, and accessible for everyone. Your
              journey begins with us.
            </p>
            <div className="flex space-x-4 mt-4 text-gray-600 text-lg">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold mb-2">Destinations</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>
                <a href="#">Goa</a>
              </li>
              <li>
                <a href="#">Kerala</a>
              </li>
              <li>
                <a href="#">Rajasthan</a>
              </li>
              <li>
                <a href="#">Himachal Pradesh</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 Tour & Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const AboutSection = () => {
  return (
    <div className="w-full">
      {/* Top Section: Image and About Text */}
      <div className="flex flex-col md:flex-row items-center justify-center py-10 px-6 md:px-10">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src="AboutSectionImage.png"
            alt="Hot Air Balloons"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
        {/* About Text Section */}
        <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 relative inline-block">
            About
            <span className="absolute left-0 bottom-0 w-12 h-1 bg-gray-800"></span>
          </h2>
          <p className="text-gray-600 mt-4">
            At Tour & Travels, we understand the thrill of exploring new
            destinations and the joy of discovering hidden gems. We’re
            passionate about connecting travelers with the perfect experiences,
            making their journeys unforgettable.
          </p>
        </div>
      </div>

      {/* Bottom Section: Mission and Vision */}
      <div className="bg-blue-50 py-10 px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Mission */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-10 text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To make travel accessible, affordable, and enjoyable for everyone
              by offering reliable services, customized packages, and 24/7
              customer support.
            </p>
          </div>
          {/* Vision */}
          <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become the most trusted and innovative travel platform,
              empowering people to explore the world with ease and confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
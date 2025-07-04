import React from 'react';
import { Heart, Key } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-[#f0f8ff] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-6">
            Begin Your Journey <br /> With <span className="text-blue-500">BeginYatra</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Discover amazing destinations, create unforgettable memories, and travel
            with confidence. Your perfect trip starts here.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="px-6 py-3 border border-blue-500 bg-blue-400 text-white font-semibold rounded-md hover:bg-orange-400  transition">
              Start Your Journey
            </button>
            <button className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-400 hover:text-white font-semibold rounded-md hover:bg-blue-50 transition">
              Explore Destinations
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative md:w-1/2">
          <img
            src="/HomePage.png" // Place the airport image in public folder
            alt="Traveler waiting"
            className="rounded-lg shadow-lg"
          />

          {/* Top right badge */}
          <div className="absolute top-4 right-4 bg-white shadow-md rounded-md p-4 flex items-center space-x-2">
            <Heart className="text-orange-500 w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500">Happy Customers</p>
              <p className="font-semibold text-gray-900">1000+</p>
            </div>
          </div>

          {/* Bottom left badge */}
          <div className="absolute bottom-4 left-4 bg-white shadow-md rounded-md p-4 flex items-center space-x-2">
            <Key className="text-orange-500 w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500">Over</p>
              <p className="font-semibold text-gray-900">100+ Destinations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

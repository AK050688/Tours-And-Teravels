import React from 'react';
import { Search, Sparkles, Heart, Download } from 'lucide-react'; // Lucide icons

const WhyChooseSection = () => {
  return (
    <section className=" w-fullbg-white py-16 px-4 md:px-16">
      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="flex items-center border rounded-full shadow-sm overflow-hidden px-4 py-2">
          <Search className="text-gray-400 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search tours, places..."
            className="flex-1 outline-none text-sm bg-transparent"
          />
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 text-sm font-medium">
            Search
          </button>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Choose <span className="text-blue-600">Begin Yatra?</span></h2>
        <p className="text-gray-600 text-lg">
          We make travel easy, enjoyable and memorable with our exceptional services <br />
          tailored to your needs.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-4">
            <Sparkles className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-lg text-gray-900 mb-2">Personalized Experience</h4>
          <p className="text-gray-600 text-sm">
            Tailor-made itineraries designed to match your preferences, budget, and travel style.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-4">
            <Heart className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-lg text-gray-900 mb-2">Memorable Journeys</h4>
          <p className="text-gray-600 text-sm">
            Create lasting memories with unique experiences and carefully selected accommodations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-4">
            <Download className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-lg text-gray-900 mb-2">Hassle-Free Booking</h4>
          <p className="text-gray-600 text-sm">
            Simple and secure booking process with flexible payment options and 24/7 customer support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

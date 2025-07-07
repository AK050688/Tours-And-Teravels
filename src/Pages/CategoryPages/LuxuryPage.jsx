import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const TravelCategoryPage = ({
  category,
  icon: Icon,
  heroImage,
  description,
  trips,
}) => {
  const [filter, setFilter] = useState("all");

  // Sample filter options (can be customized per category)
  const filterOptions = [
    { value: "all", label: "All Trips" },
    { value: "popular", label: "Most Popular" },
    { value: "new", label: "New Additions" },
  ];

  // Filter trips based on selection (mock logic; can be enhanced with real data)
  const filteredTrips = trips.filter((trip) => {
    if (filter === "all") return true;
    if (filter === "popular") return trip.popular;
    if (filter === "new") return trip.new;
    return true;
  });

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="py-24 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
            <Icon className="w-10 h-10 mr-2" /> {category} Travel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{description}</p>
        </div>
      </section>

      {/* Trips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Top {category} Trips
          </h2>
          {/* Filter Controls */}
          <div className="flex justify-center mb-8">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 mx-2 rounded-lg font-semibold transition-colors duration-300 ${
                  filter === option.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}>
                {option.label}
              </button>
            ))}
          </div>
          {/* Trips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTrips.map((trip, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {trip.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{trip.description}</p>
                  <a
                    href="/book"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
                    Book Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelCategoryPage;

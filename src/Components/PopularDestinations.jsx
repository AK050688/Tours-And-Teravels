import React from "react";

const destinations = [
  {
    name: "Goa",
    subtitle: "Beaches, Nightlife, Adventure",
    description:
      "Experience the perfect blend of beaches, nightlife, and Portuguese heritage.",
    image: "/Goa.png", 
    buttonText: "Explore Goa",
  },
  {
    name: "Kerala",
    subtitle: "Backwaters, Nature, Ayurveda",
    description:
      "Discover serene backwaters, lush landscapes, and rejuvenating Ayurvedic experiences.",
    image: "/Kerala.png", 
    buttonText: "Explore Kerala",
  },
  {
    name: "Rajasthan",
    subtitle: "Forts, Palaces, Culture",
    description:
      "Immerse yourself in the royal heritage, colorful culture, and magnificent forts.",
    image: "/Jaipur.png", 
    buttonText: "Explore Rajasthan",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
        <p className="text-gray-600 mt-2">
          Explore our top destinations and find your next adventure.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-52">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-white">
                <h3 className="text-lg font-semibold">{dest.name}</h3>
                <p className="text-sm">{dest.subtitle}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-4">{dest.description}</p>
              <button className="bg-blue-400 hover:bg-orange-400 text-blue text-sm font-semibold px-4 py-2 rounded w-full">
                {dest.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="border border-blue-400 text-blue-500 px-5 py-2 rounded hover:bg-orange-400 hover:text-black text-sm font-medium">
          View All Destinations
        </button>
      </div>
    </section>
  );
};

export default PopularDestinations;

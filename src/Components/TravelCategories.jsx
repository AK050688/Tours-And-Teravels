import React from "react";
import { Mountain, Heart, Users, User, DollarSign, Gem } from "lucide-react";

const TravelCategories = () => {
  const categories = [
    {
      name: "Adventure",
      icon: <Mountain className="w-12 h-12 text-[#F06543]" />,
      caption: "Thrilling experiences for adrenaline junkies.",
    },
    {
      name: "Honeymoon",
      icon: <Heart className="w-12 h-12 text-red-500" />,
      caption: "Romantic escapes for you and your loved one.",
    },
    {
      name: "Family",
      icon: <Users className="w-12 h-12 text-green-500" />,
      caption: "Fun-filled trips for the whole family.",
    },
    {
      name: "Solo",
      icon: <User className="w-12 h-12 text-purple-500" />,
      caption: "Discover yourself on a solo journey.",
    },
    {
      name: "Budget",
      icon: <DollarSign className="w-12 h-12 text-yellow-500" />,
      caption: "Affordable adventures without compromise.",
    },
    {
      name: "Luxury",
      icon: <Gem className="w-12 h-12 text-teal-500" />,
      caption: "Indulge in premium travel experiences.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Explore By Travel Type
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Find your perfect trip—whether it’s a relaxing getaway or an
          adrenaline-filled adventure.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-6 text-center cursor-pointer hover:border hover:border-[#F06543] hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600">{category.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;

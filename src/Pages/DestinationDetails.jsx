import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Destination from "./Destination";

// Sample package data for each destination
const destinationPackages = {
  Manali: {
    name: "Manali",
    description: "Explore the breathtaking Himalayas in Manali.",
    image: "/Manali.jpg",
    packages: [
      {
        title: "Manali Adventure Package",
        duration: "5 Days / 4 Nights",
        price: "₹25,000",
        highlights: [
          "Trekking in Solang Valley",
          "Visit to Rohtang Pass",
          "Paragliding experience",
          "Stay in luxury resorts",
        ],
      },
      {
        title: "Manali Family Getaway",
        duration: "4 Days / 3 Nights",
        price: "₹18,000",
        highlights: [
          "Sightseeing in Old Manali",
          "Visit to Hidimba Temple",
          "Riverside camping",
          "Local cuisine tour",
        ],
      },
    ],
  },
  Goa: {
    name: "Goa",
    description: "Enjoy the sandy beaches and vibrant nightlife of Goa.",
    image: "/Goa.jpg",
    packages: [
      {
        title: "Goa Beach Bliss",
        duration: "4 Days / 3 Nights",
        price: "₹20,000",
        highlights: [
          "Beach hopping in North Goa",
          "Water sports at Baga Beach",
          "Nightlife at Tito’s Lane",
          "Dolphin spotting tour",
        ],
      },
    ],
  },
  Kerala: {
    name: "Kerala",
    description: "Relax in the tranquil backwaters of Kerala.",
    image: "/Kerala.png",
    packages: [
      {
        title: "Kerala Backwaters Retreat",
        duration: "6 Days / 5 Nights",
        price: "₹30,000",
        highlights: [
          "Houseboat stay in Alleppey",
          "Visit to Munnar tea plantations",
          "Ayurvedic spa experience",
          "Kumarakom bird sanctuary tour",
        ],
      },
    ],
  },
  Rajasthan: {
    name: "Rajasthan",
    description: "Step into history in the Pink City of Jaipur.",
    image: "/Rajasthan.jpg",
    packages: [
      {
        title: "Rajasthan Heritage Tour",
        duration: "7 Days / 6 Nights",
        price: "₹35,000",
        highlights: [
          "Visit to Amber Fort",
          "City Palace tour",
          "Desert safari in Jaisalmer",
          "Shopping in local bazaars",
        ],
      },
    ],
  },
  Tokyo: {
    name: "Tokyo, Japan",
    description: "Experience the vibrant city life and rich culture of Tokyo.",
    image: "/TopTravelDeal/4.jpg",
    packages: [
      {
        title: "Tokyo Adventure",
        duration: "6 Days / 5 Nights",
        price: "₹16,000",
        highlights: [
          "Visit to Tokyo Tower",
          "Exploring Shibuya Crossing",
          "Meiji Shrine tour",
          "Sumo wrestling tournament",
        ],
      },
    ],
  },
  Bali: {
    name: "Bali, Indonesia",
    description: "Experience the beautiful beaches and temples of Bali.",
    image: "/TopTravelDeal/1.avif",
    packages: [
      {
        title: "Bali Island Getaway",
        duration: "5 Days / 4 Nights",
        price: "₹9,999",
        highlights: [
          "Visit to Uluwatu Temple",
          "Beach relaxation in Seminyak",
          "Water sports in Nusa Dua",
          "Exploring Ubud Monkey Forest",
        ],
      },
    ],
  },
  Santorini: {
    name: "Santorini, Greece",
    description:
      "Enjoy the picturesque whitewashed houses and blue-domed churches of Santorini.",
    image: "/TopTravelDeal/3.avif",
    packages: [
      {
        title: "Santorini Dream",
        duration: "7 Days / 6 Nights",
        price: "₹13,500",
        highlights: [
          "Visit to Oia village",
          "Sunset cruise in the Aegean Sea",
          "Exploring Fira town",
          "Wine tasting in a local winery",
        ],
      },
    ],
  },
  Paris: {
    name: "Paris, France",
    description: "Discover the romance and charm of the City of Light.",
    image: "/TopTravelDeal/2.avif",
    packages: [
      {
        title: "Parisian Delight",
        duration: "6 Days / 5 Nights",
        price: "₹12,000",
        highlights: [
          "Visit to the Eiffel Tower",
          "River Seine cruise",
          "Exploring the Louvre Museum",
          "Montmartre neighborhood tour",
        ],
      },
    ],
  },
};

const DestinationDetails = () => {
  const { destinationName } = useParams(); // Get destination name from URL
  const navigate = useNavigate();
  const destination = destinationPackages[destinationName];

  const handleBookNow = (destination) => {
    navigate(`destinations/book-now/${destination}`);
  };

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Destination Not Found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-blue-500 hover:underline focus:outline-none">
            Back to Destinations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="text-[#F06543] hover:underline mb-6 focus:outline-none">
          ← Back to Destinations
        </button>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {destination.name}
        </h1>
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-96 object-cover rounded-xl shadow-md mb-6"
        />
        <p className="text-gray-600 text-lg mb-8">{destination.description}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Available Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destination.packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800">
                {pkg.title}
              </h3>
              <p className="text-gray-600 mt-2">{pkg.duration}</p>
              <p className="text-green-600 font-bold mt-2">{pkg.price}</p>
              <ul className="mt-4 space-y-2">
                {pkg.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-600 text-sm">
                    • {highlight}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleBookNow(destination)}
                className="mt-4 bg-white text-[#F06543] border border-[#F06543] px-4 py-2 rounded hover:bg-[#F06543] hover:text-white focus:outline-none">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;

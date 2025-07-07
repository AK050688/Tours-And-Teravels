import React from "react";
import { Heart, ArrowRight } from "lucide-react";

const HoneymoonPage = () => {
  const trips = [
    {
      title: "Maldives Getaway",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Relax in overwater bungalows in the stunning Maldives.",
    },
    {
      title: "Paris Romance",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description:
        "Fall in love under the Eiffel Tower in the city of romance.",
    },
    {
      title: "Santorini Sunset",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Enjoy breathtaking sunsets in the picturesque Santorini.",
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="py-24 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
        }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
            <Heart className="w-10 h-10 mr-2" /> Honeymoon Travel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Create unforgettable memories with your loved one in romantic
            destinations.
          </p>
        </div>
      </section>

      {/* Trips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Top Honeymoon Trips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trips.map((trip, index) => (
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

export default HoneymoonPage;

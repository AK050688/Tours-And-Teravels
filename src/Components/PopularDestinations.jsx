import React from "react";
import { useNavigate } from "react-router-dom";
const destinations = [
  {
    name: "Goa",
    subtitle: "Beaches, Nightlife, Adventure",
    description:
      "Experience the perfect blend of beaches, nightlife, and Portuguese heritage.",
    image: "/Goa.jpg",
    buttonText: "Explore Goa",
  },
  {
    name: "Paris",
    subtitle:
      "Eiffel Tower, Louvre Museum, Arc de Triomphe, and Notre Dame Cathedral",
    description:
      "Visit Eiffel Tower, Louvre Museum, Arc de Triomphe, and Notre Dame Cathedral",
    image: "/Paris.jpg",
    buttonText: "Explore Paris",
  },
  {
    name: "Rajasthan",
    subtitle: "Forts, Palaces, Culture",
    description:
      "Immerse yourself in the royal heritage, colorful culture, and magnificent forts.",
    image: "/Rajasthan.jpg",
    buttonText: "Explore Rajasthan",
  },
];

const PopularDestinations = () => {
  const navigate = useNavigate();

  const handleOnClickDestinationViaName = (name) => {
    console.log('====================================');
    console.log(name);
    console.log('====================================');
    navigate(`/destinations/${name}`);
  }
  const handleOnClickDestination = () => {
    navigate(`/destinations`);
  }

  
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Popular Destinations
        </h2>
        <p className="text-gray-600 mt-2">
          Explore our top destinations and find your next adventure.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className={`bg-[url(${dest.image})] w-full h-80 object-cover bg-cover bg-center   shadow-md group relative cursor-pointer overflow-hidden hover:shadow-lg transition`}>
            {/* <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-auto object-cover"
            /> */}
            <div className="absolute inset-0 bg-black/60 m-4 rounded bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="block justify-center align-middle">
                <div className="text-white text-center p-4 block justify-center align-middle ">
                  <h3 className="text-lg font-semibold">{dest.name}</h3>
                  <p className="text-sm py-1">{dest.subtitle}</p>
                  <p className="text-gray-300 text-sm mb-4">
                    {dest.description}
                  </p>
                  <button
                    onClick={() => handleOnClickDestinationViaName(dest.name)}
                    className="bg-[#F06543]  hover:bg-white hover:text-[#F06543]  text-white text-sm font-semibold px-4 py-2 rounded w-full">
                    {dest.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          onClick={handleOnClickDestination}
          className="border border-[#F06543] text-[#F06543] px-5 py-2 rounded hover:bg-orange-400 hover:text-white text-sm font-medium">
          View All Destinations
        </button>
      </div>
    </section>
  );
};

export default PopularDestinations;

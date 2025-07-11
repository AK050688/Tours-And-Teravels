import React from "react";
import { ArrowRight } from "lucide-react";

const TravelDeals = () => {
  const deals = [
    {
      destination: "Bali",
      oldPrice: 12000,
      discountedPrice: 9999,
      discount: 17,
      image: "/TopTravelDeal/1.avif",
    },
    {
      destination: "Paris",
      oldPrice: 15000,
      discountedPrice: 12000,
      discount: 20,
      image: "/TopTravelDeal/2.avif",
    },
    {
      destination: "Santorini",
      oldPrice: 18000,
      discountedPrice: 13500,
      discount: 25,
      image: "/TopTravelDeal/3.avif",
    },
    {
      destination: "Tokyo",
      oldPrice: 20000,
      discountedPrice: 16000,
      discount: 20,
      image: "/TopTravelDeal/4.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          This Month’s Top Travel Deals
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Exclusive limited-time discounts handpicked just for you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={deal.image}
                alt={deal.destination}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                {deal.discount}% Off
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {deal.destination}
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-gray-500 line-through mr-2">
                    &#8377;{deal.oldPrice}
                  </span>
                  <span className="text-[#F06543] font-bold">
                    &#8377;{deal.discountedPrice}
                  </span>
                </div>
                <a
                  href={`/destinations/${deal.destination}`}
                  className="inline-flex items-center px-4 py-2 bg-white hover:bg-[#F06543] text-[#F06543] hover:text-white font-semibold rounded-lg transition duration-300 border border-[#F06543]">
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelDeals;

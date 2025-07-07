import React from "react";
import { Search, Sparkles, Heart, PlaneTakeoff } from "lucide-react"; // Replaced Download with PlaneTakeoff

const WhyChooseSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Why Travel With <span className="text-[#F06543]">WanderWorld?</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Discover the world with confidence—crafted tours, seamless support,
          and unforgettable adventures await you.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition hover:border hover:border-[#f06543]">
          <div className="w-10 h-10 bg-blue-100 text-[#f06543] rounded-full flex items-center justify-center mb-4">
            <Sparkles className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-lg text-gray-900 mb-2">
            Handpicked Destinations
          </h4>
          <p className="text-gray-600 text-sm">
            Explore only the most breathtaking and culturally rich places
            curated by local travel experts.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition hover:border hover:border-[#f06543]">
          <div className="w-10 h-10 bg-orange-100 text-[#f06543] rounded-full flex items-center justify-center mb-4">
            <Heart className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-lg text-gray-900 mb-2">
            Trusted by Travelers
          </h4>
          <p className="text-gray-600 text-sm">
            Thousands of happy travelers trust us for our transparency, support,
            and unforgettable service quality.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition hover:border hover:border-[#f06543]">
          <div className="w-10 h-10 bg-blue-100 text-[#f06543] rounded-full flex items-center justify-center mb-4">
            <PlaneTakeoff className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-lg text-gray-900 mb-2">
            Seamless Travel Support
          </h4>
          <p className="text-gray-600 text-sm">
            From planning to departure, enjoy full support, clear communication,
            and worry-free adventures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

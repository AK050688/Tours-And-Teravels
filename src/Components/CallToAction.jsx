import React from "react";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section
      className="py-24 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(../../../../public/ActionToCall/1.avif)",
      }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Explore the World?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Let’s plan your dream trip today.
        </p>
        <a
          href="/destinations"
          className="inline-flex items-center px-6 py-3 bg-white hover:bg-[#F06543] text-[#F06543] border border-[#F06543] hover:text-white  font-semibold rounded-lg transition duration-300">
          Book Your Trip
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CallToAction;

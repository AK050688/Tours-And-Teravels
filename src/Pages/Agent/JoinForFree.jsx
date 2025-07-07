import React from "react";
import { Link } from "react-router-dom";

const JoinForFree = () => {
  return (
    <div className="min-h-screen bg-[#E8E9EB] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#F06543] mb-6 text-center">
          Join For Free
        </h1>
        <p className="text-[#313638] mb-6 text-lg text-center">
          Become a part of our travel agent community! Join for free and gain
          access to exclusive tools, resources, and opportunities to grow your
          travel business.
        </p>
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-[#313638] mb-4">
              Benefits of Joining
            </h2>
            <ul className="list-disc list-inside text-[#313638] space-y-2">
              <li>Access to exclusive travel deals and promotions</li>
              <li>Free marketing tools to promote your services</li>
              <li>Connect with a network of travel professionals</li>
              <li>24/7 support from our dedicated agent team</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Link to="/auth/signup">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 bg-[#F06543] text-[#E8E9EB] hover:bg-[#F06543]/90 focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:ring-offset-2 h-12 px-6 py-3">
                Sign Up Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinForFree;

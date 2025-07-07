import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/userSlice";

const AdvertiseWithUs = () => {
  const user = useSelector(selectUser);
  if (!user) {
    return (
      <div className="min-h-screen bg-[#E8E9EB] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-[#F06543] mb-6 text-center">
            Advertise with Us
          </h1>
          <p className="text-[#313638] mb-6 text-lg text-center">
            Promote your travel business to our vast audience of travelers.
            Reach potential customers through targeted advertising campaigns.
          </p>
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold text-[#313638] mb-4">
                Advertising Opportunities
              </h2>
              <ul className="list-disc list-inside text-[#313638] space-y-2">
                <li>Banner ads on our homepage and destination pages</li>
                <li>Sponsored content in our travel blog</li>
                <li>Featured listings in our agent directory</li>
                <li>Email marketing to our subscriber base</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link to="/contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 bg-[#F06543] text-[#E8E9EB] hover:bg-[#F06543]/90 focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:ring-offset-2 h-12 px-6 py-3">
                  Contact Us to Advertise
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
    return (
      <div className="min-h-screen bg-[#E8E9EB]  py-12 px-4 sm:px-6 lg:px-8">
        <div className=" w-full bg-white shadow-lg rounded-lg p-8">
          <div className="flex justify-center align-middle">
            <h2 className="text-2xl text-[#F06543] font-bold">Advertise With Us</h2>
          </div>
        </div>
      </div>
    );
};

export default AdvertiseWithUs;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const JoinForFree = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    companyName: "",
    businessType: "",
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#E8E9EB] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#F06543] mb-4">List Your Company FREE</h1>
          <p className="text-xl text-gray-600">& Expand Your Business Quickly!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registration Form */}
          <div className="bg-white  rounded-lg shadow-lg p-8">
            <div className="flex justify-center align-middle py-8">
                <h3 className="text-3xl text-[#F06543]">Join For Free</h3>
              </div>
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-center align-middle">
              
              <div className="flex gap-4">
                <div className="w-20">
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06543] focus:border-transparent">
                    <option value="+91">+91</option>
                  </select>
                </div>
                <div className="flex-1">
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter Your Mobile No"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06543] focus:border-transparent"
                  />
                </div>
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Your Email id"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06543] focus:border-transparent"
              />

              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Enter Company Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06543] focus:border-transparent"
              />

              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06543] focus:border-transparent"
              >
                <option value="">Select Business Type</option>
                <option value="travel_agency">Travel Agency</option>
                <option value="tour_operator">Tour Operator</option>
                <option value="hotel">Hotel</option>
                <option value="transport">Transport</option>
              </select>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#F06543] focus:ring-[#F06543] border-gray-300 rounded"
                />
                <label className="text-sm text-gray-600">
                  Yes, I agree to all the{" "}
                  <Link to="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link>,{" "}
                  <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F06543] text-white py-3 rounded-lg hover:bg-[#F06543]/90 transition-colors duration-200"
              >
                Join For Free
              </button>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Why to Choose TourTravelWorld.com</h2>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-[#F06543]">2 Lac+</div>
                  <div className="text-gray-600">Monthly Travel Leads/Enquiries</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-[#F06543]">1 Lac+</div>
                  <div className="text-gray-600">Travel Packages</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-[#F06543]">2000+</div>
                  <div className="text-gray-600">Destinations</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-[#F06543]">Free VECTOR</div>
                  <div className="text-gray-600">(lead Management Panel)</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">How You Grow with TourTravelWorld.Com</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-[#F06543]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Create Agent Profile</h3>
                    <p className="text-sm text-gray-600">Add Basic Details & Register In 2 Minutes</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-[#F06543]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Receive FREE Travel Leads</h3>
                    <p className="text-sm text-gray-600">Post Unlimited Packages & Get FREE Leads Against The Package</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-[#F06543]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Sell Travel Packages</h3>
                    <p className="text-sm text-gray-600">Get In Touch With Travelers For Increased Sale</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-[#F06543]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Build Customer Base</h3>
                    <p className="text-sm text-gray-600">Get Travelers Reviews & Expand Customer Base</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinForFree;

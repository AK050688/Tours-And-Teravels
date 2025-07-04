import React from "react";

const FormSection = () => {
  return (
    <section className="bg-[#f0f8ff] py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Div - Call to Action */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Sign up today and get exclusive offers on your first booking. Our
            travel experts are ready to help you plan your perfect trip.
          </p>
          <button className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md hover:bg-blue-50 transition w-fit">
            Contact Us
          </button>
        </div>

        {/* Right Div - Form */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Get quote for any destination
          </h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below to travel anywhere in the world.
          </p>

          <form className="bg-white rounded-lg shadow p-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Tour Information</h3>
              <p className="text-sm text-gray-500">
                Enter the details of the new travel
              </p>
            </div>

            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border rounded p-2"
            />
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full border rounded p-2"
            />
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border rounded p-2"
            />

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter current city"
                className="w-1/2 border rounded p-2"
              />
              <input
                type="text"
                placeholder="Enter destination"
                className="w-1/2 border rounded p-2"
              />
            </div>

            <div className="flex gap-4">
              <input
                type="date"
                className="w-1/2 border rounded p-2"
              />
              <input
                type="number"
                placeholder="1"
                className="w-1/2 border rounded p-2"
              />
            </div>

            <div className="flex gap-4">
              <input
                type="number"
                placeholder="1"
                className="w-1/3 border rounded p-2"
              />
              <input
                type="number"
                placeholder="0"
                className="w-1/3 border rounded p-2"
              />
              <input
                type="number"
                placeholder="0"
                className="w-1/3 border rounded p-2"
              />
            </div>

            <select className="w-full border rounded p-2">
              <option>Couple</option>
              <option>Family</option>
              <option>Solo</option>
            </select>

            <select className="w-full border rounded p-2">
              <option>Website</option>
              <option>Referral</option>
              <option>Advertisement</option>
            </select>

            <select className="w-full border rounded p-2">
              <option>Domestic</option>
              <option>International</option>
            </select>

            <button
              type="submit"
              className="bg-blue-500 text-white-500 px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;

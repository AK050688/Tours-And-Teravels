// WelcomeSection.jsx
import React from 'react';

const WelcomeSection = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#f06543] via-white to-[#f09d51] py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Tour & Travels
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Your Travel Dreams, Our Priority
          </p>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
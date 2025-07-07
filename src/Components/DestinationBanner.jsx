import React from "react";

function DestinationBanner() {
  return (
    <div>
      <div className="h-[60vh]">
        <img
          src="/DestinationBanner.png"
          className="relative  w-full h-full object-cover bg-center"
          alt="person"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-white text-6xl bg-opacity-50 px-6 py-2 rounded">
          Top Travel Destinations
        </h2>
      </div>
    </div>
  );
}

export default DestinationBanner;

import React, { useEffect, useState } from "react";
import api from "../api/axios";
// import { FaFilter } from "react-icons/fa";
const Filter = () => {
  
  return (
    <div>
      <div className="bg-white p-4 rounded shadow mt-6">
        <div className="flex justify-between items-center mb-2">
          {/* <span><FaFilter/></span>  */}
          <h4 className="font-semibold text-lg text-gray-800">
            Search & Filters
          </h4>
          {/* <button className="text-blue-600 flex items-center hover:underline btn border-0 cursor-pointer">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-7.414 7.414a1 1 0 00-.293.707V20l-4-4H4a1 1 0 01-1-1V4z"
              />
            </svg>
            Show Filters
          </button> */}
        </div>
        <input
          type="text"
          placeholder="Quick search by name, email, destination, or city..."
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="flex gap-3 mb-4">
        <div className="w-full max-w-sm">
          <label className="block m-2 text-sm font-medium text-gray-700"></label>
          <select className="block w-full p-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="domestic">Demestic</option>
            <option value="international">International</option>
            
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;

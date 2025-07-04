import api from "../api/axios";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  // const [kycFile, setKycFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Log user after signup
  const signupHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);
      formData.append("companyName", companyName);
      formData.append("city", city);

      // if (kycFile) {
      //   formData.append("kycDocument", kycFile);
      // }

      await api.post("/api/auth/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast("Signup successfully");
      navigate("/auth/login");
    } catch (error) {
      toast("Failed to create an account");
      console.error("Error during signup:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleFileChange = (e) => {
  //   setKycFile(e.target.files[0]);
  // };

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   dispatch(loginRequest(true));

  //   const userData = {
  //     name,
  //     email,
  //     password,
  //     phone,
  //     company,
  //     city,
  //     kycFileName: kycFile?.name || "",
  //   };

  //   dispatch(loginSuccess(userData));
  //   dispatch(loginRequest(false));
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6 sm:p-8 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-black">
          Create Your Account
        </h1>
        <h2 className="text-center text-gray-600 mt-2 mb-6 text-sm sm:text-base">
          Join Tour & Travels and start your journey
        </h2>

        <form className="space-y-6" onSubmit={signupHandler}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="9876543210"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Your Company"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Mumbai"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* <div>
            <label
              htmlFor="kyc"
              className="block text-sm font-medium text-gray-700"
            >
              KYC Document
            </label>
            <input
              type="file"
              id="kyc"
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
              className="mt-1 w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              // required
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload a valid ID proof (PDF, JPG, PNG, max 5MB)
            </p>
          </div> */}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition text-lg font-semibold">
            {isLoading ? "Processing.." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-blue-600 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

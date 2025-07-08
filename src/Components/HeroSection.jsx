import React, { useEffect, useState } from "react";
import {
  Baby,
  Calendar,
  Clock,
  Mail,
  MapPin,
  Phone,
  Plane,
  Route,
  Search,
  User,
  Users,
} from "lucide-react";
import api from "../api/axios";
// import "../styles/HeroSection.css";

const HeroSection = () => {
  const defaultForm = {
    leadId: "",
    name: "",
    phone: "",
    email: "",
    city: "",
    destination: "",
    travelDate: "",
    adult: "0",
    children: "0",
    infant: "0",
    tripType: "",
    leadType: "",
    totalMembers: {
      adult: "0",
      children: "0",
      infant: "0",
    },
    travelDays: "",
    travelNights: "",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    destination: "",
  });

  const handleGroupChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      totalMembers: {
        ...form.totalMembers,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);

    if (["name", "phone", "email", "city", "destination"].includes(name)) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const getTotalMember = (totalMembers) => {
    return Object.values(totalMembers || {}).reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!form.city.trim()) {
      newErrors.city = "City is required";
      isValid = false;
    }
    if (!form.destination.trim()) {
      newErrors.destination = "Destination is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const leadData = {
        ...form,
        travelTime: `${form.travelDays} (days) - ${form.travelNights} (nights)`,
        totalMembers: {
          adult: String(form.totalMembers.adult || "0"),
          children: String(form.totalMembers.children || "0"),
          infant: String(form.totalMembers.infant || "0"),
        },
      };
      const res = await api.post("/api/leads", leadData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response:", res);

      setForm(defaultForm);
      setErrors({});
    } catch (error) {
      console.error("Failed to submit lead:", error);
      alert("An error occurred while saving the lead.");
    } finally {
      setIsLoading(false);
    }
  };

  // Carousel images (updated to objects with src and alt)
  const carouselImages = [
    {
      src: "https://tours-and-teravels.vercel.app/carausel/carausel-1.avif",
      alt: "Travel Destination 1",
    },
    {
      src: "https://tours-and-teravels.vercel.app/carausel/carausel-2.jpg",
      alt: "Travel Destination 2",
    },
    {
      src: "https://tours-and-teravels.vercel.app/carausel/carausel-3.jpg",
      alt: "Travel Destination 3",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [carouselImages.length]);

  return (
    <section className="">
      {/* Carousel */}
      <div className="relative flex items-center min-h-[50vh] md:min-h-[50vh] overflow-hidden">
        {/* Carousel */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            aria-live="polite">
            {carouselImages.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={item.src}
                  alt={item.alt || `Slide ${index + 1}`}
                  className="w-full h-screen  object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-3">
          <div className="text-center md:text-left py-5 sm:py-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-6">
              Begin Your Journey With{" "}
              <span className="text-white">Tour&Travels</span>
            </h1>
            <p className="text-white mt-4 text-base sm:text-lg max-w-2xl mx-auto md:mx-0">
              Discover amazing destinations, create unforgettable memories, and
              travel with confidence. Your perfect trip starts here.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button
                className="px-6 py-3 bg-[#F06543] text-white font-semibold rounded-md border border-transparent hover:bg-white hover:text-[#F06543] hover:border-[#F06543] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:ring-offset-2"
                aria-label="Start your travel journey">
                Start Your Journey
              </button>
              <button
                className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#F06543] hover:border-[#F06543] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:ring-offset-2"
                aria-label="Explore travel destinations">
                Explore Destinations
              </button>
            </div>
          </div>
          {/* Search Bar */}
          <div className="max-w-xl mt-4 mb-12 bg-white/70 rounded-full">
            <div className="flex items-center border rounded-full shadow-sm overflow-hidden px-4 py-2">
              <Search className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search destinations, tours, activities..."
                className="flex-1 outline-none text-sm bg-transparent"
              />
              <button className="bg-[#F06543] text-white px-4 py-1.5 rounded-full hover:bg-white hover:text-[#F06543] hover:border-[#F06543] border text-sm font-medium">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content (Form) */}
      <div className=" w-full mt-5 px-12">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6">
          <h2 className="text-center font-bold text-gray-800 text-lg sm:text-xl">
            Add New Travel Lead
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4 w-full">
            {/* Personal Information */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                <User className="w-4 h-4 text-[#F06543]" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3">
                <div className="group relative">
                  <User className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`w-full pl-10 py-2 border ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white hover:border-gray-300 text-sm sm:text-base`}
                    required
                  />
                  <span className="absolute top-2 right-3 text-red-500 text-lg">
                    *
                  </span>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>
                <div className="group relative">
                  <Phone className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={`w-full pl-10 py-2 border ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white hover:border-gray-300 text-sm sm:text-base`}
                    required
                  />
                  <span className="absolute top-2 right-3 text-red-500 text-lg">
                    *
                  </span>
                </div>
                <div className="group relative">
                  <Mail className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`w-full pl-10 py-2 border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white hover:border-gray-300 text-sm sm:text-base`}
                    required
                  />
                  <span className="absolute top-2 right-3 text-red-500 text-lg">
                    *
                  </span>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>
                <div className="group relative">
                  <MapPin className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    className={`w-full pl-10 py-2 border ${
                      errors.city ? "border-red-500" : "border-gray-200"
                    } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white hover:border-gray-300 text-sm sm:text-base`}
                    required
                  />
                  <span className="absolute top-2 right-3 text-red-500 text-lg">
                    *
                  </span>
                  {errors.city && (
                    <p className="mt-1 text-xs text-red-600">{errors.city}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Travel Details */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                <Plane className="w-4 h-4 text-purple-500" />
                Travel Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3">
                <div className="group relative">
                  <MapPin className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                  <input
                    type="text"
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    placeholder="Destination"
                    className={`w-full pl-10 py-2 border ${
                      errors.destination ? "border-red-500" : "border-gray-200"
                    } rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50 focus:ring-blue-500 hover:border-gray-300 text-sm sm:text-base`}
                    required
                  />
                  <span className="absolute top-2 right-3 text-red-500 text-lg">
                    *
                  </span>
                  {errors.destination && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.destination}
                    </p>
                  )}
                </div>
                <div className="group relative">
                  <Calendar className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                  <input
                    type="date"
                    name="travelDate"
                    value={form.travelDate}
                    onChange={handleChange}
                    className="w-full pl-10 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white hover:border-gray-300 text-sm sm:text-base"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Clock className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    <input
                      type="number"
                      name="travelDays"
                      placeholder="Days"
                      value={form.travelDays}
                      onChange={handleChange}
                      className="w-full pl-10 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white hover:border-gray-300 text-sm sm:text-base"
                      min="0"
                    />
                  </div>
                  <div className="relative flex-1">
                    <Clock className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    <input
                      type="number"
                      name="travelNights"
                      placeholder="Nights"
                      value={form.travelNights}
                      onChange={handleChange}
                      className="w-full pl-10 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white hover:border-gray-300 text-sm sm:text-base"
                      min="0"
                    />
                  </div>
                </div>
                <div className="group relative">
                  <Route className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                  <select
                    name="leadType"
                    value={form.leadType}
                    onChange={handleChange}
                    className="w-full pl-10 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white hover:border-gray-300 appearance-none text-sm sm:text-base">
                    <option value="">Select Lead Type</option>
                    <option value="domestic">Domestic</option>
                    <option value="international">International</option>
                  </select>
                </div>
                <div className="group relative">
                  <Route className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                  <select
                    name="tripType"
                    value={form.tripType}
                    onChange={handleChange}
                    className="w-full pl-10 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white hover:border-gray-300 appearance-none text-sm sm:text-base">
                    <option value="">Select Trip Type</option>
                    <option value="Family">Family</option>
                    <option value="Friends">Friends</option>
                    <option value="Couples">Couples</option>
                    <option value="Business">Business</option>
                    <option value="Senior_Citizen">Senior Citizen</option>
                    <option value="Group">Group</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Group Size */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                <Users className="w-4 h-4 text-green-500" />
                Group Size
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
                <div className="group">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 text-center">
                    Adults
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    <input
                      type="number"
                      name="adult"
                      value={form.totalMembers.adult}
                      onChange={handleGroupChange}
                      min="0"
                      className="w-full pl-10 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white hover:border-gray-300 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 text-center">
                    Children
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    <input
                      type="number"
                      name="children"
                      value={form.totalMembers.children}
                      onChange={handleGroupChange}
                      min="0"
                      className="w-full pl-10 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white hover:border-gray-300 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 text-center">
                    Infants
                  </label>
                  <div className="relative">
                    <Baby className="absolute left-3 top-3 transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                    <input
                      type="number"
                      name="infant"
                      value={form.totalMembers.infant}
                      onChange={handleGroupChange}
                      min="0"
                      className="w-full pl-10 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white hover:border-gray-300 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-end">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-xl text-center p-2">
                    <p className="text-xs sm:text-sm text-gray-600">
                      Total Members
                    </p>
                    <p className="text-lg font-bold text-black">
                      {getTotalMember(form.totalMembers)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex">
              <button
                disabled={isLoading}
                type="submit"
                className="w-full py-3 px-8 bg-[#f06543]  rounded-xl text-white hover:bg-[#fe8a6d] hover:text-white transition-all font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50">
                {isLoading ? "Processing..." : "Save Travel Lead"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

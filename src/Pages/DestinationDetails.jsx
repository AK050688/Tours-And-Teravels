import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Destination from "./Destination";
import {
  Baby,
  Calendar,
  Clock,
  Mail,
  MapPin,
  Phone,
  Plane,
  Route,
  User,
  Users,
  X,
} from "lucide-react";
import api from "../api/axios";
import { toast } from "react-toastify";

// Sample package data for each destination
const destinationPackages = {
  Manali: {
    name: "Manali",
    description: "Explore the breathtaking Himalayas in Manali.",
    image: "/Manali.jpg",
    packages: [
      {
        title: "Manali Adventure Package",
        duration: "5 Days / 4 Nights",
        price: "₹25,000",
        highlights: [
          "Trekking in Solang Valley",
          "Visit to Rohtang Pass",
          "Paragliding experience",
          "Stay in luxury resorts",
        ],
      },
      {
        title: "Manali Family Getaway",
        duration: "4 Days / 3 Nights",
        price: "₹18,000",
        highlights: [
          "Sightseeing in Old Manali",
          "Visit to Hidimba Temple",
          "Riverside camping",
          "Local cuisine tour",
        ],
      },
    ],
  },
  Goa: {
    name: "Goa",
    description: "Enjoy the sandy beaches and vibrant nightlife of Goa.",
    image: "/Goa.jpg",
    packages: [
      {
        title: "Goa Beach Bliss",
        duration: "4 Days / 3 Nights",
        price: "₹20,000",
        highlights: [
          "Beach hopping in North Goa",
          "Water sports at Baga Beach",
          "Nightlife at Tito’s Lane",
          "Dolphin spotting tour",
        ],
      },
    ],
  },
  Kerala: {
    name: "Kerala",
    description: "Relax in the tranquil backwaters of Kerala.",
    image: "/Kerala.png",
    packages: [
      {
        title: "Kerala Backwaters Retreat",
        duration: "6 Days / 5 Nights",
        price: "₹30,000",
        highlights: [
          "Houseboat stay in Alleppey",
          "Visit to Munnar tea plantations",
          "Ayurvedic spa experience",
          "Kumarakom bird sanctuary tour",
        ],
      },
    ],
  },
  Rajasthan: {
    name: "Rajasthan",
    description: "Step into history in the Pink City of Jaipur.",
    image: "/Rajasthan.jpg",
    packages: [
      {
        title: "Rajasthan Heritage Tour",
        duration: "7 Days / 6 Nights",
        price: "₹35,000",
        highlights: [
          "Visit to Amber Fort",
          "City Palace tour",
          "Desert safari in Jaisalmer",
          "Shopping in local bazaars",
        ],
      },
    ],
  },
  Tokyo: {
    name: "Tokyo, Japan",
    description: "Experience the vibrant city life and rich culture of Tokyo.",
    image: "/TopTravelDeal/4.jpg",
    packages: [
      {
        title: "Tokyo Adventure",
        duration: "6 Days / 5 Nights",
        price: "₹16,000",
        highlights: [
          "Visit to Tokyo Tower",
          "Exploring Shibuya Crossing",
          "Meiji Shrine tour",
          "Sumo wrestling tournament",
        ],
      },
    ],
  },
  Bali: {
    name: "Bali, Indonesia",
    description: "Experience the beautiful beaches and temples of Bali.",
    image: "/TopTravelDeal/1.avif",
    packages: [
      {
        title: "Bali Island Getaway",
        duration: "5 Days / 4 Nights",
        price: "₹9,999",
        highlights: [
          "Visit to Uluwatu Temple",
          "Beach relaxation in Seminyak",
          "Water sports in Nusa Dua",
          "Exploring Ubud Monkey Forest",
        ],
      },
    ],
  },
  Santorini: {
    name: "Santorini, Greece",
    description:
      "Enjoy the picturesque whitewashed houses and blue-domed churches of Santorini.",
    image: "/TopTravelDeal/3.avif",
    packages: [
      {
        title: "Santorini Dream",
        duration: "7 Days / 6 Nights",
        price: "₹13,500",
        highlights: [
          "Visit to Oia village",
          "Sunset cruise in the Aegean Sea",
          "Exploring Fira town",
          "Wine tasting in a local winery",
        ],
      },
    ],
  },
  Paris: {
    name: "Paris, France",
    description: "Discover the romance and charm of the City of Light.",
    image: "/TopTravelDeal/2.avif",
    packages: [
      {
        title: "Parisian Delight",
        duration: "6 Days / 5 Nights",
        price: "₹12,000",
        highlights: [
          "Visit to the Eiffel Tower",
          "River Seine cruise",
          "Exploring the Louvre Museum",
          "Montmartre neighborhood tour",
        ],
      },
    ],
  },
};

const DestinationDetails = () => {
  const { destinationName } = useParams(); // Get destination name from URL
  const navigate = useNavigate();
  const destination = destinationPackages[destinationName];
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
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

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
      closeModal();
    }
  };

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Destination Not Found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-blue-500 hover:underline focus:outline-none">
            Back to Destinations
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="text-[#F06543] hover:underline mb-6 focus:outline-none">
          ← Back to Destinations
        </button>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {destination.name}
        </h1>
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-96 object-cover rounded-xl shadow-md mb-6"
        />
        <p className="text-gray-600 text-lg mb-8">{destination.description}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Available Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destination.packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800">
                {pkg.title}
              </h3>
              <p className="text-gray-600 mt-2">{pkg.duration}</p>
              <p className="text-green-600 font-bold mt-2">{pkg.price}</p>
              <ul className="mt-4 space-y-2">
                {pkg.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-600 text-sm">
                    • {highlight}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleBookNow(pkg)}
                className="mt-4 bg-white text-[#F06543] border border-[#F06543] px-4 py-2 rounded hover:bg-[#F06543] hover:text-white focus:outline-none">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white lg:m-20 md:m-10 m-8   backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 overflow-y-auto">
            <div className="flex justify-between align-middle">
              <h2 className="text-center font-bold text-gray-800 text-lg sm:text-xl">
                Start Your Journey
              </h2>
              <button onClick={closeModal}>
                <X />
              </button>
            </div>
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
                      <p className="mt-1 text-xs text-red-600">
                        {errors.email}
                      </p>
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
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  <div className="group relative">
                    <MapPin className="absolute left-3 top-3  transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                    <input
                      type="text"
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      placeholder="Destination"
                      className={`w-full pl-10 py-2 border ${
                        errors.destination
                          ? "border-red-500"
                          : "border-gray-200"
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
                      <option value="">Select Package Type</option>
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
                  {isLoading ? "Processing..." : "Inquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationDetails;

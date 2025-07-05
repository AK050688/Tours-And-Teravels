import React, { useState } from "react";
import { Baby, Calendar, Clock, Heart, Key, Mail, MapPin, Phone, Plane, Route, User, Users } from "lucide-react";
import api from "../api/axios";

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


  // handle change
    const handleChange = (e) => {
      const { name, value } = e.target;
      const newForm = { ...form, [name]: value };
      setForm(newForm);

      if (["name", "phone", "email", "city", "destination"].includes(name)) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    };

    const getTotalMember = (totalMembers) => {
      return Object.values(totalMembers || {})?.reduce((acc, curr) => {
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
      {
        const res = await api.post("/api/leads", leadData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("====================================");
        console.log(res);
        console.log("====================================");
      }

      setForm({
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
        travelTime: "",
      });

      setErrors({});
    } catch (error) {
      console.error("Failed to submit lead:", error);
      alert("An error occurred while saving the lead.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-[#f06543] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* bg carousel */}

        {/* make the carousel and do responsive and add the carousel images, carousel must be auto slider   */}

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-6">
            Begin Your Journey <br /> With{" "}
            <span className="text-bl text-white">Tour&Travels</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Discover amazing destinations, create unforgettable memories, and
            travel with confidence. Your perfect trip starts here.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="px-6 py-3 border border-white  bg-[#F06543]  text-white font-semibold rounded-md hover:bg-white hover:text-[#F06543]  transition">
              Start Your Journey
            </button>
            <button className="px-6 py-3 border border-white hover:border-[#F06543]  text-white  hover:bg-white  hover:text-[#F06543]  font-semibold rounded-md hover:bg-[#F06543]  transition">
              Explore Destinations
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative md:w-1/2">
          <div className="">
            <div className="bg-white/10 backdrop-blur rounded-2xl shadow-xl border border-white/20 p-2 max-w-4xl w-full  animate-fade-in">
              <div className="space-y-1">
                <div className="flex justify-center items-center">
                  <h2 className="text-center font-bold text-gray-800">
                    Add New Travel Lead
                  </h2>
                </div>

                <div className="space-y-3">
                  <h3 className="text-md font-semibold text-gray-800 flex items-center gap-1 border-gray-200">
                    <User className="w-4 h-4 text-blue-500" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="group">
                      <div className="relative  flex justify-center align-middle">
                        <User className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className={`w-70 pl-9 py-1 border ${
                            errors.name ? "border-red-500" : "border-red-200"
                          } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-red-300`}
                          required
                        />
                        <div className="absolute top-2 right-3">
                          <span className="text-red-500 text-lg">*</span>
                        </div>
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="group">
                      <div className="relative flex justify-center align-middle">
                        <Phone className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className={`w-70 pl-9 py-1 border ${
                            errors.phone ? "border-red-500" : "border-red-200"
                          } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-red-300`}
                          required
                        />
                        <div className="absolute top-2 right-3">
                          <span className="text-red-500 text-lg">*</span>
                        </div>
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div className="group">
                      <div className="relative flex justify-center align-middle">
                        <Mail className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className={`w-70 pl-9 py-1 border ${
                            errors.email ? "border-red-500" : "border-red-200"
                          } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-red-300`}
                          required
                        />
                        <div className="absolute top-2 right-3">
                          <span className="text-red-500 text-lg">*</span>
                        </div>
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="group">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          placeholder="City"
                          className={`w-70 pl-9 py-1 border ${
                            errors.city ? "border-red-500" : "border-red-200"
                          } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-red-300`}
                          required
                        />
                        <div className="absolute top-2 right-3">
                          <span className="text-red-500 text-lg">*</span>
                        </div>
                      </div>
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-md font-semibold text-gray-800 flex items-center gap-1 border-gray-200">
                    <Plane className="w-4 h-4 text-purple-500" />
                    Travel Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="group">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                        <input
                          type="text"
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          placeholder="Destination"
                          className={`w-70 pl-9 py-1 border ${
                            errors.destination
                              ? "border-red-500"
                              : "border-red-200"
                          } rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-red-300`}
                          required
                        />
                        <div className="absolute top-2 right-3">
                          <span className="text-red-500 text-lg">*</span>
                        </div>
                      </div>
                      {errors.destination && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.destination}
                        </p>
                      )}
                    </div>
                    <div className="group">
                      <div className="relative">
                        <Calendar className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                        <input
                          type="date"
                          name="travelDate"
                          value={form.travelDate}
                          onChange={handleChange}
                          className="w-70 pl-9 py-1 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="relative">
                        <Clock className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                        <input
                          type="number"
                          name="travelDays"
                          placeholder="days"
                          value={form.travelDays}
                          onChange={handleChange}
                          className="w-34 pl-9 py-1 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-300"
                        />
                      </div>
                      <div className="relative">
                        <Clock className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                        <input
                          type="number"
                          name="travelNights"
                          placeholder="nights"
                          value={form.travelNights}
                          onChange={handleChange}
                          className="w-34 pl-9 py-1 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <div className="relative">
                        <Route className="absolute left-3 top-2 transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                        <select
                          name="leadType"
                          value={form.leadType}
                          onChange={handleChange}
                          className="w-70 pl-9 py-1 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-300 appearance-none">
                          <option value="">Select Lead Type</option>
                          <option value="domestic">Domestic</option>
                          <option value="international">International</option>
                        </select>
                      </div>
                    </div>
                    <div className="group">
                      <div className="relative">
                        <Route className="absolute left-3 top-2 transform-translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                        <select
                          name="tripType"
                          value={form.tripType}
                          onChange={handleChange}
                          className="w-70 pl-9 py-1 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-300 appearance-none">
                          <option value="">Select Trip Type</option>
                          <option value="Family">Family</option>
                          <option value="Friends">Friends</option>
                          <option value="Couples">Couples</option>
                          <option value="Business">Business</option>
                          <option value="Senior_Citizen">Senior_Citizen</option>
                          <option value="Group">Group</option>
                          <option value="Group">Others</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-md font-semibold text-gray-800 flex items-center gap-3  border-gray-200">
                    <Users className="w-4 h-4 text-green-500" />
                    Group Size
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 ">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                        Adults
                      </label>
                      <div className="relative flex justify-center align-middle">
                        <Users className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                        <input
                          type="number"
                          name="adult"
                          value={form?.totalMembers?.adult}
                          onChange={handleGroupChange}
                          min="0"
                          className="w-20 pl-9 py-1 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-sm text-center font-medium text-gray-700 mb-2">
                        Children
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                        <input
                          type="number"
                          name="children"
                          value={form?.totalMembers?.children}
                          onChange={handleGroupChange}
                          min="0"
                          className="w-20 pl-9 py-1 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-sm text-center font-medium text-gray-700 mb-2">
                        Infants
                      </label>
                      <div className="relative">
                        <Baby className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                        <input
                          type="number"
                          name="infant"
                          value={form?.totalMembers?.infant}
                          onChange={handleGroupChange}
                          min="0"
                          className="w-20 pl-9 py-1 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-end">
                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-xl text-center">
                        <p className="text-sm text-gray-600">Total Members</p>
                        <p className="text-xl font-bold text-black">
                          {getTotalMember(form?.totalMembers)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    disabled={isLoading}
                    onClick={handleSubmit}
                    className="flex-1 hover:bg-[#f06543] hover:from-[#f06543] hover:to-[#f09d51] text-[#f06543] hover:text-white py-4 px-8 rounded-xl bg-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    {isLoading ? "Processing.." : "Save Travel Lead"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

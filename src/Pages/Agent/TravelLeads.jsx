import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { selectUser } from "../../store/userSlice";
import { useSelector } from "react-redux";

// Placeholder image mapping for destinations
const destinationImages = {
  paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  newyork: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
  tokyo: "https://images.unsplash.com/photo-1544411047-8e6558de6140",
  london: "https://images.unsplash.com/photo-1505761671935-60b3a6707b90",
  default: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // Fallback image
};

const TravelLeads = () => {
  const user = useSelector(selectUser);
  const [leads, setLeads] = useState([]);
  console.log("====================================");
  console.log(leads);
  console.log("====================================");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [destination, setDestination] = useState([]);
  const [leadTypes, setLeadTypes] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedLeadType, setSelectedLeadType] = useState("");
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    totalDocs: 0,
    limit: 10,
    totalPages: 1,
    page: 1,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null,
  });

  const handlePageChange = (pageNumber) => {
    fetchLeads(pageNumber);
  };

  const handlePrevPage = () => {
    if (pagination.hasPrevPage) {
      fetchLeads(pagination.page - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination.hasNextPage) {
      fetchLeads(pagination.page + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage, endPage;

    if (pagination.totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = pagination.totalPages;
    } else {
      const maxPagesBeforeCurrent = Math.floor(maxPagesToShow / 2);
      const maxPagesAfterCurrent = Math.ceil(maxPagesToShow / 2) - 1;
      startPage = Math.max(pagination.page - maxPagesBeforeCurrent, 1);
      endPage = Math.min(
        pagination.page + maxPagesAfterCurrent,
        pagination.totalPages
      );

      if (endPage - startPage < maxPagesToShow - 1) {
        if (pagination.page < pagination.totalPages / 2) {
          endPage = Math.min(
            startPage + maxPagesToShow - 1,
            pagination.totalPages
          );
        } else {
          startPage = Math.max(endPage - maxPagesToShow + 1, 1);
        }
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const fetchLeads = async (
    page,
    destinationFilter = "",
    leadTypeFilter = ""
  ) => {
    setLoading(true);
    try {
      let url = `/api/leads?page=${page}&limit=${pagination.limit}`;
      if (destinationFilter) url += `&destination=${destinationFilter}`;
      if (leadTypeFilter) url += `&leadType=${leadTypeFilter}`;

      const response = await api.get(url);
      const { leads, ...paginate } = response.data.data;

      setPagination({
        limit: pagination.limit,
        totalDocs: paginate.totalLeads,
        hasNextPage: paginate.hasNextPage,
        hasPrevPage: paginate.hasPrevPage,
        page: paginate.currentPage,
        totalPages: paginate.totalPages,
      });

      if (!Array.isArray(leads)) {
        console.error("Leads is not an array:", leads);
        setLeads([]);
        return;
      }

      const normalizedLeads = leads.map((lead) => ({
        id: lead._id || Date.now() + Math.random(),
        name: lead.name || "",
        phone: lead.phone || "",
        email: lead.email || "",
        city: lead.city || "",
        destination: lead.destination || "",
        travelDate: lead.travelDate
          ? new Date(lead.travelDate).toISOString().split("T")[0]
          : "",
        travelTime: lead.travelTime || "",
        adult: String(lead.adult || 0),
        status: lead.satatus || "",
        children: String(lead.children || 0),
        infant: String(lead.infant || 0),
        tripType: lead.tripType || "",
        leadType: lead.leadType || "",
        totalMembers: lead.totalMembers || 0,
        createdAt: lead.createdAt
          ? new Date(lead.createdAt).toLocaleString()
          : new Date().toLocaleString(),
      }));
      setLeads(normalizedLeads);

      const filterDestination = leads
        .filter((lead) => lead.destination)
        .map((lead) => lead.destination.toLowerCase());
      const filterDestinationUnique = [...new Set(filterDestination)];
      setDestination(filterDestinationUnique);

      const filterLeadType = leads
        .filter((lead) => lead.leadType)
        .map((lead) => lead.leadType.toLowerCase());
      const filterLeadTypeUnique = [...new Set(filterLeadType)];
      setLeadTypes(filterLeadTypeUnique);
    } catch (error) {
      console.error("Failed to fetch leads:", error);
      setError(error.message);
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      const results = leads.filter(
        (lead) =>
          lead.name.toLowerCase().includes(term.toLowerCase()) ||
          lead.email.toLowerCase().includes(term.toLowerCase()) ||
          lead.phone.includes(term)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleDestinationFilter = (e) => {
    const value = e.target.value;
    setSelectedDestination(value);
    fetchLeads(1, value, selectedLeadType);
  };

  const handleTripTypeFilter = (type) => {
    setSelectedLeadType(type.toLowerCase());
    fetchLeads(1, selectedDestination, type.toLowerCase());
  };

  useEffect(() => {
    fetchLeads(1);
  }, []);

  const handleOnClick = (lead) => {
    if (!lead || !lead.id) {
      console.error('Invalid lead data');
      return;
    }
    setLoading(true);
    try {
      navigate(`/agent/travel-lead/${lead.id}`);
    } catch (error) {
      console.error('Navigation error:', error);
      setError('Failed to navigate to lead details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E8E9EB] py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto bg-white shadow-2xl  p-8  ">
        <h2 className="text-3xl text-[#F06543] font-extrabold text-center mb-8">
          Travel Leads
        </h2>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex gap-3">
            <button
              className={`px-4 py-2 border border-[#F06543] text-[#F06543] rounded-lg font-medium hover:bg-[#F06543] hover:text-white transition duration-200 ${
                !selectedLeadType ? "bg-[#F06543] text-white" : ""
              }`}
              onClick={() => handleTripTypeFilter("")}>
              ALL
            </button>
            <button
              className={`px-4 py-2 border border-[#F06543] text-[#F06543] rounded-lg font-medium hover:bg-[#F06543] hover:text-white transition duration-200 ${
                selectedLeadType === "domestic" ? "bg-[#F06543] text-white" : ""
              }`}
              onClick={() => handleTripTypeFilter("DOMESTIC")}>
              DOMESTIC
            </button>
            <button
              className={`px-4 py-2 border border-[#F06543] text-[#F06543] rounded-lg font-medium hover:bg-[#F06543] hover:text-white transition duration-200 ${
                selectedLeadType === "international"
                  ? "bg-[#F06543] text-white"
                  : ""
              }`}
              onClick={() => handleTripTypeFilter("INTERNATIONAL")}>
              INTERNATIONAL
            </button>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <select
              value={selectedDestination}
              onChange={handleDestinationFilter}
              className="border border-[#F06543] text-[#F06543] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F06543] bg-white">
              <option value="">All Destinations</option>
              {destination.map((dest, index) => (
                <option key={index} value={dest}>
                  {dest.charAt(0).toUpperCase() + dest.slice(1)}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Search by name, email, or phone"
              value={searchTerm}
              onChange={handleSearch}
              className="border border-[#F06543] text-[#F06543] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F06543] w-full md:w-64"
            />
          </div>
        </div>

        {/* Leads Cards */}
        {loading ? (
          <div className="text-center text-gray-600 text-lg">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 text-lg">{error}</div>
        ) : (searchTerm ? searchResults : leads).length === 0 ? (
          <div className="text-center text-gray-600 text-lg">
            No leads found
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm ? searchResults : leads).map((lead) => (
                <div
                  key={lead.id}
                  onClick={() => handleOnClick(lead)}
                  className="bg-white cursor-pointer shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">
                  <img
                    src={
                      destinationImages[lead.destination.toLowerCase()] ||
                      destinationImages.default
                    }
                    alt={`${lead.destination} destination`}
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-5">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-800 truncate">
                        {lead.name}
                      </h3>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${
                          lead.status.toLowerCase() === "buy"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}>
                        {lead.status}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="text-sm text-gray-600 space-y-2 leading-relaxed">
                      <p>
                        <span className="font-medium text-gray-700">
                          📍 Destination:
                        </span>{" "}
                        {lead.destination.charAt(0).toUpperCase() +
                          lead.destination.slice(1)}
                      </p>
                      <p>
                        <span className="font-medium text-gray-700">
                          ✉️ Email:
                        </span>{" "}
                        {lead.email}
                      </p>
                      <p>
                        <span className="font-medium text-gray-700">
                          📞 Phone:
                        </span>{" "}
                        {lead.phone}
                      </p>
                      <p>
                        <span className="font-medium text-gray-700">
                          🏙️ City:
                        </span>{" "}
                        {lead.city}
                      </p>
                      <p>
                        <span className="font-medium text-gray-700">
                          📅 Travel Date:
                        </span>{" "}
                        {lead.travelDate}
                      </p>
                      <p>
                        <span className="font-medium text-gray-700">
                          👨‍👩‍👧 Travelers:
                        </span>{" "}
                        {lead.adult} Adults, {lead.children} Children,{" "}
                        {lead.infant} Infants
                      </p>
                      <p>
                        <span className="font-medium text-gray-700">
                          🧭 Trip Type:
                        </span>{" "}
                        {lead.tripType}
                      </p>
                      <p>
                        <span className="font-medium text-gray-700">
                          🕒 Created:
                        </span>{" "}
                        {lead.createdAt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {!loading && leads.length > 0 && (
              <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
                <button
                  onClick={handlePrevPage}
                  disabled={!pagination.hasPrevPage}
                  className="px-4 py-2 border border-[#F06543] text-[#F06543] rounded-lg font-medium disabled:opacity-50 hover:bg-[#F06543] hover:text-white transition duration-200">
                  Previous
                </button>

                {getPageNumbers().map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-4 py-2 border border-[#F06543] rounded-lg font-medium ${
                      pagination.page === pageNumber
                        ? "bg-[#F06543] text-white"
                        : "text-[#F06543] hover:bg-[#F06543] hover:text-white"
                    } transition duration-200`}>
                    {pageNumber}
                  </button>
                ))}

                <button
                  onClick={handleNextPage}
                  disabled={!pagination.hasNextPage}
                  className="px-4 py-2 border border-[#F06543] text-[#F06543] rounded-lg font-medium disabled:opacity-50 hover:bg-[#F06543] hover:text-white transition duration-200">
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TravelLeads;

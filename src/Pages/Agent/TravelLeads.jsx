import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";
import { selectUser } from "../../store/userSlice";
import { useSelector } from "react-redux";

const TravelLeads = () => {
  const user = useSelector(selectUser);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = React.useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [destination, setDestination] = useState([]);
  console.log('====================================');
  console.log("destination", destination);
  console.log('====================================');
  const [leadTypes, setLeadTypes] = useState([]);

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

  const fetchLeads = async (page) => {
    setLoading(true);
    try {
      const response = await api.get(`/api/leads?page=${page}&limit=${50}`);
      console.log("re", response.data.data.leads);

      const { leads, ...paginate } = response.data.data;
      setPagination({
        limit: 50,
        totalDocs: paginate.totalLeads,
        hasNextPage: paginate.hasNextPage,
        hasPrevPage: paginate.hasPrevPage,
        page: paginate.currentPage,
      });

      if (!Array.isArray(leads)) {
        console.error("Leads is not an array:", leads);
        setLeads([]);
        return;
      }
      const normalizedLeads = leads.map((lead) => ({
        id: lead._id || Date.now() + Math.random(),
        // leadId: lead.leadId || generateLeadId(),
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
        status: lead.satatus,
        children: String(lead.children || 0),
        infant: String(lead.infant || 0),
        tripType: lead.tripType || "",
        leadType: lead.leadType || "",
        totalMembers: lead.totalMembers,
        createdAt: lead.createdAt
          ? new Date(lead.createdAt).toLocaleString()
          : new Date().toLocaleString(),
      }));
      setLeads(normalizedLeads);

      const filterDestination = leads.map((lead) => {
        return lead.destination && lead.destination.toLowerCase();
      });
      const filterDestinationUnique = [...new Set(filterDestination)];

      setDestination(filterDestinationUnique);

      const filterLeadType = leads.map((lead) => {
        return lead.leadType && lead.leadType.toLowerCase();
      });
      const filterLeadTypeUnique = [...new Set(filterLeadType)];
      setLeadTypes(filterLeadTypeUnique);
    } catch (error) {
      console.error("Failed to fetch leads:", error);
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads(1);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-[#E8E9EB] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-[#F06543] mb-6 text-center">
            Travel Leads
          </h1>
          <p className="text-[#313638] mb-6 text-lg text-center">
            Discover high-quality travel leads to grow your business. Connect
            with potential clients looking for personalized travel experiences.
          </p>
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold text-[#313638] mb-4">
                Why Choose Our Leads?
              </h2>
              <ul className="list-disc list-inside text-[#313638] space-y-2">
                <li>Verified and targeted leads tailored to your niche</li>
                <li>Real-time updates on client inquiries</li>
                <li>Customizable lead filters for specific destinations</li>
                <li>Competitive pricing with high conversion potential</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Link to="/auth/login">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-200 bg-[#F06543] text-[#E8E9EB] hover:bg-[#F06543]/90 focus:outline-none focus:ring-2 focus:ring-[#F06543] focus:ring-offset-2 h-12 px-6 py-3">
                  Get Started with Leads
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#E8E9EB]  py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-white shadow-lg rounded-lg p-8">
          <div className="">
            <h2 className="text-3xl text-[#F06543] font-bold text-center">
              Travel Leads
            </h2>
          </div>
          <div className="flex justify-between align-middle">
            <div className="flex justify-start gap-3 ">
              <button className="border border-[#F06543] text-[#F06543] hover:bg-[#F06543] hover:text-white px-4 py-2 shadow-xl hover:translate-1.5 ease-in">
                ALL
              </button>
              <button className="border border-[#F06543] text-[#F06543] hover:bg-[#F06543] hover:text-white px-4 py-2 shadow-xl hover:translate-1.5 ease-in">
                DOMESTIC
              </button>
              <button className="border border-[#F06543] text-[#F06543] hover:bg-[#F06543] hover:text-white px-4 py-2 shadow-xl hover:translate-1.5 ease-in">
                INTERNATIONAL
              </button>
            </div>
            <div className="">
              <select name="" id="">
                {destination.map((destination, index) => {
                  <option
                    value="destination"
                    key={index}
                    className="border border-[#F06543] text-[#F06543] hover:bg-[#F06543] hover:text-white px-4 py-2 shadow-xl hover:translate-1.5 ease-in">
                    {destination}
                  </option>;
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelLeads;

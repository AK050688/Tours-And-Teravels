import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";

const TravelLeadDetail = () => {
  const { id } = useParams();
  console.log(id);
  
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchLeadDetails = async () => {
      try {
        if (!id) {
          throw new Error("Lead ID is required");
        }
        const response = await api.get(`/api/leads/getLeadById/${id}`);
        console.log("?????????????????",response);
        
        if (!response.data || !response.data.data) {
          throw new Error("Lead data not found");
        }
        const leadData = response.data.data;
        // Normalize the lead data
        const normalizedLead = {
          id: leadData._id || id,
          name: leadData.name || "",
          phone: leadData.phone || "",
          email: leadData.email || "",
          city: leadData.city || "",
          destination: leadData.destination || "",
          travelDate: leadData.travelDate || "",
          travelTime: leadData.travelTime || "",
          adult: String(leadData.adult || 0),
          status: leadData.satatus || "",
          children: String(leadData.children || 0),
          infant: String(leadData.infant || 0),
          tripType: leadData.tripType || "",
          createdAt: leadData.createdAt || new Date().toISOString(),
        };
        setLead(normalizedLead);
      } catch (error) {
        console.error("Error fetching lead details:", error);
        setError(error.response?.data?.message || error.message || "Failed to fetch lead details");
      } finally {
        setLoading(false);
      }
    };

    fetchLeadDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#E8E9EB] flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#E8E9EB] flex items-center justify-center">
        <div className="text-2xl text-red-500">{error}</div>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="min-h-screen bg-[#E8E9EB] flex items-center justify-center">
        <div className="text-2xl text-gray-600">Lead not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E8E9EB] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-[#F06543] px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Lead Details</h1>
        </div>

        <div className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Name
                </label>
                <p className="text-lg text-gray-800">{lead.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <p className="text-lg text-gray-800">{lead.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Phone
                </label>
                <p className="text-lg text-gray-800">{lead.phone}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  City
                </label>
                <p className="text-lg text-gray-800">{lead.city}</p>
              </div>
            </div>
          </div>

          {/* Travel Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Travel Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Destination
                </label>
                <p className="text-lg text-gray-800">{lead.destination}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Travel Date
                </label>
                <p className="text-lg text-gray-800">
                  {new Date(lead.travelDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Travel Time
                </label>
                <p className="text-lg text-gray-800">{lead.travelTime}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Trip Type
                </label>
                <p className="text-lg text-gray-800">{lead.tripType}</p>
              </div>
            </div>
          </div>

          {/* Travelers Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Travelers Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Adults
                </label>
                <p className="text-lg text-gray-800">{lead.adult}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Children
                </label>
                <p className="text-lg text-gray-800">{lead.children}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Infants
                </label>
                <p className="text-lg text-gray-800">{lead.infant}</p>
              </div>
            </div>
          </div>

          {/* Status Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Status Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Status
                </label>
                <p
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    lead.status.toLowerCase() === "buy"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                  {lead.status}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Created At
                </label>
                <p className="text-lg text-gray-800">
                  {new Date(lead.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelLeadDetail;

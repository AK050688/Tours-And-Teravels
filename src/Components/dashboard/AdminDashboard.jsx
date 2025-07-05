import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import api from "../../api/axios"; // Adjust path to your Axios setup
import { selectAccessToken, selectUser } from "../../store/userSlice";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const token = useSelector(selectAccessToken); // Adjust selector based on your Redux setup
  const adminUser = useSelector(selectUser); // Adjust selector
  const [recentLeads, setRecentLeads] = useState([]);
  const [destinationCount, setDestinationCount] = useState({})
  const [dashboard, setDashboard] = useState({
    totalLeads: 0,
    totalInternational: 0,
    totalDomestic: 0,
    totalUser: 0,
    totalAvailableLeads: 0,
    totalSoldLeads: 0,
  });
  const [loading, setLoading] = useState({ dashboard: false, leads: false });
  const [error, setError] = useState({ dashboard: null, leads: null });
  const navigate = useNavigate();

  // Fetch dashboard metrics
  const fetchDashboard = async () => {
    setLoading((prev) => ({ ...prev, dashboard: true }));
    try {
      const response = await api.get("/api/auth/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDashboard(response.data.data);
      setError((prev) => ({ ...prev, dashboard: null }));
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setError((prev) => ({
        ...prev,
        dashboard: "Failed to load dashboard data",
      }));
    } finally {
      setLoading((prev) => ({ ...prev, dashboard: false }));
    }
  };

  // Fetch recent leads
  const fetchLeads = async () => {
    setLoading((prev) => ({ ...prev, leads: true }));
    try {
      const response = await api.get("/api/leads?limit=4", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRecentLeads(response.data.data.leads);
      setError((prev) => ({ ...prev, leads: null }));
    } catch (error) {
      console.error("Error fetching leads:", error);
      setError((prev) => ({ ...prev, leads: "Failed to load leads data" }));
    } finally {
      setLoading((prev) => ({ ...prev, leads: false }));
    }
  };

  useEffect(() => {
    fetchDashboard();
    fetchLeads();
  }, []);

  // Dashboard  chart
  const dashboardChart = {
    type: "bar",
    data: {
      labels: [
        "Total Leads",
        "International Trips",
        "Domestic Trips",
        "Total Users",
        "Sold Leads",
        "Available Leads",
      ],
      datasets: [
        {
          label: "Metrics",
          data: [
            dashboard.totalLeads,
            dashboard.totalInternational,
            dashboard.totalDomestic,
            dashboard.totalUser,
            dashboard.totalSoldLeads,
            dashboard.totalAvailableLeads,
          ],
          backgroundColor: [
            "#FFCA28", // Yellow
            "#AB47BC", // Purple
            "#0288D1", // Blue
            "#EF5350", // Red
            "#26C6DA", // Cyan
            "#FF7043", // Orange
          ],
          borderColor: [
            "#FFB300",
            "#7B1FA2",
            "#01579B",
            "#D32F2F",
            "#00ACC1",
            "#F4511E",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: { font: { size: 14 }, color: "#333" },
        },
        title: {
          display: true,
          text: "Dashboard Metrics Overview",
          font: { size: 18 },
          color: "#333",
        },
        tooltip: {
          backgroundColor: "#333",
          titleFont: { size: 14 },
          bodyFont: { size: 12 },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Count",
            font: { size: 14 },
            color: "#333",
          },
          ticks: { color: "#333", stepSize: 1 },
          grid: { color: "#e0e0e0" },
        },
        x: { ticks: { color: "#333" }, grid: { display: false } },
      },
    },
  };

  // lead type
  const leadTypeChart = {
    type: "bar",
    data: {
      labels: ["Domestic", "International"],
      datasets: [
        {
          label: "Lead Type",
          data: [
            recentLeads.filter((lead) => lead.leadType === "domestic").length,
            recentLeads.filter((lead) => lead.leadType === "international")
              .length,
          ],
          backgroundColor: ["#0288D1", "#AB47BC"],
          borderColor: ["#01579B", "#7B1FA2"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: { font: { size: 14 }, color: "#333" },
        },
        title: {
          display: true,
          text: "Leads by Type",
          font: { size: 16 },
          color: "#333",
        },
        tooltip: {
          backgroundColor: "#333",
          titleFont: { size: 14 },
          bodyFont: { size: 12 },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Number of Leads",
            font: { size: 14 },
            color: "#333",
          },
          ticks: { color: "#333", stepSize: 1 },
          grid: { color: "#e0e0e0" },
        },
        x: { ticks: { color: "#333" }, grid: { display: false } },
      },
    },
  };

  // lead status
  const statusChart = {
    type: "pie",
    data: {
      labels: ["Buy", "Sold"],
      datasets: [
        {
          label: "Status",
          data: [
            recentLeads.filter((lead) => lead.satatus === "buy").length,
            recentLeads.filter((lead) => lead.satatus === "sold").length,
          ],
          backgroundColor: ["#26C6DA", "#FF7043"],
          borderColor: ["#00ACC1", "#F4511E"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
          labels: { font: { size: 14 }, color: "#333" },
        },
        title: {
          display: true,
          text: "Leads by Status",
          font: { size: 16 },
          color: "#333",
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const total = context.dataset.data.reduce(
                (sum, val) => sum + val,
                0
              );
              const value = context.raw;
              const percentage = total ? ((value / total) * 100).toFixed(1) : 0;
              return `${context.label}: ${value} (${percentage})`;
            },
          },
        },
      },
    },
  };

  // trip type
  const tripTypeChart = {
    type: "doughnut",
    data: {
      labels: ["Friends", "Family", "Couples"],
      datasets: [
        {
          label: "Trip Type",
          data: [
            recentLeads.filter((lead) => lead.tripType === "Friends").length,
            recentLeads.filter((lead) => lead.tripType === "Family").length,
            recentLeads.filter((lead) => lead.tripType === "Couples").length,
          ],
          backgroundColor: ["#FFCA28", "#EF5350", "#66BB6A"],
          borderColor: ["#4887f5", "#D32F2F", "#4CAF50"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "60%", // Distinctive cutout for doughnut
      plugins: {
        legend: {
          position: "right",
          labels: { font: { size: 14 }, color: "#333" },
        },
        title: {
          display: true,
          text: "Leads by Trip Type",
          font: { size: 16 },
          color: "#333",
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const total = context.dataset.data.reduce(
                (sum, val) => sum + val,
                0
              );
              const value = context.raw;
              const percentage = total ? ((value / total) * 100).toFixed(1) : 0;
              return `${context.label}: ${value} (${percentage}%)`;
            },
          },
        },
      },
    },
  };

  const topDestinations = [
    { name: "Paris", visits: 120 },
    { name: "New York", visits: 95 },
    { name: "Tokyo", visits: 80 },
    { name: "Sydney", visits: 65 },
  ];

  

  const maxVisits = Math.max(...topDestinations.map((dest) => dest.visits));

  return (
    <div className="p-2 sm:p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center my-4">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <div className="flex items-center gap-2">
          <p className="text-base md:text-xl">Admin Name:</p>
          <span
            className="text-xl text-[#f06543] underline capitalize cursor-pointer"
            onClick={() => navigate("/dashboard/admin-profile")}>
            {adminUser?.name || "N/A"}
          </span>
        </div>
      </div>

      {/* Dashboard Metrics Chart */}
      <div className="mb-6 sm:mb-8">
        {/* <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Dashboard Metrics
        </h2> */}
        {loading.dashboard ? (
          <p className="text-gray-600 text-sm sm:text-base">
            Loading dashboard data...
          </p>
        ) : error.dashboard ? (
          <p className="text-red-600 text-sm sm:text-base">{error.dashboard}</p>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-[#f06543]">
            <div style={{ height: "300px" }}>
              <Bar
                data={dashboardChart.data}
                options={dashboardChart.options}
              />
            </div>
          </div>
        )}
        <p className="text-gray-600 text-sm sm:text-base mt-4">
          Total leads in the system:{" "}
          <span className="font-semibold">{dashboard.totalLeads}</span>
        </p>
      </div>

      {/* Leads Analysis Charts */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Leads Analysis
        </h2>
        {loading.leads ? (
          <p className="text-gray-600 text-sm sm:text-base">
            Loading leads data...
          </p>
        ) : error.leads ? (
          <p className="text-red-600 text-sm sm:text-base">{error.leads}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Lead Type Chart */}
            <div className="bg-white p-4 rounded-lg shadow border-l-4 borderpel-500">
              <div style={{ height: "250px" }}>
                <Bar
                  data={leadTypeChart.data}
                  options={leadTypeChart.options}
                />
              </div>
            </div>
            {/* Status Chart */}
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-[#f06543]">
              <div style={{ height: "250px" }}>
                <Pie data={statusChart.data} options={statusChart.options} />
              </div>
            </div>
            {/* Trip Type Chart */}
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-[#f06543]">
              <div style={{ height: "250px" }}>
                <Doughnut
                  data={tripTypeChart.data}
                  options={tripTypeChart.options}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recent Leads */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Recent Leads
        </h2>
        {loading.leads ? (
          <p className="text-gray-600 text-sm sm:text-base">Loading leads...</p>
        ) : error.leads ? (
          <p className="text-red-600 text-sm sm:text-base">{error.leads}</p>
        ) : recentLeads.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {recentLeads.map((lead, index) => (
              <div
                key={index}
                className="bg-white p-3 sm:p-4 rounded-lg shadow border-l-4 border-[#f06543]">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 capitalize">
                  {lead.name || "N/A"}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Email: {lead.email || "N/A"}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  City: {lead.city || "N/A"}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Destination: {lead.destination || "N/A"}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Trip Type: {lead.tripType || "N/A"}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Status: {lead.satatus || "N/A"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-sm sm:text-base">
            No recent leads available.
          </p>
        )}
      </div>

      {/* Top Destinations */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Top Destinations
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {topDestinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-4 rounded-lg shadow flex flex-col gap-2 border-l-4 border-purple-500">
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {destination.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Visited: {destination.visits} times
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                <div
                  className="bg-orange-500 h-2 sm:h-3 rounded-full"
                  style={{
                    width: `${(destination.visits / maxVisits) * 100}%`,
                  }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

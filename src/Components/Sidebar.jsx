import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout, selectUser } from "../store/userSlice";
import { selectSidebar, setSidebarOpen } from "../store/sidebar";
import useIsMobile from "../lib/useMobile";
import { StepBack } from "lucide-react";

const SideBar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSidebarOpen = useSelector(selectSidebar);

  const location = useLocation();
  const isMobile = useIsMobile();

  const adminLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/dashboard/users", label: "Users" },
    { to: "/dashboard/add-leads", label: "Add Leads" },
    { to: "/dashboard/add-new-plans", label: "Add New Plans" },
    // { to: "/dashboard/lead-cost", label: "Lead Cost" },
    { to: "/dashboard/transactions", label: "All Transactions" },
  ];

  const vendorLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/dashboard/my-leads", label: "My Leads" },
    { to: "/dashboard/plans", label: "Plans" },
    { to: "/dashboard/purchased-leads", label: "Purchased Leads" },
  ];

  const roleLinkMap = {
    admin: adminLinks,
    user: vendorLinks,
  };

  const navLinks = roleLinkMap[user.role];

  const handleLogout = async () => {
    dispatch(logout());
    navigate("/auth/login");
  };
  if (isMobile && !isSidebarOpen) return null;

  return (
    <aside
      className={`${
        isMobile
          ? "fixed inset-0 z-50 bg-white w-64 h-full shadow-lg"
          : "w-64 h-full relative"
      }`}>
      <div className="flex flex-col justify-between h-full border-r border-slate-200">
        <div>
          <div className="flex justify-between items-center border-y p-4 h-20">
            <h1 className="text-2xl font-bold text-blue-400">
              <Link to="/">Tour&Travels</Link>
            </h1>
            {isMobile ? (
              <button
                onClick={() => dispatch(setSidebarOpen(false))}
                className="flex items-center">
                <StepBack className="text-blue-400" />
              </button>
            ) : null}
          </div>
          <nav className="space-y-1 px-3 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block w-full px-4 py-2 rounded text-left ${
                  link.to === location.pathname
                    ? "bg-blue-400 text-white"
                    : "hover:bg-gray-100"
                }`}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-red-600 border border-red-300 rounded hover:bg-red-50">
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

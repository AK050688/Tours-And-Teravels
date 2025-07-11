import { ArrowLeft, Menu } from "lucide-react";
import useIsMobile from "../../lib/useMobile";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebar, setSidebarOpen } from "../../store/sidebar";
import { useNavigate } from "react-router-dom";

const DashboardNav = () => {
  const isSidebarOpen = useSelector(selectSidebar);
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  return (
    <div
      className={`h-20 border-y px-2  ${
        isMobile
          ? "flex justify-between align-middle"
          : "flex justify-end align-middle py-3"
      }`}>
      <div className={`flex justify-start mt-2 md:mt-0`}>
        {isMobile && (
          <button
            onClick={() => dispatch(setSidebarOpen(!isSidebarOpen))}
            className="flex items-center justify-center w-12 h-12 transition-colors duration-500 hover:bg-slate-100 rounded-full">
            <Menu className="w-8 h-8" />
          </button>
        )}
      </div>
      <div className="flex justify-end   w-full md:w-auto my-3 md:my-0 ">
        <button
          onClick={() => navigate("/")}
          className="rounded-md border flex items-center justify-center text-center border-[#f06543] bg-white text-[#f06543] focus:ring-[#f06543] hover:bg-[#f06543] hover:text-white px-4 py-3 space-x-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to home</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardNav;

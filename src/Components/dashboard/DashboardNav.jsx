import { Menu } from "lucide-react";
import useIsMobile from "../../lib/useMobile";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebar, setSidebarOpen } from "../../store/sidebar";

const DashboardNav = () => {
  const isSidebarOpen = useSelector(selectSidebar);
  const dispatch = useDispatch();
  const isMobile = useIsMobile();

  return (
    <div className="h-20 border-y flex items-center px-2">
      {isMobile && (
        <button
          onClick={() => dispatch(setSidebarOpen(!isSidebarOpen))}
          className="flex items-center justify-center w-12 h-12 transition-colors duration-500 hover:bg-slate-100 rounded-full"
        >
          <Menu className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default DashboardNav;

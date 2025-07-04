import SideBar from "../Sidebar";
import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 overflow-hidden">
        <DashboardNav />
        <main className="h-[calc(100vh-80px)] overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

import Footer from "../Footer";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Navbar />
      <main className="p-4 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

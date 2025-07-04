import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

// Auth
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import CheckAuth from "./Components/auth/CheckAuth";

// Layout
import Layout from "./Components/Layout";

// Public pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Destination from "./Pages/Destination";

// Dashboard Layout
import Dashboard from "./Components/dashboard/Dashboard";
import DashboardLayout from "./Components/dashboard/DashboardLayout";

// Leads
import MyLeads from "./Components/MyLeads";
import LeadCost from "./Components/LeadCost";
import AddLeads from "./Components/AddLeads";
import PurchaseLeads from "./Components/PurchaseLeads";

// Misc
import Plans from "./Components/Plans";
import Users from "./Components/Users";
// import Profile from "./Components/Profile";
// import CheckoutPage from "./Components/CheckoutPage";
import AllTransactions from "./Components/AllTransaction";
import AddNewPlan from "./Components/AddNewPlan";
import ForgotPassword from "./Components/ForgotPassword";
import VerifyOTP from "./Components/VerifyOTP";
import ChangePassword from "./Components/ChangePassword";
import UserProfile from "./Components/UserProfile";
import AdminUserProfile from "./Components/AdminUserProfile";

const adminUser = ["admin"];
const vendorUser = ["user"];

const App = () => {
  return (
    <Routes>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/add-new-password" element={<ChangePassword />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations" element={<Destination />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route element={<CheckAuth roles={adminUser} />}>
          <Route path="users" element={<Users />} />
          <Route path="admin-profile" element={<AdminUserProfile />} />
          <Route path="add-leads" element={<AddLeads />} />
          <Route path="lead-cost" element={<LeadCost />} />
          <Route path="transactions" element={<AllTransactions />} />
          <Route path="add-new-plans" element={<AddNewPlan />} />
        </Route>
        <Route element={<CheckAuth roles={vendorUser} />}>
          <Route path="my-leads" element={<MyLeads />} />
          <Route path={`user-profile`} element={<UserProfile />} /> 
          <Route path="purchased-leads" element={<PurchaseLeads />} />
          <Route path="plans" element={<Plans />} />
        </Route>
      </Route>
      <Route path="/auth">
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;

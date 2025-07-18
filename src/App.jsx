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
import DestinationDetails from "./Pages/DestinationDetails";
import JoinForFree from "./Pages/Agent/JoinForFree";
import TravelLeads from "./Pages/Agent/TravelLeads";
import AdvertiseWithUs from "./Pages/Agent/AdvertiseWithUs";
import TravelLeadDetail from "./Pages/Agent/TravelLeadDetail";
import Career from "./Pages/Career";
import Blog from "./Pages/Blog";
import Press from "./Pages/Press";
import FAQ from "./Pages/FAQ";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

const adminUser = ["admin"];
const vendorUser = ["user"];

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/press" element={<Press />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/agent">
          <Route path="join" element={<JoinForFree />} />
          <Route path="travel-leads" element={<TravelLeads />} />
          <Route path="travel-lead/:id" element={<TravelLeadDetail />} />
          <Route path="advertise" element={<AdvertiseWithUs />} />
        </Route>
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verify-otp" element={<VerifyOTP />} />
          <Route path="add-new-password" element={<ChangePassword />} />
        </Route>
        {/* destinations */}
        <Route path="/destinations" element={<Destination />} />
        <Route
          path="/destinations/:destinationName"
          element={<DestinationDetails />}
        />
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
    </Routes>
  );
};

export default App;

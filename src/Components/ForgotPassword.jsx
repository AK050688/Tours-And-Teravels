import React,{useState} from 'react'
import api from "../api/axios"
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
 const [email, setEmail] = useState("");
 const navigate = useNavigate();

const handleForgotPassword = async (e) => {
  e.preventDefault();

  try {
   const res = await api.post(`/api/auth/forgotPassword`, { email });
   console.log(res);
   localStorage.setItem("email", email);
   navigate("/verify-otp")
  } catch (error) {
    console.error("Forgot password error:", error);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-black">
          Forgot Password
        </h1>
        <h2 className="text-center text-gray-600 mt-2 mb-6"></h2>

        <form className="space-y-4" onSubmit={handleForgotPassword}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F06543]  focus:border-[#F06543] "
              placeholder="you@example.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white   text-[#F06543] border border-[#F06543]  py-2 rounded-md hover:bg-[#F06543] hover:text-white  transition">
            Forgot Password
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6"></p>
      </div>
    </div>
  );
}

export default ForgotPassword
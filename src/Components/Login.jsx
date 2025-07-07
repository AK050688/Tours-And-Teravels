import { axiosWithCredentials } from "../api/axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRequest, loginSuccess } from "../store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  // const isLoading = useSelector((state) => state?.auth?.loading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginRequest(true));

    try {
      setIsLoading(true);
      const response = await axiosWithCredentials.post(`/api/auth/login`, {
        emailOrPhone: email,
        password,
      });
      const user = response.data.data.user;
      const accessToken = response.data.data.accessToken;
      dispatch(
        loginSuccess({
          user,
          accessToken,
        })
      );
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Error during login:",
        error?.response?.data || error?.message
      );
      toast("Invalid email or password");
    } finally {
      dispatch(loginRequest(false));
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-black">
          Welcome back
        </h1>
        <h2 className="text-center text-gray-600 mt-2 mb-6">
          Log in to your Tour & Travels account
        </h2>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email or Phone
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F06543] focus:border-[#F06543]"
              placeholder="you@example.com or phone number"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F06543] focus:border-[#F06543]"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="text-right">
            <Link
              to={"/auth/forgot-password"}
              className="text-sm text-[#F06543] hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full disabled:bg-[#daa395]   bg-white hover:text-white border border-[#F06543] text-[#F06543] py-2 rounded-md hover:bg-[#F06543] transition">
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-[#F06543] font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

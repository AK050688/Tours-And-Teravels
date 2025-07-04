import axios from "axios";
import getEnv from "../lib/getEnv";

const api = axios.create({
  baseURL: getEnv("VITE_APP_BASE_API"),
  headers: { "Content-Type": "application/json" },
});

export const axiosWithCredentials = axios.create({
  baseURL: getEnv("VITE_APP_BASE_API") || "http://103.205.142.244:8055",
  withCredentials: true,
});

export default api;

// https://7wvxgkc8-8000.inc1.devtunnels.ms
// https://begin-yatra-nq40.onrender.com

import axios from "axios";
import getEnv from "../lib/getEnv";

const api = axios.create({
  baseURL: getEnv("VITE_APP_BASE_API"),
  headers: { "Content-Type": "application/json" },
});

export const axiosWithCredentials = axios.create({
  baseURL: getEnv("VITE_APP_BASE_API"),
  withCredentials: true,
});

export default api;

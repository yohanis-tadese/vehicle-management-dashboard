import axios from "axios";

const api = axios.create({
  baseURL: "https://vehicle-management-system-neon.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;

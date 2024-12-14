import axios from "axios";

const api = axios.create({
  baseURL: "https://vehicle-management-system-backend-kappa.vercel.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;

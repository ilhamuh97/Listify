import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL_V1 || "http://localhost:3001/api/v1"
      : "/api/v1",
  withCredentials: true,
});

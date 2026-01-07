import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3001/api/v1"
      : import.meta.env.VITE_API_BASE_URL_V1 || "/api/v1",
  withCredentials: true,
});

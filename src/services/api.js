import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080",
});

export const getPotholes = () => api.get("/api/potholes");

export const reportPothole = (formData) =>
  api.post("/potholes", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updatePotholeStatus = (id, status) =>
  api.put(`/potholes/${id}`, { status });

export const deletePothole = (id) => api.delete(`/potholes/${id}`);

export default api;

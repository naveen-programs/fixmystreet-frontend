// src/services/api.js
import axios from "axios";

// ✅ Include /api in the base URL to match backend routes
// const api = axios.create({
//   baseURL: "https://fixmystreet-backend.onrender.com/api",
// });
// add new
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080", 
});
// Report a new pothole
export const reportPothole = (formData) =>
  api.post("/potholes", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Get all potholes
export const getPotholes = () => api.get("/potholes");

// Update pothole status
export const updatePotholeStatus = (id, status) =>
  api.put(`/potholes/${id}`, { status });

// Delete a pothole
export const deletePothole = (id) => api.delete(`/potholes/${id}`);

export default api;

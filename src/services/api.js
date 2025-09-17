import axios from "axios";

// Base API instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080",
});

// Fetch all potholes
export const getPotholes = () => api.get("/potholes");

// Report a new pothole
export const reportPothole = (formData) =>
  api.post("/potholes", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Update pothole status
export const updatePotholeStatus = (id, status) =>
  api.put(`/potholes/${id}`, { status });

// Delete a pothole
export const deletePothole = (id) => api.delete(`/potholes/${id}`);

export default api;

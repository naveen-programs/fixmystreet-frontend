import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const reportPothole = (formData) =>
  api.post("/potholes", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getPotholes = () => api.get("/potholes");

export const updatePotholeStatus = (id, status) =>
  api.put(`/potholes/${id}`, { status });

export const deletePothole = (id) => api.delete(`/potholes/${id}`);

export default api;

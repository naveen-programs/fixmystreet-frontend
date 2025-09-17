// src/pages/ReportPothole.js
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { reportPothole } from "../services/api";
import "leaflet/dist/leaflet.css";
import "../styles/ReportPothole.css";
import L from "leaflet";

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function LocationMarker({ setLocation }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setLocation(e.latlng);
    },
  });

  return position ? <Marker position={position} /> : null;
}

function ReportPothole() {
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!location) {
      alert("Please select a location on the map!");
      return;
    }

    const formData = new FormData();
    formData.append("address", address);
    formData.append("description", description);
    formData.append("lat", location.lat);
    formData.append("lng", location.lng);
    if (photo) formData.append("photo", photo);

    try {
      await reportPothole(formData);
      alert("✅ Pothole reported successfully!");

      // Reset form + marker
      setAddress("");
      setDescription("");
      setPhoto(null);
      setLocation(null);

    } catch (err) {
      console.error("❌ Error reporting pothole:", err);
      const msg = err.response?.data?.error || "Failed to report pothole. Please try again.";
      alert(msg);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Report a Pothole</h3>
      <form onSubmit={handleSubmit}>
        {/* Address */}
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Photo */}
        <div className="mb-3">
          <label>Photo (optional)</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>

        {/* Map */}
        <div className="mb-3">
          <label>Select Location on Map</label>
          <MapContainer
            center={[13.0827, 80.2707]} // Default center (Chennai)
            zoom={13}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationMarker setLocation={setLocation} />
          </MapContainer>
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary mt-3">
          Report Pothole
        </button>
      </form>
    </div>
  );
}

export default ReportPothole;

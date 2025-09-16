import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { getPotholes } from "../services/api";
import "../styles/PotholeMap.css";

// Import Leaflet default icons properly (for CRA/webpack)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function PotholeMap() {
  const [potholes, setPotholes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getPotholes()
      .then((res) => {
        setPotholes(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching potholes:", err);
        setError("Failed to load potholes. Please try again later.");
      });
  }, []);

  // Custom marker icons based on pothole status
  const getMarkerIcon = (status) => {
    return new L.Icon({
      iconUrl:
        status === "Fixed"
          ? "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
          : "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: markerShadow,
      shadowSize: [41, 41],
    });
  };

  return (
    <div className="map-container">
      <h3>Pothole Map</h3>
      {error && <p className="error">{error}</p>}
      <MapContainer
        center={[13.0827, 80.2707]} // Default Chennai location
        zoom={12}
        scrollWheelZoom
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {potholes.map((p) => (
          <Marker
            key={p.id}
            position={[p.latitude, p.longitude]}
            icon={getMarkerIcon(p.status)}
          >
            <Popup>
              <strong>{p.address || "Unknown location"}</strong>
              <p>{p.description || "No description provided"}</p>
              <p>Status: {p.status}</p>
              {p.photoPath && (
                <img
                  src={`http://localhost:8080/${p.photoPath}`}
                  alt="pothole"
                  style={{ width: "100%", borderRadius: "5px" }}
                />
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default PotholeMap;

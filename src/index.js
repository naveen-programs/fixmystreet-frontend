import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "leaflet/dist/leaflet.css";
import "./App.css";
import "./styles/global.css";
import "./styles/Home.css";
import "./styles/ReportPothole.css";
import "./styles/ViewPotholes.css";
import "./styles/EnvironmentalImpact.css";
import "./styles/Dashboard.css";
import "./styles/PotholeMap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

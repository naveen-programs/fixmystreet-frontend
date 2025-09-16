import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ViewPotholes from "./pages/ViewPotholes";
import ReportPothole from "./pages/ReportPothole";
import Impact from "./pages/EnvironmentalImpact";
import PotholeMap from "./pages/PotholeMap";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin"; // ✅ add this
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} /> {/* ✅ new route */}
        <Route path="/potholes" element={<ViewPotholes />} />
        <Route path="/report" element={<ReportPothole />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/map" element={<PotholeMap />} />
      </Routes>
    </Router>
  );
}

export default App;

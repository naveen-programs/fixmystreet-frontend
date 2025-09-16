import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Welcome to FixMyStreet</h1>
        <p className="lead">
          A community-driven platform to <strong>report</strong>, <strong>track</strong>, and <strong>fix potholes</strong> in your area.
        </p>
        <div className="mt-4">
          <Link className="btn btn-primary btn-lg me-3" to="/report">
            Report a Pothole
          </Link>
          <Link className="btn btn-outline-secondary btn-lg" to="/potholes">
            View Reported Potholes
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-center mb-5">
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h3>📝 Easy Reporting</h3>
            <p>
              Quickly submit pothole reports with location, description, and photos.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h3>🗺 Interactive Map</h3>
            <p>
              Explore all reported potholes in your area on a live interactive map.
            </p>
            <Link to="/map" className="btn btn-sm btn-link">View Map →</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h3>🌍 Community Impact</h3>
            <p>
              Track how fixing potholes reduces accidents, saves fuel, and improves safety.
            </p>
            <Link to="/impact" className="btn btn-sm btn-link">See Impact →</Link>
          </div>
        </div>
      </div>

      {/* ✅ Our Motive Section */}
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="card shadow-sm p-4 bg-white">
            <h2 className="text-center mb-3">💡 Our Motive</h2>
            <p className="lead text-center">
              At <strong>FixMyStreet</strong>, our goal is not just to report potholes, 
              but also to <strong>fix them sustainably</strong>.  
              By encouraging the use of <strong>cement filling</strong> instead of temporary fixes, 
              we help create long-lasting roads that reduce maintenance costs.
            </p>
            <p className="text-center">
              This method <strong>prevents roadside dumping</strong>, improves the quality of infrastructure, 
              and creates a <strong>healthier environment</strong> for everyone.  
              Together, we can turn every small repair into a step towards better urban living. 🌱
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center bg-light p-5 rounded shadow-sm">
        <h2>🚀 Join the movement to make your streets safer!</h2>
        <p className="mb-4">Your small report can create a big difference in your community.</p>
        <Link className="btn btn-success btn-lg" to="/report">
          Report Now
        </Link>
      </div>
    </div>
  );
}

export default Home;

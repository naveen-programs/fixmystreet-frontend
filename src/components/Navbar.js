import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#3177bd" }}>
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/">FixMyStreet</Link>

        {/* Toggler button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/report">Report Pothole</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/potholes">View Potholes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/map">View Map</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/impact">Environmental Impact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

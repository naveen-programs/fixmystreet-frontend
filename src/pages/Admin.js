import React, { useEffect, useState } from "react";
import {
  getPotholes,
  updatePotholeStatus,
  deletePothole,
} from "../services/api";
import { Table, Button, Spinner, Alert, Container } from "react-bootstrap";
import api from "../services/api"; // ✅ import api for baseURL

function Admin() {
  const [potholes, setPotholes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPotholes = async () => {
    try {
      const res = await getPotholes();
      setPotholes(res.data);
    } catch (err) {
      setError("Failed to load potholes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPotholes();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updatePotholeStatus(id, newStatus);
      fetchPotholes(); // refresh
    } catch (err) {
      alert("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this pothole?")) {
      try {
        await deletePothole(id);
        fetchPotholes(); // refresh
      } catch (err) {
        alert("Failed to delete pothole");
      }
    }
  };

  if (loading) return <Spinner animation="border" className="m-3" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Admin Dashboard</h2>

      {/* ✅ Responsive wrapper */}
      <div className="table-responsive">
        <Table striped bordered hover className="align-middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Address</th>
              <th>Description</th>
              <th>Status</th>
              <th>Photo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {potholes.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.address}</td>
                <td>{p.description}</td>
                <td>
                  <span
                    className={`badge ${
                      p.status === "Fixed"
                        ? "bg-success"
                        : p.status === "In Progress"
                        ? "bg-warning text-dark"
                        : "bg-secondary"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td>
                  {p.photoPath ? (
                    <img
                      src={`${api.defaults.baseURL}/${p.photoPath}`} // ✅ dynamic baseURL
                      alt="pothole"
                      className="img-fluid rounded"
                      style={{ maxWidth: "80px" }}
                    />
                  ) : (
                    "No photo"
                  )}
                </td>
                <td>
                  <Button
                    variant="success"
                    size="sm"
                    className="me-2"
                    onClick={() => handleStatusChange(p.id, "Fixed")}
                  >
                    Mark Fixed
                  </Button>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleStatusChange(p.id, "In Progress")}
                  >
                    In Progress
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Admin;

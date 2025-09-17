// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Badge, Spinner, Alert } from "react-bootstrap";
import { getPotholes } from "../services/api";
import "../styles/Dashboard.css";

function Dashboard() {
  const [potholes, setPotholes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch all potholes from backend
    getPotholes()
      .then((res) => setPotholes(res.data))
      .catch(() => setError("Failed to fetch potholes data"))
      .finally(() => setLoading(false));
  }, []);

  // Calculate counts
  const counts = potholes.reduce(
    (acc, p) => {
      if (p.status === "Fixed") acc.fixed += 1;
      else acc.pending += 1;
      return acc;
    },
    { fixed: 0, pending: 0 }
  );
  const total = potholes.length;

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h3 className="mb-4">Dashboard</h3>
      <Row className="g-3">
        <Col md={4}>
          <Card className="dashboard-card text-center">
            <Card.Body>
              <Card.Title>Total Potholes</Card.Title>
              <h2>
                <Badge bg="secondary">{total}</Badge>
              </h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card text-center">
            <Card.Body>
              <Card.Title>Fixed Potholes</Card.Title>
              <h2>
                <Badge bg="success">{counts.fixed}</Badge>
              </h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card text-center">
            <Card.Body>
              <Card.Title>Pending Potholes</Card.Title>
              <h2>
                <Badge bg="danger">{counts.pending}</Badge>
              </h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;

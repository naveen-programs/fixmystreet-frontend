import React, { useEffect, useState } from "react";
import { Card, Badge, Container, Row, Col } from "react-bootstrap";
import { getPotholes } from "../services/api";
import api from "../services/api";

function ViewPotholes() {
  const [potholes, setPotholes] = useState([]);

  useEffect(() => {
    getPotholes()
      .then((res) => setPotholes(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="mb-4">All Reported Potholes</h3>
      {potholes.length === 0 ? (
        <p>No potholes reported yet.</p>
      ) : (
        <Row className="g-3">
          {potholes.map((p) => (
            <Col key={p.id} xs={12} sm={6} md={4}>
              <Card className="pothole-card">
                {p.photoPath && (
                  <Card.Img
                    variant="top"
                    src={`${api.defaults.baseURL}/uploads/${p.photoPath}`}
                    alt="pothole"
                  />
                )}
                <Card.Body>
                  <Card.Title>{p.address}</Card.Title>
                  <Card.Text>{p.description}</Card.Text>
                  <p>
                    Status:{" "}
                    <Badge
                      bg={
                        p.status === "Fixed"
                          ? "success"
                          : p.status === "In Progress"
                          ? "warning"
                          : "danger"
                      }
                    >
                      {p.status}
                    </Badge>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default ViewPotholes;

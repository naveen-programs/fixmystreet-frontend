import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./EnvironmentalImpact.css"; // Import the CSS
import road1 from "../assets/images/road1.jpeg";
import road2 from "../assets/images/road2.jpeg";
import road3 from "../assets/images/road3.jpeg";
import road4 from "../assets/images/road4.jpeg";

const impacts = [
  {
    id: 1,
    title: "Improved Road Safety",
    subtitle: "Reduce Accidents & Injuries",
    description:
      "Filling potholes promptly with cement reduces accidents caused by damaged roads. Safe roads prevent vehicle damage, cyclist falls, and pedestrian injuries, making the community safer.",
    image: road1,
  },
  {
    id: 2,
    title: "Environmentally Friendly",
    subtitle: "Prevent Roadside Dumping",
    description:
      "Using proper cement filling avoids temporary patches and prevents roadside dumping of waste materials. This reduces pollution, keeps neighborhoods clean, and supports a healthier environment.",
    image: road2,
  },
  {
    id: 3,
    title: "Infrastructure Improvement",
    subtitle: "Long-Lasting Roads",
    description:
      "Permanent pothole repairs strengthen roads and reduce maintenance costs. Cement-filled roads withstand heavy traffic and weather conditions, enhancing overall infrastructure quality.",
    image: road3,
  },
  {
    id: 4,
    title: "Community Engagement",
    subtitle: "Empowering Residents",
    description:
      "FixMyStreet connects community members to report and track potholes. Active participation encourages civic responsibility and ensures timely repairs, fostering a sense of shared responsibility for public infrastructure.",
    image: road4,
  },
];


function EnvironmentalImpact() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleCard = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Container className="environmental-container mt-5">
      <h2 className="text-center mb-4">Impact of FixMyStreet on Community & Environment</h2>
      <Row>
        {impacts.map((impact) => (
          <Col md={6} lg={4} className="mb-4" key={impact.id}>
            <Card className="card-custom shadow-sm">
              <Card.Img variant="top" src={impact.image} />
              <Card.Body>
                <Card.Title>{impact.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{impact.subtitle}</Card.Subtitle>
                {expandedId === impact.id && <Card.Text>{impact.description}</Card.Text>}
                <Button
                  className="btn-custom"
                  onClick={() => toggleCard(impact.id)}
                  style={{ marginTop: "10px" }}
                  variant="primary"
                >
                  {expandedId === impact.id ? "Show Less" : "Read More"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EnvironmentalImpact;

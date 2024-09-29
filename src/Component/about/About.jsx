import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsChevronDoubleDown } from "react-icons/bs";
import spaceMan from "./Assets/spaceMan.mp4"; // Import the video file

export default function About() {
  const scrollToConnect = () => {
    const connectSection = document.getElementById("#feedback");
    connectSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f7f9fc",
        padding: "60px 0",
        minHeight: "50vh",
      }}
      id="about"
    >
      <Row className="align-items-center" style={{ marginLeft: "45px" }}>
        {/* Video to the Left */}
        <Col md={6} className="text-center">
          <video
            src={spaceMan}
            alt="About Us"
            style={{ maxWidth: "100%", height: "auto" }}
            autoPlay
            loop
            muted
          />
        </Col>

        {/* About Us Text */}
        <Col md={5} className="text-start">
          <h1
            style={{ fontSize: "3rem", fontStyle: "italic", color: "#28a745" }}
          >
            About Me
          </h1>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              fontStyle: "italic",
              color: "#28a745",
            }}
          >
            A motivated BSc Computer Science fresher with hands-on experience in
            crafting dynamic user interfaces using React and JSX, combined with
            robust backend development in Django. Passionate about building
            responsive and engaging web applications, seamlessly integrating
            front-end designs with powerful backend logic.
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              fontStyle: "italic",
              color: "#28a745",
            }}
          >
            Ready to contribute fresh ideas, solve real-world problems, and grow
            in a collaborative tech environment. Eager to bring creativity,
            technical expertise, and a dedication to excellence to any
            development team.
          </p>
          <a
            variant="success"
            size="lg"
            href="#feedback"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#28a745",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <BsChevronDoubleDown style={{ marginRight: "10px" }} />
            Let's Connect
          </a>
        </Col>
      </Row>
    </Container>
  );
}

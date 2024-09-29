import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Swal from "sweetalert2";
import {
  FaHome,
  FaUser,
  FaComments,
  FaSignInAlt,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"; // Import icons

export default function NavbarComponent() {
  function homeAlert() {
    Swal.fire({
      title: "Here you are!",
      text: "Click the button to signup on this page",
      icon: "info",
      confirmButtonText: "Great!",
    });
  }

  function showAlert() {
    Swal.fire({
      title: "Success!",
      text: "Let's start with getting signed up.",
      icon: "success",
      confirmButtonText: "Awesome!",
    });
  }

  return (
    <Navbar
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "none",
        borderBottom: "none",
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            fontStyle: "italic",
            color: "#28a745",
          }}
          onClick={homeAlert}
        >
          Dhawal-Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <FaHome style={{ marginRight: "5px" }} /> Home
            </Nav.Link>
            <Nav.Link href="#about">
              <FaUser style={{ marginRight: "5px" }} /> About
            </Nav.Link>
            <Nav.Link href="#feedback">
              <FaComments style={{ marginRight: "5px" }} /> Let's Connect
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" onClick={showAlert}>
              <FaSignInAlt style={{ marginRight: "5px" }} /> Sign-up
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/dhawal-shelar-8b7b39296/">
              <FaLinkedin style={{ marginRight: "5px" }} /> My LinkedIn
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/skeeny.spotify/">
              <FaInstagram style={{ marginRight: "5px" }} /> Meet Me Socially
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaGoogle, FaLinkedin } from "react-icons/fa"; // Icons for Google and LinkedIn
import spaceBackground from "./Assets/space.jpg"; // Correct import for the image
import Swal from "sweetalert2"; // Import SweetAlert2
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle login logic here (e.g., call an API)
    console.log("Email:", email);
    console.log("Password:", password);

    // Show SweetAlert success message
    await Swal.fire({
      title: "Success!",
      text: "Login successful!",
      icon: "success",
      confirmButtonText: "Go to Home",
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to Home page using navigate
        navigate("#home"); // Use navigate instead of window.location.href
      }
    });
  };

  // Placeholder functions for social login
  const handleGoogleLogin = () => {
    console.log("Google login");
    // Integrate Google login functionality here (OAuth)
  };

  const handleLinkedInLogin = () => {
    console.log("LinkedIn login");
    // Integrate LinkedIn login functionality here (OAuth)
  };

  return (
    <div
      style={{
        backgroundImage: `url(${spaceBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Ensures full-screen background
        width: "100vw", // Full viewport width
      }}
    >
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="p-5 rounded shadow-lg"
          style={{
            width: "400px",
            background: "rgba(255, 255, 255, 0.1)", // Transparent background
            backdropFilter: "blur(10px)", // Frosted glass effect
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            color: "#fff",
            fontFamily: "'Orbitron', sans-serif", // Space-themed font
          }}
        >
          <h2
            className="text-center mb-4"
            style={{ letterSpacing: "2px", color: "purple" }}
          >
            Login
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  color: "#fff",
                  outline: "none",
                  boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075)",
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  color: "#fff",
                  outline: "none",
                  boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075)",
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-4"
              style={{
                backgroundColor: "#007bff",
                border: "none",
                padding: "10px 20px",
                letterSpacing: "1.5px",
                boxShadow: "0 4px 15px rgba(0, 123, 255, 0.4)",
                transition: "0.3s",
              }}
            >
              Login
            </Button>
          </Form>

          <div className="text-center my-3" style={{ color: "black" }}>
            or
          </div>

          {/* Google and LinkedIn Login Buttons */}
          <Button
            variant="outline-danger"
            className="w-100 mb-3 d-flex align-items-center justify-content-center"
            onClick={handleGoogleLogin}
            style={{
              background: "transparent",
              borderColor: "#db4437",
              color: "#db4437",
              letterSpacing: "1px",
              transition: "0.3s",
            }}
          >
            <FaGoogle className="me-2" /> Login with Google
          </Button>

          <Button
            variant="outline-primary"
            className="w-100 d-flex align-items-center justify-content-center"
            onClick={handleLinkedInLogin}
            style={{
              background: "transparent",
              borderColor: "#0e76a8",
              color: "#0e76a8",
              letterSpacing: "1px",
              transition: "0.3s",
            }}
          >
            <FaLinkedin className="me-2" /> Login with LinkedIn
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Swal from "sweetalert2";

export default function Feedback() {
  const [responseMessage, setResponseMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isFirstLogin, setIsFirstLogin] = useState(true);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  async function getData() {
    try {
      const response = await fetch("http://127.0.0.1:8000/home");
      const data = await response.json();
      setResponseMessage(data.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponseMessage([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let alertTitle = isFirstLogin ? "Welcome!" : "Thank You!";
    let alertText = isFirstLogin
      ? "This is your first time submitting feedback. Thank you!"
      : "Your feedback has been submitted successfully.";

    Swal.fire({
      title: alertTitle,
      text: alertText,
      icon: "info",
      confirmButtonText: "OK",
    }).then(() => {
      if (isFirstLogin) setIsFirstLogin(false);
      submitFeedback();
    });
  };

  const submitFeedback = async () => {
    console.log("Feedback submitted:", { email, feedback });

    try {
      const response = await fetch("http://127.0.0.1:8000/postData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          feedback: feedback,
          name: name,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      getData();
    } catch (error) {
      console.error("Error submitting feedback:", error);
      Swal.fire({
        title: "Error!",
        text: "There was a problem submitting your feedback.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }

    setEmail("");
    setFeedback("");
    setName("");
  };

  const handleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
    if (dislikes[id]) {
      setDislikes((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleDislike = (id) => {
    setDislikes((prev) => ({ ...prev, [id]: !prev[id] }));
    if (likes[id]) {
      setLikes((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center min-vh-100 justify-content-center"
      id="feedback"
      style={{ backgroundColor: "#f5f5f5", color: "#000" }}
    >
      <h1 className="p-2" style={{ fontStyle: "italic", color: "#28a745" }}>
        Contact Me By Your Reviews
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{responseMessage.length === 0 ? "No data available" : ""}</p>
      )}

      <Form
        style={{ width: "100%", maxWidth: "1000px" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label style={{ fontStyle: "italic", color: "#28a745" }}>
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            style={{ fontStyle: "italic", color: "#28a745" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label style={{ fontStyle: "italic", color: "#28a745" }}>
            Name
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            style={{ fontStyle: "italic", color: "#28a745" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFeedback">
          <Form.Label style={{ fontStyle: "italic", color: "#28a745" }}>
            Your Feedback
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Share your thoughts..."
            style={{ fontStyle: "italic", color: "#28a745" }}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit" style={{ color: "#fff" }}>
          Submit
        </Button>
      </Form>

      <h1
        className="mt-4 p-4"
        style={{ fontStyle: "italic", color: "#28a745" }}
      >
        Reviews
      </h1>
      <Carousel
        className="container d-flex justify-content-center"
        style={{
          maxWidth: "800px",
          border: "2px solid #28a745",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        {responseMessage.map((data) => (
          <Carousel.Item key={data.id}>
            <Card
              style={{
                width: "100%",
                height: "300px",
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Card.Body
                className="d-flex justify-content-center flex-column text-center"
                style={{}}
              >
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2">{data.email}</Card.Subtitle>
                <Card.Text>{data.feedback}</Card.Text>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <Button
                    variant={likes[data.id] ? "warning" : "outline-dark"}
                    onClick={() => handleLike(data.id)}
                    style={{ marginRight: "10px" }}
                  >
                    Like
                  </Button>
                  <Button
                    variant={dislikes[data.id] ? "danger" : "outline-dark"}
                    onClick={() => handleDislike(data.id)}
                  >
                    Dislike
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

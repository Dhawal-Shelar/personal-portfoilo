import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { ReactTyped } from "react-typed"; // Use the correct import for ReactTyped
import "bootstrap/dist/css/bootstrap.min.css";
import astronautGif from "./Assets/astronaut.gif";
import spaceImg from "./Assets/space.jpg";
import NavSpace from "./Assets/NavSpace.jpg";
import { BsChevronCompactDown, BsChevronCompactLeft } from "react-icons/bs";

export default function Home() {
  return (
    <Container
      fluid
      id="home"
      className="d-flex justify-content-between align-items-center ml-9 "
      style={{
        height: "100vh",
        background: `url(${NavSpace}) no-repeat center center fixed`,
        backgroundSize: "cover",
        color: "#000",
        paddingLeft: "20px",
        paddingTop: "20px",
      }}
    >
      <div
        className=""
        style={{
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          width: "1100px",
          textAlign: "start",
          color: "#ffff",
          display: "flex",
          flexDirection: "Column",
        }}
      >
        <h1
          className="ml-4"
          style={{
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Hi, Welcome To My Website, Here you Can Download My Resume By Clicking
          Following Button!
        </h1>
        <h1>
          <ReactTyped
            style={{
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              fontStyle: "italic",
            }}
            strings={[
              "Hi ",
              "I am",
              "Dhawal Shelar",
              "Basically,",
              " A Software Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h1>
        <div className="pt-4">
          {" "}
          <a
            href="./Dhaval Shelar Resume 23 (2).pdf"
            variant="Success"
            style={{
              backgroundColor: "#ffff",
              border: "none",
              padding: "10px",
              width: "fit-content",
              borderRadius: "5px",
              margin: "8px",
              marginLeft: "20px",
              marginTop: "20px",
              color: "#000",
              textDecoration: "none",
            }}
            download
          >
            <BsChevronCompactLeft style={{ margin: "10px" }} /> Resume Download
          </a>
          <a
            href="#about"
            variant="Success"
            style={{
              backgroundColor: "#28a745",
              border: "none",
              padding: "10px",
              width: "fit-content",
              borderRadius: "30px",
              margin: "8px",
              marginLeft: "20px",
              marginTop: "20px",
              color: "#000",
              textDecoration: "none",
            }}
          >
            <BsChevronCompactDown style={{ margin: "10px" }} /> swipe down to
            more
          </a>
        </div>
      </div>
      <div>
        <img
          src={astronautGif}
          alt="Astronaut"
          style={{ width: "300px", height: "auto" }}
        />
        <link rel="stylesheet" href="styles.css" />
      </div>
    </Container>
  );
}

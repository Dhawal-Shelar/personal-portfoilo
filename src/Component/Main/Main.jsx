import React from "react";
import NavbarComponent from "../navbar/Navbar";
import Home from "../home/Home";
import About from "../about/About";
import Feedback from "../Feedback/Feedback";

export default function Main() {
  return (
    <div>
      <NavbarComponent />
      <Home />
      <About />
      <Feedback />
    </div>
  );
}

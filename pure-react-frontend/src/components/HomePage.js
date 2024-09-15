import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Link, Route, RouterProvider } from "react-router-dom";
import { Container, CssBaseline, Typography } from "@mui/material";
import NavBar from "./Useful/NavBar";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/Contact";
import ProjectPage from "./pages/Project";
import TextToAsciiArt from "./pages/TextAscii";
import AboutMe from "./pages/AboutMe";
import Footer from "./Useful/Footer";
import TestPage from "./TestPage";
import SelfDrivingCar from "./pages/SelfDrivingCar";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="layout">

        <Router >
          <CssBaseline />
          <NavBar />
          {/* <Container> */}
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/asciiart" element={<TextToAsciiArt />} />
            <Route path="/selfdrivingcar" element={<SelfDrivingCar />} />
            {/* <Route path="/test" element={<TestPage />} /> */}
          </Routes>
          {/* </Container> */}
          <Footer />
        </Router>
      </div>
    );
  }
}

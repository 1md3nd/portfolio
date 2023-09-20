import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Link, Route, RouterProvider } from "react-router-dom";
import { Container, CssBaseline, Typography } from "@mui/material";
import NavBar from "./utils/Useful/NavBar";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/Contact";
import ProjectPage from "./pages/Project";
import TextToAsciiArt from "./pages/TextAscii";
import AboutMe from "./pages/AboutMe";
import Footer from "./utils/Useful/Footer";
import TestPage from "./utils/TestPage";

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
            {/* <Route path="/test" element={<TestPage />} /> */}
          </Routes>
          {/* </Container> */}
          <Footer />
        </Router>
      </div>
    );
  }
}

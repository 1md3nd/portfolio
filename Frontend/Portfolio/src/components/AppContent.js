import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // Import the useTheme hook

import Navbar from "./Navbar";
import BlogNavbar from "./Blogs/BlogNavbar";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Footer from "./Footer";
import Resume from "./Resume/ResumeNew";
import Blog from "./Blogs/Blog";
import ScrollToTop from "./ScrollToTop";
import BlogRead from "./Blogs/BlogRead";

// AppContent Component handles route changes and renders Navbar based on the location
function AppContent({ load }) {
  const location = useLocation();
  const { theme } = useTheme(); // Access the current theme

  return (
    <div
      className="App"
      id={load ? "no-scroll" : "scroll"}
      style={{
        backgroundColor: theme === "dark" ? "#121212" : "#ffffff", // Apply background color based on the theme
        color: theme === "dark" ? "#ffffff" : "#000000", // Apply text color based on the theme
      }}
    >
      {/* Conditionally render Navbar */}
      {location.pathname.startsWith("/blog") ? <BlogNavbar /> : <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogRead />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppContent;
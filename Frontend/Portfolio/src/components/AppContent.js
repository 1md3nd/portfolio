import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Footer from "./Footer";
import Resume from "./Resume/ResumeNew";
import Blog from "./Blogs/Blog";
import ScrollToTop from "./ScrollToTop";
import BlogRead from "./Blogs/BlogRead";
import LocationHome from "./LocationView/LocationHome";
import DrivingCar from "./SelfDrivingCar/DrivingCar";
// import PasswordsPage from "./Passwords/PasswordsPage";
  return (
    <motion.div 
      className="App bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <NavbarComponent />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogRead />} />
        <Route path="/location" element={<LocationHome />} />
        <Route path="/selfdrivingcar" element={<DrivingCar />} />
        {/* <Route path="/passwords" element={<PasswordsPage />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </motion.div>
  );
}

export default AppContent;
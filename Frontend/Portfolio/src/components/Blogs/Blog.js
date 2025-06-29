import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import BlogHome from "./BlogHome";
import ParticleBackground from "../ParticleBackground";
import "./Blog.css";

function Blog() {

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="blog-wrapper">
      <ParticleBackground />
      <Container fluid className="blog-section tech-container">
        <Container>
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="section-header"
              variants={headerVariants}
            >
              <h1 className="blog-heading neon-text">
                Tech <span className="highlight">Insights</span>
              </h1>
              <p className="tech-subtitle">
                Exploring the frontiers of technology through my experiences
              </p>
            </motion.div>
            
            <BlogHome />
          </motion.div>
        </Container>
      </Container>
    </div>
  );
}

export default Blog;

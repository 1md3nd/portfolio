import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Leetcode from "./Leetcode";
import "./About.css";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="about-wrapper">
        <Container fluid className="about-section">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Row className="about-header-section">
              <Col md={7}>
                <motion.div variants={itemVariants}>
                  <h1 className="about-heading">
                    Discover <span className="highlight">My Story</span>
                  </h1>
                  <p className="about-subtitle">
                    DevOps Engineer & Technology Enthusiast
                  </p>
                  <Aboutcard />
                </motion.div>
              </Col>

              <Col md={5} className="about-img-section">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="image-container">
                    <img 
                      src={laptopImg} 
                      alt="about" 
                      className="floating-image"
                    />
                  </div>
                </motion.div>
              </Col>
            </Row>

            <motion.div
              variants={itemVariants}
              className="skills-section"
            >
              <h1 className="section-heading">
                Professional <span className="highlight">Skillset</span>
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Techstack />
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="stats-section"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Github />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Leetcode />
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </Container>
    </div>
  );
}

export default About;

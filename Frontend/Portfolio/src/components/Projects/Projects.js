import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import ParticleBackground from "../ParticleBackground";
import selfDrivingCarLogo from '../../Assets/self-driving-car-demo.png';
import { SiPython, SiTensorflow, SiDocker } from "react-icons/si";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      imgPath: selfDrivingCarLogo,
      isBlog: false,
      title: "Self-Driving Car AI",
      description: "Neural network-powered autonomous vehicle simulation built from scratch, demonstrating advanced AI capabilities in real-time decision making.",
      ghLink: "https://github.com/1md3nd/portfolio/tree/main/Frontend/Portfolio/src/components/SelfDrivingCar",
      demoLink: "/selfdrivingcar",
      tech: ["Python", "TensorFlow", "Docker"],
      icons: [SiPython, SiTensorflow, SiDocker]
    }
    // Add more projects here
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Container fluid className="project-section">
      <ParticleBackground />
      <motion.div 
        className="scanner-line"
        animate={{
          y: ["0%", "100%"],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <Container>
        <motion.h1
          className="project-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Recent <strong className="highlight">Works</strong>
        </motion.h1>
        <motion.p
          className="project-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are a few projects I've worked on recently.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <motion.div
              className="projects-grid"
              variants={gridVariants}
            >
              {projects.map((project, index) => (
                <Col md={6} className="project-card" key={index}>
                  <ProjectCard {...project} />
                </Col>
              ))}
            </motion.div>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import ParticleBackground from "../ParticleBackground";
import "./Resume.css";

const branch = process.env.REACT_APP_BRANCH || 'main';
const pdf = `https://raw.githubusercontent.com/1md3nd/portfolio/refs/heads/${branch}/Public/resume/out/default.pdf`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="resume-wrapper">
      <ParticleBackground />
      <Container fluid className="resume-section tech-container">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="section-header"
              variants={itemVariants}
            >
              <h1 className="neon-text">Professional <span className="highlight">Resume</span></h1>
              <p className="tech-subtitle">View or download my latest CV</p>
            </motion.div>

            <motion.div 
              className="resume-actions"
              variants={itemVariants}
            >
              <motion.a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-button"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px var(--primary-neon)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <AiOutlineDownload className="button-icon" />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div 
              className="resume-preview"
              variants={itemVariants}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className="scanner-line" style={{ opacity: isHovered ? 1 : 0 }} />
              <Document 
                file={pdf} 
                className="d-flex justify-content-center"
                loading={
                  <div className="loading-screen">
                    <div className="tech-loader" />
                    <p className="neon-text">Loading Resume...</p>
                  </div>
                }
                error={
                  <div className="error-screen">
                    <p className="neon-text">Error loading PDF. Please try downloading instead.</p>
                  </div>
                }
              >
                <Page 
                  pageNumber={1} 
                  scale={width > 786 ? 1.7 : 0.6}
                  className="pdf-page"
                />
              </Document>
            </motion.div>

            <motion.div 
              className="resume-footer"
              variants={itemVariants}
            >
              <p className="tech-note">
                <AiOutlineEye className="icon" />
                Tip: Click the download button to view the full resolution version
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
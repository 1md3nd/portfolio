import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaCodeBranch, FaServer, FaLaptopCode } from "react-icons/fa";

function AboutCard() {
  return (
    <motion.div
      className="about-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        border: "1px solid rgba(0, 255, 255, 0.3)",
        borderRadius: "16px",
        padding: "2rem",
        background: "rgba(20, 20, 20, 0.8)",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
        color: "#e0e0e0",
        maxWidth: "800px",
        margin: "1rem auto"
      }}
    >
      {/* Icon and Intro */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
        <div style={{ marginRight: "1.5rem" }}>
          <motion.div 
            style={{ 
              borderRadius: "50%",
              padding: "0.8rem",
              background: "rgba(0, 255, 255, 0.1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            whileHover={{ boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)" }}
          >
            <FaCloud style={{ fontSize: "2rem", color: "#00FFFF" }} />
          </motion.div>
        </div>
        <div>
          <p style={{ fontSize: "1.3rem", lineHeight: "1.6" }}>
            Hi, I'm <span style={{ color: "#00FFFF", fontWeight: "bold" }}>Anurag Ranjan</span> from <span style={{ color: "#00FFFF", fontWeight: "bold" }}>Delhi, India</span>.
          </p>
        </div>
      </div>

      {/* Professional Journey Section */}
      <motion.div 
        style={{ 
          padding: "1.5rem",
          marginBottom: "1.5rem",
          background: "rgba(0, 255, 255, 0.03)",
          borderRadius: "8px"
        }}
        whileHover={{ boxShadow: "0 0 15px rgba(0, 255, 255, 0.15)" }}
      >
        <h3 style={{ color: "#00FFFF", marginBottom: "0.8rem", borderBottom: "1px solid rgba(0, 255, 255, 0.3)", paddingBottom: "0.5rem" }}>Professional Journey</h3>
        <p>
          <strong>Current:</strong> DevOps Engineer at <span style={{ color: "#00FFFF" }}>Impressico Business Solutions</span>
          <br />
          <span style={{ fontSize: "0.9rem", color: "#aaa" }}>Automating cloud infrastructure, CI/CD pipelines, and maintaining Kubernetes clusters.</span>
        </p>
        <p style={{ marginTop: "1rem" }}>
          <strong>Education:</strong> B.Tech in Information Technology from <span style={{ color: "#00FFFF" }}>KIET Group of Institutions</span>
          <br />
          <span style={{ fontSize: "0.9rem", color: "#aaa" }}>CGPA: 8.14</span>
        </p>
      </motion.div>

      {/* Technical Focus */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ color: "#00FFFF", marginBottom: "0.8rem", borderBottom: "1px solid rgba(0, 255, 255, 0.3)", paddingBottom: "0.5rem" }}>Technical Focus</h3>
        <p style={{ lineHeight: "1.7" }}>
          Specialized in cloud-native architectures, infrastructure as code, and continuous integration and delivery. Proficient in AWS, Docker, Kubernetes, Prometheus, and Grafana.
        </p>
      </div>

      {/* Beyond Work */}
      <motion.div
        style={{ 
          padding: "1.5rem",
          marginBottom: "1.5rem",
          background: "rgba(0, 255, 255, 0.03)",
          borderRadius: "8px"
        }}
        whileHover={{ boxShadow: "0 0 15px rgba(0, 255, 255, 0.15)" }}
      >
        <h3 style={{ color: "#00FFFF", marginBottom: "0.8rem", borderBottom: "1px solid rgba(0, 255, 255, 0.3)", paddingBottom: "0.5rem" }}>Beyond Work</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[
            "Active on LeetCode with 440+ contributions",
            "Exploring emerging DevOps tools and technologies",
            "Participating in tech meetups and hackathons",
            "Experimenting with AI models and frameworks"
          ].map((item, index) => (
            <li key={index} style={{ margin: "0.7rem 0", display: "flex", alignItems: "center" }}>
              <FaCodeBranch style={{ color: "#00FFFF", marginRight: "8px" }} /> {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Quote */}
      <div style={{ textAlign: "center", fontStyle: "italic", color: "#aaa", marginTop: "1.5rem", fontSize: "1.1rem" }}>
        "Code like an artist, think like a scientist, and dream like a child."
      </div>
    </motion.div>
  );
}

export default AboutCard;
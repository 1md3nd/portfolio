import React from "react";
import { motion } from "framer-motion";
import { DiVisualstudio } from "react-icons/di";
import { SiLinux, SiJenkins, SiDocker, SiPostman } from "react-icons/si";

function Toolstack() {
  const tools = [
    { Icon: SiLinux, name: "Linux" },
    { Icon: SiJenkins, name: "Jenkins" },
    { Icon: SiDocker, name: "Docker" },
    { Icon: SiPostman, name: "Postman" },
    { Icon: DiVisualstudio, name: "VS Code" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="tech-grid"
    >
      {tools.map(({ Icon, name }, index) => (
        <motion.div
          key={index}
          className="tech-item"
          variants={itemVariants}
          whileHover={{
            y: -5,
            scale: 1.05,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <div className="tech-icon-wrapper">
            <Icon className="tech-icon" />
          </div>
          <p className="tech-name">{name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Toolstack;

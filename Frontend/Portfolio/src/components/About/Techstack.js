import React from "react";
import { motion } from "framer-motion";
import { DiPython, DiGit, DiDocker, DiNodejs } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiMysql,
  SiElasticsearch,
  SiLinux, SiJenkins, SiDocker, SiPostman 
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";


function Techstack() {
  const technologies = [
    { Icon: FaAws, name: "AWS" },
    { Icon: SiKubernetes, name: "Kubernetes" },
    { Icon: DiDocker, name: "Docker" },
    { Icon: SiPrometheus, name: "Prometheus" },
    { Icon: SiGrafana, name: "Grafana" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: SiElasticsearch, name: "Elasticsearch" },
    { Icon: DiNodejs, name: "Node.js" },
    { Icon: DiPython, name: "Python" },
    { Icon: DiGit, name: "Git" },
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
      {technologies.map(({ Icon, name }, index) => (
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

export default Techstack;

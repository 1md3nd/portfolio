import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog, tech, icons }) {
  const [isHovered, setIsHovered] = useState(false);

  const TechIcon = ({ Icon }) => (
    <motion.div
      className="tech-badge"
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Icon />
    </motion.div>
  );

  return (
    <motion.div
      className="project-card-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="project-card-view">
        <div className="card-image-container">
          <motion.div
            className="image-overlay"
            animate={{ opacity: isHovered ? 0.3 : 0 }}
          />
          <Card.Img variant="top" src={imgPath} alt="card-img" />
          <motion.div
            className="holographic-overlay"
            animate={{ opacity: isHovered ? 0.2 : 0 }}
          />
        </div>

        <Card.Body>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card.Title className="project-title">{title}</Card.Title>
            <Card.Text className="project-description">{description}</Card.Text>
          </motion.div>

          <div className="tech-stack">
            {icons?.map((Icon, index) => (
              <TechIcon key={index} Icon={Icon} />
            ))}
          </div>

          <div className="project-links">
            {ghLink && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="primary" href={ghLink} target="_blank">
                  <BsGithub /> &nbsp;GitHub
                </Button>
              </motion.div>
            )}
            {demoLink && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="primary" href={demoLink} target="_blank">
                  {isBlog ? <CgWebsite /> : <BiLinkExternal />} &nbsp;
                  {isBlog ? "Blog" : "Demo"}
                </Button>
              </motion.div>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;


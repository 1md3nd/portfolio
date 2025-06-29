import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import "./NavbarComponent.css";

function NavbarComponent() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0 0 8px rgb(0, 255, 255)",
      color: "rgb(0, 255, 255)",
    }
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={`tech-navbar ${navColour ? "tech-navbar-scrolled" : ""}`}
      >
        <Container>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Navbar.Brand as={Link} to="/" className="d-flex tech-brand">
              <motion.img 
                src={logo} 
                className="img-fluid logo"
                alt="brand"
                animate={{ 
                  filter: ["drop-shadow(0 0 2px #0ff)", "drop-shadow(0 0 8px #0ff)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </Navbar.Brand>
          </motion.div>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpand(expand ? false : "expanded")}
            className="tech-toggler"
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              {[
                { to: "/", icon: AiOutlineHome, text: "Home" },
                { to: "/about", icon: AiOutlineUser, text: "About" },
                { to: "/project", icon: AiOutlineFundProjectionScreen, text: "Projects" },
                { to: "/resume", icon: CgFileDocument, text: "Resume" },
                { to: "/blog", icon: ImBlog, text: "Blog" },
                { to: "/location", icon: FaLocationDot, text: "Location" }
              ].map((item) => (
                <Nav.Item key={item.to}>
                  <motion.div
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <Nav.Link 
                      as={Link} 
                      to={item.to} 
                      onClick={() => setExpand(false)}
                      className={location.pathname === item.to ? "active-nav-link" : ""}
                    >
                      <item.icon style={{ marginBottom: "2px" }} /> {item.text}
                    </Nav.Link>
                  </motion.div>
                </Nav.Item>
              ))}

              <Nav.Item className="fork-btn">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    href="https://github.com/1md3nd/portfolio"
                    target="_blank"
                    className="fork-btn-inner"
                  >
                    <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                    <AiFillStar style={{ fontSize: "1.1em" }} />
                  </Button>
                </motion.div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavbarComponent;

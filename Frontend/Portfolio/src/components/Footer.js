import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-left">
          Designed & Developed by Anurag Ranjan
        </div>
        <div className="footer-center">
          © {year} <span style={{ color: '#00fff7' }}>AR</span>
        </div>
        <div className="footer-right">
          <a href="https://github.com/1md3nd" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <AiFillGithub />
          </a>
          <a href="https://twitter.com/1md3nd" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <AiOutlineTwitter />
          </a>
          <a href="https://www.linkedin.com/in/1md3nd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/1md3nd" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

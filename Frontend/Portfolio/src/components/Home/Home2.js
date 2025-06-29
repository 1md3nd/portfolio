import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiDocker, SiKubernetes, SiTerraform } from "react-icons/si";
import myImg from "../../Assets/avatar.png";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const HomeAboutSection = styled.section`
  background: ${props => props.theme === "light" ? "#f8f9fa" : "#1a202c"};
  color: ${props => props.theme === "light" ? "#333" : "#fff"};
  padding: 80px 0;
`;

const Highlight = styled.span`
  color: #64ffda;
`;

const SocialIcons = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialIconItem = styled.li`
  margin: 0 15px;
`;

const SocialLink = styled(motion.a)`
  color: ${props => props.theme === "light" ? "#333" : "#fff"};
  font-size: 2em;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
    text-decoration: underline; /* Added underline for better visibility */
  }
`;

function TechIcon({ icon: Icon, label }) {
  if (typeof Icon === "string") {
    // For string-based icons (e.g., AWS, Python)
    return (
      <motion.div
        className="tech-icon-wrapper"
        whileHover={{ scale: 1.15, filter: 'drop-shadow(0 0 10px #00fff7)' }}
        transition={{ duration: 0.3 }}
      >
        <span className="tech-icon neon-text" style={{ fontSize: 28 }}>{Icon}</span>
        <span className="tech-label">{label}</span>
      </motion.div>
    );
  }
  return (
    <motion.div
      className="tech-icon-wrapper"
      whileHover={{ scale: 1.15, filter: 'drop-shadow(0 0 10px #00fff7)' }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="tech-icon neon-text" />
      <span className="tech-label">{label}</span>
    </motion.div>
  );
}

function Home2() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  // Add a modern "What I Do" section
  const highlights = [
    {
      icon: "🛠️",
      title: "DevOps & Automation",
      desc: "Automating cloud infrastructure, CI/CD pipelines, and operational tasks using Python, Shell, and modern DevOps tools. Reduced manual effort by 80% and improved deployment reliability."
    },
    {
      icon: "☁️",
      title: "AWS Cloud Solutions",
      desc: "Designing, deploying, and monitoring scalable solutions on AWS (S3, Lambda, API Gateway, CloudWatch, EC2). Achieved 99.99% uptime and 75% cost savings with serverless architectures."
    },
    {
      icon: "🐳",
      title: "Containerization & Orchestration",
      desc: "Migrated 50+ microservices to Docker & Kubernetes, enabling zero-downtime deployments and robust scaling. Automated EKS cluster and Jenkins upgrades."
    },
    {
      icon: "🔍",
      title: "Technical Support & Troubleshooting",
      desc: "Resolved 95%+ incidents within SLA for enterprise apps. Expert in debugging REST APIs, analyzing logs, and proactive monitoring with CloudWatch, Prometheus, and Grafana."
    }
  ];

  // Grouped Skills with Levels
  const groupedSkills = [
    {
      category: "Infrastructure",
      skills: [
        { icon: SiDocker, label: "Docker", level: 4 },
        { icon: SiKubernetes, label: "Kubernetes", level: 4 },
        { icon: SiTerraform, label: "Terraform", level: 3 },
        { icon: "AWS", label: "AWS", level: 4 }
      ]
    },
    {
      category: "Languages & Scripting",
      skills: [
        { icon: "Python", label: "Python", level: 4 },
        { icon: "Bash", label: "Shell/Bash", level: 4 },
        { icon: "Node.js", label: "Node.js", level: 3 }
      ]
    },
    {
      category: "Databases",
      skills: [
        { icon: "MySQL", label: "MySQL", level: 3 },
        { icon: "MongoDB", label: "MongoDB", level: 3 }
      ]
    },
    {
      category: "CI/CD & Monitoring",
      skills: [
        { icon: "Jenkins", label: "Jenkins", level: 3 },
        { icon: "Prometheus", label: "Prometheus", level: 2 },
        { icon: "Grafana", label: "Grafana", level: 2 }
      ]
    }
  ];

  return (
    <Container
      fluid
      className={`home-about-section tech-container ${theme === "light" ? "light-theme" : "dark-theme"}`}
      id="about"
    >
      <div className="particle-bg" /> {/* Placeholder for subtle particle background */}
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row>
            <Col md={8} className="home-about-description">
              <motion.h1 
                // Removed glitch-effect for clarity
                className="main-heading"
                style={{ fontSize: "2.6em", letterSpacing: 1, fontWeight: 700 }}
              >
                Hi, I'm <span className="highlight neon-text">Anurag</span>
              </motion.h1>
              <motion.div 
                className="home-about-body tech-text"
                variants={itemVariants}
              >
                <p style={{ fontSize: "1.2em", lineHeight: 1.7 }}>
                  <b>DevOps Engineer</b> with <b>2+ years</b> of experience, <b>10+ projects</b> delivered.<br/>
                  <span className="highlight neon-text">Unique strength:</span> I blend deep technical troubleshooting with automation and cloud-native design, ensuring both reliability and innovation.<br/>
                  <span style={{ color: '#00fff7' }}>Let's build scalable, secure, and efficient systems together!</span>
                </p> 
              </motion.div>
            </Col>
            <Col md={4} className="myAvtar">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="avatar-container"
                style={{ boxShadow: "0 0 40px #00fff7cc, 0 0 80px #0ff2", background: "rgba(0,255,247,0.08)", borderRadius: 18 }}
              >
                <Tilt
                  className="parallax-effect-glare-scale"
                  perspective={500}
                  glareEnable={true}
                  glareMaxOpacity={0.45}
                  scale={1.02}
                >
                  <div className="inner-element">
                    <img src={myImg} className="img-fluid avatar" alt="avatar" style={{ filter: 'brightness(1.2) contrast(1.2) drop-shadow(0 0 18px #00fff7)' }} />
                    <div className="tech-overlay"></div>
                  </div>
                </Tilt>
                <div className="scanner-ring" />
              </motion.div>
            </Col>
          </Row>

          <motion.div
            variants={containerVariants}
            className="social-section"
          >
           <WhatIDoSection highlights={[
                   {
                     icon: "🛠️",
                     title: "DevOps & Automation",
                     desc: "Automating cloud infrastructure, CI/CD pipelines, and operational tasks using Python, Shell, and modern DevOps tools. Reduced manual effort by 80% and improved deployment reliability."
                   },
                   {
                     icon: "☁️",
                     title: "AWS Cloud Solutions",
                     desc: "Designing, deploying, and monitoring scalable solutions on AWS (S3, Lambda, API Gateway, CloudWatch, EC2). Achieved 99.99% uptime and 75% cost savings with serverless architectures."
                   },
                   {
                     icon: "🐳",
                     title: "Containerization & Orchestration",
                     desc: "Migrated 50+ microservices to Docker & Kubernetes, enabling zero-downtime deployments and robust scaling. Automated EKS cluster and Jenkins upgrades."
                   },
                   {
                     icon: "🔍",
                     title: "Technical Support & Troubleshooting",
                     desc: "Resolved 95%+ incidents within SLA for enterprise apps. Expert in debugging REST APIs, analyzing logs, and proactive monitoring with CloudWatch, Prometheus, and Grafana."
                   }
                 ]} />
            <Row>
              <Col md={12} className="home-about-social">
                <motion.h1
                  className="neon-text"
                  variants={itemVariants}
                  style={{ fontSize: "2em", marginTop: 32, letterSpacing: 1 }}
                >
                  <span style={{ fontWeight: 700, fontSize: '1.2em', letterSpacing: 2 }}>Let's Connect!</span>
                </motion.h1>
                <motion.p variants={itemVariants} style={{ fontSize: "1.1em", color: '#b0eaff', marginBottom: 18 }}>
                  Open to collaborations, opportunities, and tech talks. Reach out on your favorite platform!
                </motion.p>
                <motion.ul 
                  className="home-about-social-links"
                  variants={containerVariants}
                  style={{ display: 'flex', justifyContent: 'center', gap: 32, margin: '24px 0', padding: 0, listStyle: 'none' }}
                >
                  <motion.li
                    className="social-icons"
                    variants={itemVariants}
                    whileHover={{ scale: 1.25, boxShadow: "0 0 32px #00fff7cc", background: '#181c20' }}
                    style={{ borderRadius: '50%', background: '#101214', boxShadow: '0 0 18px #00fff7cc', transition: 'all 0.2s', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0 }}
                  >
                    <a
                      href="https://github.com/1md3nd"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      style={{ color: '#fff', fontSize: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
                    >
                      <AiFillGithub />
                    </a>
                  </motion.li>
                  <motion.li
                    className="social-icons"
                    variants={itemVariants}
                    whileHover={{ scale: 1.25, boxShadow: "0 0 32px #00fff7cc", background: '#181c20' }}
                    style={{ borderRadius: '50%', background: '#101214', boxShadow: '0 0 18px #00fff7cc', transition: 'all 0.2s', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0 }}
                  >
                    <a
                      href="https://www.linkedin.com/in/1md3nd/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      style={{ color: '#0e76a8', fontSize: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
                    >
                      <FaLinkedinIn />
                    </a>
                  </motion.li>
                  <motion.li
                    className="social-icons"
                    variants={itemVariants}
                    whileHover={{ scale: 1.25, boxShadow: "0 0 32px #00fff7cc", background: '#181c20' }}
                    style={{ borderRadius: '50%', background: '#101214', boxShadow: '0 0 18px #00fff7cc', transition: 'all 0.2s', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0 }}
                  >
                    <a
                      href="https://twitter.com/1md3nd"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                      style={{ color: '#1da1f2', fontSize: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
                    >
                      <AiOutlineTwitter />
                    </a>
                  </motion.li>
                  <motion.li
                    className="social-icons"
                    variants={itemVariants}
                    whileHover={{ scale: 1.25, boxShadow: "0 0 32px #00fff7cc", background: '#181c20' }}
                    style={{ borderRadius: '50%', background: '#101214', boxShadow: '0 0 18px #00fff7cc', transition: 'all 0.2s', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0 }}
                  >
                    <a
                      href="https://www.instagram.com/1md3nd"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      style={{ color: '#e1306c', fontSize: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
                    >
                      <AiFillInstagram />
                    </a>
                  </motion.li>
                </motion.ul>
              </Col>
            </Row>
          </motion.div>
        </motion.div>
      </Container>
    </HomeAboutSection>
  );
}

// Minimal What I Do section in next viewport
export function WhatIDoSection({ highlights }) {
  return (
    <section id="what-i-do" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="minimal-what-i-do"
        style={{ width: '100%', maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}
      >
        {highlights.map((h, idx) => (
          <div key={h.title} className="mini-what-card" style={{ minWidth: 180, background: 'rgba(0,255,247,0.04)', borderRadius: 14, padding: 20, boxShadow: '0 2px 18px #00fff722', textAlign: 'center', flex: '1 1 200px', maxWidth: 220 }}>
            <div className="tech-icon" style={{ fontSize: '2em', marginBottom: 8 }}>{h.icon}</div>
            <div className="neon-text" style={{ fontWeight: 600, fontSize: '1.1em', marginBottom: 4 }}>{h.title}</div>
            {/* Minimal description, just a few keywords */}
            <div style={{ color: '#b0eaff', fontSize: '0.98em', minHeight: 36 }}>
              {h.desc.split(/[.,]/)[0]}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Home2;

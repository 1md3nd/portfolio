import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import Home2 from "./Home2";
import Type from "./Type";
import "./Home.css";

function Home() {
 const particlesConfig = {
    particles: {
      number: { value: 60 },
      color: { value: "#00fff7" },
      links: {
        enable: true,
        color: "#00fff7",
        opacity: 0.15
      },
      move: {
        enable: true,
        speed: 0.7
      },
      size: { value: 1.5 },
      opacity: { value: 0.4 }
    }
  };

  // Featured projects data
  const featuredProjects = [
    {
      title: "AI Attendance System",
      description: "Face recognition-based attendance with real-time analytics.",
      icon: "🤖",
      link: "#project1"
    },
    {
      title: "Cloud Infra Automation",
      description: "Automated AWS/Terraform deployments for scalable apps.",
      icon: "☁️",
      link: "#project2"
    },
    {
      title: "LLM Chatbot",
      description: "Conversational AI for education and productivity.",
      icon: "💬",
      link: "#project3"
    }
  ];

  return (
    <section style={{ paddingTop: "40px", margin: -1 }}>
      <Container
        fluid
        className={`home-section-dark tech-container`}
        id="home"
        style={{minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 60 }}
      >
        <Particles className="particles-bg" options={particlesConfig} />
        <Container className="home-content space-y-5 mb-5">
          <Row className="align-items-center flex-lg-row flex-column-reverse g-5">
            <Col md={7} className="home-header text-center text-md-start p-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="heading neon-text" style={{ fontWeight: 700, fontSize: "2.8em", textShadow: "0 0 18px #00fff7", marginBottom: 10 }}>
                  Hi There!{' '}
                  <motion.span
                    className="wave"
                    role="img"
                    aria-labelledby="wave"
                    animate={{ rotate: [0, 14, -8, 14, 0], transition: { duration: 2.5, repeat: Infinity, repeatType: "reverse" } }}
                  >
                    👋🏻
                  </motion.span>
                </h1>
                <h1 className="heading-name neon-text" style={{ fontWeight: 800, fontSize: "2.2em", margin: "20px 0 10px 0" }}>
                  I'M <span className="main-name" style={{ color: "#00fff7", textShadow: "0 0 20px #00fff7" }}>ANURAG RANJAN</span>
                </h1>
                <motion.p
                  className="tech-tagline"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{ fontSize: "1.25em", color: "#b2fff7", fontWeight: 500, marginBottom: 18, textShadow: "0 0 8px #00fff755" }}
                >
                  Building the future with <span style={{ color: "#0ff" }}>AI</span>, <span style={{ color: "#0ff" }}>Cloud</span>, and <span style={{ color: "#0ff" }}>Automation</span>.
                </motion.p>
                <motion.div
                  className="type-container"
                  style={{ padding: 24, textAlign: "left", background: "rgba(0,255,247,0.05)", borderRadius: 8, boxShadow: "0 0 18px #00fff733", marginBottom: 18 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Type />
                </motion.div>
              </motion.div>
            </Col>
            <Col md={5} className="d-flex justify-content-center align-items-center mb-4 mb-md-0 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="profile-modern-card"
                style={{
                  background: "radial-gradient(circle at 60% 40%, #00fff7 0%, #181c20 80%)",
                  borderRadius: "2.5rem",
                  boxShadow: "0 0 60px #00fff7aa, 0 0 120px #0ff2, 0 8px 32px #000a",
                  padding: 0,
                  width: 340,
                  height: 380,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  border: "2.5px solid #00fff7"
                }}
              >
                <div style={{
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0ff 10%, #222 100%)",
                  boxShadow: "0 0 40px #00fff7cc, 0 0 80px #0ff2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                  marginTop: 18,
                  border: "3px solid #00fff7"
                }}>
                  <img
                    src="https://avatars.githubusercontent.com/u/9919?v=4"
                    alt="profile"
                    style={{
                      width: 160,
                      height: 160,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2.5px solid #00fff7",
                      boxShadow: "0 0 18px #00fff7cc, 0 0 32px #0ff6"
                    }}
                  />
                </div>
                <div style={{
                  color: "#00fff7",
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: 1,
                  marginBottom: 6,
                  textShadow: "0 0 8px #00fff7cc"
                }}>Anurag Ranjan</div>
                <div style={{
                  color: "#b2fff7",
                  fontWeight: 500,
                  fontSize: 15,
                  marginBottom: 10,
                  textAlign: "center"
                }}>
                  DevOps | Cloud | AI Enthusiast
                </div>
                <div style={{
                  display: "flex",
                  gap: 18,
                  marginTop: 8
                }}>
                  <span style={{
                    background: "#101214",
                    color: "#00fff7",
                    borderRadius: "50%",
                    width: 38,
                    height: 38,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    boxShadow: "0 0 8px #00fff7aa"
                  }}>💻</span>
                  <span style={{
                    background: "#101214",
                    color: "#00fff7",
                    borderRadius: "50%",
                    width: 38,
                    height: 38,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    boxShadow: "0 0 8px #00fff7aa"
                  }}>🚀</span>
                </div>
                <div className="dynamic-hero-bg" style={{ zIndex: 0 }} />
              </motion.div>
            </Col>
          </Row>
          {/* Featured Projects Section */}
          <Row className="featured-projects-row mt-5">
            <Col xs={12}>
              <h2 className="featured-title neon-text" style={{ textAlign: "center", fontWeight: 700, fontSize: "2em", marginBottom: 30, textShadow: "0 0 12px #00fff7" }}>
                Featured Projects
              </h2>
              <div className="featured-projects">
                {featuredProjects.map((proj, idx) => (
                  <motion.a
                    key={proj.title}
                    href={proj.link}
                    className="featured-card"
                    whileHover={{ scale: 1.08, boxShadow: "0 0 40px #00fff7cc" }}
                    transition={{ duration: 0.3 }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="featured-icon" style={{ fontSize: 32 }}>{proj.icon}</div>
                    <div className="featured-info">
                      <h3 className="neon-text" style={{ fontWeight: 600 }}>{proj.title}</h3>
                      <p style={{ color: "#b2fff7", margin: 0 }}>{proj.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="scanner-line" />
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./BlogCard";

const branch = process.env.REACT_APP_BRANCH || 'main';

function BlogHome({ theme }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/1md3nd/portfolio/refs/heads/${branch}/Public/raw_blogs/blogs.json`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Container className="blog-content">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            className="loading-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="tech-loader" />
            <p className="neon-text">Loading Tech Insights...</p>
          </motion.div>
        ) : error ? (
          <motion.div 
            className="error-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="error-box">
              <p className="error-text">{error}</p>
              <motion.button 
                className="tech-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
              >
                Retry
              </motion.button>
            </div>
          </motion.div>
        ) : blogs.length === 0 ? (
          <motion.div 
            className="empty-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="neon-text">No blogs available yet. Check back soon!</p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Row className="justify-content-center blog-grid">
              {blogs.map((blog, index) => (
                <Col md={4} key={blog.id} className="blog-column">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    whileHover={{ y: -10 }}
                  >
                    <BlogCard blog={blog} theme={theme} />
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default BlogHome;
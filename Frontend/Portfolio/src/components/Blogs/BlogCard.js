import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { BiTime, BiRightArrowAlt } from "react-icons/bi";
import { format } from "date-fns";

function BlogCard({ blog }) {
  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch {
      return dateString;
    }
  };

  return (
    <Card className="blog-card">
      <div className="blog-card-img">
        <img src={blog.headerImage} alt={blog.title} />
        <div className="blog-overlay" />
      </div>
      
      <div className="blog-content">
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-description">
          {blog.description || "Explore the latest insights in technology and development..."}
        </p>
        
        <div className="blog-meta">
          <div className="blog-date">
            <BiTime />
            {formatDate(blog.date)}
          </div>
          {blog.category && (
            <span className="blog-category">{blog.category}</span>
          )}
        </div>

        <motion.a
          href={`/blog/${blog.id}`}
          className="read-more"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Read More <BiRightArrowAlt />
        </motion.a>
      </div>
    </Card>
  );
}

export default BlogCard;

import React from 'react';
import styles from './ProjectCards.module.css';
import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (
    <article>
      <div className={styles.top}>
        <div className={styles.logo}># {props.props.index}</div>
        <h3 className={styles.heading}><a href={props.props.link} className="btn btn-primary">
          {props.props.title}
        </a></h3>
      </div>
      <div className={styles.image}>
        <img
          src={props.props.image}
          alt="project_img"
        />
      </div>
      <div className={styles.description}>
        <p>{props.props.description}</p>
        <Link to={props.props.link} aria-label="Go to homepage">Visit</Link>
      </div>
    </article>
  );
}

export default ProjectCards;

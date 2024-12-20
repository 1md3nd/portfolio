import React from 'react';
import css from './TopicH.module.css';

// Import the SVG file as a URL
// import bgimg from '../../assets/images/background/colored_shade_0.svg';

function TopicH(props) {
  return (
    <div
      className={css.container}
      style={{ backgroundImage: `url(${props.props.bgimg})`, backgroundSize: 'cover' }}
    >
      <div className={css.heading} style={{ color: props.props.color }}>
        <h2>{props.props.topic_name}</h2>
      </div>
      {props.props.logo ? (
        <div className={css.logo}>
          <img src={props.props.logo} alt='Logo' />
        </div>
      ) : null}
    </div>
  );
}

export default TopicH;

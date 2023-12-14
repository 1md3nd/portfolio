import React from 'react';
import TopicH from '../Useful/TopicH';
import css from './Intro.module.css';
import idea from '../../../../static/images/idea.png';
import TextBlock from '../Useful/TextBlock';
import ProjectCards from './ProjectCards';
import BlankSpace from '../Useful/BlankSpace';
import css1 from './ProjectSection.module.css';
import sdc from '../../../../static/images/sdc.png';
import ProjectSection from './ProjectSection';

function HomeIntro() {
  const into = {
    topic_name: "The Development Areana",
    logo: idea,
    color: 'red',
    text: "This page is designed to show case the different types of projects which are innovative and developed from scratch...",
  }


  return (
    <div className={css.container} >
      <div className={css.top}>
        <TopicH props={into} />
      </div>
      <div className={css1.about}>
        <TextBlock text={into.text} />
      </div>
      <BlankSpace />
      <ProjectSection />
    </div>
  );
}

export default HomeIntro;

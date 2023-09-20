import React from 'react';
import TopicH from '../Useful/TopicH';
import css from './Intro.module.css';
import idea from '../../../../static/images/idea.png';
import TextBlock from '../Useful/TextBlock';
import ProjectCards from './ProjectCards';
import BlankSpace from '../Useful/BlankSpace';
import css1 from './ProjectSection.module.css';


function HomeIntro() {
  const into = {
    topic_name: "The Development Areana",
    logo: idea,
    color: 'red',
    text: "This page is designed to show case the different types of projects which are innovative and developed from scratch",
  }
  const github = {
    index: 1,
    title: 'Sample Title',
    description: 'Description',
    image: 'image',
    link: '../../images/project_',
  };

  return (
    <div className={css.container} >
      <div className={css.top}>
        <TopicH props={into} />
      </div>
      <div className={css1.about}>
        <TextBlock text={into.text} />
      </div>
      <BlankSpace />
      <div className={css1.grid}>
        {[0, 1, 2].map((index) => {
          const modifiedGithub = { ...github };
          modifiedGithub.index = index + 1;
          return (
            <>
              <ProjectCards key={index} props={modifiedGithub} />
              {index == 2 ? null : <div className={css1.vertical_space} />}


            </>
          );
        })}
      </div>
    </div>
  );
}

export default HomeIntro;

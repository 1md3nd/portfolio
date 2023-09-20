import React from 'react';
import { Container } from '@mui/material';
import projectImage from '../../../../static/images/icons8-project-64.png';
import TextBlock from '../Useful/TextBlock';
import ProjectCards from './ProjectCards';
import VerticalSpace from '../Useful/VerticalSpace';
import bgimg from '../../../../static/images/background/colored_shade_0.svg';
import TopicH from '../Useful/TopicH';
import css from './ProjectSection.module.css';
import BlankSpace from '../Useful/BlankSpace';

const args = {
  topic_name: 'PROJECTS',
  color: `var(--purple)`,
  logo: projectImage,
  bgimg: bgimg,
};

const projectDesc =
  'Watch Dan take on Coding Challenges in p5.js and Processing. The challenge topics include algorithmic art, machine learning, simulation, generative poetry, and more';

const github = {
  index: 1,
  title: 'Sample Title',
  description: 'Description',
  image: 'image',
  link: '../../images/project_',
};

function ProjectSection() {
  return (
    <Container className={css.container} maxWidth={false} disableGutters={true}>
      {/* <Box display='flex' justifyContent='center' mb={3}> */}
      <div className={css.top}>

        <TopicH props={args} />
      </div>
      <div className={css.description}>
        <TextBlock text={projectDesc} />
      </div>
      {/* <Box className='boxed-container-bottom' p={3}> */}
      {/* <div className='boxed-container-bottom' style={{padding:'0 25px'}}> */}
      <BlankSpace />
      <div className={css.grid}>
        {[0, 1, 2].map((index) => {
          const modifiedGithub = { ...github };
          modifiedGithub.index = index + 1;
          return (
            <>
              <ProjectCards key={index} props={modifiedGithub} />
              {index == 2 ? null : <div className={css.vertical_space} />}


            </>
          );
        })}
      </div>
      {/* </Box> */}
    </Container>
  );
}

export default ProjectSection;

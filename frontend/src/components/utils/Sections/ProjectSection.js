import React from 'react';
import ProjectCards from './ProjectCards';
import css from './ProjectSection.module.css';
import sdc from '../../../../static/images/sdc.png';
import nanoGPT from '../../../../static/images/nanoGPT.jpg';
function ProjectSection() {

  const projects = [
    {
      index: 1,
      title: 'SelfDrivingCar',
      description: 'This project contains simulation of self driving car developed using Nerual Network',
      image: sdc,
      link: '/selfdrivingcar',
    },
    {
      index: 2,
      title: 'nanoGPT Scratch',
      description: 'The Nano GPT Language Model implemented here is a lightweight version of the GPT model .',
      image: nanoGPT,

      link: '/nanoGPT',
    },
    {
      index: 3,
      title: 'Sample Title 3',
      description: 'Description 3',
      image: sdc,

      link: '../../images/project_3',
    },
  ];

  return (
    <div className={css.grid}>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectCards key={index} props={project} />
          {index < projects.length - 1 && <div className={css.vertical_space} />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProjectSection;

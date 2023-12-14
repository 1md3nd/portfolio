import React from 'react';
import BlankSpace from '../utils/Useful/BlankSpace';
import DrivingCar from '../utils/Projects/DrivingCar';
import TopicH from '../utils/Useful/TopicH';
import TextBlock from '../utils/Useful/TextBlock';
import GithubLink from '../utils/Useful/GithubLink';
function SelfDrivingCar() {
  const intro = {
    topic_name: "Self Driving Car Simulation",
    // logo: idea,
    color: 'red',
    descp: "This project contains simulation of self driving car developed using Nerual Network, Technology used ReactJs, P5.js. \n The Neural Network learns by using self learning, we can save the car network to local storage in the browser."
  }
  const github = {
    project_name: intro.topic_name,
    project_link: 'https://github.com/1md3nd/nanoGPT-scratch'
  }
  return (
    <>
      <TopicH props={intro} />
      <GithubLink props={github} />
      <DrivingCar />
      <BlankSpace />
      <TextBlock text={intro.descp} />
      <BlankSpace />

    </>
  );
}

export default SelfDrivingCar;

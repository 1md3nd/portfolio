import React, { useState } from 'react';
import BlankSpace from '../utils/Useful/BlankSpace';
import bgimg from '..\\static\\images\\background\\colored_shade_0.svg';
import TextBlock from '../utils/Useful/TextBlock';
import TopicH from '../utils/Useful/TopicH';
import Ascii from '../utils/Projects/Ascii';
function TextToAsciiArt() {
  const args = {
    topic_name: 'Text To ASCII',
    color: 'orange',
    logo: '',
    bgimg: bgimg,
  }
  const projectDesc = "This project is used to convert the text in form of Ascii character of different fronts"
  return (
    <div className='layout'>
      <BlankSpace />
      <TopicH props={args} />
      <TextBlock text={projectDesc} />
      <Ascii />
    </div>
  );
};

export default TextToAsciiArt;

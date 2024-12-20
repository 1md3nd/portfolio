import React from 'react';
import BlankSpace from '../Useful/BlankSpace';
import bgimg from '../../assets/images/background/colored_shade_0.svg';
import TextBlock from '../Useful/TextBlock';
import TopicH from '../Useful/TopicH';
import Ascii from '../Projects/Ascii';

function TextToAsciiArt() {
  const args = {
    topic_name: 'Text To ASCII',
    color: 'orange',
    logo: '',
    bgimg: bgimg,
  };

  const projectDesc = "This project is used to convert the text in form of Ascii character of different fronts";

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

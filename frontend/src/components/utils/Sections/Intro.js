import React from 'react';
import TopicH from '../Useful/TopicH';
import css from './Intro.module.css';
import batman from '../../../../static/images/logo/Batman.png';
import TextBlock from '../Useful/TextBlock';
function Intro() {
  const into = {
    topic_name: "Hi! I'm Anurag !",
    logo: batman,
    text: "Hi there! I'm Anurag Ranjan, a passionate and driven Full Stack Developer with a keen interest in leveraging technology to create innovative solutions. With a solid foundation in Information Technology and a major focus on Big Data, I've been on an exciting journey of continuous learning and growth.\
During my time at KIET Group Of Institution, I honed my skills in programming languages such as Python, C++, and JavaScript. My academic journey also introduced me to the world of machine learning and data analysis, where I've developed a knack for solving complex problems through code and data.\
I'm not just a developer, but also an avid problem solver and learner. With a strong coding profile on platforms like Hackerrank, Codechef, and Leetcode, I've tackled challenges head-on and achieved 1698 Codechef highest rating. My proficiency in various programming languages, databases, and development tools enables me to bring innovative ideas to life.\
Whether it's crafting elegant code, designing efficient systems, or collaborating with teams, I'm passionate about pushing boundaries and delivering high-quality solutions. Feel free to explore my projects and skills to get a deeper insight into my journey as a developer.",
  }
  return (
    <div className={css.intoContainer} >
      <div className={css.top}>
        <TopicH props={into} />
      </div>
      <div className={css.intro}>
        <span>
          Hi there! I'm Anurag Ranjan, a passionate and driven Full Stack Developer with a keen interest in leveraging technology to create innovative solutions. With a solid foundation in Information Technology and a major focus on Big Data, I've been on an exciting journey of continuous learning and growth.During my time at KIET Group Of Institution, I honed my skills in programming languages such as Python, C++, and JavaScript. My academic journey also introduced me to the world of machine learning and data analysis, where I've developed a knack for solving complex problems through code and data.
        </span>
        <span>
          I'm not just a developer, but also an avid problem solver and learner. With a strong coding profile on platforms like Hackerrank, Codechef, and Leetcode, I've tackled challenges head-on and achieved 1698 Codechef highest rating. My proficiency in various programming languages, databases, and development tools enables me to bring innovative ideas to life.Whether it's crafting elegant code, designing efficient systems, or collaborating with teams, I'm passionate about pushing boundaries and delivering high-quality solutions.
        </span>
        <span>
          Feel free to explore my projects and skills to get a deeper insight into my journey as a developer.
        </span>
      </div>
    </div>
  );
}

export default Intro;

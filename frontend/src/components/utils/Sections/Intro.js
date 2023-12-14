import React from 'react';
import TopicH from '../Useful/TopicH';
import css from './Intro.module.css';
import batman from '../../../../static/images/logo/Batman.png';
import TextBlock from '../Useful/TextBlock';
function Intro() {
  const into = {
    topic_name: "Hi! I'm Anurag !",
    logo: batman,
    text: "🚀 Eager Software Developer Engineer | Python & Machine Learning \
    Welcome to my professional journey! I'm Anurag Ranjan, a dedicated and forward-thinking individual\
     passionate about making an impact in the world of software development. Currently navigating the complexities\
      of B.Tech in Information Technology at KIET Group of Institutions, my academic journey has been a playground \
      for mastering Artificial Intelligence, Machine Learning, and OOPS.\
    My recent internship at Healthkart allowed me to dive deep into real-world challenges.\
     Showcasing my proficiency in Python, machine learning, and the ELK stack. The thrill of deploying ML models\
      on AWS for real-time predictions further fueled my enthusiasm for creating efficient and impactful solutions.\
    Beyond academics and internships, I find joy in coding challenges. Whether it's achieving a commendable rank on Codechef,\
     solving complex problems on Leetcode, my journey is marked by continuous learning and pushing boundaries.\
    I thrive on curiosity, innovation, and a commitment to excellence. As I continue my journey, I am open to collaboration,\
     mentorships, and opportunities that challenge and inspire me. Let's connect, explore possibilities, and create something\
      extraordinary together!\
    #SoftwareDevelopment #Python #MachineLearning #ELKStack #ContinuousLearner #TechInnovator",
  }
  return (
    <div className={css.intoContainer} >
      <div className={css.top}>
        <TopicH props={into} />
      </div>
      <div className={css.intro} style={{ overflow: 'hidden' }}>
        <span style={{ height: 'var(--baseline)', fontWeight: 'bold' }}>
          Python & Machine Learning Enthusiast
        </span>
        <span>
          Welcome to my professional journey! I'm Anurag Ranjan, a dedicated and forward-thinking individual  passionate about making
          an impact in the world of software development. Currently navigating the complexities of B.Tech in Information Technology at KIET Group of Institutions,
          my academic journey has been a playground for mastering Artificial Intelligence, Machine Learning, and OOPS.
        </span>

        <span>
          My recent internship at Healthkart allowed me to dive deep into real-world challenges. Showcasing my proficiency in Python,
          machine learning, and the ELK stack. The thrill of deploying ML models on AWS for real-time predictions further fueled my enthusiasm
          for creating efficient and impactful solutions.

        </span>


        <span>
          Beyond academics and internships, I find joy in coding challenges. Whether it's achieving a commendable rank on Codechef, solving complex problems on Leetcode,
          I thrive on curiosity, innovation, and a commitment to excellence. As I continue my journey, I am open to collaboration,
          mentorships, and opportunities that challenge and inspire me.

        </span>
        <span>
          Let's connect, explore possibilities, and create something extraordinary together!

        </span>
      </div>
    </div>
  );
}

export default Intro;

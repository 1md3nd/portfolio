import React from 'react';
import css from './SkillsSection.module.css';
import TopicH from '../Useful/TopicH';
import skill_logo from '../../../../static/images/skills.png';


function SkillsSection() {
  const skills = ['HTML/CSS', 'JavaScript', 'HTML/CSS', 'JavaScript', 'HTML/CSS', 'JavaScript', 'HTML/CSS', 'JavaScript', 'HTML/CSS', 'JavaScript', 'HTML/CSS', 'JavaScript',]; // Add more skills
  const args = {
    topic_name: 'Skills',
    color: `var(--pink)`,
    logo: skill_logo,
  }
  return (
    <div className={css.container}>
      <div className={css.top}>
        <TopicH props={args} />
      </div>
      <div className={css.skills}>
        {skills.map((args) => {
          return (
            <div className={css.skill}>
              <h3>{args}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsSection;

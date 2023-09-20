import React from 'react';
import { Link } from '@mui/material';
import TopicH from '../Useful/TopicH';
import css from './Platforms.module.css';
import bgimg from '../../../../static/images/background/colored_shade_0.svg';

const Platforms = () => {
  // Add your social account links here
  const socialLinks = [
    { platform: 'LeetCode', link: 'https://twitter.com/yourusername' },
    { platform: 'CodeChef', link: 'https://www.instagram.com/yourusername' },
    { platform: 'GitHub', link: 'https://www.github.com/yourusername' },
    // Add more social links as needed
  ];

  const args = {
    topic_name: 'platforms',
    color: `var(--red)`,
    // logo: aboutmeimg,
    bgimg: bgimg,
  };

  return (
    <div className={css.container} >
      <div className={css.top}>

        <TopicH props={args} />
      </div>
      <div className={css.accounts}>
        {socialLinks.map((account) => (
          <div key={account.platform} className={css.row}>
            <div  >
              {account.platform}
            </div>
            <Link className={css.btntext} href={account.link} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
              <div className={css.button}>
                <b>{account.platform}</b>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Platforms;

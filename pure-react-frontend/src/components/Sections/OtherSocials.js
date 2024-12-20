import React from 'react';
import { Link } from '@mui/material';
import css from './OtherSocials.module.css';
import DynamicImage from '../Useful/DynamicImage';
import insta from '../../assets/logo/instagram.png';
import twitter from '../../assets/images/logo/instagram.png';
import linkedin from '../../assets/images/logo/linkedin.svg';
function OtherSocials() {
  const socialLinks = [
    { platform: 'twitter', link: 'https://twitter.com/1md3nd', img: twitter },
    { platform: 'instagram', link: 'https://www.instagram.com/1md3nd', img: insta },
    { platform: 'linkedin', link: 'https://www.linkedin.com/yourusername', img: linkedin  },
    // Add more social links as needed
  ];
  return (
    <div className={css.container} style={{ height: `var(--baseline)`, borderLeft: `var(--border)` }}>
      <div className={css.top}>
        <h3> Other Socials</h3>
      </div>
      <div className={css.accounts}>
        {socialLinks.map((account) => (
          <div key={account.platform} className={css.row}>
            {/* <div  >
                  {account.platform}
                </div> */}
            <div className={css.button}>
              <Link className={css.btntext} href={account.link} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                <DynamicImage image={account.img} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherSocials;

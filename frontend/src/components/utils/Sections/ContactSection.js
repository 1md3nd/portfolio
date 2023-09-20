import React from 'react';
import TopicH from '../Useful/TopicH';
import css from './ContactSection.module.css';
function ContactSection() {
  const args = {
    topic_name: 'Contact me',
  };
  return (
    <div className={css.container}>
      <div className={css.top}>
        <TopicH props={args} />
      </div>
      <div className={css.content}>
        <div className={css.textdesc}>
          <h3>
            If you have any questions or inquiries, feel free to reach out to me!
          </h3>
        </div >
        <div className={css.email}>
          <h3>Email</h3><span>
            anurag.botmaster@outlook.com
          </span>
        </div>
        <div className={css.phone}>
          <h3>
            Phone
          </h3>
          <span>
            8630004742
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

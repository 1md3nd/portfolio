import React from 'react';
import ContactSection from '../utils/Sections/ContactSection';
import BlankSpace from '../utils/Useful/BlankSpace';
import Resume from '../utils/Useful/Resume';
function ContactPage() {
  return (
    <>
      <BlankSpace />
      <Resume />
      <BlankSpace />
      <ContactSection />
    </>
  );
}

export default ContactPage;

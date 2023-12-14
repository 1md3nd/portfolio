import React from 'react';
import Platforms from '../utils/Sections/Platforms';
import BlankSpace from '../utils/Useful/BlankSpace';
import Intro from '../utils/Sections/Intro';
import ProjectSection from '../utils/Sections/ProjectSection';
import SkillsSection from '../utils/Sections/SkillsSection';
import ContactSection from '../utils/Sections/ContactSection';
import OtherSocials from '../utils/Sections/OtherSocials';
import Resume from '../utils/Useful/Resume';
function AboutMe() {
    return (
        <div className='about'>
            <BlankSpace />
            <Intro />
            <BlankSpace />
            <Resume />
            <BlankSpace />
            <ProjectSection />
            <BlankSpace />
            <SkillsSection />
            <BlankSpace />
            <Platforms />
            <OtherSocials />
            <BlankSpace />
            <ContactSection />
        </div>
    )
}
export default AboutMe;
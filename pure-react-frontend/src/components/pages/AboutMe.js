import React from 'react';
import Platforms from '../Sections/Platforms';
import BlankSpace from '../Useful/BlankSpace';
import Intro from '../Sections/Intro';
import ProjectSection from '../Sections/ProjectSection';
import SkillsSection from '../Sections/SkillsSection';
import ContactSection from '../Sections/ContactSection';
import OtherSocials from '../Sections/OtherSocials';
import Resume from '../Useful/Resume';
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
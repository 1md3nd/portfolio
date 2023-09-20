import React from 'react';
import HomeIntro from '../utils/Sections/HomeIntro';
import BlankSpace from '../utils/Useful/BlankSpace';
import Welcome from '../utils/Welcome';
function PortfolioPage() {
  return (
    <div className='home'>
      <BlankSpace />
      <Welcome />
      <BlankSpace />
      <HomeIntro />
      <BlankSpace />
    </div>
  );
}

export default PortfolioPage;

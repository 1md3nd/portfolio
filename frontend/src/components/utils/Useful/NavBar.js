import React, { useState, useEffect } from "react";
import cssm from './navbar.module.css';
import { Link } from "react-router-dom";
import Menu from "./Menu";
function NavBar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(currentTime);

  return (
    <div className={cssm.outer}>
      <header className={cssm.root} >
          <div  className={cssm.logo}  >
         <Link to="/" aria-label="Go to homepage"><h2>The Platform</h2></Link>
          </div>
          <div className={cssm.clock}>🕛</div>
        <div  className={cssm.date}>
         {formattedTime}
        </div >
        
        {/* <Link  to="/about" aria-label="about me" >
          <div className={cssm.options}>
            Projects
          </div>
        </Link >         */}
        <Link to="/contact" aria-label="contact me" >
          <div className={cssm.options}>
            Contact
          </div>
        </Link>
        <Link to="/about" aria-label="about me">
          <div className={cssm.options}>
            About
          </div>
        </Link>
        <div className={cssm.toogle}>
        <Menu/>
        </div>
      </header>
    </div>
  );
}

export default NavBar;

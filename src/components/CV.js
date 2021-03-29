import React from "react";
import Summary from "./Summary";
import TechnicalSkills from "./TechnicalSkills";
import WorkExperience from "./WorkExperience";
import Qualifications from "./Qualifications";
import AlternativeExperience from "./AlternativeExperience";
// import Contribution from "./Contribution";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import { useState } from "react";
import { Link   } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

function CV() {
  const [showContent, setShowContent] = useState(false);
  
  // trying toggle reminder to trigger css
  const toggleReminder = () => {
    setShowContent(!showContent);
    return showContent;
  };
  return (
    <div id="cv" className="cv">
      <Menu >
        <a className="menu-item" href="#cv">
          Top
        </a>
        <a className="menu-item" href="#TechnicalSkills">
          Technical Skills
        </a>
        <a className="menu-item" href="#WorkExperience">
          Work Experience
        </a>
        <a className="menu-item" href="#Qualifications">
          Qualifications
        </a>
        <a className="menu-item" href="#AlternativeExperience">
          Alternative Experience
        </a>
        <a className="menu-item" href="#Hobbies">
          Hobbies
        </a>
        <a className="menu-item" href="#Contact">
          Contact
        </a>
        <Link className="menu-item" to="/Resume">
          Tilt CV
        </Link>
        {/* <a onClick={showSettings} className="menu-item--small" href="">
          Settings
        </a> */}
      </Menu>
      <Summary onToggle={toggleReminder} showContent={showContent} />
      <TechnicalSkills />
      <WorkExperience />
      <Qualifications />
      <AlternativeExperience />
      <Hobbies />
      <Contact />
     
    </div>
  );
}

export default CV;

import React from "react";
import Summary from "./Summary";
import TechnicalSkills from "./TechnicalSkills";
import WorkExperience from "./WorkExperience";
import Qualifications from "./Qualifications";
import AlternativeExperience from "./AlternativeExperience";
import Contribution from "./Contribution";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import { useState, useEffect } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

function CV() {
  const [showContent, setShowContent] = useState(false);

  // trying toggle reminder to trigger css
  const toggleReminder = () => {
    setShowContent(!showContent);
    return showContent;
  };
  return (
    <div className="cv">
        <Summary onToggle={toggleReminder} showContent={showContent} />

      <TechnicalSkills />
      {/* <WorkExperience />
      <Qualifications />
      <AlternativeExperience />
      <Hobbies />
      <Contact /> */}
      <Link to="/Resume" className="btn btn-4">
        Return
      </Link>
    </div>
  );
}

export default CV;

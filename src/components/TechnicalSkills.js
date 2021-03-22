import React, { useEffect } from "react";
import TechnicalSkillsSVG from "../images/skills.svg";

function TechnicalSkills() {
  return (
    <div className="tSkills">
      <div className="textContainer">
        <div className="innerTextContainer">
          <h1>Technical skills</h1>

          <p>
            <strong>
              Languages, frameworks &amp; technologies I have experience with:
            </strong>
          </p>
          <ul>
            <li>(10,6 year) Photoshop, Premier Pro </li>
            <li>(3 years) WordPress, WooCommers </li>
            <li>(1 year) JavaScript (ES6), HTML5, CSS, React </li>
            <li>(1 year) Java, Junit </li>
            <li>(1 year) SASS (LESS), Webpack (gulp) </li>
          </ul>
          <p>
            <strong>Other technologies I have experimented with are:</strong>
          </p>
          <ul>
            <li>&nbsp;JSON, Node.js, JSX</li>
            <li>Typescript, npm, Promises, Axios, Moment.js, Bootstrap</li>
          </ul>
          <p>
            <strong>I have a general understanding of:&nbsp;</strong>
          </p>
          <ul>
            <li>HTTP, REST, OOP, effective algorithms</li>
            <li>Unit testing, PHP</li>
            <li>SEO, Usability Experience</li>
          </ul>
          <p>
            <strong>Tools that I use:</strong>
          </p>
          <ul>
            <li>Google Docs, FileZilla</li>
            <li>Illustrator, VSC</li>
            <li>Git on GitHub</li>
          </ul>
        </div>
      </div>

      <div className="imgContainer">
        {/* <hr /> */}
        <img src={TechnicalSkillsSVG} alt="skills Logo" />
        {/* <hr /> */}
      </div>
    </div>
  );
}

export default TechnicalSkills;

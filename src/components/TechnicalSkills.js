import React, { useEffect } from "react";
import TechnicalSkillsSVG from "../images/skills.svg";

function TechnicalSkills() {
  return (
    <div className="tSkills">
      <div className="topContainer">
        <div className="textContainer">
          <nav class="cl-effect-17">
            <a className="h3Substitute" data-hover="Technical skills">
              Technical skills
            </a>
          </nav>
        </div>

        <div className="imgContainer">
          {/* <hr /> */}
          <img src={TechnicalSkillsSVG} alt="skills Logo" />
          {/* <hr /> */}
        </div>
      </div>

      <div className="bottomContainer">
        <div className="outerContainer">
        <div className="container">

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
        </div>
        <div className="container">
          <p>
            <strong>Other technologies I have experimented with are:</strong>
          </p>
          <ul>
            <li>JSON, Node.js, JSXm, three.js</li>
            <li>Typescript, npm, Promises, Axios, Moment.js, Bootstrap</li>
            <li>REST, OOP, effective algorithms</li>
            <li>Unit testing, React Native</li>
            <li>SEO, Usability Experience</li>
          </ul>
        </div>
        <div className="container">
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
      </div>
    </div>
  );
}

export default TechnicalSkills;

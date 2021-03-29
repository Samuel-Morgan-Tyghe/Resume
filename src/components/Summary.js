import { Link } from "react-router-dom";
// import "../CreativeLinkEffects/css/component.css";
import "../extensions/component.css";

const Summary = ({ onToggle, showContent }) => {
  return (
    <div className="summaryPage">
      <div className="summaryOuter laptop">
        <div className="navbar">
          <nav className="cl-effect-21">
            <a className="summary-menu-item" href="#TechnicalSkills">
              TechnicalSkills
            </a>
          </nav>{" "}
          <nav className="cl-effect-21">
            <a className="summary-menu-item" href="#WorkExperience">
              Work Experience
            </a>
          </nav>{" "}
          <nav className="cl-effect-21">
            <a className="summary-menu-item" href="#Qualifications">
              Qualifications
            </a>
          </nav>{" "}
          <nav className="cl-effect-21">
            <a className="summary-menu-item" href="#AlternativeExperience">
              Alternative Experience
            </a>
          </nav>{" "}
          <nav className="cl-effect-21">
            <a className="summary-menu-item" href="#Hobbies">
              Hobbies
            </a>
          </nav>{" "}
          <nav className="cl-effect-21">
            <a className="summary-menu-item" href="#Contact">
              Contact
            </a>
          </nav>{" "}
          <nav className="cl-effect-21">
            <Link className="summary-menu-item" to="/Resume">
              Tilt CV
            </Link>
          </nav>
        </div>
      </div>
      <div className="summaryOuter">
        <div className="summary" id="summary">
          <h3>Summary</h3>
          <div>
            <p>
              5 years of Graphic Design, Digital Collage, and AI Art experience.
              2 years working with Java, 1 year using React, SASS, and Webpack
              to build <em>websites</em> and <em>apps</em>, I&rsquo;m looking
              for an organisation that will fully utilise my drive &amp;
              ambition whilst providing career advancement opportunities.
              I&rsquo;m a self-motivated learner &amp; constantly
              self-developing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

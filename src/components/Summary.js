import Summary3D from "./SummaryScene";

const Summary = ({ onToggle, showContent }) => {
  /* This CSS style is applied when the drawer is opened */
  const openedStyle = {
    // maxWidth: "100%" /* max-with is 100% when the drawer is opened */,
    opacity: 1 /* opened drawer is opaque */,
    /* Upon transitioning to Open,
     animate `max-width' for 0.5s and opacity for 0.2s */
    height: "auto",
    transition: "max-width 0.5s, opacity 0.2s",
  };

  /* This CSS style is applied when the drawer is closed */
  const closedStyle = {
    // maxWidth: 0 /* max-width is 0 in the closed drawer */,
    opacity: 0 /* closed drawer is transparent */,
    /* Upon transitioning to Closed,
     animate `max-width' for 0.5s and opacity for 0.2s */
    height: "0",
    transition: "max-width 0.5s, opacity 0.2s",
  };

  return (
    <div className="summaryPage">
      {/* <Summary3D /> */}
      <div className="summaryOuter">
        <div className="navbar">
          <a>TechnicalSkills</a>
          <a>WorkExperience</a>
          <a>Qualifications</a>
          <a>AlternativeExperience</a>
          <a>Hobbies</a>
          <a>Contact</a>
        </div>
      </div>
      <div className="summaryOuter">
        <div
          className="summary hoverTransition"
          id="summary"
          onClick={() => onToggle()}
        >
          <h3>Summary</h3>
          <div
          // style={showContent ? closedStyle : openedStyle}
          // className={showContent ? "hidden" : ""}
          >
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

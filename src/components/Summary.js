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

      <div
        className="summary hoverTransition"
        id="summary"
        onClick={() => onToggle()}
      >
        <nav class="cl-effect-6">
          <a className='h3Substitute' data-hover="Summary">Summary</a>
        </nav>
        <div
        // style={showContent ? closedStyle : openedStyle}
        // className={showContent ? "hidden" : ""}
        >
          <p>
            5 years of
            <strong> Graphic Design, Digital Collage, </strong>and{" "}
            <strong>AI Art</strong> experience. 2 years working with Java, 1
            year using <strong>React</strong>,<strong> SASS</strong>, and{" "}
            <strong>Webpack</strong> to build <em>websites</em> and{" "}
            <em>apps</em>, I&rsquo;m looking for an organisation that will fully
            utilise my drive &amp; ambition whilst providing career advancement
            opportunities. I&rsquo;m a self-motivated learner &amp; constantly
            self-developing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;

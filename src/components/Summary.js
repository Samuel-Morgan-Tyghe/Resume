const Summary = ({ onToggle, showContent }) => {
  return (
    <div className="summary hoverTransition" onClick={() => onToggle()}>
      <h1>Summary</h1>
      <div
        className={
          showContent ? "summaryTransition" : "summaryTransition hidden"
        }
      >
        <p>
          5 years of
          <strong> Graphic Design, Digital Collage, </strong>and{" "}
          <strong>AI Art</strong> experience. 2 years working with Java, 1 year
          using <strong>React</strong>,<strong> SASS</strong>, and{" "}
          <strong>Webpack</strong> to build <em>websites</em> and <em>apps</em>,
          I&rsquo;m looking for an organisation that will fully utilise my drive
          &amp; ambition whilst providing career advancement opportunities.
          I&rsquo;m a self-motivated learner &amp; constantly self-developing.
        </p>
      </div>
    </div>
  );
};

export default Summary;

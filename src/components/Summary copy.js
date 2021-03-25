// import { motion } from "framer-motion";
// import { useState } from "react";
// import AnimateHeight from 'react-animate-height';


// const Summary = ({ onToggle, showContent }) => {
// /* This CSS style is applied when the drawer is opened */
// const openedStyle = {
//   maxWidth: '100%' /* max-with is 100% when the drawer is opened */,
//   /* Upon transitioning to Open,
//      animate `max-width' for 0.5s*/
//   transition: 'max-width 0.5s'
// };

// /* This CSS style is applied when the drawer is closed */
// const closedStyle = {
//   maxWidth: 0 /* max-width is 0 in the closed drawer */,
//   /* Upon transitioning to Closed,
//      animate `max-width' for 0.5s */
//   transition: 'max-width 0.5s'
// };
//   return (
//     <AnimateHeight
//     id='example-panel'
//     duration={ 500 }
//     height={ 'auto' } // see props documentation below
//   >
    
//     <div className="summary hoverTransition" onClick={() => onToggle()}>
//       <h1>Summary</h1>
//          {/* <motion.div
//       className="block"
//       // onClick={() => setIsActive(!isActive)}
//       animate={{
//         scale: showContent ? 0 : 1 ,
//         display: showContent ? 'none' : 'block'
//       }}
//     > */}
//         <p>
//           5 years of
//           <strong> Graphic Design, Digital Collage, </strong>and{" "}
//           <strong>AI Art</strong> experience. 2 years working with Java, 1 year
//           using <strong>React</strong>,<strong> SASS</strong>, and{" "}
//           <strong>Webpack</strong> to build <em>websites</em> and <em>apps</em>,
//           I&rsquo;m looking for an organisation that will fully utilise my drive
//           &amp; ambition whilst providing career advancement opportunities.
//           I&rsquo;m a self-motivated learner &amp; constantly self-developing.
//         </p>
//      {/* </motion.div> */}
//     </div>
//     </AnimateHeight>
//   );
// };

// export default Summary;

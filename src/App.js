import "./App.css";
import React, { Component } from 'react';

import i2 from "./images/(2).png";
import i3 from "./images/(3).png";
import i4 from "./images/(4).png";
import i5 from "./images/(5).png";
import i6 from "./images/(6).png";
import i7 from "./images/(7).png";
import i8 from "./images/(8).png";
import i9 from "./images/(9).png";
import i10 from "./images/(10).png";
import i11 from "./images/(11).png";
import i12 from "./images/(12).png";
import i13 from "./images/(13).png";
import i14 from "./images/(14).png";
import i15 from "./images/(15).png";
import i16 from "./images/(16).png";
import i17 from "./images/(17).png";
import i18 from "./images/(18).png";
import i19 from "./images/(19).png";
import i20 from "./images/(20).png";
import i21 from "./images/(21).png";
import i22 from "./images/(22).png";
import Tilt from './tilt.js'


class App extends Component {
  onMouseLeave(e) {
    console.log('clientY:', e.nativeEvent.clientY);
  }
  render() {
    return (

      <div className="App">
        <div className="header">     
      <Tilt className="Tilt" options={{ max : 55,  easing:         "cubic-bezier(.03,.98,.52,.99)"}}  >
      <img className="Tilt-inner TZ1" src={i2}     />
      <img className="Tilt-inner TZ2" src={i3}     />
      <img className="Tilt-inner TZ3" src={i4}    />
      <img className="Tilt-inner TZ4" src={i5}    />
      <img className="Tilt-inner TZ5" src={i6}     />
      <img className="Tilt-inner TZ6" src={i7}     />
      <img className="Tilt-inner TZ7" src={i8}     />
      <img className="Tilt-inner TZ8" src={i9}     />
      <img className="Tilt-inner TZ9" src={i10}    />
      <img className="Tilt-inner TZ10" src={i11}    />
      <img className="Tilt-inner TZ11" src={i12}    />
      <img className="Tilt-inner TZ12" src={i13}    />
      <img className="Tilt-inner TZ13" src={i14}    />
      <img className="Tilt-inner TZ14" src={i15}    />
      <img className="Tilt-inner TZ15" src={i16}    />
      <img className="Tilt-inner TZ16" src={i17}    />
      <img className="Tilt-inner TZ17" src={i18}    />
      <img className="Tilt-inner TZ18" src={i19}    />
      <img className="Tilt-inner TZ19" src={i20}    />
      <img className="Tilt-inner TZ20" src={i21}    />
      <img className="Tilt-inner TZ21" src={i22}    />
      </Tilt>
      </div>
      <div className='cv'>

        <div className='summary'>
      <h1>Summary</h1>
<p>I&rsquo;m a graduate from the Bath School Of Art &amp; Design with a passion for software designing &amp; development using <strong>Html</strong>, <strong>CSS</strong>, <strong>JavaScript &amp; Java</strong>. I&rsquo;m looking for an organisation that will fully use my drive &amp; ambition whilst providing career advancement opportunities. I&rsquo;m a self-motivated learner &amp; I have developed an understanding of the following areas:</p>
</div>


<div className='tSkills'>
<h1>Technical skills</h1>
<p><strong>Languages, frameworks &amp; technologies I have experience with:</strong></p>
<ul>
<li>JavaScript (ES6), HTML5, CSS, React</li>
<li>Java, Junit</li>
<li>SASS (LESS), Webpack (gulp)</li>
<li>WordPress, WooCommers</li>
</ul>
<p><strong>Other technologies I have experimented with are:</strong></p>
<ul>
<li>&nbsp;JSON, Node.js, JSX, PHP</li>
<li>Typescript, npm, Promises, Axios, Moment.js, Bootstrap</li>
</ul>
<p><strong>I have general understanding of:&nbsp;</strong></p>
<ul>
<li>HTTP, REST, OOP, effective algorithms</li>
<li>Unit testing</li>
<li>Google Search Optimisation, SEO, Usability Experience</li>
</ul>
<p><strong>Tools that I use:</strong></p>
<ul>
<li>Google Docs, FileZilla</li>
<li>Illustrator, Photoshop, Premier Pro, VSC</li>
<li>Git on GitHub</li>
</ul>
<p><strong>Operating Systems:</strong></p>
<ul>
<li>working on MacOS</li>
<li>comfortable with development on Windows</li>
</ul></div>

<div className='pSkills'>
<h1>Personal skills</h1>
<p>Stakeholder negotiation, requirement engineering, processes coordination, ideas person, committed to self developing, team player.</p>
<h1>Academic &amp; professional qualifications</h1>
<ul>
<li>CodeAcademy: Learn Java, SoloLearn: Java, W3schools: Java</li>
<li>Bachelors in Arts (Fine Art), University of Bath School Of Art &amp; Design, 2016.</li>
</ul>
<p><strong>Awards:&nbsp;</strong></p>
<ul>
<li>Black Swan Open Arts (Runner-Up 2015/2016)</li>
<li>Fringe Arts Bath Open (Runner-Up 2017/2018)</li>
<li>London College Of Sculpture (Placement 2013)</li>
</ul></div>

<div className='projects'>
<h1>Project &amp; work experience</h1>
<h2><a href="https://github.com/Samuel-Morgan-Tyghe/Api-Account-App">CRUD / Api-Account-App</a></h2>
<p><em>React Application which Create, Reads, Updates and Deletes Accounts using a Rest API&nbsp;</em></p>
<ul>
<li>Rest API, JSON&nbsp;</li>
<li>React knowledge, hooks, states, etc</li>
<li>Local Server to store login information</li>
</ul>
<p><strong>Technologies &amp; Tools</strong>: API, JSON, React, Animations, gulp, Sass, Photoshop</p>
<hr></hr>
<h2><a href="https://github.com/Samuel-Morgan-Tyghe/Creative-Portfolio">Creative Portfolio</a></h2>
<p><em>My personal creative Portfolio made using Jekyll</em></p>
<ul>
<li>Jekyll, Gem, Config</li>
<li>Gh Pages, Image sizes, URL Configuration</li>
<li>Liquid, Layouts, Custom Theme</li>
</ul>
<p><strong>Technologies &amp; Tools</strong>: Jekyll, Ruby, Git, Liquid, Themes</p>
<hr></hr>
<h2><a href="https://github.com/Samuel-Morgan-Tyghe/Weather-App">Weather-App</a></h2>
<p><em>An App for checking the Weather in 3 different cities.</em></p>
<ul>
<li>Webpack and Gulp Module Bundle and pre-processing minification.</li>
<li>Basic Typescript functionality, Axios get, JSON.</li>
<li>Less and Bootstrap.</li>
</ul>
<p><strong>Technologies &amp; Tools</strong>: HTML5, LESS, Npm, Webpack, Gulp, Typescript, Promises, Api, Axios, HTTP, Moment.js, Git, Bootstrap, JSON.</p>
<hr></hr>
<h2><a href="https://automated-art.co.uk/">E-commerce platform: Automated-Art&nbsp;</a></h2>
<p>Founder 2018 - Present</p>
<p><em>An e-commerce Where I automate the creation, distribution and marketing on artwork.</em></p>
<ul>
<li>Solely responsible for designing &amp; developing the initial platform.</li>
<li>FTP management.</li>
<li>Plugin optimisation &amp; configuration.</li>
</ul>
<p><strong>Technologies &amp; Tools</strong>: Google Analytics, Google Vision API, Lightroom, FileZilla, Photoshop, Woo-commerce, Product CSV, W3 Total Cache.</p>
<hr></hr>
<h2><a href="https://github.com/Samuel-Morgan-Tyghe/Basic-Website-To-React">Web Design/Development: Side Room Recordings</a></h2>
<p><em>A commercial website advertising the services of a portable recording studio, its playful approach includes P5js of different shapes of sound waves involved in recording.&nbsp;</em></p>
<ul>
<li>One-page application using React Frameworks.</li>
<li>Following best web dev practices</li>
<li>Fully Responsive Design</li>
</ul>
<p><strong>Technologies &amp; Tools</strong>: JavaScript, CSS, Html, p5.js, git-pages, Visual Studio Code.</p>
<hr></hr>
<h2><a href="https://github.com/Samuel-Morgan-Tyghe/Ambient-Tic-Tac-Toe">Gaming Project &ndash; Tic Tac Toe</a></h2>
<p><em>A visual &amp; auditory remake of the traditional tic-tac-toe game, using Java swing GUI to incorporate interactive Gifs &amp; audio samples from exotic instruments.</em></p>
<ul>
<li>Cross-platform UI design &amp; implementation.</li>
<li>Integrating audio into packaging</li>
<li>Use of Java algorithms &amp; data structures.</li>
</ul>
<p><strong>Technologies &amp; Tools</strong>: Java, Swing, AudioInputStream, AudioSystem, Clip, Color, GradientPaint, Graphics, Graphics2D.</p>
<hr></hr>
<h2><a href="https://github.com/Samuel-Morgan-Tyghe/Database-Create-And-Login">Database Project &ndash; Login DB</a></h2>
<p><em>An application to simulate the secure login process, containing a Create Account &amp; Login page that stores user details on an online database using SQL PhpMyAdmin Passwords are encrypted using jBCrypt.</em></p>
<ul>
<li>Implementation of the system database &amp; login functionality.</li>
<li>Application of encryption to secure data storage, database calls, etc.</li>
<li>End-to-end testing to discover usability, functionality &amp; security testing.</li>
</ul>
<p><strong>Technologies &amp; Tools</strong>: Java, SQL, JDBC, Encryption, JBCrypt, JUnit, Swing.</p>
<hr></hr>
<h2><a href="https://github.com/Samuel-Morgan-Tyghe/App-Droste">Droste Effect App - Multi-platform App</a></h2>
<p><em>An interactive application allowing users to manipulate images using the droste effect, the app primarily uses processing.&nbsp;</em></p>
<ul>
<li>Tailored the system algorithm to effectively read &amp; manipulate uploaded images.</li>
<li>Implementation of the file storage &amp; formatting.</li>
<li>Integration of the external libraries &amp; utility packages.</li>
</ul>
<p><strong>Technologies &amp; Tools</strong>: Java, Processing, PApplet, PImage, PVector, Photoshop.</p>

</div>

<div className='work'>
<h2><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g186370-d8488528-Reviews-The_Green_Bird_Cafe-Bath_Somerset_England.html">GreenBird Cafe</a></h2>
<p>Chef 2016 &ndash; Present</p>
<p><em>In this role I prepared &amp; cooking food, washing dishes &amp; clearing tables. This role involved interacting with customers, front &amp; back of the house team. The Greenbird is of the most successful independent caf&eacute;s in Bath. This role was challenging, rewarding &amp; despite the notoriously evolving team, I remained a consistent member of the core team spanning over 3 &amp; a half years. I worked well within the changing dynamics of the working environment &amp; often found myself to be a mediator when difficult or tense situations occurred.</em></p>
<ul>
<li>Calm &amp; Confident under pressure</li>
<li>Self Initiated&nbsp;</li>
<li>Loyal</li>
</ul>
<hr></hr>
<h2>Freelance</h2>
<p>Graphic Designer 2017 &ndash; Present</p>
<p><em>I have been commissioned by musicians, charities &amp; music Venues to undertake tailor made, client led work. This required working &amp; sticking to deadlines despite changes to the client's requirements. To maintain high standards of quality, I kept up to date with the latest developments in creative software. This complimented my artistic ability &amp; passion for self development.</em></p>
<ul>
<li>Time Management Skills</li>
<li>Communication Skills</li>
<li>Strong Client Relationship</li>
</ul>
</div>

<div className='contribution'>
<h2><a href="https://github.com/Samuel-Morgan-Tyghe/PhotoEditor">PhotoEditorSDK - Android App</a></h2>
<p>Contributor</p>
<p><em>Adhering to coding standards with consideration of UX, I added Various Functionalities to the text editor module.&nbsp;</em></p>
<p>The Latest Contribution: <a href="https://github.com/Samuel-Morgan-Tyghe/PhotoEditor">PhotoEditor</a>.</p>
<ul>
<li>Analyse coding standards and implement non-fatal changes.</li>
<li>Follow visual standards to keep a uniformed look.</li>
<li>Android Library</li>
</ul>
<p>Technologies &amp; Tools: Java, Android-Library, Swing, Image Processing, Git, Android Studio.</p>
</div>

<div className='hobbies'>
<h1>Hobbies &amp; interests</h1>
<ul>
<li>Keeping up-to date with IT industry trends (reading, podcasting, etc)</li>
<li>Professional experience in film/TV performance &amp; production.</li>
<li>Attending Creative Coding Meet-ups</li>
<li>Experimenting with software to create Art.</li>
<li>Curating Exhibitions featuring Digital Art</li>
</ul>
<p><br /></p>
</div>
<div className='details'>
<p>Number: 07376080332</p>
<p>Email: samuelmorganvisual@gmail.com</p>
<p><a href="https://www.linkedin.com/in/samuel-morgan-tyghe/">LinkedIn</a></p>
<p><a href="https://github.com/Samuel-Morgan-Tyghe">Github</a></p>

      </div></div></div>
   );
  }
}

export default App;

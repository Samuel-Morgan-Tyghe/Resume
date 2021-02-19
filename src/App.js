import React, { Component } from "react";

import i1 from "./images/1776px/1.webp";
import i2 from "./images/1776px/2.webp";
import i3 from "./images/1776px/3.webp";
import i4 from "./images/1776px/4.webp";
import i5 from "./images/1776px/5.webp";
import i6 from "./images/1776px/6.webp";
import i7 from "./images/1776px/7.webp";
import i8 from "./images/1776px/8.webp";
import i9 from "./images/1776px/9.webp";
import i10 from "./images/1776px/10.webp";
import i11 from "./images/1776px/11.webp";
import i12 from "./images/1776px/12.webp";
import i13 from "./images/1776px/13.webp";
import i14 from "./images/1776px/14.webp";
import i15 from "./images/1776px/15.webp";
import i16 from "./images/1776px/16.webp";
import i17 from "./images/1776px/17.webp";
import i18 from "./images/1776px/18.webp";
import i19 from "./images/1776px/19.webp";
import i20 from "./images/1776px/20.webp";
import i21 from "./images/1776px/21.webp";

import a2 from "./images/960px/2.webp";
import a3 from "./images/960px/3.webp";
import a4 from "./images/960px/4.webp";
import a5 from "./images/960px/5.webp";
import a6 from "./images/960px/6.webp";
import a7 from "./images/960px/7.webp";
import a8 from "./images/960px/8.webp";
import a9 from "./images/960px/9.webp";
import a10 from "./images/960px/10.webp";
import a11 from "./images/960px/11.webp";
import a12 from "./images/960px/12.webp";
import a13 from "./images/960px/13.webp";
import a14 from "./images/960px/14.webp";
import a15 from "./images/960px/15.webp";
import a16 from "./images/960px/16.webp";
import a17 from "./images/960px/17.webp";
import a18 from "./images/960px/18.webp";
import a19 from "./images/960px/19.webp";
import a20 from "./images/960px/20.webp";
import a21 from "./images/960px/21.webp";
import a1 from "./images/960px/1.webp";

import b2 from "./images/684px/2.webp";
import b3 from "./images/684px/3.webp";
import b4 from "./images/684px/4.webp";
import b5 from "./images/684px/5.webp";
import b6 from "./images/684px/6.webp";
import b7 from "./images/684px/7.webp";
import b8 from "./images/684px/8.webp";
import b9 from "./images/684px/9.webp";
import b10 from "./images/684px/10.webp";
import b11 from "./images/684px/11.webp";
import b12 from "./images/684px/12.webp";
import b13 from "./images/684px/13.webp";
import b14 from "./images/684px/14.webp";
import b15 from "./images/684px/15.webp";
import b16 from "./images/684px/16.webp";
import b17 from "./images/684px/17.webp";
import b18 from "./images/684px/18.webp";
import b19 from "./images/684px/19.webp";
import b20 from "./images/684px/20.webp";
import b21 from "./images/684px/21.webp";
import b1 from "./images/684px/1.webp";

import c2 from "./images/375px/2.webp";
import c3 from "./images/375px/3.webp";
import c4 from "./images/375px/4.webp";
import c5 from "./images/375px/5.webp";
import c6 from "./images/375px/6.webp";
import c7 from "./images/375px/7.webp";
import c8 from "./images/375px/8.webp";
import c9 from "./images/375px/9.webp";
import c10 from "./images/375px/10.webp";
import c11 from "./images/375px/11.webp";
import c12 from "./images/375px/12.webp";
import c13 from "./images/375px/13.webp";
import c14 from "./images/375px/14.webp";
import c15 from "./images/375px/15.webp";
import c16 from "./images/375px/16.webp";
import c17 from "./images/375px/17.webp";
import c18 from "./images/375px/18.webp";
import c19 from "./images/375px/19.webp";
import c20 from "./images/375px/20.webp";
import c21 from "./images/375px/21.webp";
import c1 from "./images/375px/1.webp";

import "./App.css";

import Tilt from "./tilt.js";

export const fourkRes = [
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  i11,
  i12,
  i13,
  i14,
  i15,
  i16,
  i17,
  i18,
  i19,
  i20,
  i21,
];

export const laptopRes = [
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
  a19,
  a20,
  a21,
];

export const tabletRes = [
  b1,
  b2,
  b3,
  b4,
  b5,
  b6,
  b7,
  b8,
  b9,
  b10,
  b11,
  b12,
  b13,
  b14,
  b15,
  b16,
  b17,
  b18,
  b19,
  b20,
  b21,
];

export const phoneRes = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20,
  c21,
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      imagefolderselector: "i",
      imageVarSize: [],
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    this.updateImageVarSize();
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.updateImageVarSize();
  }

  updateImageVarSize() {
    if (this.state.width < 768) {
      this.setState({ imageVarSize: tabletRes });
    }
    if (this.state.width >= 768) {
      this.setState({ imageVarSize: tabletRes });
    }
    if (this.state.width >= 1024) {
      this.setState({ imageVarSize: laptopRes });
    }
    if (this.state.width >= 1440) {
      this.setState({ imageVarSize: fourkRes });
    }
  }

  onMouseLeave(e) {
    console.log("clientY:", e.nativeEvent.clientY);
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <Tilt
            className="Tilt"
            options={{ max: 55, easing: "cubic-bezier(.03,.98,.52,.99)" }}
          >
            <img
              draggable="false"
              className="Tilt-inner TZ1"
              src={this.state.imageVarSize[0]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ2"
              src={this.state.imageVarSize[1]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ3"
              src={this.state.imageVarSize[2]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ4"
              src={this.state.imageVarSize[3]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ5"
              src={this.state.imageVarSize[4]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ6"
              src={this.state.imageVarSize[5]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ7"
              src={this.state.imageVarSize[6]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ8"
              src={this.state.imageVarSize[7]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ9"
              src={this.state.imageVarSize[8]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ10"
              src={this.state.imageVarSize[9]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ11"
              src={this.state.imageVarSize[10]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ12"
              src={this.state.imageVarSize[11]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ13"
              src={this.state.imageVarSize[12]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ14"
              src={this.state.imageVarSize[13]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ15"
              src={this.state.imageVarSize[14]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ16"
              src={this.state.imageVarSize[15]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ17"
              src={this.state.imageVarSize[16]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ18"
              src={this.state.imageVarSize[17]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ19"
              src={this.state.imageVarSize[18]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ20"
              src={this.state.imageVarSize[19]}
              alt="collage-art"
            />
            <img
              draggable="false"
              className="Tilt-inner TZ21"
              src={this.state.imageVarSize[20]}
              alt="collage-art"
            />
          </Tilt>
        </div>
        <div className="cv">
          <div className="summary">
            <h1>Summary</h1>
            <p>
              Since graduating from <em>Bath School Of Art And Design</em>, My
              Professional Practice has expanded beyond
              <strong> Graphic Design, Digital Collage, </strong>and{" "}
              <strong>AI Art</strong> Into Software development. Preferring to
              use <strong>React</strong>,<strong> SASS</strong>, and{" "}
              <strong>Webpack</strong> to build <em>websites</em> and{" "}
              <em>apps</em>, I&rsquo;m looking for an organisation that will
              fully use my drive &amp; ambition whilst providing career
              advancement opportunities. I&rsquo;m a self-motivated learner
              &amp; constantly developing.
            </p>
          </div>

          <div className="tSkills">
            <h1>Technical skills</h1>
            <p>
              <strong>
                Languages, frameworks &amp; technologies I have experience with:
              </strong>
            </p>
            <ul>
              <li>JavaScript (ES6), HTML5, CSS, React</li>
              <li>Java, Junit</li>
              <li>SASS (LESS), Webpack (gulp)</li>
              <li>WordPress, WooCommers</li>
            </ul>
            <p>
              <strong>Other technologies I have experimented with are:</strong>
            </p>
            <ul>
              <li>&nbsp;JSON, Node.js, JSX, PHP</li>
              <li>Typescript, npm, Promises, Axios, Moment.js, Bootstrap</li>
            </ul>
            <p>
              <strong>I have a general understanding of:&nbsp;</strong>
            </p>
            <ul>
              <li>HTTP, REST, OOP, effective algorithms</li>
              <li>Unit testing</li>
              <li>Google Search Optimisation, SEO, Usability Experience</li>
            </ul>
            <p>
              <strong>Tools that I use:</strong>
            </p>
            <ul>
              <li>Google Docs, FileZilla</li>
              <li>Illustrator, Photoshop, Premier Pro, VSC</li>
              <li>Git on GitHub</li>
            </ul>
          </div>

          <div className="pSkills">
            <h1>Academic &amp; professional qualifications</h1>
            <ul>
              <li>Curator Fringe Arts Bath "Automated" exhibition 2019</li>
              <li>
                Bachelors in Arts (Fine Art), University of Bath School Of Art
                &amp; Design, 2016
              </li>
            </ul>
            <p>
              <strong>Notable Exhibitions:&nbsp;</strong>
            </p>
            <ul>
              <li>
                Fringe Arts Bath: Bath Open (2017/2018), Soft Rebellion (2018)
              </li>
              <li>Barge house: OXO Tower WARF (2016)</li>
            </ul>
            <p>
              <strong>Awards:&nbsp;</strong>
            </p>
            <ul>
              <li>Fringe Arts Bath Open (Runner-Up 2017/2018)</li>
              <li>Black Swan Open Arts (Runner-Up 2015/2016)</li>
              <li>London College of Sculpture (Placement 2013)</li>
            </ul>
          </div>

          <div className="projects">
            <h1>Project &amp; work experience</h1>
            <h2>
              <a href="https://automated-art.co.uk/">
                E-commerce platform: Automated-Art&nbsp;
              </a>
            </h2>
            <p>Founder 2018 - Present</p>
            <p>
              <em>
                An e-commerce where I automate the creation, distribution, and
                marketing of artwork. Created Using WordPress.
              </em>
            </p>
            <ul>
              <li>
                Solely responsible for designing &amp; developing the initial
                platform.
              </li>
              <li>FTP management.</li>
              <li>Plugin optimisation &amp; configuration.</li>
            </ul>
            <p>
              <strong>Technologies &amp; Tools</strong>: Google Analytics,
              Google Vision API, Lightroom, FileZilla, Photoshop, Woo-commerce,
              Product CSV, W3 Total Cache.
            </p>
            <hr />
            <h2>
              <a href="https://github.com/Samuel-Morgan-Tyghe/Api-Account-App">
                CRUD / Api-Account-App
              </a>
            </h2>
            <p>2020-present</p>
            <p>
              <em>
                React Application which Creates, Reads, Updates and Deletes
                Accounts using a Rest API&nbsp;
              </em>
            </p>
            <ul>
              <li>Rest API and JSON&nbsp;</li>
              <li>React knowledge, hooks, states, etc</li>
              <li>Local Server to store login information</li>
            </ul>
            <p>
              <strong>Technologies &amp; Tools</strong>: API, JSON, React,
              Animations, gulp, Sass, Photoshop
            </p>
            <hr />
            <h2>
              <a href="https://github.com/Samuel-Morgan-Tyghe/Creative-Portfolio">
                Creative Portfolio
              </a>
            </h2>
            <p>2020-present</p>
            <p>
              <em>My personal creative Portfolio made using Jekyll</em>
            </p>
            <ul>
              <li>Jekyll, Gem, Config.yml</li>
              <li>GH Pages, Image optimisation, URL Configuration</li>
              <li>Liquid, Layouts, Custom Theme</li>
            </ul>
            <p>
              <strong>Technologies &amp; Tools</strong>: Jekyll, Ruby, Git,
              Liquid, Themes
            </p>
            <hr />
            <h2>
              <a href="https://github.com/Samuel-Morgan-Tyghe/Weather-App">
                Weather-App
              </a>
            </h2>
            <p>2020-present</p>

            <p>
              <em>An App for checking the Weather in 3 different cities.</em>
            </p>
            <ul>
              <li>
                Webpack and Gulp Module Bundle and pre-processing minification.
              </li>
              <li>Basic Typescript functionality, Axios get, JSON.</li>
              <li>Less and Bootstrap.</li>
            </ul>
            <p>
              <strong>Technologies &amp; Tools</strong>: HTML5, LESS, Npm,
              Webpack, Gulp, Typescript, Promises, Api, Axios, HTTP, Moment.js,
              Git, Bootstrap, JSON.
            </p>
            <hr />
            <h2>
              <a href="https://github.com/Samuel-Morgan-Tyghe/Basic-Website-To-React">
                Website: Side Room Recordings
              </a>
            </h2>
            <p>2020-present</p>
            <p>
              <em>
                A commercial website advertising the services of a portable
                recording studio, its playful approach includes P5js of
                different shapes of sound waves involved in recording.&nbsp;
              </em>
            </p>

            <ul>
              <li>One-page application using React Frameworks.</li>
              <li>Following best web dev practices</li>
              <li>Fully Responsive Design</li>
            </ul>
            <p>
              <strong>Technologies &amp; Tools</strong>: JavaScript, CSS, Html,
              p5.js, git-pages, Visual Studio Code.
            </p>
            <hr />

            <h2>
              <a href="https://samuel-morgan-tyghe.github.io/3d-Desk-CV/dist/index.html">
                3D-CV
              </a>
            </h2>
            <p>2021</p>

            <p>
              <em>
                An arrangement of projects displayed using three.js Library
              </em>
            </p>
            <ul>
              <li>
                Optimisation for GPU and Loading times, clean coding, file
                optimisation.
              </li>
              <li>Model Creation, lighting, geometry, material, textures.</li>
              <li>
                Css3d, Ray-casting , API's, p5js, baking, loading manager, post
                processing.
              </li>
            </ul>
            <p>
              <strong>Technologies &amp; Tools</strong>: Blender, Three.js,
              WebGL, p5js, API, webpack, threex, draco-compression, basis
              compression, gsap, moment.js, XML, RSS, Photoshop, wordpress.
            </p>

            {/* <hr /> */}
            {/* <h2>
              <a href="https://github.com/Samuel-Morgan-Tyghe/Ambient-Tic-Tac-Toe">
                Gaming Project &ndash; Tic Tac Toe
              </a>
            </h2>
            <p>
              <em>
                {" "}
                A visual &amp; auditory remake of the traditional tic-tac-toe
                game, using Java swing GUI to incorporate interactive Gifs &amp;
                audio samples from exotic instruments.
              </em>
            </p>
            <ul>
              <li>Cross-platform UI design &amp; implementation.</li>
              <li>Integrating audio into packaging</li>
              <li>Use of Java algorithms &amp; data structures.</li>
            </ul>
            <p>
              <strong>Technologies &amp; Tools</strong>: Java, Swing,
              AudioInputStream, AudioSystem, Clip, Color, GradientPaint,
              Graphics, Graphics2D.
            </p>
            <hr />
            <h2>
              <a href="https://github.com/Samuel-Morgan-Tyghe/Database-Create-And-Login">
                Database Project &ndash; Login DB
              </a>
            </h2>
            <p>
              <em>
                An application to simulate the secure login process, containing
                a Create Account &amp; Login page that stores user details on an
                online database using SQL PhpMyAdmin Passwords are encrypted
                using jBCrypt.
              </em>
            </p>
            <ul>
              <li>
                Implementation of the system database &amp; login functionality.
              </li>
              <li>
                Application of encryption to secure data storage, database
                calls, etc.
              </li>
              <li>
                End-to-end testing to discover usability, functionality &amp;
                security testing.
              </li>
            </ul>
            <p>
              <strong>Technologies &amp; Tools</strong>: Java, SQL, JDBC,
              Encryption, JBCrypt, JUnit, Swing.
            </p>
            <hr />
            <h2>
              <a href="https://github.com/Samuel-Morgan-Tyghe/App-Droste">
                Droste Effects App - Multi-platform App
              </a>
            </h2>
            <p>
              <em>
                {" "}
                An interactive application allowing users to manipulate images
                using the Droste effect, the app primarily uses
                processing.&nbsp;
              </em>
            </p>
            <ul>
              <li>
                Tailored the system algorithm to effectively read &amp;
                manipulate uploaded images.
              </li>
              <li>Implementation of the file storage &amp; formatting.</li>
              <li>
                Integration of the external libraries &amp; utility packages.
              </li>
            </ul>
            <p>
              <strong>Technologies &amp; Tools</strong>: Java, Processing,
              PApplet, PImage, PVector, Photoshop.
            </p> */}
          </div>

          <div className="work">
            <h2>
              <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g186370-d8488528-Reviews-The_Green_Bird_Cafe-Bath_Somerset_England.html">
                GreenBird Cafe
              </a>
            </h2>
            <p>Chef 2016 &ndash; Present</p>
            <p>
              <em>
                In this role I prepared &amp; cooking food, washing dishes &amp;
                clearing tables. This role involved interacting with customers,
                front &amp; back of the house team. The Greenbird is of the most
                successful independent caf&eacute;s in Bath. This role was
                challenging, rewarding &amp; despite the notoriously evolving
                team, I remained a consistent member of the core team spanning
                over 3 &amp; a half years. I worked well within the changing
                dynamics of the working environment &amp; often found myself to
                be a mediator when difficult or tense situations occurred.
              </em>
            </p>
            <ul>
              <li>Calm &amp; Confident under pressure</li>
              <li>Self Initiated&nbsp;</li>
              <li>Loyal</li>
            </ul>
            <hr />
            <h2>Freelance</h2>
            <p>Graphic Designer 2017 &ndash; Present</p>
            <p>
              <em>
                I have been commissioned by musicians, charities &amp; music
                Venues to undertake tailor made, client led work. This required
                working &amp; sticking to deadlines despite changes to the
                client's requirements. To maintain high standards of quality, I
                kept up to date with the latest developments in creative
                software. This complimented my artistic ability &amp; passion
                for self development.
              </em>
            </p>
            <ul>
              <li>Time Management Skills</li>
              <li>Communication Skills</li>
              <li>Strong Client Relationship</li>
            </ul>
          </div>

          <div className="contribution">
            <h2>
              <a href="https://github.com/Samuel-Morgan-Tyghe/PhotoEditor">
                PhotoEditorSDK - Android App
              </a>
            </h2>
            <p>Contributor</p>
            <p>
              <em>
                Adhering to coding standards with consideration of UX, I added
                Various Functionalities to the text editor module.&nbsp;
              </em>
            </p>
            <p>
              The Latest Contribution:{" "}
              <a href="https://github.com/Samuel-Morgan-Tyghe/PhotoEditor">
                PhotoEditor
              </a>
              .
            </p>
            <ul>
              <li>Analyse coding standards and implement non-fatal changes.</li>
              <li>Follow visual standards to keep a uniform look.</li>
              <li>Android Library</li>
            </ul>
            <p>
              Technologies &amp; Tools: Java, Android-Library, Swing, Image
              Processing, Git, Android Studio.
            </p>
          </div>

          <div className="hobbies">
            <h1>Hobbies &amp; interests</h1>
            <ul>
              <li>
                Keeping up-to date with IT industry trends (reading, podcasting,
                etc)
              </li>
              <li>
                Professional experience in film/TV performance &amp; production.
              </li>
              <li>Attending Creative Coding Meet-ups</li>
              <li>Experimenting with software to create art.</li>
              <li>Curating Exhibitions featuring Digital Art</li>
            </ul>
            <p>
              <br />
            </p>
          </div>
          <div className="details">
            <p>Number: 07376080332</p>
            <p>Email: samuelmorganvisual@gmail.com</p>
            <p>
              <a href="https://www.linkedin.com/in/samuel-morgan-tyghe/">
                LinkedIn
              </a>
            </p>
            <p>
              <a href="https://github.com/Samuel-Morgan-Tyghe">Github</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
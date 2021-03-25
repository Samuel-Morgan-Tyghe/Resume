import React, { useEffect, useRef, useState } from "react";
import Summary3D from "./SummaryScene";

function WorkExperience() {
  const [isSticky, setSticky] = useState(false);
  const [rNumber, setRNumber] = useState(0);
  const ref = useRef(null);

  
  useEffect(() => {
    let rNum = ref.current.getBoundingClientRect().top;

    // setRNumber(10);
    // setRNumber(rNum);
 console.log(
        "🚀 ~ file: WorkExperience.js ~ line 14 ~ handleScroll ~ setRNumber",
        rNumber
      );
      console.log(
        "🚀 ~ file: WorkExperience.js ~ line 14 ~ handleScroll ~ rNum",
        rNum
      );
  });


 
  
  const handleScroll = () => {
    // setRNumber(10);

    if (ref.current) {
     
      if (ref.current.getBoundingClientRect().top <= 0) {
        setSticky(true);
        if (ref.current.getBoundingClientRect().bottom >= 500) {
          setSticky(true);
          setRNumber(ref.current.getBoundingClientRect().top);

        } else {
          setSticky(false);
        }
      } else {
        setSticky(false);
      }
    }
  };

  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <div
      className={`workExperience sticky-wrapper${isSticky ? " sticky" : ""}`}
      ref={ref}
    >
      {/* <h1 className="sticky-inner">
        Project &amp;
        <br /> work experience 

      </h1>             */}
      <Summary3D rotateNumber={rNumber}  />

      <div className="workExperienceInner">
        <div className="container">
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
            <strong>Technologies &amp; Tools</strong>: Google Analytics, Google
            Vision API, Lightroom, FileZilla, Photoshop, Woo-commerce, Product
            CSV, W3 Total Cache.
          </p>
          <hr />
        </div>{" "}
        <div className="container">
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
        </div>{" "}
        <div className="container">
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
        </div>{" "}
        <div className="container">
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
        </div>{" "}
        <div className="container">
          <h2>
            <a href="https://github.com/Samuel-Morgan-Tyghe/Basic-Website-To-React">
              Website: Side Room Recordings
            </a>
          </h2>
          <p>2020-present</p>
          <p>
            <em>
              A commercial website advertising the services of a portable
              recording studio, its playful approach includes P5js of different
              shapes of sound waves involved in recording.&nbsp;
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
        </div>{" "}
        <div className="container">
          <h2>
            <a href="https://samuel-morgan-tyghe.github.io/3d-Desk-CV/dist/index.html">
              3D-CV
            </a>
          </h2>
          <p>2021</p>

          <p>
            <em>An arrangement of projects displayed using three.js Library</em>
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
            <strong>Technologies &amp; Tools</strong>: Blender, Three.js, WebGL,
            p5js, API, webpack, threex, draco-compression, basis compression,
            gsap, moment.js, XML, RSS, Photoshop, wordpress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;

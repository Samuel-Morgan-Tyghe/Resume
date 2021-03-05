import React, { Component } from "react";
import Summary from "./components/Summary";
import TechnicalSkills from "./components/TechnicalSkills";
import WorkExperience from "./components/WorkExperience";
import Qualifications from "./components/Qualifications";
import AlternativeExperience from "./components/AlternativeExperience";
import Contribution from "./components/Contribution";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import { tabletRes, laptopRes, fourkRes, phoneRes } from "./imports";
import "./App.css";
import Tilt from "./tilt";
import { useState, useEffect } from "react";

function App() {
  const [imageVarSize, setimageVarSize] = useState(fourkRes);
  const [showContent, setShowContent] = useState(false);

  // trying toggle reminder to trigger css
  const toggleReminder = () => {
    setShowContent(!showContent);
    return showContent;
  };
  useEffect(() => {
    function handleResize() {
      console.log(
        "🚀 ~ file: App.js ~ line 26 ~ toggleReminder ~ showContent",
        showContent
      );
      // console.log("🚀 ~ file: App.js ~ line 26 ~ toggleReminder ~ showContent", showContent)
      if (window.innerWidth < 768) {
        setimageVarSize(tabletRes);
      }
      if (window.innerWidth >= 768) {
        setimageVarSize(tabletRes);
      }
      if (window.innerWidth >= 1024) {
        setimageVarSize(laptopRes);
      }
      if (window.innerWidth >= 1440) {
        setimageVarSize(fourkRes);
      }
    }

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
            src={imageVarSize[0]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ2"
            src={imageVarSize[1]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ3"
            src={imageVarSize[2]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ4"
            src={imageVarSize[3]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ5"
            src={imageVarSize[4]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ6"
            src={imageVarSize[5]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ7"
            src={imageVarSize[6]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ8"
            src={imageVarSize[7]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ9"
            src={imageVarSize[8]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ10"
            src={imageVarSize[9]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ11"
            src={imageVarSize[10]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ12"
            src={imageVarSize[11]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ13"
            src={imageVarSize[12]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ14"
            src={imageVarSize[13]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ15"
            src={imageVarSize[14]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ16"
            src={imageVarSize[15]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ17"
            src={imageVarSize[16]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ18"
            src={imageVarSize[17]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ19"
            src={imageVarSize[18]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ20"
            src={imageVarSize[19]}
            alt="collage-art"
          />
          <img
            draggable="false"
            className="Tilt-inner TZ21"
            src={imageVarSize[20]}
            alt="collage-art"
          />
        </Tilt>
      </div>
      <div className="cv">
        <Summary onToggle={toggleReminder} showContent={showContent} />
        <TechnicalSkills />
        <WorkExperience />
        <Qualifications />
        <AlternativeExperience />
        <Contribution />
        <Hobbies />
        <Contact />
      </div>
    </div>
  );
}
export default App;

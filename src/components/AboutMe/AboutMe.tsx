import React from "react";
import "./AboutMe.scss";
// import Zoom from "react-reveal/Zoom"

export const AboutMe: React.FC = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__title">
          <div className="about__title-top about__title-content">
            <span>ABOUT ME&nbsp;</span>
            <span>ABOUT ME&nbsp;</span>
            <span>ABOUT ME</span>
          </div>
          <div className="about__title-bottom about__title-content">
            <span>ABOUT ME&nbsp;</span>
            <span className="about__title-blue">ABOUT ME&nbsp;</span>
            <span>ABOUT ME</span>
          </div>
        </div>
      </div>
    </section>
  );
};

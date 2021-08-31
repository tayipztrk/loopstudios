import React from "react";
import "./about.scss";

export default function About() {
  return (
    <>
      <div className="about-container">
        <img
          className="about-img"
          src="/assets/images/desktop/image-interactive.jpg"
          alt="interactive"
        />
        <div className="about-text">
          <div className="about-text-head">THE LEADER IN INTERACTIVE VR</div>
          <p className="about-paragraph">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </>
  );
}

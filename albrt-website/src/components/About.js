import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About AlbRT</h2>
      <div className="about-content">
        <p>
          AlbRT is dedicated to developing innovative solutions to help visually
          impaired individuals navigate their daily lives with greater independence
          and confidence.
        </p>
        <div className="current-work">
          <h3>Current Projects</h3>
          <p>
            We are currently working on submitting an IRB approval to begin an initial round of surveys, as well as gathering data with the Aria Research Kit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 
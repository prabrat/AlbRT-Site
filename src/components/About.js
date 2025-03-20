import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <p>
          Using the Aria Research Kit, kindly provided by Dr. Nirupam Roy—an Assistant Professor in the UMD Department of Computer Science and the Director of the iCoSMoS research lab—we are collecting data to later utilize ORB-SLAM3 in developing a data classification and identification algorithm for our prototype.
        </p>
        <div className='about-video'> 
          <video width="1000" controls>
            <source src={require('./assets/videos/tmp_vid.mp4')} type="video/mp4" /> 
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className='research-info'> 
        <h1>Research Problem</h1>
        <p className='research-problem'>
          Many navigation aids for the visually impaired are costly and lack real-time adaptability. AlbRT aims to develop an affordable, user-friendly wearable that uses RGB-D and LiDAR sensors to detect obstacles and provide real-time audio feedback, enhancing independent navigation and safety. 
        </p>
        <p className='paper-txt'> 
          For more information about our project, read our paper here. 
        </p>
      </div>
    </section>
  );
};

export default About; 
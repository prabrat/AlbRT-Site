import React from 'react';
import './styles/About.css';

const About = () => {
  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + './proposal.pdf'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'AlbRT Research Paper.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about">

      <div className="research-container">
        <div className='research-info'> 
          <h1>Research Problem</h1>
          <p className='research-problem'>
            Many navigational aids for the visually impaired are costly and lack real-time adaptability. 
            AlbRT aims to develop an affordable, user-friendly wearable that uses RGB-D and LiDAR sensors to 
            detect obstacles and provide real-time audio feedback, enhancing independent navigation and safety. 
          </p>
          <p className='paper-txt'> 
            For more information about our project, read our paper here. 
          </p>
          <button onClick={handleDownload} className="download-btn">
            AlbRT Research Proposal →
          </button>
        </div>

        <div className='paper-image'> 
          <img src={require('./assets/images/paper.png')} alt="Research Paper" />
        </div>
        
      </div>

      <div className="about-content">
        <p>
          Using the Aria Research Kit, kindly provided by Dr. Nirupam Roy—an Assistant Professor in the 
          UMD Department of Computer Science and the Director of the iCoSMoS research lab—we are collecting 
          data to later utilize ORB-SLAM3 in developing a data classification and identification algorithm 
          for our prototype.
        </p>
        <div className='about-video'> 
          <video width="1000" controls autoPlay muted loop>
            <source src={require('./assets/videos/tmp_vid.mp4')} type="video/mp4" /> 
            Your browser does not support the video tag.
          </video>
        </div>
        <p className='vid-text'>
          Depicts the view of everyday activites through Aria. 
        </p>
      </div>


    </section>
  );
};

export default About;

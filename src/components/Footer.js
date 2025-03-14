import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:teamalbrt.gemstone@gmail.com">teamalbrt.gemstone@gmail.com</a></p>
          <p>Location: 
            <br />
            Gemstone Honors Program<br />
            0100 Ellicott Hall<br />
            4052 Stadium Drive<br />
            College Park, MD 20742</p>
        </div>
        <div className="sponsors">
          <div className="sponsor-logos">
            <img src={require('./assets/images/gems.png')} alt="Gemstone Honors Program" />
            <img src={require('./assets/images/7logos.png')} alt="Honors College Logo" />
            <img src={require('./assets/images/dogood.png')} alt="Do Good Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
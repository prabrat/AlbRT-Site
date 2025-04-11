import React from 'react';
import './styles/Header.css';

const Home = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Empowering the visually impaired through AI</h1>
      </div>
      <div className='glasses-image'> 
        <img src={require('./assets/images/aria_glasses.png')} alt="Aria Glasses" />
      </div>
    </header>
  );
};

export default Home; 
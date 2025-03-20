import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Analytics />
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="team">
          <Team />
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
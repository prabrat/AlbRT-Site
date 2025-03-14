import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Analytics />
      <Header />
      <About />
      <Timeline />
      <Team />
      <Footer />
    </div>
  );
}

export default App; 
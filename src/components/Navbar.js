import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./styles/Navbar.css"

const Navbar = () => { 
    const location = useLocation();
    
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDownload = () => {
        const pdfUrl = process.env.PUBLIC_URL + './proposal.pdf'; // Path to your PDF
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'AlbRT Research Paper.pdf'; // Name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return ( 
        <header className='nav'> 
            <div className='nav-left'> 
                <p>Team AlbRT: AI-Based Real-Time Navigation Assistive Solution</p>
            </div>
            <div className='nav-buttons'> 
                <Link 
                    to="/home" 
                    className={location.pathname === "/home" ? "active" : ""}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                    }}
                >
                    Home
                </Link>
                <Link 
                    to="/timeline" 
                    className={location.pathname === "/timeline" ? "active" : ""}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('timeline');
                    }}
                >
                    Timeline
                </Link>
                <Link 
                    to="/team" 
                    className={location.pathname === "/team" ? "active" : ""}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('team');
                    }}
                >
                    Team
                </Link>
                <div className='button'>
                    <button onClick={handleDownload} className="download-btn">
                        AlbRT Research Proposal →
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
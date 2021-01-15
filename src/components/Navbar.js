import React from 'react';
import ReactLogo from './ReactLogo.png';
import BootrapLogo from './BootstrapLogo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">

                <div className="container-fluid">
                    <Link smooth={true} offset={-110} to="home" className="navbar-brand" href="#">
                        <img src={ReactLogo} alt="React" className="logo"/>
                        <img src={BootrapLogo} alt="Bootstrap" className="logo"/>
                        </Link>
                        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faBars} style={{color: "rgb(0,191,166)"} }/>
                    </button>
                        
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link smooth={true} to="home" offset={-110} className="nav-link" aria-current="page" href="#">Home</Link>
                            </li>
                                
                            <li className="nav-item">
                                <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About me</Link>
                            </li>
                                
                            <li className="nav-item">
                                <Link smooth={true} to="skills" className="nav-link" href="#">My Skills</Link>
                            </li>

                            <li className="nav-item">
                                <Link smooth={true} to="experience" className="nav-link" href="#">Experience</Link>
                            </li>

                            <li className="nav-item">
                                <Link smooth={true} to="portfolio" className="nav-link" href="#">Portfolio</Link>
                            </li>

                            <li className="nav-item">
                                <Link smooth={true} to="gallery" className="nav-link" href="#">Gallery</Link>
                            </li>

                            <li className="nav-item">
                                <Link smooth={true} to="contacts" className="nav-link" href="#">Contact</Link>
                            </li>    
                            
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

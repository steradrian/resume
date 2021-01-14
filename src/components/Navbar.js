import React from 'react';
import ReactLogo from './ReactLogo.png';
import BootrapLogo from './BootstrapLogo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={ReactLogo} alt="React" className="logo"/>
                        <img src={BootrapLogo} alt="Bootstrap" className="logo"/>
                        </a>
                        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faBars} style={{color: "rgb(0,191,166)"} }/>
                    </button>
                        
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                                
                            <li className="nav-item">
                                <a className="nav-link" href="#">About me</a>
                            </li>
                                
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Skills</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Experience</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Portfolio</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>    
                            
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

import React from 'react';
import './Header.css';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

function Header() {
    return (
        <div className="header-wrapper" id="home" >
            <div className="main-info">
                <h1>My name is <strong>Adrian Ster</strong>, and I am ....</h1>
                <Typed
                    className="typed-text"
                    strings={["a Web Developer.", " an aspiring Programmer.", "eager to learn.", "currently looking for an intership", "...or a junior position."]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                <Link smooth={true} to="contacts" className="header-button">Click me!!!</Link>
            </div>
            
        </div>
    )
}

export default Header

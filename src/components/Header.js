import React from 'react';
import './Header.css';
import Typed from 'react-typed';

function Header() {
    return (
        <div className="header-wrapper" >
            <div className="main-info">
                <h1>My name is <strong>Adrian Ster</strong>, and I am ....</h1>
                <Typed
                    className="typed-text"
                    strings={["a Web Developer.", " an aspiring Programmer.", "eager to learn.", "currently looking for an intership", "...or a junior position."]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                <a href="#" className="header-button">Click me!!!</a>
            </div>
            
        </div>
    )
}

export default Header

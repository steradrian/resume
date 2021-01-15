import React from 'react';
import './Portfolio.css';
import Netflix from './Netflix.jpg';
import Facebook from './Facebook.png';
import Instagram from './Instagram.jpg';
import Todo from './Todo.png';
import Spotify from './Spotify.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

function Portfolio() {

    const openPopupBoxNetflix = () => { 
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={Netflix} alt="Netflix Clone Project" />
            <p>Followed a tutorial on youtube on how to create a Netflix Clone and this is the result.</p>
            <b>GitHub:</b> <a className="hyperlink" onClick={() => window.open("https://github.com/steradrian/netflix-clone-app")}>https://github.com/steradrian/netflix-clone-app</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true, 
            text: "Netflix Clone"
        }, 
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupBoxSpotify = () => { 
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={Spotify} alt="Spotify Clone Project" />
            <p>Followed a tutorial on youtube on how to create a Spotify Clone and this is the result.</p>
            <b>GitHub:</b> <a className="hyperlink" onClick={() => window.open("https://github.com/steradrian/Spotify-clone-app")}>https://github.com/steradrian/Spotify-clone-app</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigSpotify = {
        titleBar: {
            enable: true, 
            text: "Spotify Clone"
        }, 
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupBoxFacebook = () => { 
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={Facebook} alt="Facebook Messenger Clone Project" />
            <p>Followed a tutorial on youtube on how to create a Facebook Messenger Clone and this is the result.</p>
            <b>GitHub:</b> <a className="hyperlink" onClick={() => window.open("https://github.com/steradrian/facebook-messenger-clone")}>https://github.com/steradrian/facebook-messenger-clone</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigFacebook = {
        titleBar: {
            enable: true, 
            text: "Facebook Messenger Clone"
        }, 
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupBoxInstagram = () => { 
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={Instagram} alt="Instagram Clone Project" />
            <p>Followed a tutorial on youtube on how to create a Instagram Clone and this is the result.</p>
            <b>GitHub:</b> <a className="hyperlink" onClick={() => window.open("https://github.com/steradrian/instagram-clone")}>https://github.com/steradrian/instagram-clone</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigInstagram = {
        titleBar: {
            enable: true, 
            text: "Instagram Clone"
        }, 
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupBoxTodo = () => { 
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={Todo} alt="To do Project" />
            <p>Created a basic to do app.</p>
            <b>GitHub:</b> <a className="hyperlink" onClick={() => window.open("https://github.com/steradrian/To-do")}>https://github.com/steradrian/To-do</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigTodo = {
        titleBar: {
            enable: true, 
            text: "To do app"
        }, 
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper" id="portfolio">
            <div className="container">
                <h1 className="py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">

                    <div className="portfolio-image-box" onClick={openPopupBoxNetflix}>
                        <img src={Netflix} alt="Netflix" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus } className="portfolio-icon"/>
                    </div>
                    
                    <div className="portfolio-image-box" onClick={openPopupBoxInstagram}>
                        <img src={Instagram} alt="Instagram" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus } className="portfolio-icon"/>
                    </div>
                
                    <div className="portfolio-image-box" onClick={openPopupBoxSpotify}>
                        <img src={Spotify} alt="Spotify" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus } className="portfolio-icon"/>
                    </div>
                
               
                    <div className="portfolio-image-box" onClick={openPopupBoxFacebook} >
                        <img src={Facebook} alt="Facebook Messenger" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus } className="portfolio-icon"/>
                    </div>
                               
                    <div className="portfolio-image-box" onClick={openPopupBoxTodo}>
                        <img src={Todo} alt="To do" className="portfolio-image" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus } className="portfolio-icon"/>
                    </div>

                </div>
                
            </div>

            <PopupboxContainer {...popupboxConfigNetflix} />
            <PopupboxContainer {...popupboxConfigSpotify} />
            <PopupboxContainer {...popupboxConfigFacebook} />
            <PopupboxContainer {...popupboxConfigInstagram} />
            <PopupboxContainer {...popupboxConfigTodo} />
            
        </div>
    )
}

export default Portfolio

import React from 'react';
import './AboutMe.css';
import  MyPicture  from './MyPicture.jpg';

function AboutMe() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div class="photo-wrapper">

                        <img src={MyPicture} alt="my picture" className="about-img"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1>About me</h1>
                    <hr></hr>
                    <p>I'm a React JS enthusiast. Currently looking for an internship or junior role in Cluj-Napoca. In 2020 i started learning programing by following a Web Dev Course at <strong>Fast Track IT</strong> where i learned basics about <strong>HTML, CSS, JavaScript, ReactJs, NodeJS</strong>. After finishing the course i went on to improve those skills, following tutorials on freecodecamp for HTML5, CSS3, Responsive Web Design, and more about JavaScript. Also i have followed several tutorials on how to build websites/ web-apps clones such as Netflix, Facebook Messenger, Instagram, Spotify. Even though i did not graduate from a computer science university, I believe i have the skills required to start a carrer in web development. I am eager to learn, perseverent and a fast-learner. What i lack in knowledge i compensate in enthusiasm and perseverence.</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default AboutMe

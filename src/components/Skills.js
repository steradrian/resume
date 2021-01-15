import React from 'react';
import './Skills.css';
import Static  from './Static.svg';
import Dynamic  from './Dynamic.svg';
import ReactSVG  from './ReactSVG.svg';
import Deploy from './Deploy.svg';
import PersonalSkill from './PersonalSkill.svg';

function Skills() {
    return (
        <div className="skills" id="skills">
            <div className="h1 py-5">
                <div className="container">
                    <h1 className="skills-header">My Skills</h1>
                    <div className="row">
                        <div className=" col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <img src={Static} alt="static" className="box-img"/>
                                <h3>HTML5 and CSS3</h3>
                                <p>Create responsive static web applications</p>
                            </div>
                        </div>

                        <div class=" col-lg-3 col-md-6 col-sm-6">
                            <div class="box">
                                <img src={Dynamic} alt="dynamic" className="box-img"/>
                                <h3>JavaScript</h3>
                                <p>Turning static apps into dynamic apps</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="box">
                                <img src={ReactSVG} alt="react" className="box-img"/>
                                <h3>React Js</h3>
                                <p>Build component-based SPAs</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="box">
                                <img src={Deploy} alt="deploy" className="box-img"/>
                                <h3>Full Stack App using Firebase</h3>
                                <p>Deploy and host apps with Firebase</p>
                            </div>
                        </div>

                    </div>

                    <div className="row row-personal">

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="box">
                                <img src={PersonalSkill} alt="personal skills" className="box-img"/>
                                <h3>Personal skills</h3>
                                <p>Creative spirit, Reliable, Professional, Fast Learner, Motivated</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="box">
                                <img src={PersonalSkill} alt="personal skills" className="box-img"/>
                                <h3>Other personal skills</h3>
                                <p>Critical thinking, Communication Skills, Adaptable</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills

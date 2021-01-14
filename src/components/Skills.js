import React from 'react';
import './Skills.css';
import Static  from './Static.svg';
import Dynamic  from './Dynamic.svg';
import ReactSVG  from './ReactSVG.svg';
import Deploy  from './Deploy.svg';

function Skills() {
    return (
        <div className="skills">
            <div className="h1 py-5">
                <div className="container">
                    <h1 className="skills-header">My Skills</h1>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <img src={Static} alt="static" className="box-img"/>
                                <h3>HTML5 and CSS3</h3>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="box">
                                <img src={Dynamic} alt="dynamic" className="box-img"/>
                                <h3>JavaScript</h3>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="box">
                                <img src={ReactSVG} alt="react" className="box-img"/>
                                <h3>React Js</h3>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="box">
                                <img src={Deploy} alt="deploy" className="box-img"/>
                                <h3>Full Stack App deployed with Firebase</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills

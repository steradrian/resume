import React from 'react';
import './Experience.css';
import EducationSVG from './EducationSVG.svg';

function Experience() {
    return (
        <div className="experience" id="experience">
            <div className="d-flex justify-content-center">
                <h1 className="experience-header">My experience</h1>
            </div>

            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>November 2019 - July 2020</h3>
                        <h5>Associate Online Marketer - Creative Navy</h5>
                        <p>
                            <ul>
                                <li>Assisted CEO in writing and publishing articles</li>
                                <li>Started an SEO campaign</li>
                                <li>Reached out to potential clients in need of UX Design</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>October 2018 - April 2019</h3>
                        <h5>Product Planning Intern - Robert Bosch Plant, Jucu</h5>
                        <p>
                            <ul>
                                <li>Coordination of EWAK and 0-Series production</li>
                                <li>System CIP Project Leader</li>
                                <li>Define material and information flow</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>May 2017 - May 2018</h3>
                        <h5>President - Organizatia Studentilor Chimisti</h5>
                        <p>
                            <ul>
                                <li>Represented the association in different academic enviroments as a spokesperson</li>
                                <li>Managed finances</li>
                                <li>Developed partnerships with different companies which led to the expansion of our projects</li>
                                <li>Setting high standards as a leader</li>
                                <li>Mentoring and motivating the members of the association</li>
                                <li>Analyze results and provide feedback</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>May 2016 - May 2017</h3>
                        <h5>Vice President - Organizatia Studentilor Chimisti</h5>
                        <p>
                            <ul>
                                <li>Created new fundraising strategies</li>
                                <li>Developed new relationships between our association and other student related parties in our country</li>
                                <li>Mediated discussions on sensitive topics between the members off the board</li>
                                <li>Standardized all reports</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>March 2018 - December 2018</h3>
                        <h5>Regional fundraising director - Uniunea Studentilor din Romania</h5>
                        <p>
                            <ul>
                                <li>Elaborated new fundraising strategies</li>
                                <li>Set foundation for new partnerships</li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>July - September 2015/2016/2017/2018</h3>
                        <h5>Work and Travel Program, USA - The Watering Hull</h5>
                        <p>
                            <ul>
                                <li>Prep cook/ Busser -2015</li>
                                <li>Busser/ Foodrunner - 2016</li>
                                <li>Foodrunner/ Server - 2017</li>
                                <li>Server/ Assistant Manager - 2018</li>
                            </ul>
                        </p>
                    </div>
                </div>



                
            </div>

            <div className="statement">

                <h4>Yes, i know my previous experience does not recommend me for a position as a web developer, but i hope this web application will convince you I have the technical skills required for a developer positon. Please keep an open mind and consider me for any open positions you might have!</h4>

            </div>

            <div className="education">
                <h1>Education</h1>
                <div className="row-education">
                    <div className="svg-wrapper">

                    </div>
                    <div className="education-text">
                        <div className="row">
                            <div className="col-lg-6 col-xm-12">
                                <div className="education-photo-wrapper">
                                    <img src={EducationSVG} alt=""/>
                                </div>
                            </div>

                            <div className="col-lg-6 col-xm-12">
                                <div className="education-text-wrapper">
                                    <ul>
                                        <li>
                                            <h4>Fast Track IT - March 2020 - November 2020</h4>
                                            <p style={{ color: "gray" }}>Web Development Course</p>
                                        </li>
                                        <li>
                                            <h4>Babes-Bolyai University of Cluj-Napoca - October 2014 - July 2020</h4>
                                            <p style={{color: "gray"}}>Bachelor in Biochemical Engineering</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Experience

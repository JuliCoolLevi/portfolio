import React from 'react';
import "./about.css";
import Resume from "../../assets/Julius-Resume-(Official).pdf";
import ShapesAbout from './ShapesAbout';


const About = () => {
    return (
        <section className='about container section' id='about'>
            <h2 className='section__title'>About Myself</h2>

            <div className='about__container grid'>

                <div className='about__data grid'>

                    {/* if you are doing an image for the about page */}
                    {/* <img src={Image} alt="" className="about__img"  /> */}

                    <div className='about__info'>

                        <p className='about__description'>
                        I am Julius Nillo, a student in Sheridan College pursuing Computer Science. 
                        I have always been passionate with coding since high school, and from that point onwards I have been expanding my 
                        knowledge such as my technical skills with Python, Full-Stack coding development and improving my problem solving skills.
                        </p>
                    
                        
                        <span className='skills__number'>
                            My Academic Progress: 76%
                        </span>
                        
                        <div className='skills__bar'>
                                <span className='skills__percentage academic'></span>
                        </div>

                        <div className='resume__cv'>
                            <a href={Resume} target='_blank' className='btn'>Download CV</a>
                        </div>

                    </div>
                    
                    <div className='about__skills grid'>

                        <h2>Courses finished</h2>

                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>Software Development & Programming</h3>
                                <span className='skills__number'>
                                Advanced Mobile Application Development, 
                                Data Structures & Algorithms,
                                Programming Languages
                                </span>
                            </div>

                        </div>

                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>Systems & Software Engineering</h3>
                                <span className='skills__number'>
                                    Operating Systems Analysis & Design,
                                    Software Design,
                                    Computer Architecture,
                                </span>
                            </div>

                        </div>

                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>Mathematics, Data & Networking</h3>
                                <span className='skills__number'>
                                    Linear Algebra
                                    Statistics for Data Science
                                    Mathematics for Computing
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <ShapesAbout />

        </section>
    )
}

export default About
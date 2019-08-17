import React from "react";
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"
import resume from "../../images/resume.png"
import "./about.css";

const About = () => (

    <>

        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

            <header className="masthead text-center">
                <div>
                    <h1 className="masthead-brand text-light">
                        <a href="/">Aldo Solano</a>
                    </h1>
                    <nav className="nav nav-masthead justify-content-center">
                        <a className="nav-link active" href="/about">About</a>
                        <a className="nav-link" href="/contact">Contact</a>
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </nav>
                </div>
            </header>

            <main className="cover">

                <hr className="divider" />

                <h2><b className="text-light">Hello,</b></h2>
                <p className="text-justify">My name is Aldo Solano and I'm an experienced Data Analyst and Full Stack Web Developer from Mexico City. Educated at ITESM Full Stack Flex Program, I also have a Computer Science degree at UV. Creativity, organization, patience and curiosity are my strongest intrinsic skills. My technical skills include the development and design of MERN web apps, C#, Java and SQL Server; that combined with my experience in collaborative, deadline-driven environments make me a strong addition to any Full Stack Web Development team.</p>
                <p className="text-justify">I'm also a senior DBA with 8+ years of solid experience working with
                    Data Mining and Business Intelligence Technologies and over 1 year working on Web Development and Web Design as a Freelance.</p>

                {/* quote */}
                <div className="blockquote text-center">
                    <p className="mb-0" id="quote">"The devil is in the detail"</p>
                    <footer className="blockquote-footer">Ludwig Mies Van Der Rohe</footer>
                </div>
                <p className="text-justify">Taking care of the smallest detail is my biggest strength. My passion lies in making responsive web apps using React.js and overall UX Design.</p>

                {/* socials */}
                <div className="d-flex justify-content-center mt-4">

                    {/* github */}
                    <div className="d-flex flex-column text-center">
                        <a href="https://github.com/aldoglez34" target="_blank">
                            <img src={github} className="about-img img-fluid mb-2" alt="Github" />
                        </a>
                        <p className="text-muted">Github</p>
                    </div>

                    {/* linkedin */}
                    <div className="d-flex flex-column text-center">
                        <a href="https://www.linkedin.com/in/aldo-solano-41875198/" target="_blank">
                            <img src={linkedin} className="about-img img-fluid mb-2" alt="LinkedIn" />
                        </a>
                        <p className="text-muted">LinkedIn</p>
                    </div>

                    {/* resume */}
                    <div className="d-flex flex-column text-center">
                        <a href="" target="_blank">
                            <img src={resume} className="about-img img-fluid mb-2" alt="Resume" />
                        </a>
                        <p className="text-muted">Resume</p>
                    </div>

                </div>

            </main>
        </div>

    </>

);

export default About;

import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css"

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Sara Steeves</h2>
                <div >
                    <p>Software developer... - take from cv summary</p>
                    {/* TODO: add cv icon/link */}
                    {/* TODO: update with correct links */}
                    <a href="mailto:sarasteeves@gmail.com" className="email"><EmailIcon></EmailIcon></a>
                    <a href="https://www.google.com" className="linkedIn"><LinkedInIcon></LinkedInIcon></a>
                    <a href="https://www.google.com" className="github"><GitHubIcon></GitHubIcon></a>
                    
                </div>
            </div>
            <div className="skills">
                <h1>Expertise</h1>
                {/* TODO: align with cv */}
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>Angular, Flutter</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>NodeJS, ExpressJS, NestJS, PostgreSQL, MongoDB, DigitalOcean, Netlify, Supabase</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>JavaScript, Python, C++, TypeScript, HTML, CSS</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;
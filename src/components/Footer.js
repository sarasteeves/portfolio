import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

let currentYear = new Date().getFullYear();

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="mailto:sarasteeves@gmail.com"><EmailIcon/></a>
                <a href="https://www.linkedin.com/in/sara-steeves" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
                <a href="https://github.com/sarasteeves" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
            </div>
            <p>&copy; {currentYear} Sara Steeves</p>
        </div>
    );
}

export default Footer;
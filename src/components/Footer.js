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
                {/* TODO: make clickable! */}
                <EmailIcon></EmailIcon>
                <LinkedInIcon></LinkedInIcon>
                <GitHubIcon></GitHubIcon>
            </div>
            <p>&copy; {currentYear} Sara Steeves</p>
        </div>
    );
}

export default Footer;
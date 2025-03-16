import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
    const [expandNavBar, setExpandNavBar] = useState(false);
    
    const location = useLocation();

    // If location changes, close navbar
    useEffect(() => {
        setExpandNavBar(false);
    }, [location])

    //TODO: close navbar if screen size changes to large screen

    return (
        <div className="navBar" id={expandNavBar ? "open" : "close"}>
            <div className="toggleButton">
                <button 
                    onClick={() => {
                        setExpandNavBar((prev) => !prev);
                    }}
                >
                    <MenuIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    );
}

export default NavBar;
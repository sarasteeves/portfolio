import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProjectDisplay.css";
import { PersonalProjectList } from "../helpers/PersonalProjectList";
import { ProfessionalProjectList } from "../helpers/ProfessionalProjectList";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// TODO: show other projects as side bar/list


function ProjectDisplay() {
    const { id } = useParams();
    const project = PersonalProjectList[id];

    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image}/>
            <p>
                <b>Tech Stack:</b> {project.tech}
            </p>
            { project.url &&
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="link">
                    <LinkIcon/>
                    <p>View Project</p>
                </a>
            }
            { project.repo &&
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="link">
                    <LinkIcon/>
                    <p>View Code</p>
                </a>
            }
            
            {/* TODO: show github icon if there is public code */}
            {/* TODO: show url if there is public version of app */}
            <div className="highlights">
                <div className="details">
                    <h2>Highlights</h2>
                    <p>{project.highlights}</p>
                </div>
            </div>
            <div className="details">
                <h2>Role</h2>
                <p>{project.role}</p>
            </div>
            <div className="details">
                <h2>Objectives</h2>
                <p>{project.objectives}</p>
            </div>
            <div className="details">
                <h2>Design</h2>
                <p>{project.design}</p>
            </div>
            <div className="details">
                <h2>Development</h2>
                <p>{project.development}</p>
            </div>
            <div className="details">
                <h2>Outcome</h2>
                <p>{project.outcome}</p>
            </div>
        </div>
    );
}

export default ProjectDisplay;
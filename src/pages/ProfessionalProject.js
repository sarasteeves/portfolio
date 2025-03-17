import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ProjectDisplay.css";
import { ProfessionalProjectList } from "../helpers/ProfessionalProjectList";
import { PersonalProjectList } from "../helpers/PersonalProjectList";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


function ProfessionalProject() {
    const { id } = useParams();
    const project = ProfessionalProjectList[id];
    const navigate = useNavigate();

    return (
        <div className="project">
            <div className="headerBar">
                <NavigateBeforeIcon onClick={() => {
                    Number(id) === 0 ? navigate("/personal_project/" + (PersonalProjectList.length -1))
                        : navigate("/professional_project/" + (Number(id) - 1))
                }} />
                <h1>{project.name}</h1>
                <NavigateNextIcon 
                    onClick={() => {
                        Number(id) >= (ProfessionalProjectList.length - 1) ?
                            navigate("/personal_project/" + 0)
                            : navigate("/professional_project/" + (Number(id) + 1)) 
                    }}
                />
            </div>
            
            {/* <img src={project.image}/> */}
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
                    <GitHubIcon/>
                    <p>View Code</p>
                </a>
            }

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

export default ProfessionalProject;
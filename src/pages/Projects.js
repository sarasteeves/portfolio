import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { PersonalProjectList } from "../helpers/PersonalProjectList";
import { ProfessionalProjectList } from "../helpers/ProfessionalProjectList";

function Projects() {
    return (
        <div className="projects">
            <h1>Personal Projects</h1>
            <div className="projectList">
                { PersonalProjectList.map((project, index) =>{
                    return <ProjectItem id={index} name={project.name} image={project.image}/>;
                })}
            </div>
            <h1>Professional Projects</h1>
            <div className="projectList">
                { ProfessionalProjectList.map((project, index) =>{
                    return <ProjectItem id={index} name={project.name}/>;
                })}
            </div>
        </div>
    )
}

export default Projects;
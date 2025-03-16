import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProjectDisplay.css";
import { ProjectList } from "../helpers/ProjectList";

// TODO: show other projects as side bar/list


function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];

    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image}/>
            <p>
                <b>Tech Stack:</b> {project.skills}
            </p>
            {/* TODO: show github icon if there is public code */}
            {/* TODO: show url if there is public version of app */}

        </div>
    );
}

export default ProjectDisplay;
import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
    const navigate = useNavigate();

    return (
        <div 
            className={image ? "projectItem" : "professionalProjectItem"} 
            onClick={() => {
                image ?
                    navigate("/personal_project/" + id)
                : navigate("/professional_project/" + id)
                ;
            }}
        >
            <div style={{backgroundImage: `url(${image})`}} className="bgImage"></div>
            <h1>{name}</h1>
        </div>
    );
}

export default ProjectItem;
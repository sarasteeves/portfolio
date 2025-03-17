import React, { useCallback, useId, useState } from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { PersonalProjectList } from "../helpers/PersonalProjectList";
import { ProfessionalProjectList } from "../helpers/ProfessionalProjectList";
import CloseIcon from "@mui/icons-material/Close";

function Projects() {
    const [tags, setTags] = useState(['Web', 'Game']);

    const id = useId();

    const addTag = useCallback(
        (tag) => () => {
          if (!tags.includes(tag)) {
            return setTags((prevTags) => [...prevTags, tag]);
          }
        },
        [tags]
    );

    const deleteTag = useCallback(
        (tagId) => () => {
            const tagsFiltered = tags.filter((tag) => {
            return tag !== tagId;
            });
            setTags(tagsFiltered);
        },
        [tags]
    );

    const matchTags = (current, target) => {
        return target.every((tag) => current.includes(tag));
    };

    return (
        <div className="projects">
            {/* <h1 className='tag-filter'>Tags filtered</h1> */}
            <div className="filterContainer">
                {tags.length > 0
                ? tags.map((tag) => {
                    return (
                        <p onClick={deleteTag(tag)} className="tag">
                            {tag} 
                            <CloseIcon/>
                        </p>
                    );
                    })
                : ''}
            </div>

            <h1>Personal Projects</h1>
            <div className="projectList">
                { PersonalProjectList
                .filter((project) => matchTags(project.tags, tags))
                .map((project, index) =>{
                    return (
                        <div>
                            <ProjectItem id={index} name={project.name} image={project.image} tags={project.tags}/>
                            <div className="tagContainer">
                                {project.tags.map((tag) => {
                                    return (
                                        <p onClick={addTag(tag)} className="tag">
                                            {tag}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
                
            </div>
            <h1>Professional Projects</h1>
            <div className="projectList">
                { ProfessionalProjectList
                .filter((project) => matchTags(project.tags, tags))
                .map((project, index) =>{
                    return (
                        <div>
                            <ProjectItem id={index} name={project.name}/>
                            <div className="tagContainer">
                                {project.tags.map((tag) => {
                                    return (
                                        <p onClick={addTag(tag)} className="tag">
                                            {tag}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Projects;
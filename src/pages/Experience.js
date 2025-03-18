import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3B373B">
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2009-2012"
                    iconStyle={{background: "#F2E455", color: "#fff"}}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">MA Natural Sciences, University of Cambridge</h3>
                    {/* <p>MA Natural Sciences</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="2013-2019"
                    iconStyle={{background: "#85C5DF", color: "#fff"}}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Scientific Consultancy, Costello Medical</h3>
                    <p>Contributed to delivery of medical communications and evidence synthesis projects for major Pharmaceutical and MedTech clients. On promotion to the Consultant role in 2015, independently managed projects and client relationships. Built and launched the company's first web app to facilitate systematic reviews in 2018.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="2019-2021"
                    iconStyle={{background: "#85C5DF", color: "#fff"}}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Consultant - Innovation Lead, Costello Medical</h3>
                    <p>
                    Designed, built, deployed and maintained web apps for the company. Advised colleagues and clients from the Pharmaceutical and MedTech sectors on methods for improving efficiency using software and automation. Occasionally supported scientific projects including literature reviews and medical writing.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="2021-2024"
                    iconStyle={{background: "#85C5DF", color: "#fff"}}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Head of Technical Innovation and Development, Costello Medical</h3>
                    <p>
                    Established a software development team within the company to meet growing demand for web apps and automation. Worked as a team lead, innovation manager, product manager and developer.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="2024-Present"
                    iconStyle={{background: "#EABDCF", color: "#fff"}}
                    icon={<CodeIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Game Development, Independent</h3>
                    <p>
                        Learning game design principles and programming in the Godot and Unreal game engines. Currently working on a commercial game for release in 2025.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;
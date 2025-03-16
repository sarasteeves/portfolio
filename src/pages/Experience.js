import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";

function Experience() {
    return (
        // TODO: add details from CV
        <div className="experience">
            <VerticalTimeline lineColor="#3B373B">
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2009-2012"
                    iconStyle={{background: "#F2E455", color: "#fff"}}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">University of Cambridge</h3>
                    <p>MA Natural Sciences</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="2013-2019"
                    iconStyle={{background: "#EABDCF", color: "#fff"}}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Costello Medical</h3>
                    <p>Scientific Consultancy</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="2019-2024"
                    iconStyle={{background: "#EABDCF", color: "#fff"}}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Costello Medical</h3>
                    <p>Technical Innovation and Development</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="2024-present"
                    iconStyle={{background: "#85C5DF", color: "#fff"}}
                    icon={<CodeIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Independent Game Development</h3>
                    <p>What to write here...?</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;
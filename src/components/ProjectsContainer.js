import Wrapper from "../assets/wrappers/ProjectContainer";
import UnderlinedString from "./UnderlinedString";
import Projects from "./Projects";
import { projectData } from "../utils/data";
import React, { useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
const ProjectsContainer = () => {
  // const scollToRef = useRef();
  // let setRef = useOutletContext()[0];
  // useEffect(() => {
  //   setRef(scollToRef);
  // }, []);
  return (
    // <Wrapper ref={scollToRef}>
    <Wrapper >
      <span className="projectsContainer">
        <div className="projectPageLabelContainer">
          <UnderlinedString string="OTHER PROJECTS" />
        </div>
        <p className="instructions">Click on container to visit project</p>
        {projectData.map((project, index) => {
          const { textColor, mainColor, name, description, stack, link } =
            project;
          return (
            <div key={index}>
              <Projects
                textColor={textColor}
                mainColor={mainColor}
                name={name}
                description={description}
                stack={stack}
                link={link}
              />
            </div>
          );
        })}
      </span>
    </Wrapper>
  );
};

export default ProjectsContainer;

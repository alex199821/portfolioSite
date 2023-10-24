import Wrapper from "../assets/wrappers/Skills";
import UnderlinedString from "./UnderlinedString";
import SingleSkill from "./SingleSkill";
import { skills } from "../utils/data";
import React, { useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
const Skills = () => {
  const scollToRef = useRef();
  let setRef = useOutletContext()[1];
  useEffect(() => {
    setRef(scollToRef);
  }, []);
  return (
    <Wrapper ref={scollToRef}>
      <span className="skills">
        <div className="projectSkilsLabelContainer">
          <UnderlinedString string="SKILLS" />
        </div>
        <div className="singleSkillContainer">
          {skills.map((skill, index) => {
            const { skillNum, skillName, description } = skill;
            return (
              <div key={index}>
                <SingleSkill
                  skillNum={skillNum}
                  skillName={skillName}
                  description={description}
                />
              </div>
            );
          })}
        </div>
      </span>
    </Wrapper>
  );
};

export default Skills;

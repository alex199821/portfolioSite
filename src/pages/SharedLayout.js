import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/SharedLayout";
import { options } from "../utils/data.js";
import { useState } from "react";

const SharedLayout = () => {
  const [projectRef, setProjectRef] = useState(null);
  const [skillRef, setSkillsRef] = useState(null);

  const setProjects = (item) => {
    setProjectRef(item);
  };

  const setSkills = (item) => {
    setSkillsRef(item);
  };

  const handleClick = (item) => {
    if (item === "Projects") {
      projectRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (item === "Skills") {
      skillRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (item === "Contacts") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Wrapper>
        <h1 className="fullName">Sasha Uplisashvili</h1>
        <section className="navigationContainer">
          {options.map((item, index) => {
            return (
              <div key={index}>
                <h3 className="singleLink" onClick={() => handleClick(item)}>
                  {item}
                </h3>
              </div>
            );
          })}
        </section>
      </Wrapper>
      <Outlet context={[setProjects, setSkills]} />
    </>
  );
};
export default SharedLayout;

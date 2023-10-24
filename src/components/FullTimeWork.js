import Wrapper from "../assets/wrappers/FullTimeWork";
import UnderlinedString from "./UnderlinedString";
import sstpay from "../assets/images/sstpay.png";
import Projects from "./Projects";
import { projectData } from "../utils/data";
import React, { useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
const FullTimeWorkContainer = () => {
  const scollToRef = useRef();
  let setRef = useOutletContext()[0];
  useEffect(() => {
    setRef(scollToRef);
  }, []);
  return (
    <Wrapper ref={scollToRef}>
      <span className="workContainer">
        <div className="workPageLabelContainer">
          <UnderlinedString string="My Full-time Job" />
        </div>
        <p className="fulltimeJobDescription">
          Currently I am Front-end developer at TBC Pay, the largest
          self-service terminal and online payments provider in Georgia, serving
          300,000 customers daily. Right now I am working on migrating
          Self-service terminal's Front-end from Legacy code base to React while
          at same time maintaining Legacy code base for current operations.
        </p>
        <div className="sstImageContainer">
          <img src={sstpay} alt="TBC Pay Terminal" />
        </div>
      </span>
    </Wrapper>
  );
};

export default FullTimeWorkContainer;

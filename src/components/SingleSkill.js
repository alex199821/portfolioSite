import UnderlinedString from "./UnderlinedString";
import Wrapper from "../assets/wrappers/SingleSkill";
const SingleSkill = (data) => {
  const { skillNum, skillName, description } = data;
  return (
    <Wrapper>
      <div className="skillNumber">{skillNum}</div>
      <div className="singleSkill">
        <h3 className="skillName">{skillName}</h3>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
};

export default SingleSkill;

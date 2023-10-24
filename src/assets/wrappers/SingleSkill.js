import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  width: 23.5vw;
  height: auto;
  position: relative;
  .skillNumber {
    display: flex;
    position: absolute;
    font-size: 100px;
    font-weight: 900;
    top: -5%;
    left: -10%;
    z-index: 1;
    -webkit-text-stroke: 0.5px black;
    color: var(--primary);
    font-family: sans-serif;
  }
  .singleSkill {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    border: 1px solid black;
    height: 150px;
    width: 100%;
    border-radius: 5%;
    display: flex;
    box-shadow: 4px 4px 0px 3px rgba(0, 0, 0, 0.83);
    justify-content: center;
    background-color: var(--primary);
    margin-top: 50px;
    z-index: 99;
    .skillName {
      font-size: 24px;
      font-weight: 700;
      font-family: "Microsquare", sans-serif;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 840px) {
    width: 100%;
    .skillNumber {
      top: -5%;
      left: 0%;
    }
    .singleSkill {
    }
  }
`;
export default Wrapper;

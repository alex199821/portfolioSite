import styled from "styled-components";

const Wrapper = styled.section`
  .skills {
    display: flex;
    width: 80%;
    margin: auto;
    flex-direction: column;
    margin-bottom: 30px;
    margin-top: 50px;
  }
  .singleSkillContainer {
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    column-gap: calc(10% / 2);
    row-gap: 40px;
  }
  .fastLearningContainer {
    width: 80%;
    margin: auto;
    margin-bottom: 50px;
    .fastLearningContainerText {
      font-size: 16px;
    }
  }
  @media (max-width: 840px) {
    .skills {
      margin-bottom: 40px;
    }
    .singleSkillContainer {
      flex-direction: column;
    }
  }
`;
export default Wrapper;

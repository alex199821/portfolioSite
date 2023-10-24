import styled from "styled-components";

const Wrapper = styled.section`
  .projectsContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .projectPageLabelContainer {
      display: flex;
      width: 80%;
      margin: auto;
    }
  }
  .instructions {
    display: flex;
    width: 80%;
    margin: auto;
    font-size: 12px;
    margin-top: -10px;
    font-style: italic;
  }
  .skills {
    display: flex;
    width: 80%;
    margin: auto;
  }
  @media (max-width: 840px) {
    .projects {
      .projectPageLabelContainer {
        display: flex;
        width: 80%;
        margin: auto;
      }
    }
    .skills {
    }
  }
`;
export default Wrapper;

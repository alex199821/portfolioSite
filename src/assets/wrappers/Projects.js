import styled from "styled-components";

const Wrapper = styled.section.attrs((props) => {
  return { mainColor: props.mainColor, textColor: props.textColor };
})`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  cursor: pointer;
  .projectInfo {
    display: flex;
    width: 80%;
    margin: auto;
    align-items: flex-end;
    flex-direction: row;
    margin-top: 0;
    margin-bottom: 0;
    .projectName {
      font-family: "Microsquare", sans-serif;
      font-size: 2.5vw;
      width: fit-content;
      text-shadow: 2px 2px black;
      -webkit-text-stroke: 1px black;
      color: var(--primary);
    }
    .projectDescription {
      font-family: "Microsquare", sans-serif;
      font-size: 0.85vw;
      width: 70%;
      margin-left: 20px;
      color: black;
    }
  }
  .stackUsed {
    display: flex;
    width: 80%;
    margin: auto;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
    .stackDescription {
      font-size: 1vw;
      margin-top: 10px;
      color: black;
      /* font-family: "Microsquare", sans-serif; */
    }
  }
  :hover {
    background-color: ${(props) => props.mainColor};
    .projectInfo {
      .projectName {
        color: ${(props) => props.textColor};
        /* text-shadow: none;
        -webkit-text-stroke: 0; */
      }
      .projectDescription {
        color: ${(props) => props.textColor};
      }
    }
    .stackUsed {
      .stackDescription {
        color: ${(props) => props.textColor};
      }
    }
  }
  @media (max-width: 840px) {
    display: flex;
    width: 80%;
    margin: auto;
    height: 45vw;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 20px;
    background-color: ${(props) => props.mainColor};
    justify-content: center;
    .projectInfo {
      display: flex;
      width: 90%;
      margin: auto;
      align-items: flex-start;
      flex-direction: row;
      flex-direction: column;
      margin-top: 0;
      margin-bottom: 0;
      color: ${(props) => props.textColor};
      .projectName {
        font-family: "Microsquare", sans-serif;
        font-size: 8vw;
        text-shadow: 2px 2px black;
        -webkit-text-stroke: 1px black;
        color: var(--primary);
        color: ${(props) => props.textColor};
      }
      .projectDescription {
        font-family: "Microsquare", sans-serif;
        font-size: 3vw;
        margin-top: 10px;
        margin-left: 0px;
        color: ${(props) => props.textColor};
      }
    }
    .stackUsed {
      display: flex;
      width: 90%;
      margin: auto;
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;
      .stackDescription {
        font-size: 3vw;
        margin-top: 20px;
        color: ${(props) => props.textColor};
      }
    }
    :hover {
    }
  }
`;
export default Wrapper;

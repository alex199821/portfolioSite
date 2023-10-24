import styled from "styled-components";

const Wrapper = styled.section`
  .workContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 80%;
    margin: auto;
    .workPageLabelContainer {
      display: flex;
    }
  }
  .fulltimeJobDescription {
    display: flex;
    width: 45%;
    font-size: 16px;
    margin-top: -10px;
    margin-bottom: 20px;
  }
  .sstImageContainer {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
  @media (max-width: 840px) {
    .workContainer {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      width: 80%;
      margin: auto;
      .workPageLabelContainer {
        display: flex;
      }
    }
    .fulltimeJobDescription {
      display: flex;
      width: 90%;
      font-size: 16px;
      margin-top: -10px;
      margin-bottom: 20px;
    }
    .sstImageContainer {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
export default Wrapper;

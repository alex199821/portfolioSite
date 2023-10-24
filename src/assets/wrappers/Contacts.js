import styled from "styled-components";

const Wrapper = styled.section`
  margin-bottom: 100px;
  .contactsLabelContainer {
    display: flex;
    width: 80%;
    margin: auto;
  }
  .contactInfo {
    display: flex;
    width: 80%;
    margin: auto;
    font-weight: 600;
    font-family: "Microsquare", sans-serif;
    margin-top: 15px;
  }
  @media (max-width: 840px) {
    .contactInfo {
      font-size: 3.5vw;
    }
  }
`;
export default Wrapper;

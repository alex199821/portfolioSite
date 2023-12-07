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
  .socialNetworksContainer{
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: auto;
    margin-top: 15px;
    column-gap: 15px;
    .singleSocialNetwork{
      display: flex;
      width: 35px;
      height: auto;
    }
  }
  @media (max-width: 840px) {
    .contactInfo {
      font-size: 3.5vw;
    }
  }
`;
export default Wrapper;

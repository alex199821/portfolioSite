import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  border-bottom: 1px solid var(--gray);
  font-size: 18px;
  font-weight: 500;
  padding: 20px 0;
  .resumeDownloadButton {
    background-color: transparent;
    border: none;
    font-weight: 500;
    font-size: 18px;
    font-family: "Karla", sans-serif;
    cursor: pointer;
    margin-top: -4px;
  }
  .navigationContainer {
    display: flex;
    flex-direction: row;
    column-gap: 2vw;
    .singleLink {
      cursor: pointer;
    }
  }
  @media (max-width: 840px) {
    .fullName {
      display: none;
    }
    .navigationContainer {
      width: 100%;
      justify-content: space-between;
    }
  }
`;
export default Wrapper;

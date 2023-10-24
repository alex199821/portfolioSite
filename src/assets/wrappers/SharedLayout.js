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

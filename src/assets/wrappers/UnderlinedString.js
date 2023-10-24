import styled from "styled-components";

const Wrapper = styled.section`
  width: auto;
  margin-top: 20px;
  p {
    font-weight: 500;
    color: var(--white);
    font-size: 1.5vw;
    margin-bottom: 30px;
    line-height: 1.25;
    /* width: 60%; */
    display: inline-block;
    position: relative;
    font-weight: 700;
    font-family: "Microsquare", sans-serif;
    ::after {
      content: "";
      position: absolute;
      bottom: 1%;
      left: 0;
      height: 1rem;
      width: 100%;
      background: var(--yellow);
      z-index: -1;
    }
  }
  @media (max-width: 840px) {
    p {
      font-size: 5vw;
      margin-bottom: 15px;
    }
  }
`;
export default Wrapper;

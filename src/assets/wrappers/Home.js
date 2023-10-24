import styled from "styled-components";

const Wrapper = styled.section`
  .home {
    display: flex;
    width: 80%;
    height: auto;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;
    margin-top: 80px;
    margin-bottom: 40px;

    .descriptionContainer {
      width: 75%;
      .greetingContainer {
        .greeting {
          font-size: 7vw;
          font-weight: 700;
          font-family: "Microsquare", sans-serif;
        }
      }
      .aboutContainer {
        margin-left: 30vw;
        width: 35%;
      }
    }
    .profileImageContainer {
      display: flex;
      /* margin-left: -50vw; */
      width: 25%;
      height: auto;
      justify-content: flex-end;
      img {
        width: 25vw;
        height: 30vw;
        transform: scaleX(-1);
      }
    }
  }

  @media (max-width: 840px) {
    .home {
      display: flex;
      flex-direction: column;
      padding-bottom: 30px;
      margin-top: 10px;
      margin-bottom: 0px;
      .descriptionContainer {
        width: 100%;
        .greetingContainer {
          margin-top: 40px;
          justify-content: center;
          .greeting {
            font-size: 10vw;
            font-weight: 700;
          }
        }
        .aboutContainer {
          margin-left: 0vw;
          width: 70%;
          .about {
            margin-bottom: 0;
          }
        }
      }
      .profileImageContainer {
        width: 100%;
        margin-top: 20px;
        img {
          width: 100%;
          height: 95vw;
        }
      }
    }
  }
`;
export default Wrapper;

import sashaProfileImage from "../assets/images/sashaProfileImage.jpg";
import UnderlinedString from "./UnderlinedString";
import Wrapper from "../assets/wrappers/Home";
const Home = () => {
  return (
    <Wrapper>
      <span className="home">
        <section className="descriptionContainer">
          <div className="greetingContainer">
            <p className="greeting">HELLO!</p>
            <p className="greeting"> I'M SASHA</p>
          </div>
          <UnderlinedString string="Front-end Developer" />
          <div className="aboutContainer">
            <p className="about">
              I am front-end engineer with strong knowledge of JS, ES6+, React
              and its ecosystem. I also have proeficiency in Node.JS with
              full-stack projects behind my back.
            </p>
          </div>
        </section>
        <section className="profileImageContainer">
          <img src={sashaProfileImage} alt="Sasha" />
        </section>
      </span>
    </Wrapper>
  );
};

export default Home;

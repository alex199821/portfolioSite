import Wrapper from "../assets/wrappers/Landing";
import Home from "../components/Home";
import ProjectsContainer from "../components/ProjectsContainer";
import Skills from "../components/Skills";
import Contacts from "../components/Contacts";
const Landing = () => {
  return (
    <Wrapper>
      <Home />
      <ProjectsContainer />
      <Skills />
      <Contacts />
    </Wrapper>
  );
};

export default Landing;

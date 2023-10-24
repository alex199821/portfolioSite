import Wrapper from "../assets/wrappers/Landing";
import Home from "../components/Home";
import ProjectsContainer from "../components/ProjectsContainer";
import Skills from "../components/Skills";
import Contacts from "../components/Contacts";
import FullTimeWorkContainer from "../components/FullTimeWork";
const Landing = () => {
  return (
    <Wrapper>
      <Home />
      <FullTimeWorkContainer />
      <ProjectsContainer />
      <Skills />
      <Contacts />
    </Wrapper>
  );
};

export default Landing;

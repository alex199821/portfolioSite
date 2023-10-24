import Wrapper from "../assets/wrappers/Projects";

const Projects = (data) => {
  const { textColor, mainColor, stack, name, description, link } = data;
  return (
    <a href={link} target="_blank" style={{ textDecoration: "none" }}>
      <Wrapper textColor={textColor} mainColor={mainColor}>
        <section className="projectInfo">
          {" "}
          <h3 className="projectName">{name} / </h3>
          <p className="projectDescription">{description}</p>
        </section>
        <section className="stackUsed">
          <p className="stackDescription">{stack}</p>
        </section>
      </Wrapper>
    </a>
  );
};

export default Projects;

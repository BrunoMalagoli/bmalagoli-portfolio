import { Element } from "react-scroll";
import ProjectsStyles from "./styles/index.module.css";
import ProjectCard from "./components/ProjectCard";
import {
  IconExpress,
  IconMongodb,
  IconReact,
  IconTypescript,
} from "../EducationSection/components/TechStack/IconComponents";

const ProjectsSection = () => {
  return (
    <Element name="proyectos">
      <section>
        <div className={ProjectsStyles.projects_container}>
          <h2>Proyectos</h2>
          <ProjectCard
            title="nin-js"
            description="Web app estilo Quiz-game con preguntas de programación"
            tech={[
              <IconReact height={"3rem"} width={"3rem"} />,
              <IconTypescript height={"3rem"} width={"3rem"} />,
              <IconExpress height={"3rem"} width={"3rem"} />,
              <IconMongodb height={"3rem"} width={"3rem"} />,
            ]}
            features={[""]}
            url=""
          />
        </div>
      </section>
    </Element>
  );
};

export default ProjectsSection;

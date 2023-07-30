import { Element } from "react-scroll";
import ProjectsStyles from "./styles/index.module.css";
import ProjectCard from "./components/ProjectCard";
import {
  IconExpress,
  IconMongodb,
  IconReact,
  IconTypescript,
} from "../EducationSection/components/TechStack/IconComponents";
import { Fade } from "react-awesome-reveal";

const ProjectsSection = () => {
  return (
    <Element name="proyectos">
      <Fade>
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
              features={[
                "Registro y Login",
                "Niveles de dificultad",
                "Sistema de progreso",
                "Personalización de perfil con avatar y nombre de usuario",
              ]}
              url="https://nin-js.netlify.app/"
              repoUrl="https://github.com/BrunoMalagoli/NinJS-Vite"
            />
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
              repoUrl=""
            />
          </div>
        </section>
      </Fade>
    </Element>
  );
};

export default ProjectsSection;

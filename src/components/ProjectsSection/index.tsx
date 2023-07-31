import { Element } from "react-scroll";
import ProjectsStyles from "./styles/index.module.css";
import ProjectCard from "./components/ProjectCard";
import {
  IconExpress,
  IconMongodb,
  IconNextdotjs,
  IconReact,
  IconTypescript,
} from "../EducationSection/components/TechStack/IconComponents";
import { Fade } from "react-awesome-reveal";
import IconMaterialUi from "../EducationSection/components/TechStack/IconComponents/IconMUI";

const ProjectsSection = () => {
  return (
    <Element name="proyectos">
      <Fade delay={200}>
        <section>
          <div className={ProjectsStyles.projects_container}>
            <h2>Proyectos</h2>
            <ProjectCard
              title="nin-js"
              description="Web app responsive estilo Quiz-game con preguntas de programación"
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
              title="todo-app"
              description="Aplicación web responsive donde puedes organizar tus tareas"
              tech={[
                <IconNextdotjs height={"3rem"} width={"3rem"} />,
                <IconTypescript height={"3rem"} width={"3rem"} />,
                <IconMongodb height={"3rem"} width={"3rem"} />,
                <IconMaterialUi height={"3rem"} width={"3rem"} />,
              ]}
              features={[
                "Agregar y eliminar tareas",
                "Cambiar el estado de las tareas (Pendientes , En progreso, Completadas)",
                "Drag and Drop para cambiar los estados de las tareas (disponible en version desktop)",
              ]}
              url="https://todo-app-bruno.vercel.app/"
              repoUrl="https://github.com/BrunoMalagoli/todo-app"
            />
          </div>
        </section>
      </Fade>
    </Element>
  );
};

export default ProjectsSection;

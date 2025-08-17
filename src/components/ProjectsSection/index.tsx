import { Element } from "react-scroll";
import ProjectsStyles from "./styles/index.module.css";
import ProjectCard from "./components/ProjectCard";
import {
  IconExpress,
  IconMongodb,
  IconReact,
  IconTypescript,
  IconMysql,
  IconHtml5,
  IconCss3,
  IconJavascript,
} from "../EducationSection/components/TechStack/IconComponents";
import { Fade } from "react-awesome-reveal";
import { IconPhp } from "../EducationSection/components/TechStack/IconComponents/IconPhp";

const ProjectsSection = () => {
  return (
    <Element name="proyectos">
      <Fade delay={200}>
        <section>
          <div className={ProjectsStyles.projects_container}>
            <h2>Proyectos</h2>
            <ProjectCard
              title="Hornero Envios"
              description="Sistema de Gestión de envíos para empresa de logística"
              tech={[
                <IconPhp height={"3rem"} width={"3rem"} />,
                <IconMysql height={"3rem"} width={"3rem"} />,
                <IconHtml5 height={"3rem"} width={"3rem"} />,
                <IconCss3 height={"3rem"} width={"3rem"} />,
                <IconJavascript height={"3rem"} width={"3rem"} />,
              ]}
              features={[
                "Sistema de usuarios multirol (Administrador, Sucursal, Cliente)",
                "Gestión completa de sucursales y encomiendas con validaciones de negocio",
                "Generación de facturas, etiquetas de despacho y manifiestos imprimibles",
                "Seguimiento completo de envíos con código de tracking e historial",
                "Cotización automática usando API de OpenStreetMap",
                "Manual de usuario y documentación técnica completa",
              ]}
              repoUrl="https://github.com/BrunoMalagoli/hornero-envios"
            />
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
          </div>
        </section>
      </Fade>
    </Element>
  );
};

export default ProjectsSection;

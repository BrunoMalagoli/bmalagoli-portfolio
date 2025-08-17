import { Element } from "react-scroll";
import ExperienceStyles from "./styles/index.module.css";
import ExperienceElement from "./components/ExperienceElement";
import { Fade } from "react-awesome-reveal";

const ExperienceSection = () => {
  return (
    <Element name="experiencia">
      <Fade delay={200}>
        <section>
          <div id={ExperienceStyles.experiencia_container}>
            <h2>Experiéncia</h2>
            <ExperienceElement
              date="mar. 2025 - actualidad"
              title="Desarrollador Backend"
              org="Beex"
              profile={[
                "Participación en el análisis de requerimientos y el diseño de sistemas junto al equipo de producto y desarrollo.",
                "Desarrollo de APIs RESTful, aplicando buenas prácticas de arquitectura y mantenimiento de código.",
                "Implementación de tests unitarios para asegurar la calidad y confiabilidad del software.",
                "Modelado y mantenimiento de bases de datos relacionales (PostgreSQL).",
                "Validación y testing de endpoints mediante Postman, incluyendo pruebas manuales y automatizadas.",
                "Documentación técnica de endpoints, estructuras de datos y flujos funcionales.",
                "Colaboración ocasional en tareas de desarrollo frontend utilizando tecnologías modernas (React, TypeScript, etc.).",
              ]}
            />
            <ExperienceElement
              date="feb. 2024 - jul. 2025"
              title="Full Stack Developer Freelance"
              org="Autónomo"
              profile={[
                "Desarrollo de aplicaciones web a medida, trabajando directamente con clientes para relevar requerimientos y definir soluciones técnicas.",
                "Implementación de APIs RESTful y lógica de negocio usando tecnologías como Node.js, Express y bases de datos relacionales.",
                "Diseño y modelado de bases de datos según las necesidades de cada proyecto (PostgreSQL / MySQL).",
                "Desarrollo frontend en proyectos que lo requerían, utilizando HTML, CSS, JavaScript y frameworks como React.",
                "Integración de servicios externos (pasarelas de pago, APIs públicas, servicios de autenticación).",
                "Testing y validación funcional de los desarrollos con herramientas como Postman.",
                "Entrega de documentación técnica y funcional para facilitar el mantenimiento o futuras iteraciones.",
                "Gestión de proyectos de forma autónoma, incluyendo planificación, desarrollo, entrega y soporte post-lanzamiento.",
              ]}
            />
          </div>
        </section>
      </Fade>
    </Element>
  );
};

export default ExperienceSection;

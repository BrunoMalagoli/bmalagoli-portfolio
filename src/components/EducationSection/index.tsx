import { Element } from "react-scroll";
import EducationStyles from "./styles/index.module.css";
import EducationElement from "./components/EducationElement";
import TechStackSection from "./components/TechStack";
import { Fade } from "react-awesome-reveal";
const EducationSection = () => {
  return (
    <Element name="educacion">
      <Fade>
        <section>
          <div id={EducationStyles.educacion_container}>
            <h2>Educación</h2>
            <EducationElement
              date="2023-2025"
              title="Tecnicatura Universitaria en Programación"
              org="Universidad Tecnologica Nacional, Argentina"
              profile={[
                "Análisis de problemas y desarrollo de soluciones en lenguajes de programación superiores.",
                "Habilidad para realizar tareas específicas definidas por analistas de sistemas de computación.",
                "Competencia en la estructuración de programas correctamente y en la comunicación efectiva con profesionales de otras áreas relacionadas con el procesamiento de datos.",
                "Paradigmas de programación",
              ]}
            />
            <EducationElement
              date="june 2022-september 2022"
              title="NextJS"
              org="Udemy"
              profile={[
                "Conceptos sobre SSR,SSG,ISR, Middlewares y rutas dinamicas",
                "Uso de base de datos MongoDB y Mongoose ODM",
                "Manejo de herramientas Postman, Docker",
                "Uso de librerías UI como MaterialUI y NextUI",
              ]}
            />
            <EducationElement
              date="july 2021-december 2021"
              title="Certificado Desarrollo FrontEnd"
              org="Coderhouse"
              profile={[
                "Wireframe y maquetado web.",
                "Manejo de HTML, CSS y SCSS",
                "JavaScript, peticiones HTTP y uso de APIS",
                "Desarrollo en ReactJS utilizando Firebase para realizar aplicaciones CRUD",
              ]}
            />
          </div>
        </section>
        {/*Tech Stack Section*/}
        <TechStackSection />
      </Fade>
    </Element>
  );
};

export default EducationSection;

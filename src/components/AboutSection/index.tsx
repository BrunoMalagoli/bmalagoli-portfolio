import AboutSectionStyles from "./styles/index.module.css";
import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Element name="about">
      <Fade delay={200}>
        <section id={AboutSectionStyles.about_container}>
          <div className={AboutSectionStyles.about_img_container}>
            <div className={AboutSectionStyles.about_img} />
          </div>
          <div className={AboutSectionStyles.about_content}>
            <h2>Sobre mi</h2>
            <p>
              Buenas! Me llamo <strong>Bruno Malagoli</strong>, desarrollo soluciones en la web
              desde Buenos Aires, Argentina.
            </p>
            <p>
              Comencé mi carrera en ventas, donde aprendí a entender las necesidades reales del negocio. 
              Paralelamente, me formé como programador de manera autodidacta y completé una tecnicatura 
              universitaria en programación. Hoy trabajo como <strong>backend developer</strong> y participo 
              activamente en todas las etapas del desarrollo de software.{" "}
              {!isExpanded && (
                <button 
                  className={AboutSectionStyles.read_more_inline}
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  Leer más
                </button>
              )}
            </p>
            
            {isExpanded && (
              <>
                <p>
                  Me especializo en <strong>backend</strong>, diseñando arquitecturas sólidas, modelos de datos 
                  eficientes y APIs RESTful bien documentadas. Disfruto escribir código limpio y testeable, 
                  automatizar procesos y contribuir a productos escalables. También colaboro en desarrollo 
                  frontend cuando es necesario, usando React y TypeScript.
                </p>
                <p>
                  Trabajo bajo metodologías ágiles (SCRUM), desde la definición de requerimientos hasta 
                  el desarrollo, pruebas y documentación. Mi objetivo es seguir creciendo profesionalmente 
                  y comenzar a contribuir a proyectos open source.
                </p>
                <p>
                  <strong>Lo que me diferencia:</strong>
                </p>
                <ul className={AboutSectionStyles.differentiators_list}>
                  <li>Traduzco necesidades de negocio en soluciones técnicas claras y escalables</li>
                  <li>Enfoque en calidad: código, tests, documentación y modelado de datos</li>
                  <li>Versatilidad entre backend y frontend, priorizando objetivos del equipo</li>
                  <li>Experiencia freelance: autonomía, organización y visión integral de proyectos</li>
                </ul>
                <p>
                  <button 
                    className={AboutSectionStyles.read_more_inline}
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    Ver menos
                  </button>
                </p>
              </>
            )}
            
            <div className={AboutSectionStyles.buttons_container}>
              <button className={AboutSectionStyles.download_btn}>
                <a href="/BrunoCV.pdf" download={"Bruno_Malagoli_CV"}>
                  Descargar CV
                </a>
              </button>
            </div>
          </div>
        </section>
      </Fade>
    </Element>
  );
};

export default AboutSection;

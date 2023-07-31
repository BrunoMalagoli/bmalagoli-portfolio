import AboutSectionStyles from "./styles/index.module.css";
import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";
const AboutSection = () => {
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
              Buenas! Me llamo Bruno Malagoli, soy un Desarrollador web viviendo
              actualmente en Buenos Aires , Argentina.
            </p>
            <p>
              Mi curiosidad y pasión por la tecnología me llevaron a iniciar mi
              carrera como programador de forma autodidacta. A través de cursos
              y exploración en Internet, fortalecí mis habilidades y decidí dar
              un paso más al inscribirme en una Tecnicatura Universitaria en
              Programación en la Universidad Tecnologica Nacional.
            </p>
            <p>
              Actualmente, estoy cursando la tecnicatura mientras sigo
              perfeccionándome en las últimas tecnologías con el objetivo de
              conseguir mi primera oportunidad en el mercado laboral y poner en
              práctica mis habilidades.
            </p>
            <div>
              <button>
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

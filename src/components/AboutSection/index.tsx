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
              Buenas! Me llamo Bruno Malagoli, desarrollo soluciones en la web
              desde Buenos Aires , Argentina.
            </p>
            <p>
              Mi enfoque se centra en entender las metas y visiones de mis
              clientes para ofrecer soluciones personalizadas y de alta calidad
              que impulsen su éxito en el mercado. Mi objetivo es superar las
              expectativas en cada proyecto en el que me involucro.
            </p>
            <p>
              Actualmente trabajo en proyectos de manera freelance, además estoy
              interesado en unirme a un equipo de trabajo en el que pueda
              aportar mis habilidades y aprender nuevas, si estas interesado en
              mi perfil hablemos!
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

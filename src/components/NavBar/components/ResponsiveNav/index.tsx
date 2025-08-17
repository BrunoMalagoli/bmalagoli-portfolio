import { FC } from "react";
import NavStyles from "../../styles/index.module.css";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
type Props = {
  isOpen: boolean;
  isMobile: boolean;
};

const ResposiveNav: FC<Props> = ({ isOpen, isMobile }) => {
  return (
    <div
      className={`${
        isOpen && isMobile
          ? NavStyles.nav_links_container
          : NavStyles.nav_links_container_desk
      }`}
    >
      <ul
        className={`${
          isOpen && isMobile ? NavStyles.nav_links : NavStyles.nav_links_desk
        }`}
      >
        <Fade delay={600}>
          <Link
            to="inicio"
            spy={true}
            smooth={true}
            duration={200}
            activeClass={NavStyles.active_li}
          >
            <li>Inicio</li>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={200}
            activeClass={NavStyles.active_li}
          >
            <li>Sobre mi</li>
          </Link>
          <Link
            to="experiencia"
            spy={true}
            smooth={true}
            duration={200}
            activeClass={NavStyles.active_li}
          >
            <li>Experiencia</li>
          </Link>
          <Link
            to="educacion"
            spy={true}
            smooth={true}
            duration={200}
            activeClass={NavStyles.active_li}
          >
            <li>Educación</li>
          </Link>
          <Link
            to="proyectos"
            spy={true}
            smooth={true}
            duration={200}
            activeClass={NavStyles.active_li}
          >
            <li>Proyectos</li>
          </Link>
          <Link
            to="contacto"
            spy={true}
            smooth={true}
            duration={200}
            activeClass={NavStyles.active_li}
          >
            <li>Contacto</li>
          </Link>
        </Fade>
      </ul>
    </div>
  );
};

export default ResposiveNav;

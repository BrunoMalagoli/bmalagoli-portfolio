import NavStyles from "./styles/index.module.css";
import { Link } from "react-scroll";
const NavBar = () => {
  return (
    <nav className={NavStyles.nav_container}>
      <div id={NavStyles.logo}>
        <img width={"50px"} src="src/assets/logo.svg" alt="logo" />
      </div>
      <div className={NavStyles.nav_links_container}>
        <ul className={NavStyles.nav_links}>
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
            to=""
            spy={true}
            smooth={true}
            duration={200}
            activeClass={NavStyles.active_li}
          >
            <li>Proyectos</li>
          </Link>
          <Link
            to=""
            spy={true}
            smooth={true}
            duration={200}
            activeClass={NavStyles.active_li}
          >
            <li>Contacto</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

import NavStyles from "./styles/index.module.css";
const NavBar = () => {
  return (
    <nav className={NavStyles.nav_container}>
      <div id={NavStyles.logo}>
        <img width={"50px"} src="src/assets/logo.svg" alt="logo" />
      </div>
      <div className={NavStyles.nav_links_container}>
        <ul className={NavStyles.nav_links}>
          <li>Inicio</li>
          <li>Sobre mi</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

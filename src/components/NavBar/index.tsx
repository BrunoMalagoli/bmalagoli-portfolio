import styles from "./styles/index.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navBarContainer}>
        <div className={styles.navBar}>
          <a>Sobre mi</a>
          <a>Skills</a>
          <a>Proyectos</a>
          <a>Contacto</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

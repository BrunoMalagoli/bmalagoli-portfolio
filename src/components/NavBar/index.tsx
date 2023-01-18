import styles from "./styles/index.module.css";
import { Twirl as Hamburger } from "hamburger-react";
const NavBar = () => {
  return (
    <>
      <nav className={styles.navBarContainer}>
        <div className={styles.menu}>
          <Hamburger color="#b3ffb2" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;

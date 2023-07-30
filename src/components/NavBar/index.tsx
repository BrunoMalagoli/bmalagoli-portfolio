import NavStyles from "./styles/index.module.css";
import { Link } from "react-scroll";
import useOnResize from "../../hooks/useOnResize";
import IconHamburgerMenu from "./components/IconComponents/IconHamburguerMenu";
import { useEffect, useState } from "react";
import ResponsiveNav from "./components/ResponsiveNav";
const NavBar = () => {
  const { isMobile } = useOnResize();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    isMobile ? "" : setIsOpen(false);
  }, [isMobile]);
  return (
    <nav
      id={`${
        isOpen ? NavStyles.nav_container_active : NavStyles.nav_container
      }`}
    >
      <div id={NavStyles.navbar}>
        <div id={NavStyles.logo}>
          <Link to="inicio" spy={true} smooth={true} duration={200}>
            <img width={"50px"} src="src/assets/logo.svg" alt="logo" />
          </Link>
        </div>
        <button
          id={NavStyles.nav_button}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <IconHamburgerMenu height={"1.5rem"} width={"1.5rem"} />
        </button>
        {isMobile ? "" : <ResponsiveNav isOpen={isOpen} isMobile={isMobile} />}
      </div>
      {isMobile ? <ResponsiveNav isOpen={isOpen} isMobile={isMobile} /> : ""}
    </nav>
  );
};

export default NavBar;

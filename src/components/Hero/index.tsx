import IconArrowDownCircle from "./components/IconArrowDown";
import MainText from "./components/MainText";
import ParticleElement from "./components/ParticleElement";
import HeroStyles from "./styles/index.module.css";
import { Link, Element } from "react-scroll";
const Hero = () => {
  return (
    <Element name="inicio">
      <div className={HeroStyles.particles_container}>
        <ParticleElement />
      </div>
      <section className={HeroStyles.hero_container}>
        <MainText />
        <div className={HeroStyles.down_button}>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={200}
            to="about"
          >
            <IconArrowDownCircle />
          </Link>
        </div>
      </section>
    </Element>
  );
};

export default Hero;

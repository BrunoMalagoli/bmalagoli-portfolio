import IconArrowDownCircle from "./components/IconArrowDown";
import MainText from "./components/MainText";
import ParticleElement from "./components/ParticleElement";
import HeroStyles from "./styles/index.module.css";
import { Link, Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";
const Hero = () => {
  return (
    <Element name="inicio">
      <div className={HeroStyles.particles_container}>
        <ParticleElement />
      </div>
      <Fade delay={800}>
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
      </Fade>
    </Element>
  );
};

export default Hero;

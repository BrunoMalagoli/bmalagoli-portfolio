import IconArrowDownCircle from "./components/IconArrowDown";
import MainText from "./components/MainText";
import ParticleElement from "./components/ParticleElement";
import HeroStyles from "./styles/index.module.css";
const Hero = () => {
  return (
    <>
      <div className={HeroStyles.particles_container}>
        <ParticleElement />
      </div>
      <section className={HeroStyles.hero_container}>
        <MainText />
        <div className={HeroStyles.down_button}>
          <IconArrowDownCircle />
        </div>
      </section>
    </>
  );
};

export default Hero;

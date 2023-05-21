import ParticleElement from "./components/ParticleElement";
import HeroStyles from "./styles/index.module.css";
const Hero = () => {
  return (
    <>
      <div className={HeroStyles.particles_container}>
        <ParticleElement />
      </div>
      <section className={HeroStyles.hero_container}></section>
    </>
  );
};

export default Hero;
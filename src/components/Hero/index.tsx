import styles from "./styles/index.module.css";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <section id={styles.mainContent}>
        <h1 id={styles.mainText}>Bruno Malagoli</h1>
        <h3 className={styles.subText}>Full-Stack Web Developer</h3>
      </section>
      <section>
        <div id={styles.profileImg}>
          <img height={"300px"} width={"300px"} src="/profile.jpg"></img>
        </div>
      </section>
    </div>
  );
};

export default Hero;

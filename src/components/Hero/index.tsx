import styles from "./styles/index.module.css";
const Hero = () => {
  return (
    <div id={styles.heroContainer}>
      <section id={styles.mainContent}>
        <div id={styles.textContainer}>
          <h1 id={styles.mainText}>Bruno Malagoli</h1>
          <h3 className={styles.subText}>Full-Stack Web Developer</h3>
        </div>
        <div id={styles.profileImg}>
          <div>
            <img height={"300px"} width={"300px"} src="/profile2.jpg"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

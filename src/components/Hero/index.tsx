import styles from "./styles/index.module.css";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <section>
        <h1 id={styles.mainText}>Bruno Malagoli</h1>
      </section>
    </div>
  );
};

export default Hero;

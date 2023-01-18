import styles from "./styles/index.module.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Hero = () => {
  return (
    <div id={styles.heroContainer}>
      <section id={styles.mainContent}>
        <div id={styles.textContainer}>
          <h1 id={styles.mainText}>
            Bruno <span className={styles.highlight}>Malagoli</span>
          </h1>
          <h3 className={styles.subText}>
            Full-Stack <span className={styles.highlight}>Web Developer</span>
          </h3>
          <div id={styles.mediaContainer}>
            <AiFillLinkedin fontSize={"25px"} color="#b3ffb2" />
            <AiFillGithub fontSize={"25px"} color="#b3ffb2" />
          </div>
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

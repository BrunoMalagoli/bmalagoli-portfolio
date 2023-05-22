import AboutSectionStyles from "./styles/index.module.css";

const AboutSection = () => {
  return (
    <section className={AboutSectionStyles.about_container}>
      <div className={AboutSectionStyles.about_img_container}>
        <div className={AboutSectionStyles.about_img} />
      </div>
      <div className={AboutSectionStyles.about_content}>
        <h2>Sobre mi</h2>
      </div>
    </section>
  );
};

export default AboutSection;

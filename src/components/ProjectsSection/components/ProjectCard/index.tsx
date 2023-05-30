import IconLi from "./IconComponents/IconLi";
import ProjectCardStyles from "./styles/index.module.css";

type ProjectCardTypes = {
  title: string;
  description: string;
  url: string;
  tech: React.ReactNode[];
  features: string[];
};

const ProjectCard = ({
  title,
  description,
  url,
  tech,
  features,
}: ProjectCardTypes) => {
  return (
    <div className={ProjectCardStyles.card_container}>
      <div className={ProjectCardStyles.card_head}>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>Tech Stack</h4>
        <div>
          {tech.map((tech_item, index) => {
            return <span key={index}>{tech_item}</span>;
          })}
        </div>
      </div>
      <div className={ProjectCardStyles.card_body}>
        <h5>Funcionalidades:</h5>
        <ul>
          {features.map((feature) => {
            return (
              <div key={feature}>
                <span>
                  <IconLi height={"1rem"} width={"1rem"} />
                </span>
                <li>{feature}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;

import IconGithub from "./IconComponents/IconGH";
import IconLi from "./IconComponents/IconLi";
import IconLink from "./IconComponents/IconLink";
import ProjectCardStyles from "./styles/index.module.css";

type ProjectCardTypes = {
  title: string;
  description: string;
  url: string;
  tech: React.ReactNode[];
  features: string[];
  repoUrl: string;
};

const ProjectCard = ({
  title,
  description,
  url,
  tech,
  features,
  repoUrl,
}: ProjectCardTypes) => {
  return (
    <div className={ProjectCardStyles.card_container}>
      <div className={ProjectCardStyles.card_head}>
        <div className={ProjectCardStyles.card_title}>
          <h3>{title}</h3>
          <span>
            <a href={url} target="_blank">
              <IconLink height={"2rem"} width={"2rem"} />
            </a>
            <a href={repoUrl} target="_blank">
              <IconGithub height={"2rem"} width={"2rem"} />
            </a>
          </span>
        </div>
        <p>{description}</p>
        <h4>Tech Stack</h4>
        <div className={ProjectCardStyles.tech}>
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

import IconGithub from "./IconComponents/IconGH";
import IconLi from "./IconComponents/IconLi";
import IconLink from "./IconComponents/IconLink";
import ProjectCardStyles from "./styles/index.module.css";
import { useState } from "react";

type ProjectCardTypes = {
  title: string;
  description: string;
  url?: string;
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
  const [isExpanded, setIsExpanded] = useState(false);
  const maxInitialFeatures = 3;
  const hasMoreFeatures = features.length > maxInitialFeatures;

  return (
    <div className={ProjectCardStyles.card_container}>
      <div className={ProjectCardStyles.card_head}>
        <div className={ProjectCardStyles.card_title}>
          <h3>{title}</h3>
          <span>
            {url ? (
              <a href={url} target="_blank">
                <IconLink height={"2rem"} width={"2rem"} />
              </a>
            ) : (
              ""
            )}
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
          {(isExpanded ? features : features.slice(0, maxInitialFeatures)).map((feature) => {
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
        {hasMoreFeatures && (
          <button
            className={ProjectCardStyles.read_more_btn}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Ver menos" : `Ver más (${features.length - maxInitialFeatures} adicionales)`}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

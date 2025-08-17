import { IconBriefcase } from "./IconBriefcase";
import ExperienceElementStyles from "./styles/index.module.css";

type ExElementType = {
  date: string;
  title: string;
  org: string;
  profile: string[];
};

const ExperienceElement = (props: ExElementType) => {
  return (
    <div className={ExperienceElementStyles.exel_container}>
      <div className={ExperienceElementStyles.exel_icon}>
        <IconBriefcase />
      </div>
      <div className={ExperienceElementStyles.exel_content}>
        <span>{props.date}</span>
        <h3>{props.title}</h3>
        <h4>{props.org}</h4>
        <ul>
          {props.profile.map((listItem: string) => {
            return <li key={listItem}>{listItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceElement;
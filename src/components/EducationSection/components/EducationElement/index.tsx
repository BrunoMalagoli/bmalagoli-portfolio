import { IconGraduationCap } from "./IconGraduationCap";
import EducationElementStyles from "./styles/index.module.css";

type EdElementType = {
  date: string;
  title: string;
  org: string;
  profile: string[];
};

const EducationElement = (props: EdElementType) => {
  return (
    <div className={EducationElementStyles.edel_container}>
      <div className={EducationElementStyles.edel_icon}>
        <IconGraduationCap />
      </div>
      <div className={EducationElementStyles.edel_content}>
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

export default EducationElement;

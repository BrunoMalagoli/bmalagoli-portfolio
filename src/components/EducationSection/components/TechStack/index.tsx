import TechStackSecStyles from "./styles/index.module.css";
import TechStackCard from "./TechStackCard/TechStackCard";
import {
  IconCplusplus,
  IconCss3,
  IconExpress,
  IconGit,
  IconHtml5,
  IconJavascript,
  IconMongodb,
  IconMysql,
  IconNextdotjs,
  IconNodedotjs,
  IconNpm,
  IconReact,
  IconTypescript,
} from "./IconComponents/index.ts";
const TechStackSection = () => {
  return (
    <section id={TechStackSecStyles.tstack_section}>
      <div id={TechStackSecStyles.tstack_container}>
        <h2>Tech Stack</h2>
        <div>
          <TechStackCard
            title="Realizado"
            description="Habilidades básicas aprendidas"
            icons={[
              <IconHtml5 height={"3.5rem"} width={"3.5rem"} />,
              <IconCss3 height={"3.5rem"} width={"3.5rem"} />,
              <IconJavascript height={"3.5rem"} width={"3.5rem"} />,
              <IconGit height={"3.5rem"} width={"3.5rem"} />,
              <IconNpm height={"3.5rem"} width={"3.5rem"} />,
            ]}
          />
          <TechStackCard
            title="Haciendo"
            description="Mejorando mis habilidades dia a dia"
            icons={[
              <IconNodedotjs height={"4rem"} width={"4rem"} />,
              <IconReact height={"4rem"} width={"4rem"} />,
              <IconTypescript height={"4rem"} width={"4rem"} />,
              <IconNextdotjs height={"4rem"} width={"4rem"} />,
              <IconMongodb height={"4rem"} width={"4rem"} />,
              <IconExpress height={"4rem"} width={"4rem"} />,
            ]}
          />
          <TechStackCard
            title="Objetivos"
            description="Habilidades que quiero aprender "
            icons={[
              <IconMysql height={"4rem"} width={"4rem"} />,
              <IconCplusplus height={"4rem"} width={"4rem"} />,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

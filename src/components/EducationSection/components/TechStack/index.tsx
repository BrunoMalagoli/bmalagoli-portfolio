import TechStackSecStyles from "./styles/index.module.css";
import TechStackCard from "./TechStackCard/TechStackCard";
import {
  IconCSharp,
  IconCss3,
  IconExpress,
  IconGit,
  IconHtml5,
  IconJavascript,
  IconMongodb,
  IconNextdotjs,
  IconNodedotjs,
  IconReact,
  IconTypescript,
  IconNestjs,
  IconPostgreSQL,
  IconKubernetes,
  IconTailwind,
} from "./IconComponents/index.ts";
import { IconJest } from "./IconComponents/IconJest.tsx";
const TechStackSection = () => {
  return (
    <section id={TechStackSecStyles.tstack_section}>
      <div id={TechStackSecStyles.tstack_container}>
        <h2>Tech Stack</h2>
        <div>
          <TechStackCard
            title="Backend Specialist"
            description="Stack principal que uso para desarrollar APIs robustas y escalables en producción"
            icons={[
              <IconNodedotjs height={"4rem"} width={"4rem"} />,
              <IconExpress height={"4rem"} width={"4rem"} />,
              <IconTypescript height={"4rem"} width={"4rem"} />,
              <IconPostgreSQL height={"4rem"} width={"4rem"} />,
              <IconMongodb height={"4rem"} width={"4rem"} />,
              <IconNestjs height={"4rem"} width={"4rem"} />,
            ]}
          />
          <TechStackCard
            title="Frontend & Tools"
            description="Tecnologías frontend y herramientas que domino para desarrollo full-stack"
            icons={[
              <IconReact height={"3.8rem"} width={"3.8rem"} />,
              <IconNextdotjs height={"3.8rem"} width={"3.8rem"} />,
              <IconTailwind height={"3.8rem"} width={"3.8rem"} />,
              <IconJavascript height={"3.8rem"} width={"3.8rem"} />,
              <IconGit height={"3.8rem"} width={"3.8rem"} />,
            ]}
          />
          <TechStackCard
            title="Next Level"
            description="Tecnologías avanzadas que estoy incorporando para soluciones enterprise"
            icons={[
              <IconKubernetes height={"4rem"} width={"4rem"} />,
              <IconCSharp height={"4rem"} width={"4rem"} />,
              <IconJest height={"4rem"} width={"4rem"} />,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

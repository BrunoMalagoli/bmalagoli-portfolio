import React from "react";
import TechStackCardStyles from "../styles/TechStackCard.module.css";

type TCardProps = {
  title: string;
  description: string;
  icons: React.ReactNode[];
};

const TechStackCard = ({ title, description, icons }: TCardProps) => {
  return (
    <div className={TechStackCardStyles.card_container}>
      <div className={TechStackCardStyles.card_body}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={TechStackCardStyles.card_icons_container}>
          {icons.map((icon: React.ReactNode, index) => {
            return <span key={index}>{icon}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;

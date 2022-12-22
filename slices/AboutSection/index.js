import React from "react";

// Variations;
import { DefaultAboutSection, TitleFirst } from "../../components/AboutSection";

const AboutSection = ({ slice: { primary, items, variation }, i }) => {
  const componentMap = {
    default: DefaultAboutSection,
    titleFirst: TitleFirst,
  };

  const VariableComponent = componentMap[variation];

  return <VariableComponent id={`${i}-cta-slice`} {...primary} items={items} />;
};

export default AboutSection;

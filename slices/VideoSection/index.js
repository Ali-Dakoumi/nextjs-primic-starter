import React from "react";

// Variations;
import { DefaultVideoSection } from "../../components/VideoSection";

const VideoSection = ({ slice: { primary, items, variation }, i }) => {
  const componentMap = {
    default: DefaultVideoSection,
  };

  const VariableComponent = componentMap[variation];

  return <VariableComponent id={`${i}-cta-slice`} {...primary} items={items} />;
};

export default VideoSection;

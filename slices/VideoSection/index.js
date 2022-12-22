import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.VideoSectionSlice} VideoSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSectionSlice>} VideoSectionProps
 * @param { VideoSectionProps }
 */
const VideoSection = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.title} />
    <PrismicRichText field={slice.primary.slogan} />
    <PrismicRichText field={slice.primary.description} />
  </section>
);

export default VideoSection;

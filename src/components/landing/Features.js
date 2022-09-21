import { useState } from "react";
import styled from "styled-components";
import Tab from "../Tab";
import FeatureBlock from "../FeatureBlock";
import imgFeature1 from "../../assets/illustration-features-tab-1.svg";
import imgFeature2 from "../../assets/illustration-features-tab-2.svg";
import imgFeature3 from "../../assets/illustration-features-tab-3.svg";

export const FeaturesParagraph = styled.p``;

export const FeaturesHeading = styled.h2``;

export const FeaturesBox = styled.section``;

const Features = ({ className }) => {
  const features = [
    {
      img: {
        src: imgFeature1,
        alt: "features-tab-1-illustration",
      },
      heading: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      img: {
        src: imgFeature2,
        alt: "features-tab-2-illustration",
      },
      heading: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      img: {
        src: imgFeature3,
        alt: "features-tab-3-illustration",
      },
      heading: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  const [currentFeature, setCurrentFeature] = useState(features[0]);

  return (
    <FeaturesBox className={className}>
      <FeaturesHeading>Features</FeaturesHeading>
      <FeaturesParagraph>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </FeaturesParagraph>
      <Tab />
      <FeatureBlock
        img={currentFeature.img}
        heading={currentFeature.heading}
        description={currentFeature.description}
      />
    </FeaturesBox>
  );
};

export default Features;

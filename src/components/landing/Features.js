import { useState } from "react";
import styled from "styled-components";
import Tab from "../Tab";
import FeatureBlock from "../FeatureBlock";
import imgFeature1 from "../../assets/illustration-features-tab-1.svg";
import imgFeature2 from "../../assets/illustration-features-tab-2.svg";
import imgFeature3 from "../../assets/illustration-features-tab-3.svg";
import {
  mixinSectionHeading,
  mixinSectionParagraph,
  mixinSection,
} from "../../GlobalStyle";

export const FeatureSwitcherBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10rem;
  width: 100%;
  padding-top: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding-top: 1rem;
  }
`;

export const FeaturesParagraph = styled.p`
  ${mixinSectionParagraph}
`;

export const FeaturesHeading = styled.h2`
  ${mixinSectionHeading}
`;

export const FeaturesBox = styled.section`
  ${mixinSection}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding-block: 1rem 7.5rem;
`;

const Features = ({ className }) => {
  const features = [
    {
      id: "0",
      tabName: "Simple Bookmarking",
      img: {
        src: imgFeature1,
        alt: "features-tab-1-illustration",
      },
      heading: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      id: "1",
      tabName: "Speedy Searching",
      img: {
        src: imgFeature2,
        alt: "features-tab-2-illustration",
      },
      heading: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      id: "2",
      tabName: "Easy Sharing",
      img: {
        src: imgFeature3,
        alt: "features-tab-3-illustration",
      },
      heading: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  const [currentFeatureId, setCurrentFeatureId] = useState(0);

  const currentFeature = features[currentFeatureId];

  return (
    <FeaturesBox className={className}>
      <FeaturesHeading>Features</FeaturesHeading>
      <FeaturesParagraph>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </FeaturesParagraph>
      <FeatureSwitcherBox>
        <Tab
          options={features.map((feature) => {
            return { id: feature.id, tabName: feature.tabName };
          })}
          selectedOptionId={currentFeatureId}
          selectOption={setCurrentFeatureId}
        />
        <FeatureBlock
          img={currentFeature.img}
          heading={currentFeature.heading}
          description={currentFeature.description}
        />
      </FeatureSwitcherBox>
    </FeaturesBox>
  );
};

export default Features;

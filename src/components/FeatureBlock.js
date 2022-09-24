import styled from "styled-components";
import { mixinSectionHeading, mixinSectionParagraph } from "../GlobalStyle";
import { SoftBlueBtn } from "./Buttons";

export const FeatureDescription = styled.p`
  ${mixinSectionParagraph}
  text-align: left;
`;

export const FeatureHeading = styled.h2`
  ${mixinSectionHeading}
  text-align: left;
`;

export const FeatureTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.25rem;
`;

export const FeatureImg = styled.img`
  width: 100%;
`;

export const FeatureImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FeatureBlockBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

const FeatureBlock = ({ className, img, heading, description }) => {
  return (
    <FeatureBlockBox className={className}>
      <FeatureImgBox>
        <FeatureImg src={img.src} alt={img.alt} />
      </FeatureImgBox>
      <FeatureTextBox>
        <FeatureHeading>{heading}</FeatureHeading>
        <FeatureDescription>{description}</FeatureDescription>
        <SoftBlueBtn>More Info</SoftBlueBtn>
      </FeatureTextBox>
    </FeatureBlockBox>
  );
};

export default FeatureBlock;

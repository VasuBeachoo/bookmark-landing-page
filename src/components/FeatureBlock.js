import styled from "styled-components";
import { mixinHeading, mixinParagraph } from "../GlobalStyle";
import { SoftBlueBtn } from "./Buttons";

export const FeatureDescription = styled.p`
  ${mixinParagraph}
`;

export const FeatureHeading = styled.h2`
  ${mixinHeading}
`;

export const FeatureTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FeatureImg = styled.img``;

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

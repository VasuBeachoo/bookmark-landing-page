import styled from "styled-components";
import Button from "./Buttons";

export const FeatureDescription = styled.p``;

export const FeatureHeading = styled.h2``;

export const FeatureTextBox = styled.div``;

export const FeatureImg = styled.img``;

export const FeatureImgBox = styled.div``;

export const FeatureBlockBox = styled.div``;

const FeatureBlock = ({ className, img, heading, description }) => {
  return (
    <FeatureBlockBox className={className}>
      <FeatureImgBox>
        <FeatureImg src={img.src} alt={img.alt} />
      </FeatureImgBox>
      <FeatureTextBox>
        <FeatureHeading>{heading}</FeatureHeading>
        <FeatureDescription>{description}</FeatureDescription>
        <Button>More Info</Button>
      </FeatureTextBox>
    </FeatureBlockBox>
  );
};

export default FeatureBlock;

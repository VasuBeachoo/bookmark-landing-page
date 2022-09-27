import styled from "styled-components";
import { mixinSectionHeading, mixinSectionParagraph } from "../GlobalStyle";
import { SoftBlueBtn } from "./Buttons";

export const FeatureDescription = styled.p`
  ${mixinSectionParagraph}
  text-align: left;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const FeatureHeading = styled.h2`
  ${mixinSectionHeading}
  text-align: left;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const FeatureTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.25rem;
  transform: translate(0, -7.5rem);

  @media (max-width: 1000px) {
    align-items: center;
    transform: none;
  }
`;

export const FeatureImg = styled.img`
  width: clamp(10rem, 90%, 40rem);
  transform: translate(5rem, -7rem);
`;

export const FeatureImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--Soft-blue);
  border-radius: 0 50% 50% 0;
  margin: 0 0 0 -15rem;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const FeatureBlockBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 4rem;
  }
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

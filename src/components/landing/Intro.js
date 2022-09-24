import styled from "styled-components";
import { SoftBlueBtn, DarkBlueBtn } from "../Buttons";
import introImg from "../../assets/illustration-hero.svg";
import {
  mixinSectionHeading,
  mixinSectionParagraph,
  mixinSection,
} from "../../GlobalStyle";

export const IntroImg = styled.img`
  width: 100%;
`;

export const IntroImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IntroBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

export const IntroParagraph = styled.p`
  ${mixinSectionParagraph}
  text-align: left;
`;

export const IntroHeading = styled.h1`
  ${mixinSectionHeading}
  text-align: left;
  font-size: 2.25rem;
`;

export const IntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0.25;
  gap: 1.5rem;
`;

export const IntroBox = styled.section`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-block: 1.5rem 6rem;
`;

const Intro = ({ className }) => {
  return (
    <IntroBox className={className}>
      <IntroTextBox>
        <IntroHeading>A Simple Bookmark Manager</IntroHeading>
        <IntroParagraph>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </IntroParagraph>
        <IntroBtns>
          <SoftBlueBtn>Get it on Chrome</SoftBlueBtn>
          <DarkBlueBtn>Get it on Firefox</DarkBlueBtn>
        </IntroBtns>
      </IntroTextBox>
      <IntroImgBox>
        <IntroImg src={introImg} alt="intro-illustration" />
      </IntroImgBox>
    </IntroBox>
  );
};

export default Intro;

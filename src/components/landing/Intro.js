import styled from "styled-components";
import { SoftBlueBtn, DarkBlueBtn } from "../Buttons";
import introImg from "../../assets/illustration-hero.svg";
import {
  mixinSectionHeading,
  mixinSectionParagraph,
  mixinSection,
} from "../../GlobalStyle";

export const IntroImg = styled.img`
  width: clamp(10rem, 100%, 40rem);
  transform: translate(-5rem, -3rem);

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const IntroImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--Soft-blue);
  border-radius: 50% 0 0 50%;
  margin: 0 -15rem 0 0;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const IntroBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const IntroParagraph = styled.p`
  ${mixinSectionParagraph}
  text-align: left;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const IntroHeading = styled.h1`
  ${mixinSectionHeading}
  text-align: left;
  font-size: 2.25rem;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const IntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0.25;
  gap: 1.5rem;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

export const IntroBox = styled.section`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 4rem;
  padding-block: 2.5rem 6rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
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

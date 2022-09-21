import styled from "styled-components";
import Button from "../Buttons";
import introImg from "../../assets/illustration-hero.svg";

export const IntroImg = styled.img``;

export const IntroImgBox = styled.div``;

export const IntroBtns = styled.div``;

export const IntroParagraph = styled.p``;

export const IntroHeading = styled.h1``;

export const IntroTextBox = styled.div``;

export const IntroBox = styled.section``;

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
          <Button>Get it on Chrome</Button>
          <Button>Get it on Firefox</Button>
        </IntroBtns>
      </IntroTextBox>
      <IntroImgBox>
        <IntroImg src={introImg} alt="intro-illustration" />
      </IntroImgBox>
    </IntroBox>
  );
};

export default Intro;

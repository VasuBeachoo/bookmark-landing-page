import styled from "styled-components";
import iconArrow from "../assets/icon-arrow.svg";
import { mixinHeading, mixinParagraph } from "../GlobalStyle";

export const AccordionDropdownText = styled.p`
  ${mixinParagraph}
`;

export const AccordionDropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const AccordionHeadingIcon = styled.img`
  margin-left: auto;
`;

export const AccordionHeadingText = styled.h3`
  ${mixinHeading}
  font-weight: 400;
`;

export const AccordionHeadingBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const AccordionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Accordion = ({ className, heading, dropdown }) => {
  return (
    <AccordionBox className={className}>
      <AccordionHeadingBox>
        <AccordionHeadingText>{heading}</AccordionHeadingText>
        <AccordionHeadingIcon src={iconArrow} alt="down-arrow-icon" />
      </AccordionHeadingBox>
      <AccordionDropdownBox>
        <AccordionDropdownText>{dropdown}</AccordionDropdownText>
      </AccordionDropdownBox>
    </AccordionBox>
  );
};

export default Accordion;

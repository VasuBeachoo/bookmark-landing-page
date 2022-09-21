import styled from "styled-components";
import iconArrow from "../assets/icon-arrow.svg";

export const AccordionDropdownText = styled.p``;

export const AccordionDropdownBox = styled.div``;

export const AccordionHeadingIcon = styled.img``;

export const AccordionHeadingText = styled.h3``;

export const AccordionHeadingBox = styled.div``;

export const AccordionBox = styled.div``;

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

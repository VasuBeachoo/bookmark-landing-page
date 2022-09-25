import { useState } from "react";
import styled, { css } from "styled-components";
import iconArrow from "../assets/icon-arrow.svg";

export const AccordionDropdownText = styled.p`
  color: var(--Grayish-blue);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.01ch;
  line-height: 2.75ch;
  margin: 0;
`;

export const AccordionDropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const AccordionHeadingIcon = styled.img`
  ${(props) =>
    props.dropdown &&
    css`
      transform: rotate(180deg);
      filter: brightness(0) saturate(100%) invert(49%) sepia(74%)
        saturate(1955%) hue-rotate(325deg) brightness(96%) contrast(104%);
    `};
  margin-left: auto;
`;

export const AccordionHeadingText = styled.h3`
  color: var(--Dark-blue);
  font-weight: 400;
  letter-spacing: 0.01ch;
  line-height: 2ch;
  margin: 0;
  transition: 0.2s;
`;

export const AccordionHeadingBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const AccordionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  min-width: 100%;
  user-select: none;
  border-top: 0.1rem solid #d3d3d3;
  padding: 1.5rem;

  &:hover {
    cursor: pointer;

    ${AccordionHeadingText} {
      color: var(--Soft-red);
    }
  }
`;

const Accordion = ({ className, heading, dropdownText }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <AccordionBox className={className} onClick={() => setDropdown(!dropdown)}>
      <AccordionHeadingBox>
        <AccordionHeadingText>{heading}</AccordionHeadingText>
        <AccordionHeadingIcon
          src={iconArrow}
          alt="down-arrow-icon"
          dropdown={dropdown}
        />
      </AccordionHeadingBox>
      {dropdown && (
        <AccordionDropdownBox>
          <AccordionDropdownText>{dropdownText}</AccordionDropdownText>
        </AccordionDropdownBox>
      )}
    </AccordionBox>
  );
};

export default Accordion;

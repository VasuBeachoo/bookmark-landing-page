import styled from "styled-components";
import { mixinSection } from "../../GlobalStyle";
import ContactInput from "../ContactInput";

export const CtaMainHeading = styled.h2`
  text-align: center;
  color: var(--White);
  font-weight: 400;
  margin: 0;
`;

export const CtaSubHeading = styled.p`
  text-align: center;
  color: var(--White);
  font-weight: 500;
  margin: 0;
`;

export const CtaBox = styled.section`
  ${mixinSection}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--Soft-blue);
`;

const Cta = ({ className }) => {
  return (
    <CtaBox className={className}>
      <CtaSubHeading>35,000+ ALREADY JOINED</CtaSubHeading>
      <CtaMainHeading>Stay up-to-date with what we're doing</CtaMainHeading>
      <ContactInput />
    </CtaBox>
  );
};

export default Cta;

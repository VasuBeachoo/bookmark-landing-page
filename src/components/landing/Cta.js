import styled from "styled-components";
import { mixinSection } from "../../GlobalStyle";
import ContactInput from "../ContactInput";

export const CtaMainHeading = styled.h2`
  text-align: center;
`;

export const CtaSubHeading = styled.p`
  text-align: center;
`;

export const CtaBox = styled.section`
  ${mixinSection}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

import styled from "styled-components";
import ContactInput from "../ContactInput";

export const CtaMainHeading = styled.h2``;

export const CtaSubHeading = styled.p``;

export const CtaBox = styled.section``;

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

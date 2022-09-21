import styled from "styled-components";
import Header from "../Header";
import Intro from "./Intro";
import Features from "./Features";
import Downloads from "./Downloads";
import Faq from "./Faq";
import Cta from "./Cta";
import Footer from "../Footer";

export const LandingPageBox = styled.div``;

const LandingPage = ({ className }) => {
  return (
    <LandingPageBox className={className}>
      <Header />
      <Intro />
      <Features />
      <Downloads />
      <Faq />
      <Cta />
      <Footer />
    </LandingPageBox>
  );
};

export default LandingPage;

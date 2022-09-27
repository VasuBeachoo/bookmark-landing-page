import styled from "styled-components";
import Header from "../Header";
import Intro from "./Intro";
import Features from "./Features";
import Downloads from "./Downloads";
import Faq from "./Faq";
import Cta from "./Cta";
import Footer from "../Footer";

export const LandingPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const LandingPage = ({ className, navLinks, menuOpen, setMenuOpen }) => {
  return (
    <LandingPageBox className={className}>
      <Header
        headerLinks={navLinks}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
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

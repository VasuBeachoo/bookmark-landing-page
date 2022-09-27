import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle, { mixinLink } from "./GlobalStyle";
import LandingPage from "./components/landing/LandingPage";
import { DarkBlueBtn } from "./components/Buttons";

export const NavMenuLink = styled.p`
  ${mixinLink}
`;

export const NavMenuBox = styled.div`
  display: none;
  position: absolute;
  top: 6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  background-color: #ffffff;
  padding: 2rem;

  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const DarkOverlay = styled.div`
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.7;

  @media (max-width: 1000px) {
    display: block;
  }
`;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const App = () => {
  const navLinks = ["FEATURES", "PRICING", "CONTACT"];

  const [menuOpen, setMenuOpen] = useState(false);

  const displayNavLinks = () => {
    return navLinks.map((link) => <NavMenuLink>{link}</NavMenuLink>);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1000) setMenuOpen(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <AppBox>
      <GlobalStyle />
      <LandingPage
        navLinks={navLinks}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      {menuOpen && <DarkOverlay />}
      {menuOpen && (
        <NavMenuBox>
          {displayNavLinks()}
          <DarkBlueBtn>LOGIN</DarkBlueBtn>
        </NavMenuBox>
      )}
    </AppBox>
  );
};

export default App;

import styled from "styled-components";
import { SoftRedBtn } from "./Buttons";
import logoBookmark from "../assets/logo-bookmark.svg";
import { mixinLink, mixinSection } from "../GlobalStyle";

export const HeaderLink = styled.p`
  ${mixinLink}
  font-size: 0.875rem;
  letter-spacing: 0.225ch;
`;

export const HeaderLinks = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-left: auto;
`;

export const HeaderLogo = styled.img``;

export const HeaderBox = styled.header`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding-block: 3rem;
`;

const Header = ({ className }) => {
  const headerLinks = ["FEATURES", "PRICING", "CONTACT"];

  const displayHeaderLinks = () => {
    let key = 1000;

    return headerLinks.map((link) => (
      <HeaderLink key={key++}>{link}</HeaderLink>
    ));
  };

  return (
    <HeaderBox className={className}>
      <HeaderLogo src={logoBookmark} alt="bookmark-logo" />
      <HeaderLinks>
        {displayHeaderLinks()}
        <SoftRedBtn>LOGIN</SoftRedBtn>
      </HeaderLinks>
    </HeaderBox>
  );
};

export default Header;

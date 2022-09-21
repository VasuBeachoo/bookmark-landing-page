import styled from "styled-components";
import Button from "./Buttons";
import logoBookmark from "../assets/logo-bookmark.svg";
import { mixinSection } from "../GlobalStyle";

export const HeaderLink = styled.p``;

export const HeaderLinks = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const HeaderLogo = styled.img``;

export const HeaderBox = styled.header`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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
        <Button>LOGIN</Button>
      </HeaderLinks>
    </HeaderBox>
  );
};

export default Header;

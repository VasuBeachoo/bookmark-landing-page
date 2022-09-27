import styled from "styled-components";
import { SoftRedBtn } from "./Buttons";
import logoBookmark from "../assets/logo-bookmark.svg";
import iconMenuOpen from "../assets/icon-hamburger.svg";
import iconMenuClose from "../assets/icon-close.svg";
import { mixinLink, mixinSection } from "../GlobalStyle";

export const MenuIcon = styled.img`
  display: none;
  z-index: 3;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    display: block;
  }
`;

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

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const HeaderLogo = styled.img``;

export const HeaderBox = styled.header`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-block: 3rem;
`;

const Header = ({ className, headerLinks, menuOpen, setMenuOpen }) => {
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
      <MenuIcon
        src={menuOpen ? iconMenuClose : iconMenuOpen}
        alt={menuOpen ? "close-menu-icon" : "open-menu-icon"}
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </HeaderBox>
  );
};

export default Header;

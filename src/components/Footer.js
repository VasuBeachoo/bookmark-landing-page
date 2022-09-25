import styled from "styled-components";
import logoBookmark from "../assets/logo-bookmark.svg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import { mixinSection } from "../GlobalStyle";

export const FooterSocialIcon = styled.img`
  user-select: none;

  &:hover {
    cursor: pointer;
    filter: brightness(0) saturate(100%) invert(49%) sepia(74%) saturate(1955%)
      hue-rotate(325deg) brightness(96%) contrast(104%);
  }
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-left: auto;
`;

export const FooterLink = styled.p`
  user-select: none;
  color: var(--White);
  font-size: 0.95rem;
  margin: 0;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: var(--Soft-red);
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const FooterLogo = styled.img`
  filter: brightness(0.75) saturate(100%) invert(1);
`;

export const FooterBox = styled.footer`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;
  background-color: var(--Dark-blue);
  padding-block: 1.75rem;
`;

const Footer = ({ className }) => {
  const footerLinks = ["FEATURES", "PRICING", "CONTACT"];
  const footerSocialIcons = [
    {
      src: iconFacebook,
      alt: "facebook-icon",
    },
    {
      src: iconTwitter,
      alt: "twitter-icon",
    },
  ];

  const displayFooterLinks = () => {
    let key = 4000;

    return footerLinks.map((link) => (
      <FooterLink key={key++}>{link}</FooterLink>
    ));
  };

  const displayFooterSocialIcons = () => {
    let key = 5000;

    return footerSocialIcons.map((icon) => (
      <FooterSocialIcon key={key++} src={icon.src} alt={icon.alt} />
    ));
  };

  return (
    <FooterBox className={className}>
      <FooterLogo src={logoBookmark} alt="bookmark-logo" />
      <FooterLinks>{displayFooterLinks()}</FooterLinks>
      <FooterSocialIcons>{displayFooterSocialIcons()}</FooterSocialIcons>
    </FooterBox>
  );
};

export default Footer;

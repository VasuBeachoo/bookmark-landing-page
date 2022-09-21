import styled from "styled-components";
import logoBookmark from "../assets/logo-bookmark.svg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconTwitter from "../assets/icon-twitter.svg";

export const FooterSocialIcon = styled.img``;

export const FooterSocialIcons = styled.div``;

export const FooterLink = styled.p``;

export const FooterLinks = styled.div``;

export const FooterLogo = styled.img``;

export const FooterBox = styled.footer``;

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
import styled from "styled-components";
import DownloadBlock from "../DownloadBlock";
import logoChrome from "../../assets/logo-chrome.svg";
import logoFirefox from "../../assets/logo-firefox.svg";
import logoOpera from "../../assets/logo-opera.svg";
import {
  mixinSectionHeading,
  mixinSectionParagraph,
  mixinSection,
} from "../../GlobalStyle";

export const DownloadsOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DownloadsParagraph = styled.p`
  ${mixinSectionParagraph}
`;

export const DownloadsHeading = styled.h2`
  ${mixinSectionHeading}
`;

export const DownloadsBox = styled.section`
  ${mixinSection}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Downloads = ({ className }) => {
  const downloadOptions = [
    {
      icon: {
        src: logoChrome,
        alt: "chrome-logo",
      },
      title: "Add to Chrome",
      info: "Minimum version 62",
    },
    {
      icon: {
        src: logoFirefox,
        alt: "firefox-logo",
      },
      title: "Add to Firefox",
      info: "Minimum version 55",
    },
    {
      icon: {
        src: logoOpera,
        alt: "opera-logo",
      },
      title: "Add to Opera",
      info: "Minimum version 46",
    },
  ];

  const displayDownloadOptions = () => {
    let key = 2000;

    return downloadOptions.map((option) => (
      <DownloadBlock
        key={key++}
        icon={option.icon}
        title={option.title}
        info={option.info}
      />
    ));
  };

  return (
    <DownloadsBox className={className}>
      <DownloadsHeading>Download the extension</DownloadsHeading>
      <DownloadsParagraph>
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </DownloadsParagraph>
      <DownloadsOptions>{displayDownloadOptions()}</DownloadsOptions>
    </DownloadsBox>
  );
};

export default Downloads;

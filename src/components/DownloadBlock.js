import styled from "styled-components";
import { mixinHeading, mixinParagraph } from "../GlobalStyle";
import { SoftBlueBtn } from "./Buttons";

export const DownloadDivider = styled.hr`
  width: 100%;
`;

export const DownloadInfo = styled.p`
  ${mixinParagraph}
`;

export const DownloadTitle = styled.h3`
  ${mixinHeading}
`;

export const DownloadIcon = styled.img``;

export const DownloadBlockBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

const DownloadBlock = ({ className, icon, title, info }) => {
  return (
    <DownloadBlockBox className={className}>
      <DownloadIcon src={icon.src} alt={icon.alt} />
      <DownloadTitle>{title}</DownloadTitle>
      <DownloadInfo>{info}</DownloadInfo>
      <DownloadDivider />
      <SoftBlueBtn>Add & Install Extension</SoftBlueBtn>
    </DownloadBlockBox>
  );
};

export default DownloadBlock;

import styled from "styled-components";
import Button from "./Buttons";

export const DownloadDivider = styled.hr``;

export const DownloadInfo = styled.p``;

export const DownloadTitle = styled.h3``;

export const DownloadIcon = styled.img``;

export const DownloadBlockBox = styled.div``;

const DownloadBlock = ({ className, icon, title, info }) => {
  return (
    <DownloadBlockBox className={className}>
      <DownloadIcon src={icon.src} alt={icon.alt} />
      <DownloadTitle>{title}</DownloadTitle>
      <DownloadInfo>{info}</DownloadInfo>
      <DownloadDivider />
      <Button>Add & Install Extension</Button>
    </DownloadBlockBox>
  );
};

export default DownloadBlock;

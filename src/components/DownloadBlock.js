import styled from "styled-components";
import Button from "./Buttons";

export const DownloadDivider = styled.hr`
  width: 100%;
`;

export const DownloadInfo = styled.p``;

export const DownloadTitle = styled.h3``;

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
      <Button>Add & Install Extension</Button>
    </DownloadBlockBox>
  );
};

export default DownloadBlock;

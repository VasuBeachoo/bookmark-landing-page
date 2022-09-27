import styled from "styled-components";
import { mixinSectionHeading, mixinSectionParagraph } from "../GlobalStyle";
import { SoftBlueBtn } from "./Buttons";

export const DownloadDivider = styled.hr`
  width: 100%;
  border: none;
  border-top: 0.25rem dotted;
  border-color: #d3d3d3;
`;

export const DownloadInfo = styled.p`
  ${mixinSectionParagraph}
  font-size: 1rem;
  margin-top: -1.25rem;
`;

export const DownloadTitle = styled.h3`
  ${mixinSectionHeading}
  font-size: 1.3rem;
`;

export const DownloadIcon = styled.img`
  width: 4.5rem;
`;

export const DownloadBlockBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 1.5rem;
  margin-top: ${(props) => props.order};

  @media (max-width: 1000px) {
    width: clamp(10rem, 80%, 25rem);
    padding: 2rem;
    margin-top: 0;
  }
`;

const DownloadBlock = ({ className, icon, title, info, order }) => {
  return (
    <DownloadBlockBox className={className} order={`${order * 1.5}rem`}>
      <DownloadIcon src={icon.src} alt={icon.alt} />
      <DownloadTitle>{title}</DownloadTitle>
      <DownloadInfo>{info}</DownloadInfo>
      <DownloadDivider />
      <SoftBlueBtn>Add & Install Extension</SoftBlueBtn>
    </DownloadBlockBox>
  );
};

export default DownloadBlock;

import styled from "styled-components";

export const TabOption = styled.p``;

export const TabOptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;

export const TabBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Tab = ({ className, options }) => {
  const displayOptions = () => {
    let key = 12000;

    return options.map((option) => (
      <TabOptionBox key={key++}>
        <TabOption>{option}</TabOption>
      </TabOptionBox>
    ));
  };

  return <TabBox className={className}>{displayOptions()}</TabBox>;
};

export default Tab;

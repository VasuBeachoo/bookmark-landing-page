import styled, { css } from "styled-components";

export const TabOption = styled.p`
  text-align: center;
  color: var(--Dark-blue);
  font-size: 1.05rem;
  letter-spacing: 0.01ch;
  line-height: 2.5ch;
  margin: 0;
  transition: 0.2s;
`;

export const TabOptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  padding: 1.5rem 2.25rem;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.selected === true
      ? css`
          font-weight: 500;
          border-bottom: 0.2rem solid var(--Soft-red);
        `
      : css`
          font-weight: 400;
          border-bottom: 0.1rem solid #d3d3d3;

          &:hover {
            ${TabOption} {
              color: var(--Soft-red);
            }
          }
        `}
`;

export const TabBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  user-select: none;
`;

const Tab = ({ className, options, selectedOptionId, selectOption }) => {
  const displayOptions = () => {
    let key = 12000;

    return options.map((option) => (
      <TabOptionBox
        key={key++}
        selected={option.id === selectedOptionId}
        onClick={() => {
          selectOption(option.id);
        }}
      >
        <TabOption>{option.tabName}</TabOption>
      </TabOptionBox>
    ));
  };

  return <TabBox className={className}>{displayOptions()}</TabBox>;
};

export default Tab;

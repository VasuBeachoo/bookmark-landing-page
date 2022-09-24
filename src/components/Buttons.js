import styled from "styled-components";

const Button = styled.button`
  all: unset;
  text-align: center;
  background-color: var(--primary-clr);
  color: var(--White);
  font-size: 0.915rem;
  font-weight: 500;
  letter-spacing: 0.2ch;
  line-height: 2.15ch;
  border: 0.2rem solid var(--primary-clr);
  border-radius: 0.35rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding: 0.75rem 1.5rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    background-color: var(--White);
    color: var(--primary-clr);
  }
`;

export const SoftRedBtn = styled(Button)`
  --primary-clr: var(--Soft-red);
`;

export const SoftBlueBtn = styled(Button)`
  --primary-clr: var(--Soft-blue);
`;

export const DarkBlueBtn = styled(Button)`
  --primary-clr: var(--Dark-blue);
`;

export default Button;

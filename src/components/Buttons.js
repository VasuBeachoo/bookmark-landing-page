import styled from "styled-components";

const Button = styled.button`
  all: unset;
  text-align: center;
  background-color: var(--primary-clr);
  color: var(--White);
  font-size: 0.925rem;
  font-weight: 500;
  letter-spacing: 0.2ch;
  line-height: 2ch;
  border: 0.2rem solid var(--primary-clr);
  border-radius: 0.35rem;
  padding: 0.8rem 2rem;
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

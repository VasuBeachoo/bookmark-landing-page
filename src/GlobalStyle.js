import { createGlobalStyle, css } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Soft-blue: hsl(231, 69%, 60%);
    --Soft-red: hsl(0, 94%, 66%);
    --Grayish-blue: hsl(229, 8%, 60%);
    --Dark-blue: hsl(229, 31%, 21%);
    --White: hsl(0, 0%, 100%);
  }

  * {
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }

  body {
    margin: 0;
  }
`;

export const mixinSection = css`
  width: 100%;
  padding-inline: clamp(2rem, 7vw, 5rem);
`;

export const mixinSectionHeading = css`
  text-align: center;
  color: var(--Dark-blue);
  font-size: 1.65rem;
  font-weight: 500;
  letter-spacing: 0.01ch;
  line-height: 2ch;
  max-width: 20ch;
  margin: 0;
`;

export const mixinSectionParagraph = css`
  text-align: center;
  color: var(--Grayish-blue);
  font-size: 1.05rem;
  font-weight: 400;
  letter-spacing: 0.01ch;
  line-height: 2.75ch;
  max-width: 45ch;
  margin: 0;
`;

export const mixinLink = css`
  user-select: none;
  color: var(--Dark-blue);
  font-weight: 400;
  opacity: 0.8;
  margin: 0;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: var(--Soft-red);
  }
`;

export default GlobalStyle;

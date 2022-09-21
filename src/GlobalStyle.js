import { createGlobalStyle, css } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Soft-blue: hsl(231, 69%, 60%);
    --Soft-red: hsl(0, 94%, 66%);
    --Grayish-blue: hsl(229, 8%, 60%);
    --Dark-blue: hsl(229, 31%, 21%);
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
`;

export default GlobalStyle;

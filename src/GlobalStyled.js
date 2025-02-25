import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  margin: auto;
  font-family: "Lato", sans-serif;
  background-color: ${({ theme }) => theme.color.lightTheme.warmGray};
  color: ${({ theme }) => theme.color.darkTheme.black};
}
`;

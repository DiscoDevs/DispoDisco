import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    /* background-color: red; */
  }
  .sbWrapper {
      height:100vh;
      width:100%;
      display:flex;
      align-items: center;
      justify-content: center;
      margin: auto;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";
// import GoogleFonts from "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Goldman";
  src: url("https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap") format('opentype');
}
@font-face {
  font-family: "Open Sans";
  src: url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap") format('opentype');
}

  .sbWrapper {
      height:100vh;
      width:100%;
      display:flex;
      align-items: center;
      justify-content: center;
      margin: auto;
  }
  :root {
    /* CSS HSL */
    --white: hsla(0, 0%, 94%, 1);
    --black: hsla(0, 0%, 14%, 1);
    --black50: hsla(0, 0%, 14%, 0.5);

    --primary: var(--green-crayola);
    --carriage: hsla(48, 82%, 55%, 1);
    --direct: var(--dark-red);
    --onTime: hsla(17, 98%, 59%, 1);
    --cargo: hsla(259, 82%, 55%, 1);

    --primary-red: hsla(0, 75%, 40%, 1);
    --dark-red: hsla(0, 86%, 29%, 1);

    --border-radius: 3px;
    --shadow: 0 3px 6px var(--black50);
    --insetShadow: inset 2px 0 1px var(--black50), inset -2px 0 1px var(--black50);

    --green-crayola: hsla(158, 68%, 42%, 1);
    --eerie-black: hsla(0, 0%, 14%, 1);
    --orange-crayola: hsla(17, 98%, 59%, 1);
    --shocking-pink: hsla(312, 82%, 55%, 1);
    --cyber-yellow: hsla(50, 99%, 50%, 1);
    --jonquil: hsla(48, 82%, 55%, 1);
    --carnelian: hsla(0, 75%, 40%, 1);
    --red-pigment: hsla(0, 82%, 55%, 1);
    --electric-indigo: hsla(259, 82%, 55%, 1);
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  #root {
    min-height: 100vh;
    display: grid;
    place-content: center;
  }

  body {
    font-family: "Open Sans", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Goldman", cursive;
  }

`;

export default GlobalStyle;

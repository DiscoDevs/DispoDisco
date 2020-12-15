import { createGlobalStyle } from "styled-components/macro";
// import GoogleFonts from "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap";

const GlobalStyle = createGlobalStyle`

  :root {
    --text-primary: hsla(0, 0%, 94%, 1);
    --text-secondary: hsla(0, 0%, 14%, 1);
    --text-secondary50: hsla(0, 0%, 14%, 0.5);
    --text-secondary30: hsla(0, 0%, 14%, 0.3);
    --text-secondary15: hsla(0, 0%, 14%, 0.15);
    --primary: var(--green-crayola);
    --carriage: hsla(48, 82%, 55%, 1);
    --direct: var(--dark-red);
    --onTime: hsla(17, 98%, 59%, 1);
    --cargo: hsla(259, 82%, 55%, 1);

    --primary-red: hsla(0, 75%, 40%, 1);
    --dark-red: hsla(0, 86%, 29%, 1);

    --border-radius: 3px;
    --shadow: 0 3px 6px var(--text-secondary50);
    --insetShadow: inset 2px 0 1px var(--text-secondary50),
      inset -2px 0 1px var(--text-secondary50);

    --gradient-main: linear-gradient(
      0deg,
      rgba(106, 48, 235, 1) 0%,
      rgba(109, 16, 126, 1) 59%,
      rgba(106, 48, 235, 1) 100%
    );
    --gradient-dark: linear-gradient(
      0deg,
      rgba(40, 18, 89, 1) 0%,
      rgba(109, 16, 126, 1) 59%,
      rgba(20, 9, 43, 1) 100%
    );

    --gradient-normal: linear-gradient(
      0deg,
      rgba(8, 61, 119, 1) 0%,
      rgba(71, 112, 155, 1) 59%,
      rgba(79, 124, 172, 1) 100%
    );
    --gradient-concurrent: linear-gradient(
      0deg,
      rgba(167, 138, 15, 1) 0%,
      rgba(219, 184, 34, 1) 55%,
      rgba(235, 199, 51, 1) 100%
    );
    --gradient-direct: linear-gradient(
      0deg,
      rgba(128, 26, 26, 1) 20%,
      rgba(200, 26, 26, 1) 100%
    );
    --gradient-dayRide: linear-gradient(
      0deg,
      rgba(40, 62, 86, 1) 0%,
      rgba(46, 167, 65, 1) 100%
    );
    --gradient-onTime: linear-gradient(
      0deg,
      rgba(53, 24, 118, 1) 0%,
      rgba(106, 48, 235, 1) 100%
    );
    --gradient-menu: linear-gradient(
      0deg,
      rgba(36, 36, 36, 1) 0%,
      rgba(36, 36, 36, 1) 72%,
      rgba(70, 59, 94, 1) 100%
    );

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
  }

  body {
    font-family: "Open Sans", sans-serif;
    background: var(--gradient-dark);
    color: var(--text-primary)
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

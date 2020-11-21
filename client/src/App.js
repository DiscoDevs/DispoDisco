import React from "react";
import { createGlobalStyle } from "styled-components";

import { Badge } from "./stories/Badge";
import { HeaderMain } from "./stories/HeaderMain";

export const GlobalStyle = createGlobalStyle`
  :root{
    /* CSS HSL */
--green-crayola: hsla(158, 68%, 42%, 1);
--primary-color: hsla(158, 68%, 42%, 1);
--eerie-black: hsla(0, 0%, 14%, 1);
--cultured: hsla(0, 0%, 94%, 1);
--orange-crayola: hsla(17, 98%, 59%, 1);
--shocking-pink: hsla(312, 82%, 55%, 1);
--cyber-yellow: hsla(50, 99%, 50%, 1);
--jonquil: hsla(48, 82%, 55%, 1);
--carnelian: hsla(0, 75%, 40%, 1);
--dark-red: hsla(0, 86%, 29%, 1);
--electric-indigo: hsla(259, 82%, 55%, 1);
  }
  #root {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <HeaderMain />
        <Badge primary></Badge>
      </div>
    </>
  );
}

export default App;

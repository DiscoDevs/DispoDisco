import React from "react";
import GlobalStyle from "./GlobalStyles";
import AddRide from "./pages/AddRide";
import { Launch } from "./pages/Launch";

function App() {
  return (
    <>
      <GlobalStyle />
      <Launch />
      <AddRide />
    </>
  );
}

export default App;

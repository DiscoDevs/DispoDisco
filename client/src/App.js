import React from "react";
import GlobalStyle from "./GlobalStyles";
import { Launch } from "./pages/Launch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainMenu } from "./pages/MainMenu";
import { Rides } from "./pages/Rides";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/menu">
            <MainMenu />
          </Route>
          <Route path="/rides">
            <Rides />
          </Route>
          <Route path="/">
            <Launch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

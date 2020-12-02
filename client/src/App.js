import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Launch from "./pages/Launch";
import MainMenu from "./pages/MainMenu";
import Tours from "./pages/Tours";
import AddTour from "./pages/AddTour";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/addTour">
            <AddTour />
          </Route>
          <Route path="/menu">
            <MainMenu />
          </Route>
          <Route path="/tours">
            <Tours />
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

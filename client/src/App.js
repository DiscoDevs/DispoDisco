import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Launch from "./pages/Launch";
import MainMenu from "./pages/MainMenu";
import Rides from "./pages/Rides";
import AddRide from "./pages/AddRide";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/addRide">
            <AddRide />
          </Route>
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

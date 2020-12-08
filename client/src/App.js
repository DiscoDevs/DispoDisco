import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Launch from "./pages/Launch";
import MainMenu from "./pages/MainMenu";
import Tours from "./pages/Tours";
import ToursToday from "./pages/ToursToday";
import AddTour from "./pages/AddTour";
import TourInfo from "./pages/TourInfo";
import Riders from "./pages/Riders";
import AddRider from "./pages/AddRider";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/riders/:id/edit">
            <AddRider />
          </Route>
          <Route path="/riders/new">
            <AddRider />
          </Route>
          <Route path="/riders">
            <Riders />
          </Route>
          <Route path="/tours/:id/edit">
            <AddTour />
          </Route>
          <Route path="/tours/new">
            <AddTour />
          </Route>
          <Route path="/tours/new?type=concurrent">
            <AddTour concurrentTour />
          </Route>
          <Route path="/menu">
            <MainMenu />
          </Route>
          <Route path="/tours/today">
            <ToursToday />
          </Route>
          <Route path="/tours/:id/">
            <TourInfo />
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

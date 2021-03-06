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
import Customers from "./pages/Customers";
import AddCustomer from "./pages/AddCustomer";
import CustomerInfo from "./pages/CustomerInfo";
import RiderInfo from "./pages/RiderInfo";

import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserProvider } from "./context/user";
const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Switch>
            <Route path="/customers/new">
              <AddCustomer />
            </Route>
            <Route path="/customers/:id/edit">
              <AddCustomer />
            </Route>
            <Route path="/customers/:id/">
              <CustomerInfo />
            </Route>
            <Route path="/customers">
              <Customers />
            </Route>
            <Route path="/riders/new">
              <AddRider />
            </Route>
            <Route path="/riders/:id/edit">
              <AddRider />
            </Route>
            <Route path="/riders/:id">
              <RiderInfo />
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
            <Route path="/menu">
              <MainMenu />
            </Route>
            <Route path="/login">
              <Login queryClient={queryClient} />
            </Route>
            <Route path="/register">
              <Register />
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
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </UserProvider>
    </Router>
  );
}

export default App;

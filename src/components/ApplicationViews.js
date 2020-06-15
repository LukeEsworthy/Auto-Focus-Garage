import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/UserBioHomePage";
import CarList from "./cars/CarList";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        path="/cars"
        render={(props) => {
          return <CarList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;

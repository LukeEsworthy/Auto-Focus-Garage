import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/UserBioHomePage";
import CarList from "./cars/CarList";
import CarDetail from "./cars/CarDetail";

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
        exact
        path="/cars"
        render={(props) => {
          return <CarList />;
        }}
      />
      <Route
        path="/cars/:carId(\d+)"
        render={(props) => {
          return <CarDetail carId={parseInt(props.match.params.carId)} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;

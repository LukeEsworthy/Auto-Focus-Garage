import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/UserBioHomePage";
import CarList from "./cars/CarList";
import CarDetail from "./cars/CarDetail";
import CarForm from "./cars/CarForm1"

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
          return <CarList {...props} />;
        }}
      />
      <Route
        path="/cars/:carId(\d+)"
        render={(props) => {
          return (
            <CarDetail carId={parseInt(props.match.params.carId)} {...props} />
          );
        }}
      />
      <Route
        path="/cars/new"
        render={(props) => {
          return <CarForm {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;

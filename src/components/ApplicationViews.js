import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/UserBioHomePage";
import CarList from "./cars/CarList";
import CarDetail from "./cars/CarDetail";
import CarForm1 from "./cars/CarForm1";
import CarForm2 from "./cars/CarForm2";
import CarEditForm from "./cars/CarEditForm";

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
        exact
        path="/cars/:carId(\d+)"
        render={(props) => {
          return (
            <CarDetail carId={parseInt(props.match.params.carId)} {...props} />
          );
        }}
      />
      <Route
        exact
        path="/cars/new"
        render={(props) => {
          return <CarForm1 {...props} />;
        }}
      />
      <Route
        exact
        path="/cars/:carId(\d+)/new2"
        render={(props) => {
          return <CarForm2 {...props} />;
        }}
      />
      <Route
        exact
        path="/cars/:carId(\d+)/edit"
        render={(props) => {
          return <CarEditForm {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;

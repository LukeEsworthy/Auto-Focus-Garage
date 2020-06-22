import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/UserBioHomePage";
import CarList from "./cars/CarList";
import CarForm from "./cars/CarForm";
import CarDetail from "./cars/CarDetail";
import CarEditForm from "./cars/CarEditForm";
import Login from "./auth/login";
import LandingPage from "./auth/landingPage";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
      <Route
        exact
        path="/home"
        render={(props) => {
          if (isAuthenticated()) {
            return <Home {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/cars"
        render={(props) => {
          if (isAuthenticated()) {
            return <CarList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/cars/new"
        render={(props) => {
          if (isAuthenticated()) {
            return <CarForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
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
        path="/cars/:carId(\d+)/edit"
        render={(props) => {
          if (isAuthenticated()) {
            return <CarEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/"
        render={(props) => {
          return <LandingPage {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;

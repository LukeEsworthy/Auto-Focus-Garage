import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/UserBioHomePage";
import CarList from "./cars/CarList";
import CarForm from "./cars/CarForm";
import CarDetail from "./cars/CarDetail";
import CarEditForm from "./cars/CarEditForm";
import Login from "./auth/login";
import Register from "./auth/register";
import LandingPage from "./auth/landingPage";
import UserManager from "../modules/UserManager";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  let userName = JSON.parse(sessionStorage.credentials).userName;
  let userId = "";
  if (hasUser) {
    userId = UserManager.getUserByUsername(userName).then((result) => {
      return result;
    });
    userId.then(function (result) {
      console.log(result[0].id);
    });
  }
  console.log(userId);

  return (
    <React.Fragment>
      <Route
        exact
        path="/home"
        render={(props) => {
          if (hasUser) {
            return <Home {...props} userId={userId} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/cars"
        render={(props) => {
          if (hasUser) {
            return <CarList {...props} hasUser={hasUser} userId={userId} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/cars/new"
        render={(props) => {
          if (hasUser) {
            return <CarForm {...props} userId={userId} />;
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
            <CarDetail
              carId={parseInt(props.match.params.carId)}
              {...props}
              userId={userId}
            />
          );
        }}
      />
      <Route
        exact
        path="/cars/:carId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <CarEditForm {...props} userId={userId} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/"
        render={(props) => {
          return <LandingPage {...props} />;
        }}
      />
      <Route
        path="/login"
        render={(props) => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
      <Route
        path="/register"
        render={(props) => {
          return <Register setUser={setUser} {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;

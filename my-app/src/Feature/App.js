import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Home from "../Component/home";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <div style={{ height: "100%" }}>
        <Route
          exact
          path="/"
          render={() => {
            const online = JSON.parse(localStorage.getItem("online"));
            return online === true ? <Home /> : <Redirect to="/login" />;
          }}
        />
        <Route exact path="/login" render={() => <Login />} />
      </div>
    </Router>
  );
};

export default App;

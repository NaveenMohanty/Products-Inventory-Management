import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import history from "../utils/createHistory";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Alert from "../components/alertsnackbar";
import EditProduct from "../pages/EditProduct";

const Routes = () => {
  return (
    <Router history={history}>
      <Alert />
      <Switch>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/product" exact component={EditProduct} />
      </Switch>
    </Router>
  );
};

export default Routes;

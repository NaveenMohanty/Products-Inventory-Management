import React from "react";
import { Route, Redirect } from "react-router-dom";
import { store } from "../redux/store";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let auth = store.getState().user.currentUser;
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

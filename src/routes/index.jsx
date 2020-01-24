import React, { Fragment } from "react";

import Navbar from "./../layouts/navbar";
import { Router } from "react-router-dom";
import history from "./../helpers/history";
import { Route } from "react-router";

import { Home, User } from "./ListComponent/component";
import { Login, Register } from "./ListComponent/auth";
import { PrivateRoute, NothaveToken } from "./ListComponent/router";
import AuthContextProvider from "./../ContextApi/authContect";

const Routes = props => {
  return (
    <Fragment>
      <Router history={history}>
        <div>
          <Navbar />
          <main style={{ marginTop: "60px" }}>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/user" component={User} />
            <AuthContextProvider>
              <NothaveToken path="/login" component={Login} />
            </AuthContextProvider>
            <NothaveToken path="/register" component={Register} />
          </main>
        </div>
      </Router>
    </Fragment>
  );
};

export default Routes;

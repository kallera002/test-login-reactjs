import React, { Fragment } from "react";

import Navbar from "./../layouts/navbar";
import { Router } from "react-router-dom";
import history from "./../helpers/history";

import { Home, User, Logout } from "./ListComponent/component";
import { Login, Register } from "./ListComponent/auth";
import { PrivateRoute, NothaveToken } from "./ListComponent/router";
import AuthContextProvider from "./../ContextApi/authContect";

const Routes = () => {
  return (
    <Fragment>
      <Router history={history}>
        <div>
          <AuthContextProvider>
            <Navbar />
            <main style={{ marginTop: "60px" }}>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/user" component={User} />
              <PrivateRoute path="/logout" component={Logout} />
              <NothaveToken path="/login" component={Login} />
              <NothaveToken path="/register" component={Register} />
            </main>
          </AuthContextProvider>
        </div>
      </Router>
    </Fragment>
  );
};

export default Routes;

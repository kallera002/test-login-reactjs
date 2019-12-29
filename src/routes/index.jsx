import React, { Fragment } from "react";

import Navbar from "./../layouts/navbar";
import { Router } from 'react-router-dom';
import history from './../helpers/history';
import {Route} from 'react-router';
import login from '../containers/login/login'
const Routes = props => {
  return (
    <Fragment>
      <Router history={history}>
        <div>
          <Navbar />
          <main style={{marginTop: '60px'}}>
          <Route path="/login" component={login} />
          </main>
        </div>
      </Router>
    </Fragment>
  );
};

export default Routes;

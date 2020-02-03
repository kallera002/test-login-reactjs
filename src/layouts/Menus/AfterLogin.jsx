import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

const AfterLogin = () => {
  return (
    <Fragment>
      <ul>
        <li className="toolbar__item">
          <Link to="/user">User</Link>
        </li>
        <li className="toolbar__item">
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default AfterLogin;

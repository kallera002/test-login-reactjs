import React, { Fragment, useContext } from "react";
import "./Tollbar.css";
import DrawerButton from "../SideDrawer/DrawerButton";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../ContextApi/authContect";

const Tollbar = props => {
  const { isLogged } = useContext(AuthContext);
  return (
    <Fragment>
      <header className="tollbar">
        <nav className="tollbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerButton click={props.drawerClickHandler} />
          </div>

          <div className="tollbar__logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="spacer"></div>
          <div className="tollbar-navigation__items">
            {isLogged ? (
              <ul>
                <li className="to0lbar__item">
                  <Link to="/user">User</Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li className="toolbar__item">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Tollbar;

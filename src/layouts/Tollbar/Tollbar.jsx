import React, { Fragment } from "react";
import "./Tollbar.css";
import DrawerButton from "../SideDrawer/DrawerButton";

const Tollbar = props => {
  return (
    <Fragment>
      <header className="tollbar">
        <nav className="tollbar__navigation">
          <div></div>
          <DrawerButton click={props.drawerClickHandler} />
          <div className="tollbar__logo">
            <a href="/">Logo</a>
          </div>
          <div className="spacer"></div>
          <div className="tollbar-navigation__items">
            <ul>
              <li>
                <a href="/">Product</a>
              </li>
              <li>
                <a href="/">User</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Tollbar;

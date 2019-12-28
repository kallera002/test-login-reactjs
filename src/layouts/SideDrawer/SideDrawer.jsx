import React, { Fragment } from "react";
import "./SideDrawer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideDrawer = () => {
  return (
    <Fragment>
      <nav className="side-drawer">
        <div className="side-drawer__logo">
          <div style={{ display: "inline-block" }} className="lorem">
            logi
            <img src="logo192.png" />
          </div>
          <div style={{ display: "inline-block" }}>
            <h4>My Apps</h4>
          </div>
          <div style={{ display: "inline-block" }}>
            <FontAwesomeIcon
              icon={["fa", "home"]}
              size="1x"
              fixedWidth
              style={{ marginleft: "10px" }}
            />
          </div>
        </div>
        <ul>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/">User</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default SideDrawer;

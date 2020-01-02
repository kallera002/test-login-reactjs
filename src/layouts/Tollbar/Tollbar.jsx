import React, { Fragment } from 'react';
import './Tollbar.css';
import DrawerButton from '../SideDrawer/DrawerButton';
import { Link } from 'react-router-dom';

const Tollbar = props => {
  return (
    <Fragment>
      <header className="tollbar">
        <nav className="tollbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerButton click={props.drawerClickHandler} />
          </div>

          <div className="tollbar__logo">
            <a href="/">Logo</a>
          </div>
          <div className="spacer"></div>
          <div className="tollbar-navigation__items">
            <ul>
              <li className="toolbar__item">
                <Link to="/login">Login</Link>
              </li>
              <li className="to0lbar__item">
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

import React from "react";
import { Component } from "react";
import Tollbar from "./Tollbar/Tollbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import BackDrop from "./Backdrop/Backdrop";

class Navbar extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop  click={this.drawerToggleClickHandler}/>;
    }
    return (
      <div>
        <Tollbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer click={this.drawerToggleClickHandler} show={this.state.sideDrawerOpen} />
        {backDrop}
      </div>
    );
  }
}

export default Navbar;

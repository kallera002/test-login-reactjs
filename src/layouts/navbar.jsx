import React, { useState } from "react";
import Tollbar from "./Tollbar/Tollbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import BackDrop from "./Backdrop/Backdrop";

const Navbar = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prevState => {
      return { sideDrawerOpen: !prevState };
    });
  };

  let backDrop;
  if (sideDrawerOpen) {
    backDrop = <BackDrop click={drawerToggleClickHandler} />;
  }

  return (
    <div>
      <Tollbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer click={drawerToggleClickHandler} show={sideDrawerOpen} />
      {backDrop}
    </div>
  );
};

export default Navbar;

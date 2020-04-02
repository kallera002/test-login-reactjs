import React, { useState } from "react";
import Tollbar from "./Tollbar/Tollbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import BackDrop from "./Backdrop/Backdrop";
import { useCallback } from "react";

const Navbar = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = useCallback(() => {
    setSideDrawerOpen(prevState => !prevState);
  }, [setSideDrawerOpen]);

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

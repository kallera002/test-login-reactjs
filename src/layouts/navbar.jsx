import React, { useState } from "react";
import Tollbar from "./Tollbar/Tollbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import BackDrop from "./Backdrop/Backdrop";
import AuthContextProvider from "./../ContextApi/authContect";
const Navbar = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prevState => {
      console.log(prevState.sideDrawerOpen);

      return { sideDrawerOpen: !prevState };
    });
  };

  let backDrop;
  if (sideDrawerOpen) {
    backDrop = <BackDrop click={drawerToggleClickHandler} />;
  }

  return (
    <AuthContextProvider>
      <div>
        <Tollbar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer click={drawerToggleClickHandler} show={sideDrawerOpen} />
        {backDrop}
      </div>
    </AuthContextProvider>
  );
};

export default Navbar;

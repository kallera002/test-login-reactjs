import React from "react";
import { Component } from "react";
import Tollbar from "./Tollbar/Tollbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import BackDrop from "./Backdrop/Backdrop";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Navbar = props => {
//   return (
//     <nav className="navbar navbar-dark bg-dark">
//       <a className="navbar-brand" href="#">
//         <FontAwesomeIcon
//           icon={["fa", "home"]}
//           size="2x"
//           fixedWidth
//           style={{ marginRight: "3px" }}
//         />
//         Home
//       </a>
//     </nav>
//   );
// };

class Navbar extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleclickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    let sideDrawer;
    let backDrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop = <BackDrop />;
    }
    return (
      <div>
        <Tollbar drawerClickHandler={this.drawerToggleclickHandler} />
        {sideDrawer}
        {backDrop}
      </div>
    );
  }
}

export default Navbar;

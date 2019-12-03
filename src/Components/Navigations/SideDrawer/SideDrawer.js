import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";
import "./SideDracer.css";

const SideDrawer = props => {
  let attachedClassed = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClassed = ["SideDrawer", "Open"];
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClassed.join(" ")}>
        <div className="MobLogo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;

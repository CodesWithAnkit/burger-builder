import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import "./ToolBar.css";

const ToolBar = props => {
  return (
    <header className="Toolbar">
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className="DeskLogo">
        <Logo />
      </div>
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default ToolBar;

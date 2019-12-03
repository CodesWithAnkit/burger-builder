import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import ToolBar from "../Navigations/ToolBar/ToolBar";
import SideDrawer from "../Navigations/SideDrawer/SideDrawer";
import "./Layout.css";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  SideDrawerClosedHandler = () => {
    // this.setState({ showSideDrawer: true });
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };

  SideDrawerToggleHandler = () => {
    this.setState(previousState => {
      return { showSideDrawer: !previousState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <ToolBar drawerToggleClicked={this.SideDrawerClosedHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
        />
        <div>Toolbar, sideDrawer, backDroper</div>
        <main className="content">{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;

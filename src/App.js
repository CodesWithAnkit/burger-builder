import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/CheckOut/Checkout";
import Orders from "./containers/Orders/Orders";
import Counter from "./Components/UI/Counter";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/count" exact component={Counter} />
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

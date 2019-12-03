import React, { Component } from "react";
import axios from "../../axios_order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Order from "../../Components/Order/Order";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get("orders.json")
      .then(res => {
        const fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchOrders });
      })
      .catch(error => this.setState({ loading: false }));
  }
  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
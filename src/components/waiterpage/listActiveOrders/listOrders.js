import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Order from "./Order.js";
import { API, getData } from "./../../requests";
import Loading from "./../../loading/loading";
// const DEFAULT_QUERY = "/cook/getActiveOrders";

class ListActiveOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    getData(`${API}/Waiter/getActiveOrders`).then(data => {
      this.setState({ data, isLoading: true });
    });
  }
  render() {
    let { data, isLoading } = this.state;
    console.log(data);
    return (
      <div className="waiterWrapper">
        <div className="titleWaiterBlock">Лист активных заказов</div>
        <div>
          <button>Сделать новый заказ </button>
          {data && data.length > 0 ? <h3>Лист активных заказов</h3> : null}
        </div>
        {isLoading ? <div>Yes</div> : <Loading />}
      </div>
    );
  }
}

export default ListActiveOrders;

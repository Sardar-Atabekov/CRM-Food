import React, { Component } from "react";
import Order from './Order';
import axios from "axios";
import {Link} from "react-router-dom";
import {API} from "./../requests";
const DEFAULT_QUERY = "/barman/getActiveOrders";

class BarmenPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const result = await axios.get(API + DEFAULT_QUERY);

      this.setState({
        data: result.data,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }
  render() {
    let { data, isLoading, error } = this.state;
    data = data.map(item => {
      item.mealsList = item.mealsList.filter(
        meal => meal.departmentName === "Bar"
      );
      return item.mealsList.length > 0 ? item : false;
    });

    data = data.filter(arr => arr !== false);
    if (error) {
      return <p>{error.message}</p>;
    }

    console.log(data);
    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="cookPage">
        <h1 className="titleCook">Активные заказы</h1>
        <div className="funcCook">
          <Link to={"/barman/menu"} className="menuBtn">
            Меню
          </Link>
        </div>

        <div className="wrapperCook">
          {data.map(order => (
            <Order order={order} key={order.orderId} />
          ))}
        </div>
      </div>
    );
  }
}

export default BarmenPage;

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./cook.css";
import Order from "./Order.js";
import { API } from "./../requests";
import Loading from "./../loading/loading";
const DEFAULT_QUERY = "/cook/getActiveOrders";

class CookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
      select: null
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
        meal => meal.departmentName === "Kitchen"
      );
      return item.mealsList.length > 0 ? item : false;
    });

    data = data.filter(arr => arr !== false);
    if (error) {
      return <p>{error.message}</p>;
    }
    console.log(data);
    return (
      <div className="cookPage">
        {!isLoading ? (
          <div>
            <h1 className="titleCook">Активные заказы</h1>
            <div className="funcCook">
              <Link to={"/cook/menu"} className="menuBtn">
                Меню
              </Link>
              <Link
                to={"/"}
                className="menuBtn exitBtn"
                onClick={e => {
                  e.preventDefault();
                  localStorage.removeItem("token");
                  console.log(this.props);
                  window.location.href = "/";
                }}
              >
                Выйти
              </Link>
            </div>
            <div className="wrapperCook">
              {data.map(order => (
                <Order order={order} key={order.orderId} />
              ))}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default CookPage;

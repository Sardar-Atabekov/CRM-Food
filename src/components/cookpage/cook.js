import React, { Component } from "react";
import axios from "axios";
import "./cook.css";
import {
  checkStatusFood,
  checkClassName,
  mealReady,
  orderReady
} from "./check";

const API = "https://neobiscrmfood.herokuapp.com/api/";
const DEFAULT_QUERY = "cook/getActiveOrders";

class CookPage extends Component {
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
    data = data.filter(a =>
      a.mealsList.some(s => s.departmentName === "Кухня")
    );
    console.log(data);
    if (error) {
      return <p>{error.message}</p>;
    }

    console.log(data);
    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="wrapperCook">
        {data.map(order => (
          <div className="cookItem" key={order.orderId}>
            <header>
              <span className="tableNumber">№{order.orderId}</span>
              <span className="orderTime">
                {new Date(order.dateTimeOrdered).getHours() +
                  ":" +
                  new Date(order.dateTimeOrdered).getMinutes()}
              </span>
              <button
                className="statusOrder"
                orderid={order.orderId}
                onClick={orderReady}
              >
                Готово!
              </button>
            </header>
            <main>
              <div className="comments">{order.comment}</div>

              <ul>
                {order.mealsList.map(meal => (
                  <li
                    orderid={order.orderId}
                    className={checkClassName(meal.status)}
                    key={meal.mealId}
                  >
                    {`${meal.mealName} x${meal.quantity} id=${meal.mealId} `}
                    <img
                      mealid={meal.mealId}
                      onClick={mealReady}
                      className="btnImg"
                      alt={meal.status}
                      src={checkStatusFood(meal.status)}
                    />
                  </li>
                ))}
              </ul>
            </main>
          </div>
        ))}
      </div>
    );
  }
}

export default CookPage;

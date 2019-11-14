import React, { Component } from "react";
import axios from "axios";
import "./cook.css";
import {
  mealReady
} from "./check";
import Order from "./Order.js";

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

  addMeals(name, quantity, id, status, orderId) {
    let arr = [];
    for (let i = 0; i < quantity; i++) {
      arr[i] = (
        <li key={10000 + i} orderid={orderId}>
          
          {name}
          <img
            mealid={id}
            onClick={mealReady}
            className="btnImg"
            alt={status}
            src={`https://st2.depositphotos.com/5777248/10629/v/950/depositphotos_106299224-stock-illustration-green-tick-check-mark-icon.jpg`}
          />
        </li>
      );
    }

    return arr;
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
    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="wrapperCook">
        {data.map(order => (          
             <Order order={order}  key={order.orderId}/>                    
        ))}
      </div>
    );
  }
}

export default CookPage;

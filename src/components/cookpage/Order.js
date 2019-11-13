import React, { Component } from "react";
import "./cook.css";
import {
  checkStatusFood,
  checkClassName,
  mealReady,
  orderReady
} from "./check";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.order,
      ready:0,
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
            src={`https://image.flaticon.com/icons/png/512/53/53987.png`}
          />
        </li>
      );
    }

    return arr;
  }

  render() {
    let order = this.state.data;
    console.log(order);

    return (
      <div className="cookItem">
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
            {order.mealsList.map(meal =>
              meal.quantity === 1 ? (
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
              ) : (
                this.addMeals(
                  meal.mealName,
                  meal.quantity,
                  meal.mealId,
                  meal.status,
                  order.orderId
                )
              )
            )}
          </ul>
        </main>
      </div>
    );
  }
}

export default Order;

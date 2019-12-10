import React, { Component } from "react";
import notReadyImgUrl from "./../images/notReady.svg";
import doneImgUrl from "./../images/ready.svg";

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
      ready: 0
    };
  }

  addMeals(name, quantity, id, status, orderId, finished) {
    let arr = [];
    let quantityActive = quantity - finished;
    if (finished !== quantity ) {
      for (let i = 0; i < quantityActive; i++) {
        arr[i] = (
          <li key={10000 + i} orderid={orderId}>
            {name}
            <img
              mealid={id}
              onClick={mealReady}
              className="btnImg"
              alt={status}
              src={notReadyImgUrl}
            />
          </li>
        );
      }
      if(finished > 0) {
        for (let i = quantityActive; i < quantityActive + 1; i++) {
          arr[i] = (
            <li key={10000 + i} orderid={orderId} className="ready">
              {name} x{finished}
              <img
                mealid={id}
                className="btnImg"
                alt={status}
                src={doneImgUrl}
              />
            </li>
          );
        }
      }
      
    } else if (finished > 0) {
      for (let i = 0; i < 1; i++) {
        arr[i] = (
          <li key={10000 + i} orderid={orderId} className="ready">
            {name} x{finished}
            <img
              mealid={id}
              className="btnImg"
              alt={status}
              src={doneImgUrl}
            />
          </li>
        );
      }
    }
    console.log(arr);
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
              meal.orderedQuantity === 1 ? (
                <li
                  orderid={order.orderId}
                  className={checkClassName(meal.status)}
                  key={meal.mealId}
                >
                  {`${meal.mealName} x${meal.orderedQuantity} id=${meal.mealId} `}
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
                  meal.orderedQuantity,
                  meal.mealId,
                  meal.status,
                  order.orderId,
                  meal.finishedQuantity
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

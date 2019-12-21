import React, { Component } from "react";
import x from "./../images/x.svg";

class HistoryTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  render() {
    let { name, orderId, quantityActive } = this.props.data;
    let { count } = this.state;
    console.log(this.props);
    return (
      <div className="modalWrapper">
        <div className="modalWindow">
          <img
            src={x}
            alt="xImage"
            className="xImage"
            onClick={() => this.props.frozen(false)}
          />
          <h2>Заказ №{orderId}</h2>
          <h3>{name}</h3>
          <div className="frozenMeal">
            <span
              className="prev"
              onClick={() => {
                count = count > 1 ? count - 1 : count;
                this.setState({ count });
              }}
            >
              -
            </span>
            <input
              className="countQuantity"
              type="number"
              name="menQuantity"
              value={this.state.count}
              disabled
            />

            <span
              className="next"
              onClick={() => {
                count = count < quantityActive ? count + 1 : count;
                this.setState({ count });
              }}
            >
              +
            </span>
          </div>
          <button className="deleteBtn">Отправить</button>
          {/* <div>
            {meals.map((meal, index) => (
              <div className="orderMeal" key={index}>
                {meal.name} x{meal.orderedQuantity}
              </div>
            ))}

            <input
              className="changeBtn"
              type="button"
              value="Ок"
              onClick={() => this.props.setStatus()}
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default HistoryTransaction;

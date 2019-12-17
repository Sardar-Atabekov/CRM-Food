import React, { Component } from "react";

class HistoryTransaction extends Component {
  render() {
    let { id, meals } = this.props;
    return (
      <div className="modalWrapper">
        <div className="modalWindow">
          <h2>Заказ №{id}</h2>
          <div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default HistoryTransaction;

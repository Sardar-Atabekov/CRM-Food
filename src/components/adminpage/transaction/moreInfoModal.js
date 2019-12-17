import React, { Component } from "react";

class HistoryTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null
    };
  }

  render() {
    let { data } = this.state;
    console.log(data);
    return (
      <div>
        {this.props.status ? (
          <div className="modalWrapper">
            <div className="modalWindow">
              <h2>Заказ №{this.props.id}</h2>
              <div>
                {this.props.mealOrders.map((meal, index) => (
                  <li key={index}>{meal.name}</li>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default HistoryTransaction;

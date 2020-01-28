import React, { Component } from "react";
import x from "./../images/x.svg";
import { postData } from "../requests";
import Swal from "sweetalert2";
class HistoryTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
    this.frozenData = this.frozenData.bind(this);
  }

  frozenData() {
    postData("/Cook/freezeMeal", {
      FreezedMeals: this.state.count,
      orderId: this.props.data.orderId,
      mealId: this.props.data.mealId
    }).then(res => {
      this.props.frozen(false);
      Swal.fire({
        width: 500,
        height: 500,
        showConfirmButton: true,
        icon: "success",
        text: res.message,
        timer: 2000,
        confirmButtonColor: "#32B482"
      });
    });
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
          <button className="deleteBtn" onClick={this.frozenData}>
            Отправить
          </button>
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

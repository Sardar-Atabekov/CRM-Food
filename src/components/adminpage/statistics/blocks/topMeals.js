import React, { Component } from "react";
import { getData, API } from "../../../requests";
import "./styles.css";

class TopMeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: [],
      kitchen: []
    };
  }
  async componentDidMount() {
    getData(`${API}/Admin/barSumStatistics`).then(body => {
      this.setState({ bar: body });
    });
    getData(`${API}/Admin/kitchenSumStatistics`).then(body => {
      this.setState({ kitchen: body });
    });
  }
  render() {
    let { bar, kitchen } = this.state;
    bar =
      bar &&
      bar.map(meal => {
        meal.sum = meal.price * meal.quantity;
        return meal;
      });
    kitchen =
      kitchen &&
      kitchen.map(meal => {
        meal.sum = meal.price * meal.quantity;
        return meal;
      });
    let data = [...bar, ...kitchen].sort((a, b) => b.sum - a.sum);
    console.log(data);
    return (
      <div className="topMeals">
        <div className="header">
          <h4>{this.props.name}</h4>
        </div>
        <ul className="meals">
          {data &&
            data.map((meal, index) =>
              index < 8 ? (
                <li key={meal.id}>
                  <span>{meal.name}</span>{" "}
                  <span className="sums">{meal.sum} сом</span>
                </li>
              ) : (
                false
              )
            )}
        </ul>
        <div className="totalSelect">
          <select className="select">
            <option value="0">Общая </option>
            {/* <option value="1">Last Month</option>
            <option value="2">Last Week</option>
            <option value="3">Today</option> */}
          </select>
        </div>
      </div>
    );
  }
}

export default TopMeals;

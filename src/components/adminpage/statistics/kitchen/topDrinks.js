import React, { Component } from "react";
import { getData, API } from "../../../requests";
import "./../blocks/styles.css";

class TopDrinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: [],
      kitchen: []
    };
  }
  async componentDidMount() {
    getData(`${API}/Admin/topMeals`).then(
      body => {
        this.setState({ bar: body });
      }
    );
  }
  render() {
    let { bar } = this.state;
    bar = bar && bar.sort((a, b) => b.count - a.count);
    return (
      <div className="topMeals">
        <div className="header">
          <h4>{this.props.name}</h4>
        </div>
        <ul className="meals">
          {bar &&
            bar.map((meal, index) =>
              index < 8 ? (
                <li key={meal.id}>
                  <span>{meal.name}</span>{" "}
                  <span className="sums">{meal.count}</span>
                </li>
              ) : (
                false
              )
            )}
        </ul>
        <div className="totalSelect">
          <select className="select">
            <option value="0">Total </option>
            <option value="1">Last Month</option>
            <option value="2">Last Week</option>
            <option value="3">Today</option>
          </select>
        </div>
      </div>
    );
  }
}

export default TopDrinks;

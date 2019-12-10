import React, { Component } from "react";
import { getData, API } from "../../../requests";
import "./../blocks/styles.css";

class TopWaiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    getData(`${API}/Admin/barWaiterMealStatistics`).then(body => {
      this.setState({ data: body });
    });
  }
  render() {
    let { data } = this.state;

    let bar =
      data &&
      data
        .map(item => {
          let initialValue = 0;
          item.meals = item.meals.reduce(
            (accumulator, currentValue) => accumulator + currentValue.count,
            initialValue
          );
          return item;
        })
        .sort((a, b) => b.meals - a.meals);
    return (
      <div className="topMeals">
        <div className="header">
          <h4>{this.props.name}</h4>
        </div>
        <ul className="meals">
          {bar &&
            bar.map((user, index) =>
              index < 8 ? (
                <li key={user.userId}>
                  {console.log(user)}
                  <span>{user.userName}</span>{" "}
                  <span className="sums">{user.meals}</span>
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

export default TopWaiter;

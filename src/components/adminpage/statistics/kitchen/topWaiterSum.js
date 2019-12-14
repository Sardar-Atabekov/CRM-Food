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
    getData(
      `${API}/Admin/kitchenWaiterSumStatistics`
    ).then(body => {
      this.setState({ data: body });
    });
  }
  render() {
    let { data } = this.state;
    console.log(data);
    let bar =
      data &&
      data
        .map(item => {
          let initialValue = 0;
          console.log(item);
          item.meals = item.meals.reduce(
            (accumulator, currentValue) => accumulator + currentValue.sum,
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
                  <span>{user.userName}</span>
                  <span className="sums">{user.meals}</span>
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

export default TopWaiter;

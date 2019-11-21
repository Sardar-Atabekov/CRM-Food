import React, { Component } from "react";
import { getData } from "../../../requests";
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
      "https://neobiscrmfood.herokuapp.com/api/Admin/barWaiterSumStatistics"
    ).then(body => {
      this.setState({ data: body });
    });
  }
  render() {
    let { data } = this.state;
    console.log(data);
    let bar = data.map(item => {
        let initialValue =0;
        console.log(item);
        item.meals =  item.meals.reduce(
            (accumulator, currentValue) => accumulator + currentValue.sum,
            initialValue
        );
        console.log(item.meals);
        return item;
    });
    return (
      <div className="topMeals">
        <div className="header">
          <h4>{this.props.name}</h4>
        </div>
        <ul className="meals">
          {data.map((user, index) =>
            index < 8 ? (
              <li key={user.id}>
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
            <option value="0">Total </option>
            <option value="1">Last Month</option>
            <option value="2">Last Week</option>
            <option value="3">Today</option>
          </select>
          <div>Full report</div>
        </div>
      </div>
    );
  }
}

export default TopWaiter;

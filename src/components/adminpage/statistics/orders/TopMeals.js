import React, { Component } from "react";
import { getData } from "../../../requests";
import "./../blocks/styles.css";

class TopMeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: [],
      kitchen: []
    };
  }
  async componentDidMount() {
    getData(
      "https://neobiscrmfood.herokuapp.com/api/Admin/topMeals"
    ).then(body => {
      this.setState({ bar: body });
    });
    getData(
      "https://neobiscrmfood.herokuapp.com/api/Admin/topDrinks"
    ).then(body => {
      this.setState({ kitchen: body });
    });
  }
  render() {
    let { bar, kitchen } = this.state,
      data = [...bar, ...kitchen].sort((a, b) => b.sum - a.sum);
    console.log(data);
    return (
      <div className="topMeals">
        <div className="header">
          <h4>{this.props.name}</h4>
        </div>
        <ul className="meals">
          {data.map((meal, index) =>
            index < 8 ? (
              <li>
                <span>{meal.name}</span> <span className="sums">{meal.count}</span>
              </li>
            ) : (
              false
            )
          )}
        </ul>
      </div>
    );
  }
}

export default TopMeals;

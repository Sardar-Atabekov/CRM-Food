import React, { Component } from "react";
import { getData, API } from "../../../requests";
import TopGraphics from "./../graphics/topGraphics";
import "./styles.css";

class TopMeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: [],
      kitchen: [],
      graphics: false
    };
  }

  async componentDidMount() {
    getData(`${API}/Statistic/barSums`).then(body => {
      this.setState({ bar: body });
    });
    getData(`${API}/Statistic/kitchenSums`).then(body => {
      this.setState({ kitchen: body });
    });
  }
  render() {
    let { bar, kitchen } = this.state;
    console.log("money", this.state);
    // bar =
    //   bar &&
    //   bar.map(meal => {
    //     meal.sum = meal.price * meal.finishedQuantity;
    //     return meal;
    //   });
    // kitchen =
    //   kitchen &&
    //   kitchen.map(meal => {
    //     meal.sum = meal.price * meal.finishedQuantity;
    //     return meal;
    //   });
    let data = [...bar, ...kitchen].sort((a, b) => b.sum - a.sum);
    let sum, names;

    if (data) {
      sum = [
        ...data.map((item, index) => (index < 11 ? item.sum : false))
      ].filter(a => a);
      names = [
        ...data.map((item, index) => (index < 11 ? item.name : false))
      ].filter(a => a);
    }

    return (
      <div className="topMeals">
        <div className="header">
          <h4>{this.props.name}</h4>
        </div>
        <ul className="meals">
          {data &&
            data.map((meal, index) =>
              index < 11 ? (
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
          <div
            className="graphicsModal"
            onClick={() => {
              console.log(this.state);
              this.setState({ graphics: true });
            }}
          >
            Графика
          </div>
        </div>
        {this.state.graphics ? (
          <TopGraphics
            name="Топ блюды"
            data={sum}
            names={names}
            graphicsStatus={() => this.setState({ graphics: false })}
          />
        ) : null}
      </div>
    );
  }
}

export default TopMeals;

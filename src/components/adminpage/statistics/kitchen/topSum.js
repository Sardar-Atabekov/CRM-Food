import React, { Component } from "react";
import { getData, API } from "../../../requests";
import TopGraphics from "./../graphics/topGraphics";
class TopSum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: [],
      kitchen: []
    };
  }
  async componentDidMount() {
    getData(`${API}/Statistic/kitchenSums`).then(bar => {
      this.setState({ bar });
    });
  }
  render() {
    let { bar } = this.state;
    bar =
      bar &&
      bar.map(meal => {
        meal.sum = meal.price * meal.finishedQuantity;
        return meal;
      });
    let sum, names;
    if (bar) {
      bar = bar.sort((a, b) => b.sum - a.sum);
      sum = [...bar.map((item, index) => (index < 11 ? item.sum : null))].filter(
        a => a
      );
      names = [
        ...bar.map((item, index) => (index < 11 ? item.name : null))
      ].filter(a => a);
    }
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
                  <span className="sums">{meal.sum}</span>
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
            name="Топ официанты"
            data={sum}
            names={names}
            graphicsStatus={() => this.setState({ graphics: false })}
          />
        ) : null}
      </div>
    );
  }
}

export default TopSum;

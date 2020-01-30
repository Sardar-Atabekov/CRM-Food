import React, { Component } from "react";
import { getData, API } from "../../../requests";
import TopGraphics from "./../graphics/topGraphics";
class TopSum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: []
    };
  }
  async componentDidMount() {
    getData(`${API}/Statistic/barSums`).then(body => {
      this.setState({ bar: body });
    });
  }
  render() {
    let { bar } = this.state;
    bar =
      bar &&
      bar.map(meal => {
        meal.sum = meal.price * meal.quantity;
        return meal;
      });
    let sum, names;
    if (bar) {
      bar = bar.sort((a, b) => b.sum - a.sum);
      sum = [
        ...bar.map((item, index) => (index < 8 ? item.sum : false))
      ].filter(a => a);
      names = [
        ...bar.map((item, index) => (index < 8 ? item.name : false))
      ].filter(a => a);
    }
    return (
      <div className="topMeals">
        <div className="header">
          <h4>{this.props.name}</h4>
        </div>
        <ul className="meals">
          {bar &&
            bar.length > 0 &&
            bar.map((meal, index) =>
              index < 8 ? (
                <li key={meal.id}>
                  <span>{meal.name}</span>
                  <span className="sums">{meal.sum}</span>
                </li>
              ) : (
                false
              )
            )}
        </ul>
        <div className="totalSelect">
          <select className="select">
            <option value="0">Total </option>
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

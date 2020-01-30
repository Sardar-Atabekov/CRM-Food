import React, { Component } from "react";
import { getData, API } from "../../../requests";
import "./../blocks/styles.css";
import TopGraphics from "./../graphics/topGraphics";
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
    getData(`${API}/top/topMeals`).then(bar => {
      this.setState({ bar });
    });
    getData(`${API}/top/topDrinks`).then(kitchen => {
      this.setState({ kitchen });
    });
  }
  render() {
    let { bar, kitchen } = this.state,
      data = [...bar, ...kitchen].sort((a, b) => b.count - a.count);

    let sum, names;
    if (data) {
      data = data.sort((a, b) => b.count - a.count);
      sum = [
        ...data.map((item, index) => (index < 12 ? item.count : false))
      ].filter(a => a);
      names = [
        ...data.map((item, index) => (index < 12 ? item.name : false))
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

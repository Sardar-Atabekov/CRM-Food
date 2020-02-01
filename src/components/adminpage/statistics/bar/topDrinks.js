import React, { Component } from "react";
import { getData, API } from "../../../requests";
import "./../blocks/styles.css";
import TopLoading from "./../topLoading/topLaoding";
import TopGraphics from "./../graphics/topGraphics";
class TopDrinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: [],
      kitchen: [],
      isLoading: false
    };
  }
  async componentDidMount() {
    getData(`${API}/top/topDrinks`).then(body => {
      this.setState({ bar: body, isLoading: false });
    });
  }
  render() {
    let { bar } = this.state;
    let sum, names;
    if (bar) {
      bar = bar.sort((a, b) => b.count - a.count);
      sum = [
        ...bar.map((item, index) => (index < 8 ? item.count : false))
      ].filter(a => a);
      names = [
        ...bar.map((item, index) => (index < 8 ? item.name : false))
      ].filter(a => a);
    }
    return (
      <div className="topMeals">
        {this.state.isLoading ? (
          <TopLoading />
        ) : (
          <div>
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
                <option value="0">Общий </option>
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
        )}
      </div>
    );
  }
}

export default TopDrinks;

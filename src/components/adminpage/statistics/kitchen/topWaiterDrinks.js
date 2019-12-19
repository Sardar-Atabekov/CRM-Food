import React, { Component } from "react";
import { getData, API } from "../../../requests";
import "./../blocks/styles.css";
import TopGraphics from "./../graphics/topGraphics";
class TopWaiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    getData(`${API}/Admin/topWaitersKitchenMeals`).then(body => {
      this.setState({ data: body });
    });
  }
  render() {
    let { data } = this.state;
    let sum, names;
    if (data) {
      data = data.sort((a, b) => b.meals - a.meals);
      sum = [...data.map((item, index) => (index < 8 ? item.meals : false))];
      names = [
        ...data.map((item, index) => (index < 8 ? item.userName : false))
      ];
    }
    return (
      <div className="topMeals">
        <div className="header">
          <h4>{this.props.name}</h4>
        </div>
        <ul className="meals">
          {data &&
            data.map((user, index) =>
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

export default TopWaiter;

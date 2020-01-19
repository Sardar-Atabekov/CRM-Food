import React, { Component } from "react";
import { getData, API } from "../../../requests";
import "./styles.css";

class LastOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    getData(`${API}/Statistic/${this.props.url}`).then(data => {
      this.setState({ data });
    });
  }
  render() {
    let { data } = this.state;
    console.log(data);
    return (
      <div className="topMeals lastOrders">
        <div className="header">
          <h4>{this.props.name}</h4>
        </div>
        <table>
          <thead>
            <tr>
              <th>Детали</th>
              <th>Статус</th>
              <th>Блюда</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(order => (
                <tr key={order.orderId}>
                  <td>fgfg</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LastOrders;
